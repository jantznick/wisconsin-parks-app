import json
import os  # For API Key
import re
from typing import Any, Dict, List, Set, Tuple

from dotenv import load_dotenv

load_dotenv()

# Attempt to import openai; recommend installation if not found.
try:
    import openai
except ImportError:
    print("Error: The 'openai' library is not installed. Please install it by running:")
    print("pip install openai")
    exit(1)

# --- Configuration ---
STANDARDIZED_ACTIVITIES_FILE = "data/activities.json"  # Changed from .ts
PARKS_DATA_FILE = "data/parks.json"          # Changed from .ts
DEBUG_FIRST_PARK_ONLY = True
OPENAI_MODEL = "gpt-3.5-turbo" # Or gpt-4 if preferred and available

# Load OpenAI API Key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    print("Error: OPENAI_API_KEY environment variable not found.")
    print("Please set it before running the script.")
    # exit(1) # Commenting out exit for now to allow dry run without key if needed for other parts, but API calls will fail.

openai_client = None
if OPENAI_API_KEY:
    openai_client = openai.OpenAI(api_key=OPENAI_API_KEY)
else:
    print("Warning: OpenAI client not initialized due to missing API key.")

# --- Helper Functions ---

def load_standard_activity_data(filepath: str) -> Tuple[List[str], Dict[str, int]]:
    """Loads standardized activity names and their numeric IDs from the activities.json file."""
    activity_names: List[str] = []
    activity_name_to_id_map: Dict[str, int] = {}
    print(f"Attempting to load standard activity data from: {filepath}")
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            activities_data = json.load(f) # Directly load JSON array
        
        for activity_obj in activities_data:
            if isinstance(activity_obj, dict) and 'id' in activity_obj and 'name' in activity_obj:
                try:
                    num_id = int(activity_obj['id'])
                    name_str = str(activity_obj['name'])
                    if name_str:
                        activity_names.append(name_str)
                        activity_name_to_id_map[name_str] = num_id
                except ValueError:
                    print(f"Warning: Could not parse numeric ID for activity object: {activity_obj} in {filepath}")
            else:
                print(f"Warning: Invalid activity object format: {activity_obj} in {filepath}")

        if not activity_names:
            print(f"Warning: No valid activity data found or parsed correctly in {filepath}")
        else:
            print(f"Successfully loaded {len(activity_names)} activities.")
        
    except FileNotFoundError:
        print(f"Error: Standardized activities file not found at {filepath}")
    except json.JSONDecodeError as e:
        print(f"Error: Failed to parse JSON from {filepath}. Error: {e}")
    except Exception as e:
        print(f"Error reading or processing standardized activities file {filepath}: {e}")
    return sorted(list(set(activity_names))), activity_name_to_id_map

STANDARD_ACTIVITY_NAMES, ACTIVITY_NAME_TO_NUMERIC_ID_MAP = load_standard_activity_data(STANDARDIZED_ACTIVITIES_FILE)
print(f"Loaded {len(STANDARD_ACTIVITY_NAMES)} standard activity names: {STANDARD_ACTIVITY_NAMES if len(STANDARD_ACTIVITY_NAMES) < 10 else str(STANDARD_ACTIVITY_NAMES[:10]) + '...'}")

def get_llm_activity_matches(scraped_phrases: List[str], standard_categories: List[str], park_name: str) -> Dict[str, List[str]]:
    """
    Uses an LLM to map scraped activity phrases to standard categories.
    Returns a dictionary mapping each scraped phrase to a list of matched standard category names.
    """
    if not openai_client:
        print("Error: OpenAI client is not initialized. Cannot make API calls.")
        # Return a structure indicating failure for all phrases
        return {phrase: [] for phrase in scraped_phrases} 

    if not scraped_phrases:
        return {}
    if not standard_categories:
        print("Warning: No standard categories provided to LLM for matching.")
        return {phrase: [] for phrase in scraped_phrases}

    standard_categories_list_str = "\n".join([f"- {cat}" for cat in standard_categories])
    scraped_phrases_list_str = "\n".join([f"- \"{phrase}\"" for phrase in scraped_phrases])

    prompt = f"""
You are an expert at categorizing Wisconsin park activities. Your task is to map a list of scraped activity descriptions from a specific park to a predefined list of standard activity categories. Focus on semantic meaning. Ensure the matched category names are ONLY from the predefined list. Some scraped phrases might represent multiple standard activities. Some scraped phrases might not be activities at all (e.g., informational text, general rules) and should not be mapped to any activity category.

Park Name: {park_name}

Predefined Standard Activity Categories:
{standard_categories_list_str}

Scraped Activities from this Park to Categorize:
{scraped_phrases_list_str}

Output Instructions:
Return your response as a JSON object. The JSON object should have a single key "activity_mappings". The value of "activity_mappings" should be a list of objects. Each object in the list must correspond to one of the *original* scraped activities and have two keys: 
1. "scraped_activity": The exact original scraped activity phrase (string).
2. "matched_standard_categories": A list of strings, where each string is a standard category name from the predefined list that the scraped activity semantically matches. If a scraped activity does not match any standard category, or is not a valid activity, this list should be empty.

Example of desired JSON output format:
{{ "activity_mappings": [
  {{ "scraped_activity": "Horseback riding and trails", "matched_standard_categories": ["Equestrian", "Hiking"] }},
  {{ "scraped_activity": "Boating and Fishing", "matched_standard_categories": ["Boating", "Fishing"] }},
  {{ "scraped_activity": "Info about park hours", "matched_standard_categories": [] }},
  {{ "scraped_activity": "ATVs/UTVs", "matched_standard_categories": ["ATV/UTV"] }}
]}}

Ensure the JSON is well-formed.
Do not map to categories not in the predefined list.
If a scraped activity is very generic like "Dogs" or "Pets" (and not a specific activity like "Dog Park"), provide an empty list for its matched_standard_categories unless there's a direct corresponding standard category.
"""

    print(f"\n--- Sending request to LLM for park: {park_name} ---")
    # print(f"Prompt:\n{prompt[:500]}...") # For debugging prompt structure

    try:
        completion = openai_client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[
                {"role": "system", "content": "You are an expert categorizer of park activities. Output your response strictly in the requested JSON format."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2, # Lower temperature for more deterministic output
            # response_format={ "type": "json_object" } # If using newer models that support this
        )
        
        response_content = completion.choices[0].message.content
        print(f"LLM Raw Response Snippet: {response_content[:200]}...")

        if not response_content:
            print("Error: LLM returned an empty response.")
            return {phrase: [] for phrase in scraped_phrases}

        # Extract JSON from the response (sometimes LLMs wrap it in ```json ... ```)
        json_match = re.search(r"```json\n(.*\n)```", response_content, re.DOTALL)
        if json_match:
            json_str = json_match.group(1).strip()
        else:
            json_str = response_content.strip()

        llm_response_data = json.loads(json_str)
        
        if "activity_mappings" not in llm_response_data or not isinstance(llm_response_data["activity_mappings"], list):
            print(f"Error: LLM response JSON is not in the expected format. Missing 'activity_mappings' list.")
            print(f"LLM Full Response: {llm_response_data}")
            return {phrase: [] for phrase in scraped_phrases}

        # Convert the list of mappings to the desired dictionary output
        # {scraped_phrase: [matched_standard_name1, matched_standard_name2]}
        result_map: Dict[str, List[str]] = {phrase: [] for phrase in scraped_phrases} # Initialize with all scraped phrases

        for mapping_item in llm_response_data["activity_mappings"]:
            if isinstance(mapping_item, dict):
                original_scraped_activity = mapping_item.get("scraped_activity")
                matched_categories = mapping_item.get("matched_standard_categories", [])
                
                if original_scraped_activity is not None and original_scraped_activity in result_map:
                    valid_matched_categories = [cat for cat in matched_categories if cat in standard_categories]
                    if len(valid_matched_categories) != len(matched_categories):
                        print(f"Warning: LLM suggested non-standard categories for '{original_scraped_activity}'. Original: {matched_categories}, Filtered: {valid_matched_categories}")
                    result_map[original_scraped_activity] = valid_matched_categories
                elif original_scraped_activity is not None: # original_scraped_activity was not in the initial scraped_phrases list for this park
                     print(f"Warning: LLM returned a mapping for an unknown or unexpected scraped activity: '{original_scraped_activity}'. Ignoring.")
            else:
                print(f"Warning: Invalid item in 'activity_mappings': {mapping_item}")
        
        # Ensure all original scraped phrases are in the result_map, even if with empty matches
        for phrase in scraped_phrases:
            if phrase not in result_map:
                 print(f"Warning: Scraped phrase '{phrase}' was not in LLM response. Assuming no match.")
                 result_map[phrase] = []

        return result_map

    except openai.APIError as e:
        print(f"OpenAI API Error: {e}")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from LLM response: {e}")
        print(f"LLM Raw Response was: {response_content}") # print raw response on JSON error
    except Exception as e:
        print(f"An unexpected error occurred during LLM matching: {e}")
    
    return {phrase: [] for phrase in scraped_phrases} # Fallback on any error


def map_scraped_activities_to_numeric_ids(scraped_activity_list: List[str], park_name_for_logging: str = "Unknown Park") -> Tuple[Set[int], Set[str]]:
    mapped_numeric_ids: Set[int] = set()
    unmapped_phrases: Set[str] = set() # Phrases LLM couldn't map

    if not scraped_activity_list: # No activities to map
        return mapped_numeric_ids, unmapped_phrases

    # Get LLM mappings: Dict[str_scraped_phrase, List[str_standard_name]]
    llm_matches = get_llm_activity_matches(scraped_activity_list, STANDARD_ACTIVITY_NAMES, park_name_for_logging)

    print(f"--- LLM Mapping Results for {park_name_for_logging} ---")
    if not llm_matches and scraped_activity_list: # Check if LLM call failed for non-empty list
        print("LLM matching failed to return results. All scraped phrases for this park will be unmapped.")
        for phrase in scraped_activity_list:
            unmapped_phrases.add(str(phrase))
        return mapped_numeric_ids, unmapped_phrases

    for scraped_phrase, matched_standard_names in llm_matches.items():
        print(f"  Scraped: '{scraped_phrase}' -> LLM Matched Standard Names: {matched_standard_names}")
        if matched_standard_names:
            for std_name in matched_standard_names:
                if std_name in ACTIVITY_NAME_TO_NUMERIC_ID_MAP:
                    numeric_id = ACTIVITY_NAME_TO_NUMERIC_ID_MAP[std_name]
                    mapped_numeric_ids.add(numeric_id)
                    print(f"    SUCCESS: Mapped '{std_name}' to ID: {numeric_id}")
                else:
                    # This should be rare if get_llm_activity_matches filters correctly
                    print(f"    WARNING: LLM matched standard name '{std_name}' not found in our ID map.")
        else:
            # This scraped_phrase was not mapped to any standard activity by the LLM
            unmapped_phrases.add(scraped_phrase)
            print(f"    INFO: '{scraped_phrase}' was not mapped to any standard activity by the LLM.")
            
    return mapped_numeric_ids, unmapped_phrases


def process_parks_file(parks_filepath: str = PARKS_DATA_FILE):
    if not STANDARD_ACTIVITY_NAMES or not ACTIVITY_NAME_TO_NUMERIC_ID_MAP:
        print(f"Aborting processing: Standard activity data from {STANDARDIZED_ACTIVITIES_FILE} is empty or failed to load.")
        return
    print(f"Processing parks file: {parks_filepath} using {len(STANDARD_ACTIVITY_NAMES)} standard activity names.")

    try:
        with open(parks_filepath, "r", encoding="utf-8") as f:
            parks_data_list = json.load(f)
    except FileNotFoundError:
        print(f"Error: Parks file not found at {parks_filepath}")
        return
    except json.JSONDecodeError as e:
        print(f"Error: Failed to parse JSON from {parks_filepath}. Error: {e}")
        return
    except Exception as e:
        print(f"Error reading parks file {parks_filepath}: {e}")
        return

    if not isinstance(parks_data_list, list):
        print(f"Error: Parks data from {parks_filepath} is not a list as expected.")
        return

    overall_unmapped_activities_log: Set[str] = set()
    parks_processed_count = 0

    # Determine which parks to process
    parks_to_process = parks_data_list
    if DEBUG_FIRST_PARK_ONLY and parks_data_list:
        print("\n*** DEBUG_FIRST_PARK_ONLY is True: Processing only the first park. ***\n")
        parks_to_process = [parks_data_list[0]]
        # If we only process one, we might want to avoid rewriting the whole file
        # or be very careful. For now, the script writes the full (but only partially updated) list.

    for park_index, park_object in enumerate(parks_data_list):
        if DEBUG_FIRST_PARK_ONLY and park_index > 0:
            continue # Skip all other parks if flag is set
            
        if not isinstance(park_object, dict):
            print(f"Warning: Skipping non-dictionary item in parks list at index {park_index}: {park_object}")
            continue

        parks_processed_count += 1
        park_name = park_object.get('name', f"UnknownPark_ID_{park_object.get('id', 'N/A')}")
        current_activities = park_object.get("activities")

        if current_activities is None:
            # print(f"Info: Park '{park_object.get('name', 'Unknown')}' has no 'activities' field. Skipping.")
            continue # Or initialize to empty list: park_object["activities"] = []
        
        if not isinstance(current_activities, list):
            print(f"Warning: Park '{park_name}' has 'activities' field that is not a list: {current_activities}. Skipping conversion for this park.")
            continue
        
        # Filter out any non-string activities from the original list before processing
        # This handles cases where activities might already be mixed or numeric due to partial runs
        string_activities_to_map: List[str] = []
        already_numeric_ids: Set[int] = set()

        for act in current_activities:
            if isinstance(act, str):
                string_activities_to_map.append(act)
            elif isinstance(act, int):
                already_numeric_ids.add(act)
            # else: ignore other types for now or log them

        new_numeric_ids_set, unmapped_for_this_park = map_scraped_activities_to_numeric_ids(string_activities_to_map, park_name_for_logging=park_name)
        
        # Combine newly mapped IDs with any that were already numeric
        final_numeric_ids = sorted(list(new_numeric_ids_set.union(already_numeric_ids)))
        
        park_object["activities"] = final_numeric_ids # Update the park object

        if unmapped_for_this_park:
            overall_unmapped_activities_log.update(unmapped_for_this_park)

    # After loop, parks_data_list contains the modifications (only to the first park if DEBUG_FIRST_PARK_ONLY)
    try:
        with open(parks_filepath, "w", encoding="utf-8") as f:
            json.dump(parks_data_list, f, indent=2) # Write the potentially modified full list back
        
        if DEBUG_FIRST_PARK_ONLY:
             print(f"\nSuccessfully processed activities for the first park and re-wrote {parks_filepath}.")
        else:
            print(f"\nSuccessfully processed and wrote to {parks_filepath}. Processed {parks_processed_count} park objects.")
        
        if overall_unmapped_activities_log:
            print("\n--- Summary of Unmapped Activity Phrases (Review these and the detailed logs above) ---")
            for unmapped_item in sorted(list(overall_unmapped_activities_log)):
                print(f"- {unmapped_item}")
        elif parks_processed_count > 0:
            print("All activity phrases were successfully mapped or intentionally ignored/already numeric.")
        elif parks_processed_count == 0 and not DEBUG_FIRST_PARK_ONLY:
            print("No parks were processed. Check if parks data file is empty or DEBUG_FIRST_PARK_ONLY is unintentionally active.")

    except IOError as e:
        print(f"Error writing updated content to {parks_filepath}: {e}")
    except Exception as e:
        print(f"An unexpected error occurred during file write for {parks_filepath}: {e}")

if __name__ == "__main__":
    if not OPENAI_API_KEY:
        print("Script cannot run effectively without OPENAI_API_KEY set. Please set the environment variable.")
    else:
        print(f"Using OpenAI model: {OPENAI_MODEL}")
        process_parks_file() 
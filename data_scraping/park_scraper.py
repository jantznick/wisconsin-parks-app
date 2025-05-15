import json
import os  # Added for os.makedirs, os.path
import random  # Added for random boolean for isAccessible
import re  # Added for regex parsing (e.g., coordinates, hours)
import time  # Added for sleep
from urllib.parse import (  # Added for robust URL parsing for image extension
    unquote, urlparse)

import requests
from bs4 import BeautifulSoup
# --- LLM Activity Mapping Setup ---
from dotenv import find_dotenv, load_dotenv

try:
    import openai
except ImportError:
    print("Error: The 'openai' library is not installed. Please install it by running:")
    print("pip install openai")
    openai = None # Set to None if import fails

load_dotenv(find_dotenv()) # Load .env file if it exists

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = "gpt-3.5-turbo"  # Or your preferred model
STANDARDIZED_ACTIVITIES_FILE = "data/activities.json"

openai_client = None
if OPENAI_API_KEY and openai: # Check if openai was imported successfully
    try:
        openai_client = openai.OpenAI(api_key=OPENAI_API_KEY)
        print("OpenAI client initialized successfully.")
    except Exception as e:
        print(f"Error initializing OpenAI client: {e}")
        openai_client = None # Ensure client is None on error
else:
    if not OPENAI_API_KEY:
        print("Warning: OPENAI_API_KEY not found in environment variables. LLM activity mapping will be skipped.")
    if not openai:
        print("Warning: OpenAI library not imported. LLM activity mapping will be skipped.")

# These will be populated by load_standard_activity_data
STANDARD_ACTIVITY_NAMES: list[str] = []
ACTIVITY_NAME_TO_NUMERIC_ID_MAP: dict[str, int] = {}
# --- End LLM Activity Mapping Setup ---

# --- LLM Helper Functions (Adapted from update_park_activities.py) ---

def load_standard_activity_data(filepath: str) -> tuple[list[str], dict[str, int]]:
    """Loads standardized activity names and their numeric IDs from the activities JSON file."""
    activity_names: list[str] = []
    activity_name_to_id_map: dict[str, int] = {}
    # print(f"Attempting to load standard activity data from: {filepath}") # Less verbose for scraper
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            activities_data = json.load(f)
        
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
        # else:
            # print(f"Successfully loaded {len(activity_names)} activities for LLM mapping.") # Less verbose
        
    except FileNotFoundError:
        print(f"Error: Standardized activities file not found at {filepath}. LLM mapping will be impaired.")
    except json.JSONDecodeError as e:
        print(f"Error: Failed to parse JSON from {filepath}. Error: {e}. LLM mapping will be impaired.")
    except Exception as e:
        print(f"Error reading or processing standardized activities file {filepath}: {e}. LLM mapping will be impaired.")
    return sorted(list(set(activity_names))), activity_name_to_id_map

def get_llm_activity_matches(scraped_phrases: list[str], standard_categories: list[str], park_name: str) -> dict[str, list[str]]:
    """
    Uses an LLM to map scraped activity phrases to standard categories.
    Returns a dictionary mapping each scraped phrase to a list of matched standard category names.
    """
    global openai_client, OPENAI_MODEL # Ensure access to global client and model config

    if not openai_client:
        # print("Error: OpenAI client is not initialized. Cannot make API calls.") # Already warned at startup
        return {phrase: [] for phrase in scraped_phrases}

    if not scraped_phrases:
        return {}
    if not standard_categories:
        print(f"Warning: No standard categories provided to LLM for matching park '{park_name}'.")
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

    # print(f"\n--- Sending request to LLM for park: {park_name} ---") # Less verbose for scraper

    try:
        completion = openai_client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[
                {"role": "system", "content": "You are an expert categorizer of park activities. Output your response strictly in the requested JSON format."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.2,
        )
        
        response_content = completion.choices[0].message.content
        # print(f"LLM Raw Response Snippet for {park_name}: {response_content[:100]}...") # Less verbose

        if not response_content:
            print(f"Error: LLM returned an empty response for park '{park_name}'.")
            return {phrase: [] for phrase in scraped_phrases}

        json_match = re.search(r"```json\n(.*\n)```", response_content, re.DOTALL)
        json_str = json_match.group(1).strip() if json_match else response_content.strip()

        llm_response_data = json.loads(json_str)
        
        if "activity_mappings" not in llm_response_data or not isinstance(llm_response_data.get("activity_mappings"), list):
            print(f"Error: LLM response JSON for '{park_name}' is not in the expected format. Content: {llm_response_data}")
            return {phrase: [] for phrase in scraped_phrases}

        result_map: dict[str, list[str]] = {phrase: [] for phrase in scraped_phrases}
        for mapping_item in llm_response_data["activity_mappings"]:
            if isinstance(mapping_item, dict):
                original_scraped_activity = mapping_item.get("scraped_activity")
                matched_categories = mapping_item.get("matched_standard_categories", [])
                
                if original_scraped_activity is not None and original_scraped_activity in result_map:
                    valid_matched_categories = [cat for cat in matched_categories if cat in standard_categories]
                    if len(valid_matched_categories) != len(matched_categories):
                        print(f"Warning: LLM suggested non-standard categories for '{original_scraped_activity}' in park '{park_name}'. Filtered.")
                    result_map[original_scraped_activity] = valid_matched_categories
                elif original_scraped_activity is not None:
                     print(f"Warning: LLM returned mapping for unexpected activity '{original_scraped_activity}' in park '{park_name}'.")
            else:
                print(f"Warning: Invalid item in 'activity_mappings' for park '{park_name}': {mapping_item}")
        
        for phrase in scraped_phrases:
            if phrase not in result_map:
                 result_map[phrase] = [] # Ensure all original phrases are keys

        return result_map

    except openai.APIError as e: # type: ignore
        print(f"OpenAI API Error for park '{park_name}': {e}")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from LLM for '{park_name}': {e}. Response: {response_content}")
    except Exception as e:
        print(f"Unexpected error during LLM matching for '{park_name}': {e}")
    
    return {phrase: [] for phrase in scraped_phrases}

def map_scraped_strings_to_llm_ids(scraped_activity_list: list[str], park_name_for_logging: str) -> tuple[set[int], set[str]]:
    """Maps scraped activity strings to numeric IDs using LLM, uses global standard activity data."""
    global STANDARD_ACTIVITY_NAMES, ACTIVITY_NAME_TO_NUMERIC_ID_MAP # Access global maps
    
    mapped_numeric_ids: set[int] = set()
    unmapped_phrases: set[str] = set()

    if not scraped_activity_list:
        return mapped_numeric_ids, unmapped_phrases

    if not STANDARD_ACTIVITY_NAMES or not ACTIVITY_NAME_TO_NUMERIC_ID_MAP:
        print(f"Warning: Standard activity data not loaded. LLM mapping skipped for '{park_name_for_logging}'.")
        unmapped_phrases.update(scraped_activity_list)
        return mapped_numeric_ids, unmapped_phrases

    llm_matches = get_llm_activity_matches(scraped_activity_list, STANDARD_ACTIVITY_NAMES, park_name_for_logging)

    # print(f"--- LLM Mapping Results for {park_name_for_logging} ---") # Less verbose
    if not llm_matches and scraped_activity_list:
        print(f"LLM matching failed for '{park_name_for_logging}'. All phrases unmapped.")
        unmapped_phrases.update(scraped_activity_list)
        return mapped_numeric_ids, unmapped_phrases

    for scraped_phrase, matched_standard_names in llm_matches.items():
        # print(f"  Scraped: '{scraped_phrase}' -> LLM Matched: {matched_standard_names}") # Less verbose
        if matched_standard_names:
            for std_name in matched_standard_names:
                if std_name in ACTIVITY_NAME_TO_NUMERIC_ID_MAP:
                    numeric_id = ACTIVITY_NAME_TO_NUMERIC_ID_MAP[std_name]
                    mapped_numeric_ids.add(numeric_id)
                    # print(f"    SUCCESS: '{std_name}' to ID: {numeric_id}") # Less verbose
                else:
                    print(f"    WARNING: LLM matched '{std_name}' for '{park_name_for_logging}' not in ID map.")
        else:
            unmapped_phrases.add(scraped_phrase)
            # print(f"    INFO: '{scraped_phrase}' not mapped by LLM for '{park_name_for_logging}'.") # Less verbose
            
    return mapped_numeric_ids, unmapped_phrases

def get_llm_parsed_hours(hours_text_description: str, park_name: str) -> dict[str, str | None]:
    """
    Uses an LLM to parse open and close times from a text description.
    Returns a dictionary with 'open_time' and 'close_time'.
    Values can be null if not found or not clearly parsable.
    """
    global openai_client, OPENAI_MODEL

    if not openai_client:
        # print(f"OpenAI client not initialized. Skipping LLM hours parsing for {park_name}.")
        return {"open_time": None, "close_time": None}

    if not hours_text_description.strip():
        # print(f"No hours text description provided for {park_name}. Skipping LLM hours parsing.")
        return {"open_time": None, "close_time": None}

    prompt = f"""
    You are an expert at understanding and extracting specific information from text about park operating hours. 
    Your task is to parse the provided text description of a park's hours and extract the general daily opening time and closing time.

    Park Name: {park_name}
    Hours Text Description: "{hours_text_description}"

    Output Instructions:
    Return your response as a JSON object. The JSON object should have two keys:
    1. "open_time": A string representing the typical daily opening time (e.g., "6:00 AM", "Sunrise", "Varies"). If no specific opening time is mentioned or inferable, use null.
    2. "close_time": A string representing the typical daily closing time (e.g., "11:00 PM", "Sunset", "Varies"). If no specific closing time is mentioned or inferable, use null.

    Focus on general daily hours. Ignore specific seasonal variations or exceptions unless they are the *only* hours mentioned. 
    If times are like "6 a.m.", format them as "6:00 AM". If "11 p.m.", format as "11:00 PM".
    If the text says "Open year-round", this refers to accessibility, not daily open/close times. Only extract times if specified.
    If the text implies continuous opening (e.g. "Open 24 hours"), set open_time to "12:00 AM" and close_time to "11:59 PM" or similar representation of all day.

    Example Input Text: "The park is open year-round from 6 a.m. to 11 p.m."
    Example JSON Output: {{ "open_time": "6:00 AM", "close_time": "11:00 PM" }}

    Example Input Text: "Office open 8am-4pm. Park grounds open sunrise to sunset."
    Example JSON Output: {{ "open_time": "Sunrise", "close_time": "Sunset" }} 

    Example Input Text: "Trails open. Visitor center hours vary by season."
    Example JSON Output: {{ "open_time": null, "close_time": null }} 

    Ensure the JSON is well-formed.
    """

    # print(f"--- Sending request to LLM for hours parsing for park: {park_name} ---")
    try:
        completion = openai_client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[
                {"role": "system", "content": "You are an expert parser of park operating hours. Output your response strictly in the requested JSON format."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.1, # Low temperature for factual extraction
        )
        
        response_content = completion.choices[0].message.content
        # print(f"LLM Raw Hours Response for {park_name}: {response_content[:150]}...")

        if not response_content:
            print(f"Error: LLM returned an empty response for hours parsing for '{park_name}'.")
            return {"open_time": None, "close_time": None}

        json_match = re.search(r"```json\n(.*\n)```", response_content, re.DOTALL)
        json_str = json_match.group(1).strip() if json_match else response_content.strip()

        llm_response_data = json.loads(json_str)
        
        parsed_open_time = llm_response_data.get("open_time")
        parsed_close_time = llm_response_data.get("close_time")
        
        # Basic validation that we got strings or null
        if not (parsed_open_time is None or isinstance(parsed_open_time, str)):
            print(f"Warning: LLM returned unexpected type for open_time for '{park_name}': {parsed_open_time}")
            parsed_open_time = None
        if not (parsed_close_time is None or isinstance(parsed_close_time, str)):
            print(f"Warning: LLM returned unexpected type for close_time for '{park_name}': {parsed_close_time}")
            parsed_close_time = None

        return {"open_time": parsed_open_time, "close_time": parsed_close_time}

    except openai.APIError as e: # type: ignore
        print(f"OpenAI API Error during hours parsing for '{park_name}': {e}")
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from LLM for hours parsing for '{park_name}': {e}. Response: {response_content}")
    except Exception as e:
        print(f"Unexpected error during LLM hours parsing for '{park_name}': {e}")
    
    return {"open_time": None, "close_time": None} # Fallback

# --- End LLM Helper Functions ---

# Load standard activities data globally for use in scraper
STANDARD_ACTIVITY_NAMES, ACTIVITY_NAME_TO_NUMERIC_ID_MAP = load_standard_activity_data(STANDARDIZED_ACTIVITIES_FILE)
if not STANDARD_ACTIVITY_NAMES:
    print(f"CRITICAL WARNING: Standard activity names NOT loaded from {STANDARDIZED_ACTIVITIES_FILE}. LLM mapping will FAIL for all parks.")
elif openai_client:
    print(f"Successfully loaded {len(STANDARD_ACTIVITY_NAMES)} standard activity names for LLM mapping.")

BASE_URL = "https://dnr.wisconsin.gov"
FIND_A_PARK_URL = f"{BASE_URL}/topic/parks/findapark"

def get_all_park_links():
    """
    Navigates through the "Find a Park" pages and extracts links to individual park pages
    and their associated image URLs.
    """
    parks_info = [] # Will store dictionaries: {'url': park_url, 'image_url': image_src}
    processed_urls = set() # To keep track of processed park URLs to avoid duplicates
    current_page_url = FIND_A_PARK_URL

    print(f"Starting to fetch park links from: {current_page_url}")

    while current_page_url:
        try:
            response = requests.get(current_page_url)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, 'html.parser')

            # Select each park item, assuming they are li elements with class 'views-row'
            # This is a common pattern for lists in systems like Drupal.
            park_list_items = soup.select('li.grid')

            if not park_list_items and current_page_url == FIND_A_PARK_URL:
                print(f"No park list items found using 'li.grid' on the first page: {current_page_url}. Check selector.")
                break

            found_on_page = 0
            for item in park_list_items:
                park_link_tag = item.select_one('h2 a') # Link is usually in h2 a
                # Image could be in a div with a class like 'image_text_title_desc_image' then 'a img'
                # or more generally, just an 'img' tag within the item.
                img_tag = item.select_one('div.image_text_title_desc_image a img')
                if not img_tag:
                    img_tag = item.select_one('img') # More general fallback for image

                park_url = None
                image_src = None

                if park_link_tag and park_link_tag.get('href'):
                    href = park_link_tag.get('href')
                    # Be more lenient with URL structure, trusting the li.grid selector
                    if href.startswith('/'): # Relative path
                        park_url = BASE_URL + href
                    elif href.startswith(BASE_URL): # Absolute path on the same domain
                        park_url = href
                    # else: we might want to log or handle unexpected hrefs, but for now, this is fine

                if img_tag and img_tag.get('src'):
                    src = img_tag.get('src')
                    if src.startswith('/'):
                        image_src = BASE_URL + src
                    else:
                        image_src = src # Assuming it might be an absolute URL already

                if park_url and park_url not in processed_urls:
                    parks_info.append({'url': park_url, 'image_url': image_src})
                    processed_urls.add(park_url)
                    found_on_page += 1
            
            if found_on_page > 0:
                print(f"Found {found_on_page} parks on {current_page_url}")

            # Find the "Next page" link by its specific li parent class
            next_page_li = soup.select_one('li.pager__item.pager__item--next')
            if next_page_li:
                next_page_link_tag = next_page_li.select_one('a')
                if next_page_link_tag and next_page_link_tag.get('href'):
                    next_page_relative_url = next_page_link_tag['href']
                    if not next_page_relative_url.startswith('http'):
                        current_page_url = f"{FIND_A_PARK_URL}{next_page_relative_url}"
                    else:
                        current_page_url = next_page_relative_url
                    print(f"Moving to next page: {current_page_url}")
                else:
                    print("Next page li found, but no anchor tag or href inside. Assuming end of pagination.")
                    current_page_url = None
            else:
                print("No 'Next page' li found (class 'pager__item pager__item--next'). Assuming end of pagination.")
                current_page_url = None

        except requests.exceptions.RequestException as e:
            print(f"Error fetching page {current_page_url}: {e}")
            current_page_url = None
        except Exception as e:
            print(f"An unexpected error occurred while processing {current_page_url}: {e}")
            current_page_url = None

    print(f"Found a total of {len(parks_info)} unique park entries.")
    return parks_info

def scrape_park_page_details(park_landing_url, image_from_listing):
    """
    Scrapes detailed information from a park's main, info, and recreation pages.
    Args:
        park_landing_url (str): The main URL for the park (e.g., .../aztalan).
        image_from_listing (str): The image URL found on the main listing page.

    Returns:
        dict: A dictionary containing the scraped park details, or None if essential info can't be found.
    """
    print(f"Scraping details for: {park_landing_url}")
    park_data = {
        "id": park_landing_url.split("/")[-1] if park_landing_url else "unknown", # Simple ID from URL slug
        "name": "",
        "coordinate": {"latitude": None, "longitude": None},
        "description": "",
        "activities": [],
        "hours": {"open": "", "close": "", "text_description": ""}, # Ensure text_description is initialized
        "contact": {"phone": "", "email": "", "website": park_landing_url},
        "facilities": [],
        "entranceFee": {"daily": None, "annual": None, "text_description": ""}, # Ensure text_description is initialized
        "parking": {"totalSpaces": None, "isFree": None},
        "rules": [],
        "seasonalInfo": {"bestTimeToVisit": "", "seasonalClosures": []},
        "isDogFriendly": None,
        "isAccessible": None,
        "image_from_listing": image_from_listing,
        "downloaded_image_path": None, # Added for local image path
        "info_url": f"{park_landing_url}/info",
        "recreation_url": f"{park_landing_url}/recreation"
    }

    soup_main = None
    soup_info = None
    soup_rec = None

    try:
        response_main = requests.get(park_landing_url)
        response_main.raise_for_status()
        soup_main = BeautifulSoup(response_main.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"Error fetching main page {park_landing_url}: {e}")
    except Exception as e:
        print(f"Error parsing main page {park_landing_url}: {e}")

    try:
        response_info = requests.get(park_data["info_url"])
        response_info.raise_for_status()
        soup_info = BeautifulSoup(response_info.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"Error fetching info page {park_data['info_url']}: {e}")
    except Exception as e:
        print(f"Error parsing info page {park_data['info_url']}: {e}")
    
    try:
        response_rec = requests.get(park_data["recreation_url"])
        response_rec.raise_for_status()
        soup_rec = BeautifulSoup(response_rec.content, 'html.parser')
    except requests.exceptions.RequestException as e:
        print(f"Error fetching recreation page {park_data['recreation_url']}: {e}")
    except Exception as e:
        print(f"Error parsing recreation page {park_data['recreation_url']}: {e}")


    # --- Scrape Main Park Page (soup_main) ---
    if soup_main:
        # Extract Name: document.getElementsByClassName('dnr-hero-content')[0].textContent
        # Needs to be cleaned coming as: "\\n                Aztalan\\n\\n                                State Park\\n                         '"
        name_hero_content = soup_main.select_one('.dnr-hero-content')
        if name_hero_content:
            raw_name = name_hero_content.get_text(separator=' ', strip=True)
            # Clean up excessive newlines and spaces that might result from separator=' '
            park_data["name"] = re.sub(r'\\s+', ' ', raw_name).strip()
        else:
            # Fallback to original name extraction if .dnr-hero-content is not found
            name_tag = soup_main.select_one('h1.page-title') 
            if name_tag:
                park_data["name"] = name_tag.get_text(strip=True)
            else:
                name_tag_fallback = soup_main.select_one('h1#page-title')
                if name_tag_fallback:
                    park_data["name"] = name_tag_fallback.get_text(strip=True)
                else:
                    print(f"Could not find name for {park_landing_url}")

        # Description: document.getElementsByClassName('field--name-field-property-landing-intro')[0].innerText
        description_tag = soup_main.select_one('.field--name-field-property-landing-intro')
        if description_tag:
            park_data["description"] = description_tag.get_text(strip=True)
        else:
            # Fallback to original description search
            main_content_area = soup_main.select_one('div[role="main"], main, #content, .content')
            if main_content_area:
                first_p = main_content_area.find('p')
                if first_p:
                    park_data["description"] = first_p.get_text(strip=True)
            else:
                print(f"Could not find description for {park_landing_url}")
        
        # Capture hours text from main page (as a fallback for LLM)
        hours_text_tag_main = soup_main.find(string=lambda t: t and ("open" in t.lower() and ("a.m." in t.lower() or "p.m." in t.lower() or "hour" in t.lower() or "sunrise" in t.lower() or "sunset" in t.lower())))
        if hours_text_tag_main:
            park_data["hours"]["text_description"] = hours_text_tag_main.strip()
            park_data["hours"]["open"] = "" # Clear, LLM will populate
            park_data["hours"]["close"] = "" # Clear, LLM will populate
        # else: text_description remains "", open/close remain ""

        admission_text_main = soup_main.find(string=lambda t: t and "vehicle admission sticker is required" in t)
        if admission_text_main:
            park_data["entranceFee"]["text_description"] = admission_text_main.strip()

    # --- Scrape Info Page (soup_info) ---
    if soup_info:
        # ... existing map link processing code from lines 441-517 should remain here ...
        # (Ensuring the map processing logic is not touched by this hours edit)
        maps_link_processed = False # Flag to ensure we only process one map link successfully

        # --- Attempt 1: Look for Google Maps link directly in the main content body of the info page ---
        content_body_info_for_maps = soup_info.select_one('.field--name-field-content-page-body')
        if content_body_info_for_maps:
            maps_link_tag_in_body = content_body_info_for_maps.select_one('a[href*="maps.google.com"]')
            if maps_link_tag_in_body and maps_link_tag_in_body.get('href'):
                maps_url = maps_link_tag_in_body.get('href')
                # print(f"Attempt 1: Found Google Maps link href in info page content body: {maps_url}") # Less verbose
                lat, lon = None, None
                coord_match_daddr = re.search(r'daddr=([\\d.-]+),([\\d.-]+)', maps_url)
                if coord_match_daddr:
                    try:
                        lat = float(coord_match_daddr.group(1))
                        lon = float(coord_match_daddr.group(2))
                        # print(f"Found coordinates using daddr pattern (from content body): {lat}, {lon}")
                    except ValueError:
                        print(f"Could not parse daddr coordinates from {maps_url} (in content body)")
                
                if lat is None or lon is None:
                    coord_match_at = re.search(r'@([\\d.-]+),([\\d.-]+)', maps_url)
                    if coord_match_at:
                        try:
                            lat = float(coord_match_at.group(1))
                            lon = float(coord_match_at.group(2))
                        except ValueError:
                            print(f"Could not parse @ coordinates from {maps_url} (in content body)")
                
                if lat is not None and lon is not None:
                    park_data["coordinate"]["latitude"] = lat
                    park_data["coordinate"]["longitude"] = lon
                    maps_link_processed = True
                    # print(f"Successfully parsed coordinates: {lat}, {lon} from {maps_url}")
                # else:
                    # print(f"Could not extract coordinates from Google Maps URL (from content body attempt): {maps_url}")
            # else:
                # print("Attempt 1: No Google Maps link (with href*='maps.google.com') found directly in .field--name-field-content-page-body on info page.")
        # else:
            # print("Attempt 1: Could not find .field--name-field-content-page-body on info page for map link search.")

        # --- Attempt 2 (Fallback): Look in .dnr-property-info-card if not found/processed above ---
        if not maps_link_processed:
            # print("Attempt 2 (Fallback): Searching for maps link in .dnr-property-info-card elements.")
            info_cards = soup_info.select('.dnr-property-info-card')
            for card in info_cards:
                card_text = card.get_text(strip=True)
                if "Directions" in card_text:
                    # print(f"Found 'Directions' card with text: '{card_text[:100]}...'") 
                    maps_link_tag_in_card = card.select_one('a[href*="maps.google.com"]')
                    if maps_link_tag_in_card and maps_link_tag_in_card.get('href'):
                        maps_url = maps_link_tag_in_card.get('href')
                        # print(f"Found Google Maps link href in card: {maps_url}")
                        lat, lon = None, None
                        coord_match_daddr = re.search(r'daddr=([\\d.-]+),([\\d.-]+)', maps_url)
                        if coord_match_daddr:
                            try:
                                lat = float(coord_match_daddr.group(1))
                                lon = float(coord_match_daddr.group(2))
                            except ValueError:
                                print(f"Could not parse daddr coordinates from {maps_url} (in card)")
                        
                        if lat is None or lon is None:
                            coord_match_at = re.search(r'@([\\d.-]+),([\\d.-]+)', maps_url)
                            if coord_match_at:
                                try:
                                    lat = float(coord_match_at.group(1))
                                    lon = float(coord_match_at.group(2))
                                except ValueError:
                                    print(f"Could not parse @ coordinates from {maps_url} (in card)")
                        
                        if lat is not None and lon is not None:
                            park_data["coordinate"]["latitude"] = lat
                            park_data["coordinate"]["longitude"] = lon
                            maps_link_processed = True
                            # print(f"Successfully parsed coordinates: {lat}, {lon} from {maps_url}")
                            break 
                        # else:
                            # print(f"Could not extract coordinates from Google Maps URL (from card attempt): {maps_url}")
                    # else:
                        # print(f"No Google Maps link found in this 'Directions' card for {park_landing_url}")
                if maps_link_processed: 
                    break
            # if not maps_link_processed:
            #      print(f"Attempt 2 (Fallback): No usable Google Maps link found in any 'Directions' card for {park_landing_url}")
        # --- End of map link processing ---

        # Hours: Text from info page (prioritized for LLM)
        content_body_info_hours = soup_info.select_one('.field--name-field-content-page-body')
        if content_body_info_hours:
            hours_p_tags = content_body_info_hours.find_all('p')
            for p_tag in hours_p_tags:
                p_text = p_tag.get_text(strip=True)
                if ("open year-round from" in p_text.lower() or \
                   ("open" in p_text.lower() and ("a.m." in p_text.lower() or "p.m." in p_text.lower() or "hour" in p_text.lower() or "sunrise" in p_text.lower() or "sunset" in p_text.lower())) or \
                   ("hours" in p_text.lower() and "vary" in p_text.lower())):
                    park_data["hours"]["text_description"] = p_text # Overwrite with more specific text
                    park_data["hours"]["open"] = ""  # Clear, LLM will populate
                    park_data["hours"]["close"] = "" # Clear, LLM will populate
                    break 
            
        # Contact: 
        phone_tag = soup_info.select_one('a[href^="tel:"]')
        if phone_tag and phone_tag.get('href'):
            park_data["contact"]["phone"] = phone_tag.get('href').replace("tel:", "").strip()

        email_tag = soup_info.select_one('a[title="Contact information"][href^="mailto:"]')
        if email_tag and email_tag.get('href'):
            park_data["contact"]["email"] = email_tag.get('href').replace("mailto:", "").strip()

    # --- LLM Hours Parsing (after main and info pages have been processed) ---
    current_hours_text_desc = park_data["hours"].get("text_description", "").strip()
    if current_hours_text_desc and openai_client: # Check if we have text and client
        park_name_for_log = park_data.get('name', park_landing_url.split("/")[-1] or "Unknown Park")
        # print(f"  Attempting LLM parsing for hours for park: {park_name_for_log} using text: '{current_hours_text_desc[:100]}...'") # Less verbose
        parsed_times = get_llm_parsed_hours(current_hours_text_desc, park_name_for_log)
        
        # Update only if LLM provided a non-empty string, otherwise keep existing (which should be "")
        if parsed_times.get("open_time") and isinstance(parsed_times["open_time"], str):
            park_data["hours"]["open"] = parsed_times["open_time"]
        if parsed_times.get("close_time") and isinstance(parsed_times["close_time"], str):
            park_data["hours"]["close"] = parsed_times["close_time"]
        
        if park_data["hours"]["open"] or park_data["hours"]["close"]:
            print(f"    LLM parsed hours for {park_name_for_log}: Open: '{park_data['hours']['open']}', Close: '{park_data['hours']['close']}'")
        elif current_hours_text_desc: # Only print if there was text to parse
             print(f"    LLM could not parse specific open/close times from text for {park_name_for_log}.")
    elif current_hours_text_desc:
        # This case means we have hours text, but no openai_client
        print(f"  OpenAI client not available. Skipping LLM hours parsing for {park_data.get('name', 'Unknown Park')}. Hours text was: '{current_hours_text_desc[:100]}...'")
    # If no current_hours_text_desc, fields remain as initialized (e.g., "")

    # --- Scrape Recreation Page (soup_rec) ---
    if soup_rec:
        content_body_rec = soup_rec.select_one('.field--name-field-content-page-body')
        if content_body_rec:
            # Activities: any h2 text inside of document.getElementsByClassName('field--name-field-content-page-body') on the recreation page
            activity_header_tags = content_body_rec.select('h2')
            raw_activity_strings = [header.get_text(strip=True) for header in activity_header_tags if header.get_text(strip=True)]

            if raw_activity_strings and openai_client and STANDARD_ACTIVITY_NAMES and ACTIVITY_NAME_TO_NUMERIC_ID_MAP:
                park_name_for_log = park_data.get('name', park_landing_url.split("/")[-1] or "Unknown Park")
                # print(f"  Attempting LLM mapping for {len(raw_activity_strings)} activities for park: {park_name_for_log}") # Less verbose
                
                mapped_numeric_ids_set, unmapped_phrases = map_scraped_strings_to_llm_ids(
                    raw_activity_strings, 
                    park_name_for_log
                )
                park_data["activities"] = sorted(list(mapped_numeric_ids_set))
                
                if unmapped_phrases:
                    # Log unmapped phrases for this park if desired, e.g., to a separate log file or just a print
                    print(f"  LLM unmapped raw phrases for '{park_name_for_log}': {list(unmapped_phrases)}")
                # if not mapped_numeric_ids_set and raw_activity_strings:
                    # print(f"  Note: No activities were mapped by LLM for '{park_name_for_log}' from {len(raw_activity_strings)} raw phrases.")

            elif raw_activity_strings:
                # Fallback: Store raw strings if LLM mapping can't be done (e.g., no API key, no standard activities)
                print(f"  LLM mapping skipped for '{park_data.get('name', 'Unknown Park')}'. Storing {len(raw_activity_strings)} raw activity strings.")
                park_data["activities"] = raw_activity_strings
            else:
                park_data["activities"] = [] # No raw activities found to process

            # --- Post-processing and defaults based on *raw* scraped data ---
            # isDogFriendly: check raw strings before they are converted to IDs
            if raw_activity_strings: # Check if there were any raw strings found
                if any("pets" in raw_act_str.lower() for raw_act_str in raw_activity_strings):
                    park_data["isDogFriendly"] = True
                else:
                    park_data["isDogFriendly"] = False # Pets not mentioned in raw strings
            else:
                park_data["isDogFriendly"] = None # No activity info to determine dog friendliness

            # Rules: grab all the p tags from inside of document.getElementsByClassName('field--name-field-content-page-body') on the recreation page
            rule_paragraphs = content_body_rec.select('p')
            park_data["rules"] = [p.get_text(strip=True) for p in rule_paragraphs if p.get_text(strip=True)]

    # --- Post-processing and defaults based on scraped data ---
    # isDogFriendly: if there's a 'PETS' in the activites array (case-insensitive)
    # MOVED THIS LOGIC EARLIER, TO OPERATE ON RAW ACTIVITY STRINGS
    # if any("pets" in activity.lower() for activity in park_data["activities"]):
    #     park_data["isDogFriendly"] = True
    # elif park_data["activities"]: # If activities were scraped but no mention of pets
    #     park_data["isDogFriendly"] = False
    # # else, it remains None if no activities were found

    # isAccessible: set to random for now
    park_data["isAccessible"] = random.choice([True, False])

    # seasonalInfo: static values for now as requested
    park_data["seasonalInfo"] = {
        "bestTimeToVisit": "May through October",
        "seasonalClosures": ["Some facilities closed in winter"],
    }

    # Ensure required top-level fields exist if not populated (though they are initialized)
    # park_data.setdefault("facilities", [])
    # park_data.setdefault("entranceFee", {"daily": None, "annual": None, "text_description": park_data["entranceFee"].get("text_description","") })
    # park_data.setdefault("parking", {"totalSpaces": None, "isFree": None})

    print(f"Successfully processed scraping for: {park_data.get('name', park_landing_url)}")
    return park_data

if __name__ == "__main__":
    output_filename = "parks_data.json"
    scraped_parks_dict = {} # Use a dictionary keyed by park ID

    # Try to load existing data to allow for appending/resuming
    # try:
    #     if os.path.exists(output_filename):
    #         with open(output_filename, "r") as f_existing:
    #             existing_data_list = json.load(f_existing)
    #             if isinstance(existing_data_list, list):
    #                 for park_item in existing_data_list:
    #                     if isinstance(park_item, dict) and park_item.get('id'):
    #                         scraped_parks_dict[park_item['id']] = park_item
    #                 print(f"Loaded {len(scraped_parks_dict)} parks from existing '{output_filename}'.")
    #             else:
    #                 print(f"Warning: Existing '{output_filename}' does not contain a list. Starting fresh.")
    # except json.JSONDecodeError:
    #     print(f"Warning: Could not decode JSON from '{output_filename}'. Starting fresh.")
    # except Exception as e_load:
    #     print(f"Warning: Error loading '{output_filename}' ({e_load}). Starting fresh.")

    # all_parks_links_and_images = get_all_park_links()
    # # scraped_parks_data = [] # Replaced by scraped_parks_dict
    
    # IMAGES_DIR = "images"
    # os.makedirs(IMAGES_DIR, exist_ok=True)
    # print(f"Ensured '{IMAGES_DIR}' directory exists.")

    # total_parks_to_process = len(all_parks_links_and_images)
    # print(f"Starting to scrape details for {total_parks_to_process} parks/entities.")

    # for i, park_entry in enumerate(all_parks_links_and_images):
    #     print(f"\nProcessing park {i+1}/{total_parks_to_process}: {park_entry['url']}")
    #     park_details = scrape_park_page_details(park_entry['url'], park_entry['image_url'])
        
    #     if park_details:
    #         # Download image if URL exists
    #         if park_entry.get('image_url'):
    #             img_url = park_entry['image_url']
    #             park_id = park_details.get('id', 'unknown_park') # Use ID from details
    #             try:
    #                 # Make sure img_url is absolute
    #                 if not img_url.startswith(('http://', 'https://')):
    #                     if img_url.startswith('//'): # Protocol-relative URL
    #                         img_url = "https:" + img_url
    #                     elif img_url.startswith('/'): # Domain-relative URL
    #                         img_url = BASE_URL + img_url
    #                     else: # Potentially problematic relative URL, skip or log
    #                         print(f"  Skipping image download for {park_id} due to unclear relative URL: {img_url}")
    #                         img_url = None # Prevent download attempt
                    
    #                 if img_url:
    #                     print(f"  Downloading image for {park_id} from {img_url}...")
    #                     img_response = requests.get(img_url, stream=True, timeout=10)
    #                     img_response.raise_for_status()

    #                     # Determine file extension
    #                     parsed_url = urlparse(img_url)
    #                     path = unquote(parsed_url.path) # Handle URL encoded chars in path
    #                     filename, extension = os.path.splitext(path)
    #                     if not extension:
    #                         # Fallback if no extension in path, try Content-Type (basic)
    #                         content_type = img_response.headers.get('content-type')
    #                         if content_type and 'image/jpeg' in content_type:
    #                             extension = '.jpg'
    #                         elif content_type and 'image/png' in content_type:
    #                             extension = '.png'
    #                         elif content_type and 'image/gif' in content_type:
    #                             extension = '.gif'
    #                         else:
    #                             extension = '.jpg' # Default if still unsure
    #                         print(f"    No extension in URL path, guessed '{extension}' from Content-Type or default.")

    #                     image_filename = f"{park_id}{extension}"
    #                     image_save_path = os.path.join(IMAGES_DIR, image_filename)
                        
    #                     with open(image_save_path, 'wb') as f_img:
    #                         for chunk in img_response.iter_content(chunk_size=8192):
    #                             f_img.write(chunk)
    #                     park_details["downloaded_image_path"] = image_save_path
    #                     print(f"    Image saved to {image_save_path}")

    #             except requests.exceptions.RequestException as e_img:
    #                 print(f"    Error downloading image {img_url} for {park_id}: {e_img}")
    #             except Exception as e_generic_img:
    #                 print(f"    An unexpected error occurred during image download for {park_id} ({img_url}): {e_generic_img}")
            
    #         # Add/Update park data in the dictionary
    #         scraped_parks_dict[park_details['id']] = park_details
    #         print(f"  Updated data for park ID: {park_details['id']}")
            
    #         # Save incrementally after each park
    #         try:
    #             with open(output_filename, "w") as f_inc:
    #                 json.dump(list(scraped_parks_dict.values()), f_inc, indent=4) # Save list of values
    #             print(f"  Incrementally saved data for {len(scraped_parks_dict)} parks to '{output_filename}'.")
    #         except Exception as e_save:
    #             print(f"  ERROR incrementally saving data: {e_save}")

    #     else:
    #         print(f"  Failed to scrape details for {park_entry['url']}")

    #     # Random sleep between 2 to 5 seconds
    #     sleep_duration = random.uniform(2, 5)
    #     print(f"  Sleeping for {sleep_duration:.2f} seconds...")
    #     time.sleep(sleep_duration)

    # # Final save (already done incrementally, but good for a final confirmation log)
    # # with open(output_filename, "w") as f:
    # #     json.dump(list(scraped_parks_dict.values()), f, indent=4)
    
    # print(f"\nScraping complete. Final data for {len(scraped_parks_dict)} parks saved in '{output_filename}'.")
    # # Note: The comparison for missing parks should now account for parks potentially loaded from a previous run.
    # # This simple count might not be accurate if combining runs; a more sophisticated check would compare against all_parks_links_and_images.
    # if len(scraped_parks_dict) < total_parks_to_process and not os.path.exists(output_filename): # Simplified check if starting fresh
    #     print(f"Note: Could not scrape details for {total_parks_to_process - len(scraped_parks_dict)} parks/entities.")

    # Comment out single park test or remove it if no longer needed
    single_park_main_url = "https://dnr.wisconsin.gov/topic/parks/aztalan"
    single_park_image_listing_url = "https://dnr.wisconsin.gov/sites/default/files/styles/carousel_image/public/2020-10/Aztalan_Mounds_20201006_KarlaGlobal.jpg"
    print(f"--- Running single park test for: {single_park_main_url} ---")
    park_details_single = scrape_park_page_details(single_park_main_url, single_park_image_listing_url)
    if park_details_single:
        print("\n--- Scraped Data for Single Park ---")
        print(json.dumps(park_details_single, indent=4))
        # Optionally, save this single park data to a test file
        # with open("single_park_test_output.json", "w") as f_single:
        #     json.dump(park_details_single, f_single, indent=4)
        # print("Single park test output also saved to single_park_test_output.json")
    else:
        print(f"\nCould not scrape details for {single_park_main_url}") 
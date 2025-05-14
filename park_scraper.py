import json
import os  # Added for os.makedirs, os.path
import random  # Added for random boolean for isAccessible
import re  # Added for regex parsing (e.g., coordinates, hours)
import time  # Added for sleep
from urllib.parse import (  # Added for robust URL parsing for image extension
    unquote, urlparse)

import requests
from bs4 import BeautifulSoup

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
        # Needs to be cleaned coming as: "\n                Aztalan\n\n                                State Park\n                         '"
        name_hero_content = soup_main.select_one('.dnr-hero-content')
        if name_hero_content:
            raw_name = name_hero_content.get_text(separator=' ', strip=True)
            # Clean up excessive newlines and spaces that might result from separator=' '
            park_data["name"] = re.sub(r'\s+', ' ', raw_name).strip()
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
        
        # Retain original Hours and Admission text from main page if specific parsing fails later
        hours_text_main = soup_main.find(string=lambda t: t and "Open 6 a.m. to 11 p.m." in t) # Example for Aztalan
        if hours_text_main:
            park_data["hours"]["text_description"] = hours_text_main.strip()
            # Basic parsing attempt, can be improved
            if "6 a.m." in hours_text_main and "11 p.m." in hours_text_main:
                park_data["hours"]["open"] = "6:00 AM"
                park_data["hours"]["close"] = "11:00 PM"

        admission_text_main = soup_main.find(string=lambda t: t and "vehicle admission sticker is required" in t)
        if admission_text_main:
            park_data["entranceFee"]["text_description"] = admission_text_main.strip()

    # --- Scrape Info Page (soup_info) ---
    if soup_info:
        # print("DEBUG: Processing info page (soup_info is not None).") # Too verbose for normal run
        maps_link_processed = False # Flag to ensure we only process one map link successfully

        # --- Attempt 1: Look for Google Maps link directly in the main content body of the info page ---
        content_body_info_for_maps = soup_info.select_one('.field--name-field-content-page-body')
        if content_body_info_for_maps:
            # print("DEBUG: Found .field--name-field-content-page-body on info page.") # Too verbose
            # --- DEBUG: Print all links in this content body --- (This whole block was for debug, removing)
            # all_links_in_content_body = content_body_info_for_maps.find_all('a')
            # if all_links_in_content_body:
            #     print(f"DEBUG: Found {len(all_links_in_content_body)} links in .field--name-field-content-page-body:")
            #     for link_tag_debug in all_links_in_content_body:
            #         print(f"  DEBUG Link Href: {link_tag_debug.get('href')}, Text: {link_tag_debug.get_text(strip=True)[:50]}...")
            # else:
            #     print("DEBUG: No <a> tags found in .field--name-field-content-page-body.")
            # --- END DEBUG ---

            maps_link_tag_in_body = content_body_info_for_maps.select_one('a[href*="maps.google.com"]')
            if maps_link_tag_in_body and maps_link_tag_in_body.get('href'):
                maps_url = maps_link_tag_in_body.get('href')
                print(f"Attempt 1: Found Google Maps link href in info page content body: {maps_url}")
                lat, lon = None, None
                coord_match_daddr = re.search(r'daddr=([\d.-]+),([\d.-]+)', maps_url)
                if coord_match_daddr:
                    try:
                        lat = float(coord_match_daddr.group(1))
                        lon = float(coord_match_daddr.group(2))
                        print(f"Found coordinates using daddr pattern (from content body): {lat}, {lon}")
                    except ValueError:
                        print(f"Could not parse daddr coordinates from {maps_url} (in content body)")
                
                if lat is None or lon is None:
                    coord_match_at = re.search(r'@([\d.-]+),([\d.-]+)', maps_url)
                    if coord_match_at:
                        try:
                            lat = float(coord_match_at.group(1))
                            lon = float(coord_match_at.group(2))
                            # print(f"Found coordinates using @ pattern (from content body): {lat}, {lon}") # Keep if daddr fails
                        except ValueError:
                            print(f"Could not parse @ coordinates from {maps_url} (in content body)")
                
                if lat is not None and lon is not None:
                    park_data["coordinate"]["latitude"] = lat
                    park_data["coordinate"]["longitude"] = lon
                    maps_link_processed = True
                    print(f"Successfully parsed coordinates: {lat}, {lon} from {maps_url}") # Consolidated success message
                else:
                    print(f"Could not extract coordinates from Google Maps URL (from content body attempt): {maps_url}")
            else:
                print("Attempt 1: No Google Maps link (with href*='maps.google.com') found directly in .field--name-field-content-page-body on info page.")
        else:
            print("Attempt 1: Could not find .field--name-field-content-page-body on info page for map link search.")

        # --- Attempt 2 (Fallback): Look in .dnr-property-info-card if not found/processed above ---
        if not maps_link_processed:
            print("Attempt 2 (Fallback): Searching for maps link in .dnr-property-info-card elements.")
            info_cards = soup_info.select('.dnr-property-info-card')
            for card in info_cards:
                card_text = card.get_text(strip=True)
                if "Directions" in card_text:
                    print(f"Found 'Directions' card with text: '{card_text[:100]}...'") 
                    maps_link_tag_in_card = card.select_one('a[href*="maps.google.com"]')
                    if maps_link_tag_in_card and maps_link_tag_in_card.get('href'):
                        maps_url = maps_link_tag_in_card.get('href')
                        print(f"Found Google Maps link href in card: {maps_url}")
                        lat, lon = None, None
                        coord_match_daddr = re.search(r'daddr=([\d.-]+),([\d.-]+)', maps_url)
                        if coord_match_daddr:
                            try:
                                lat = float(coord_match_daddr.group(1))
                                lon = float(coord_match_daddr.group(2))
                                print(f"Found coordinates using daddr pattern (from card): {lat}, {lon}")
                            except ValueError:
                                print(f"Could not parse daddr coordinates from {maps_url} (in card)")
                        
                        if lat is None or lon is None:
                            coord_match_at = re.search(r'@([\d.-]+),([\d.-]+)', maps_url)
                            if coord_match_at:
                                try:
                                    lat = float(coord_match_at.group(1))
                                    lon = float(coord_match_at.group(2))
                                    # print(f"Found coordinates using @ pattern (from card): {lat}, {lon}") # Keep if daddr fails
                                except ValueError:
                                    print(f"Could not parse @ coordinates from {maps_url} (in card)")
                        
                        if lat is not None and lon is not None:
                            park_data["coordinate"]["latitude"] = lat
                            park_data["coordinate"]["longitude"] = lon
                            maps_link_processed = True # Mark as processed
                            print(f"Successfully parsed coordinates: {lat}, {lon} from {maps_url}") # Consolidated success message
                            break # Found and processed in this card, exit card loop
                        else:
                            print(f"Could not extract coordinates from Google Maps URL (from card attempt): {maps_url}")
                    else:
                        print(f"No Google Maps link found in this 'Directions' card for {park_landing_url}")
                if maps_link_processed: # If processed in the inner loop, break outer card loop too
                    break
            if not maps_link_processed:
                 print(f"Attempt 2 (Fallback): No usable Google Maps link found in any 'Directions' card for {park_landing_url}")

        # Hours: There's a p tag inside of document.getElementsByClassName('field--name-field-content-page-body') 
        # on the info page that says 'Aztalan State Park is open year-round from 6 a.m. to 11 p.m.' that can be parsed
        content_body_info = soup_info.select_one('.field--name-field-content-page-body')
        if content_body_info:
            hours_p_tags = content_body_info.find_all('p')
            for p_tag in hours_p_tags:
                p_text = p_tag.get_text(strip=True)
                if "open year-round from" in p_text.lower() or ("open" in p_text.lower() and ("a.m." in p_text.lower() or "p.m." in p_text.lower())):
                    park_data["hours"]["text_description"] = p_text # Overwrite with more specific text
                    # Attempt to parse open/close times
                    # Example: 'Aztalan State Park is open year-round from 6 a.m. to 11 p.m.'
                    # More general: "Open [time] to [time]"
                    match = re.search(r'(\d{1,2}(?:\s?:\s?\d{2})?\s?[apAP]\.?[mM]\.?)\s+to\s+(\d{1,2}(?:\s?:\s?\d{2})?\s?[apAP]\.?[mM]\.?)', p_text, re.IGNORECASE)
                    if match:
                        park_data["hours"]["open"] = match.group(1).upper().replace('.','')
                        park_data["hours"]["close"] = match.group(2).upper().replace('.','')
                        break # Found and parsed hours
            
        # Contact: 
        # phone: there's an a tag with href that includes tel: on the info page
        phone_tag = soup_info.select_one('a[href^="tel:"]')
        if phone_tag and phone_tag.get('href'):
            park_data["contact"]["phone"] = phone_tag.get('href').replace("tel:", "").strip()

        # email: there's an a tag with title 'Contact information' on the info page that contains a mailto href
        email_tag = soup_info.select_one('a[title="Contact information"][href^="mailto:"]')
        if email_tag and email_tag.get('href'):
            park_data["contact"]["email"] = email_tag.get('href').replace("mailto:", "").strip()


    # --- Scrape Recreation Page (soup_rec) ---
    if soup_rec:
        content_body_rec = soup_rec.select_one('.field--name-field-content-page-body')
        if content_body_rec:
            # Activities: any h2 text inside of document.getElementsByClassName('field--name-field-content-page-body') on the recreation page
            activity_headers = content_body_rec.select('h2')
            park_data["activities"] = [header.get_text(strip=True) for header in activity_headers]

            # Rules: grab all the p tags from inside of document.getElementsByClassName('field--name-field-content-page-body') on the recreation page
            # This might grab too much, including descriptive text for activities. Consider refining if needed.
            rule_paragraphs = content_body_rec.select('p')
            park_data["rules"] = [p.get_text(strip=True) for p in rule_paragraphs if p.get_text(strip=True)]

    # --- Post-processing and defaults based on scraped data ---
    # isDogFriendly: if there's a 'PETS' in the activites array (case-insensitive)
    if any("pets" in activity.lower() for activity in park_data["activities"]):
        park_data["isDogFriendly"] = True
    elif park_data["activities"]: # If activities were scraped but no mention of pets
        park_data["isDogFriendly"] = False
    # else, it remains None if no activities were found

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
    try:
        if os.path.exists(output_filename):
            with open(output_filename, "r") as f_existing:
                existing_data_list = json.load(f_existing)
                if isinstance(existing_data_list, list):
                    for park_item in existing_data_list:
                        if isinstance(park_item, dict) and park_item.get('id'):
                            scraped_parks_dict[park_item['id']] = park_item
                    print(f"Loaded {len(scraped_parks_dict)} parks from existing '{output_filename}'.")
                else:
                    print(f"Warning: Existing '{output_filename}' does not contain a list. Starting fresh.")
    except json.JSONDecodeError:
        print(f"Warning: Could not decode JSON from '{output_filename}'. Starting fresh.")
    except Exception as e_load:
        print(f"Warning: Error loading '{output_filename}' ({e_load}). Starting fresh.")

    all_parks_links_and_images = get_all_park_links()
    # scraped_parks_data = [] # Replaced by scraped_parks_dict
    
    IMAGES_DIR = "images"
    os.makedirs(IMAGES_DIR, exist_ok=True)
    print(f"Ensured '{IMAGES_DIR}' directory exists.")

    total_parks_to_process = len(all_parks_links_and_images)
    print(f"Starting to scrape details for {total_parks_to_process} parks/entities.")

    for i, park_entry in enumerate(all_parks_links_and_images):
        print(f"\nProcessing park {i+1}/{total_parks_to_process}: {park_entry['url']}")
        park_details = scrape_park_page_details(park_entry['url'], park_entry['image_url'])
        
        if park_details:
            # Download image if URL exists
            if park_entry.get('image_url'):
                img_url = park_entry['image_url']
                park_id = park_details.get('id', 'unknown_park') # Use ID from details
                try:
                    # Make sure img_url is absolute
                    if not img_url.startswith(('http://', 'https://')):
                        if img_url.startswith('//'): # Protocol-relative URL
                            img_url = "https:" + img_url
                        elif img_url.startswith('/'): # Domain-relative URL
                            img_url = BASE_URL + img_url
                        else: # Potentially problematic relative URL, skip or log
                            print(f"  Skipping image download for {park_id} due to unclear relative URL: {img_url}")
                            img_url = None # Prevent download attempt
                    
                    if img_url:
                        print(f"  Downloading image for {park_id} from {img_url}...")
                        img_response = requests.get(img_url, stream=True, timeout=10)
                        img_response.raise_for_status()

                        # Determine file extension
                        parsed_url = urlparse(img_url)
                        path = unquote(parsed_url.path) # Handle URL encoded chars in path
                        filename, extension = os.path.splitext(path)
                        if not extension:
                            # Fallback if no extension in path, try Content-Type (basic)
                            content_type = img_response.headers.get('content-type')
                            if content_type and 'image/jpeg' in content_type:
                                extension = '.jpg'
                            elif content_type and 'image/png' in content_type:
                                extension = '.png'
                            elif content_type and 'image/gif' in content_type:
                                extension = '.gif'
                            else:
                                extension = '.jpg' # Default if still unsure
                            print(f"    No extension in URL path, guessed '{extension}' from Content-Type or default.")

                        image_filename = f"{park_id}{extension}"
                        image_save_path = os.path.join(IMAGES_DIR, image_filename)
                        
                        with open(image_save_path, 'wb') as f_img:
                            for chunk in img_response.iter_content(chunk_size=8192):
                                f_img.write(chunk)
                        park_details["downloaded_image_path"] = image_save_path
                        print(f"    Image saved to {image_save_path}")

                except requests.exceptions.RequestException as e_img:
                    print(f"    Error downloading image {img_url} for {park_id}: {e_img}")
                except Exception as e_generic_img:
                    print(f"    An unexpected error occurred during image download for {park_id} ({img_url}): {e_generic_img}")
            
            # Add/Update park data in the dictionary
            scraped_parks_dict[park_details['id']] = park_details
            print(f"  Updated data for park ID: {park_details['id']}")
            
            # Save incrementally after each park
            try:
                with open(output_filename, "w") as f_inc:
                    json.dump(list(scraped_parks_dict.values()), f_inc, indent=4) # Save list of values
                print(f"  Incrementally saved data for {len(scraped_parks_dict)} parks to '{output_filename}'.")
            except Exception as e_save:
                print(f"  ERROR incrementally saving data: {e_save}")

        else:
            print(f"  Failed to scrape details for {park_entry['url']}")

        # Random sleep between 2 to 5 seconds
        sleep_duration = random.uniform(2, 5)
        print(f"  Sleeping for {sleep_duration:.2f} seconds...")
        time.sleep(sleep_duration)

    # Final save (already done incrementally, but good for a final confirmation log)
    # with open(output_filename, "w") as f:
    #     json.dump(list(scraped_parks_dict.values()), f, indent=4)
    
    print(f"\nScraping complete. Final data for {len(scraped_parks_dict)} parks saved in '{output_filename}'.")
    # Note: The comparison for missing parks should now account for parks potentially loaded from a previous run.
    # This simple count might not be accurate if combining runs; a more sophisticated check would compare against all_parks_links_and_images.
    if len(scraped_parks_dict) < total_parks_to_process and not os.path.exists(output_filename): # Simplified check if starting fresh
        print(f"Note: Could not scrape details for {total_parks_to_process - len(scraped_parks_dict)} parks/entities.")

    # Comment out single park test or remove it if no longer needed
    # single_park_main_url = "https://dnr.wisconsin.gov/topic/parks/aztalan"
    # single_park_image_listing_url = "https://dnr.wisconsin.gov/sites/default/files/styles/carousel_image/public/2020-10/Aztalan_Mounds_20201006_KarlaGlobal.jpg"
    # print(f"--- Running single park test for: {single_park_main_url} ---")
    # park_details_single = scrape_park_page_details(single_park_main_url, single_park_image_listing_url)
    # if park_details_single:
    #     print("\n--- Scraped Data for Single Park ---")
    #     print(json.dumps(park_details_single, indent=4))
    # else:
    #     print(f"\nCould not scrape details for {single_park_main_url}") 
# Wisconsin State Parks Finder 🌲

## Features

*   **Explore Parks**: Browse a comprehensive list of Wisconsin state parks.
*   **Park Details**: Get detailed information for each park, including:
    *   Description and location (with an interactive map)
    *   Activities available (hiking, biking, swimming, etc.)
    *   Operating hours and entrance fees
    *   Contact information and official website links
    *   Park rules and seasonal information
*   **Interactive Map**: View parks on a map, see your current location, and get directions.
*   **Weather Forecast**: Check the current weather and upcoming forecast for each park.
*   **Reservations**: Easily access the official Wisconsin State Park reservation system to plan your stay.
*   **Favorites**: Keep a list of your favorite parks for quick access.
*   **Share Parks**: Share park information with friends and family.
*   **Customizable Theme**: Choose between light, dark, or system default themes for the app's appearance.
*   **Search & Filter**:
    *   Quickly search for parks by name or description.
    *   Filter parks by available activities, facilities, entrance fee status, and amenities like dog-friendliness or accessibility.

## Data Source

The park information, including details about activities, facilities, and more, is sourced from publicly available information. Helper scripts located in the `data_scraping` directory (not included in the main app bundle) were used to gather and process this data into a usable format (`data/parks.json` and `data/activities.json`).

## Data Scraping

The `data_scraping` directory contains scripts to gather and process information about Wisconsin State Parks.

### Scripts

*   **`park_scraper.py`**:
    *   This script scrapes detailed information about Wisconsin state parks from the official Department of Natural Resources (DNR) website (`dnr.wisconsin.gov`).
    *   It gathers data such as park names, descriptions, geographical coordinates, operating hours, contact information, and a list of raw activity strings found on each park's page.
    *   It can download a primary image for each park and save it locally in the `images` directory (created if not present).
    *   If an OpenAI API key is configured (via the `OPENAI_API_KEY` environment variable), the script can leverage a Large Language Model (LLM) for:
        *   Parsing textual descriptions of operating hours into structured open/close times.
        *   Mapping the raw scraped activity strings to a predefined list of standard activity categories and their corresponding numeric IDs (loaded from `data/activities.json`).
    *   The scraped data, including the path to the downloaded image and either the raw activity strings or the mapped numeric activity IDs, is saved into a JSON file named `parks_data.json` in the project root.
    *   The `if __name__ == "__main__":` block is currently configured to run a test scrape for a single, hardcoded park (`Aztalan State Park`). The logic for iterating through and scraping all parks is present but commented out.

*   **`update_park_activities.py`**:
    *   This script processes an existing JSON file containing park data (defaulting to `data/parks.json`; this should typically be the output of `park_scraper.py`, e.g., `parks_data.json` renamed or copied to `data/parks.json`).
    *   Its main function is to refine the `activities` field for each park. It loads a standardized list of activity names and their numeric IDs from `data/activities.json`.
    *   For each park in the input JSON file, if the `activities` are listed as strings (raw scraped data), this script uses an OpenAI LLM to map these strings to the predefined standard activity names.
    *   Successfully mapped activity names are then converted to their corresponding numeric IDs.
    *   The script updates the `activities` field for each park to be a sorted list of these numeric IDs. If some activities were already in numeric ID format, they are preserved and merged.
    *   After processing, the script overwrites the input JSON file (`data/parks.json`) with the updated park data.
    *   It logs any activity strings that the LLM could not successfully map to the standard list, providing a summary at the end of execution.
    *   This script requires an `OPENAI_API_KEY` environment variable to be set for the LLM mapping to work.

*   **`extract_activities.py`**:
    *   This is a utility script designed to extract all unique activity strings from a specified data file.
    *   It is currently hardcoded to read from `data/parks.ts` (note the `.ts` extension, which may indicate an older or different data format than the JSON files used by the other scripts).
    *   The script uses regular expressions to find all occurrences of `"activities": [...]` arrays within the content of the target file.
    *   It then extracts all unique quoted strings (assumed to be activity names) from these arrays.
    *   Finally, it prints a sorted list of these unique raw activity strings to the console.
    *   This script was likely used during development to identify all the different raw activity strings encountered by the scraper, which would be a helpful step in creating and maintaining the standardized `data/activities.json` file.

### Data Files

*   `data/activities.json`: A JSON file that defines the standardized list of park activities. Each activity has a unique numeric `id` and a `name`. This file is used by `park_scraper.py` (optional LLM mapping) and `update_park_activities.py` (for LLM mapping and ID conversion).
*   `data/parks.json`: (Referenced by `update_park_activities.py`) This file is expected to contain the array of park objects. `update_park_activities.py` reads from and writes back to this file. It should be the output of `park_scraper.py` (which currently saves as `parks_data.json` in the root).
*   `parks_data.json`: (Output by `park_scraper.py`) This file is created in the project root and contains the array of scraped park objects.
*   `data/parks.ts`: (Referenced by `extract_activities.py`) An older or differently formatted data file from which `extract_activities.py` pulls raw activity strings.

### Workflow

1.  **(Optional) Initial Activity Discovery**: Run `python data_scraping/extract_activities.py` (potentially after modifying its target file from `data/parks.ts` to a relevant `parks_data.json` output) to see all unique raw activity strings from an initial scrape. Use this output to populate/update `data/activities.json` with standardized names and assign unique IDs.
2.  **Scraping Park Data**: Run `python data_scraping/park_scraper.py`. This will (by default, after uncommenting the main loop) fetch data for all parks and save it to `parks_data.json`. If `OPENAI_API_KEY` is set, it can attempt to map activities to IDs directly.
3.  **Updating Activities (if not done by scraper or for refinement)**:
    *   Ensure `parks_data.json` (from step 2) is moved/renamed to `data/parks.json` (or update the path in `update_park_activities.py`).
    *   Set the `OPENAI_API_KEY` environment variable.
    *   Run `python data_scraping/update_park_activities.py`. This will process `data/parks.json`, use the LLM to map string activities to numeric IDs based on `data/activities.json`, and update `data/parks.json` in place.

Make sure to install necessary Python packages: `requests`, `beautifulsoup4`, `openai`, `python-dotenv`.
You can install them using:
`pip install requests beautifulsoup4 openai python-dotenv`

## Getting Started

This is an [Expo](https://expo.dev) project.

1.  Install dependencies: `npm install`
2.  Start the app: `npx expo start`

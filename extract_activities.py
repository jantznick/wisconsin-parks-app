import re


def extract_unique_activities(file_path):
    with open(file_path, "r") as f:
        content = f.read()

    all_activities = []
    # Find all occurrences of the activities arrays
    activities_arrays = re.findall(r'\"activities\":\s*\[([\s\S]*?)\]', content)
    for arr_str in activities_arrays:
        # Extract individual activities from each array string
        activities = re.findall(r'\"([^\"]*)\"', arr_str)
        all_activities.extend(activities)

    # Get unique activities
    unique_activities = sorted(list(set(all_activities)))
    return unique_activities

if __name__ == "__main__":
    unique_activities = extract_unique_activities("data/parks.ts") # Read directly from the file
    for activity in unique_activities:
        print(activity) 
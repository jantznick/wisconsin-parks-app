export interface Park {
  id: string;
  name: string;
  coordinate: {
	  latitude: number | null; // Changed from number
	  longitude: number | null; // Changed from number
  };
  description: string;
  activities: string[];
  hours: {
    open: string;
    close: string;
	  text_description?: string; // Added
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  facilities: string[];
  entranceFee: {
	  daily: number | null; // Changed from number
	  annual: number | null; // Changed from number
	  text_description?: string; // Added
  };
  parking: {
	  totalSpaces: number | null; // Changed from number
	  isFree: boolean | null; // Changed from boolean
  };
  rules: string[];
  seasonalInfo: {
    bestTimeToVisit: string;
    seasonalClosures: string[];
  };
	isDogFriendly: boolean | null; // Changed from boolean
	isAccessible: boolean | null; // Changed from boolean
	image_from_listing?: string | null; // Added
	downloaded_image_path?: string | null; // Added
	info_url: string; // Added
	recreation_url: string; // Added
}

export const PARKS: Park[] = [
  {
        "id": "400",
        "name": "400 State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Wetlands, wildlife, sandstone bluffs, rolling croplands and pastures are just a few of the sights you can enjoy on the 400 State Trail as it repeatedly crisscrosses the Baraboo River. The entire length of the 22-mile trail follows along the river valley from Elroy to Reedsburg.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-337-4775",
            "email": "Jayne.Collins@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/400"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "A unique feature of the 400 State Trail is a 7-mile horse trail parallel to the bike trail between Wonewoc and LaValle. Horses must stay on the grassy portion and are not allowed on the limestone-surfaced trail.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers.",
            "The 400 State Trail is ideal for a bike and paddle trip. Sections of this former rail corridor parallel the Baraboo River. You can paddle downstream and then bike back to your starting point or vice versa. In season, shuttle service and rental is available in Wonewoc.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails which cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis, however localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:",
            "A portion of the 400 State Trail property in the town of La Valle is more than 100 yards from the trail corridor. This portion is open to hunting and trapping during the Wisconsin state parks hunting time frame."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_400.png?itok=JrtVFMAT",
        "downloaded_image_path": "images/400.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/400/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/400/recreation"
    },
    {
        "id": "ahnapee",
        "name": "Ahnapee State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "From downtown Sturgeon Bay, this 48-mile, county-operated trail winds south along the beautiful Ahnapee and Kewaunee rivers to Algoma, Casco, Luxemburg and Kewaunee, passing by a mixture of evergreen glades, farmland, prairies and wooded areas teeming with wildlife and native wildflowers. Near Sunset Road in Kewaunee County, the trail branches off in three directions, west to Luxemburg, northeast towards Algoma and southeast towards the city of Kewaunee.",
        "activities": [
            "Horseback riding",
            "Ice Age National Scenic Trail",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-746-9959",
            "email": "dcparks1@co.door.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/ahnapee"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The Ahnapee State Trail corridor is open for horses from April 15 to Nov.\u00a015. Riders are asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse.",
            "TheIce Age Trailfollows two sections of the Ahnapee State Trail corridor, for about 17 miles from downtown Sturgeon Bay to Algoma and for another 10 miles from the city of Kewaunee through theC.D. Besadny Fish and Wildlife Areato County Highway A.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Bikers do not need a trail pass while using the trail. Due to the possibility of hoof marks in the trail surface, wider-tire bicycles are recommended.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails which cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis, however localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:",
            "A portion of the Ahnapee State Trail property in the town of Algoma is more than 100 yards from the trail corridor. This portion is open to hunting and trapping during the Wisconsin state parks hunting time frame."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Rail%20Trail.jpg?itok=6q_hWl-x",
        "downloaded_image_path": "images/ahnapee.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/ahnapee/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/ahnapee/recreation"
    },
    {
        "id": "amnicon",
        "name": "Amnicon Falls State Park",
        "coordinate": {
            "latitude": 46.6084,
            "longitude": -91.8873
        },
        "description": "Amnicon Falls State Park features a series of delightful waterfalls and rapids along the Amnicon River. You can view them from a covered foot bridge or 2 miles of trails along the river. The park is a place to picnic, camp, walk in the woods and learn about the Douglas Fault, the geological formation that created the falls.",
        "activities": [
            "Camping",
            "Hiking",
            "Hunting and trapping",
            "Fishing",
            "Picnic areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Amnicon Falls State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-398-3000",
            "email": "Gervase.Thompson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/amnicon"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Amnicon Falls State Park offers a variety of outdoor recreation opportunities year-round. Read on to learn about some of the popular activities available at this park.",
            "Camping at Amnicon Falls State Park",
            "Hiking at Amnicon Falls State Park",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Although better known for\u00a0its scenery than its fishing, the Amnicon River sometimes produces excellent catches. A warm water stream, it flows north into Lake Superior. Below the park, it changes from a fast-flowing river to one that is slow, wide and meandering. A variety of species that live in the lower river and Lake Superior migrate up the Amnicon to spawn each year. The best fishing is downstream from the Lower Falls. All anglers 16 years and older must have afishing license. In addition, anyone fishing for or keeping trout must have a trout stamp.",
            "Picnic areas and shelters at Amnicon Falls State Park",
            "While swimming and wading are permitted, caution is urged. Water levels and flows fluctuate and river conditions change from day to day. Rocks may be slippery. Never allow children to swim unsupervised. Amnicon Falls State Park has no designated beaches and no lifeguards.",
            "No diving or jumping.Jumping from rock walls into the river is dangerous and not permitted. River levels vary, resulting in unknown water depths and current changes. In addition, rocks fall from the gorge walls and are hidden in the dark water.",
            "Snowshoeing and winter hiking are allowed in the park. There is a 1.5-mile designated snowshoe trail during winter.",
            "A designated 1.5-mile snowshoe trail does not have access to the river but provides a convenient way to enjoy some of the remote areas of the park in winter. The trail is fairly flat with some steeper segments in and out of the ancient river valley."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Amnicon%20Falls.jpg?itok=RrVNy1PT",
        "downloaded_image_path": "images/amnicon.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/amnicon/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/amnicon/recreation"
    },
    {
        "id": "aztalan",
        "name": "Aztalan State Park",
        "coordinate": {
            "latitude": 43.0687,
            "longitude": -88.8635
        },
        "description": "Aztalan State Park is a National Historic Landmark and contains one of Wisconsin's most important archaeological sites, showcasing an ancient Middle-Mississippian village that thrived between A.D. 1000 and 1300. The people who settled in Aztalan built large, flat-topped pyramidal mounds and a stockade around their village. Portions of the stockade and two mounds have been reconstructed in the park.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Hiking",
            "Hunting and trapping",
            "Fishing",
            "Pets",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Aztalan State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-873-9695",
            "email": "jamesp.abbott@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/aztalan"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "You can canoe, kayak or boat in the Crawfish River.",
            "The park is mostly open prairie, with 38 of its 172 acres in oak woods.",
            "Two miles of trail meander through open prairie and along the Crawfish River. The park's trails give visitors a view of the reconstructed stockade and mounds.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Fishing is available in the Crawfish River.Fishing licensesapply.",
            "Pets are allowed in designated pet areas only and must be on a leash at all times. Maps showing pet areas are located at all parking lots.",
            "Picnicking is available in the park and there is an open reservable shelter.",
            "Reservea shelter online.",
            "A picnic shelter is located near the middle parking lot and can be reserved.",
            "Cross-country skiing is allowed, but trails are not groomed. Snowshoeing and winter hiking are permitted. Sledding is not permitted at the park. It is illegal to sled on the mounds."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": true,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Aztalan.jpg?itok=4L3xMA4-",
        "downloaded_image_path": "images/aztalan.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/aztalan/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/aztalan/recreation"
    },
    {
        "id": "badger",
        "name": "Badger State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Badger State Trail travels 40 miles between Madison and the Wisconsin-Illinois border while traversing farmlands, woods, rolling hills, scenic meadows, remnant prairies, ravines, glacial topography and several small communities. The Badger State Trail\u00a0also connects to many local parks and the Capital City and Sugar River state trails.",
        "activities": [
            "Ice Age National Scenic Trail",
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-437-5711",
            "email": "Kevin.Swenson@Wisconsin.Gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/badger"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "TheIce Age Trailfollows the Badger State Trail for two sections, between Purcell Road and County Highway A in Dane County, and between County Highway W to the Sugar River State Trail in Green County.",
            "The fairly level grade and smooth limestone surface make this trail suitable for bicyclists, walkers and joggers. The 6-mile section between Madison and Purcell Road is surfaced with asphalt and is suitable for in-line skating. Each bicyclist or skater age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobilingis allowed from Purcell Road all the way south to the Illinois state line. Operators must follow allWisconsin snowmobile laws. The Badger State Trail also connects to numerous miles of Dane and Green County snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails that\u00a0cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis;\u00a0however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "Winter All-Terrain Vehicle (ATV)use is allowed on the Badger State Trail with some restrictions. UTVs or \"Side--side ATVs\" are not permitted on the Badger State Trail. ATVs are allowed under the following conditions:",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Bike%20Tire.jpg?itok=NUUySHkP",
        "downloaded_image_path": "images/badger.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/badger/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/badger/recreation"
    },
    {
        "id": "bearskin",
        "name": "Bearskin State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Named for the Bearskin Creek the trail follows, this former railroad corridor is an opportunity to experience the Northwoods of Wisconsin. The railroad line was built to export white pine logs from the forests of northern Wisconsin to the cities of the Midwest. Today the trail is a 21.5-mile recreation corridor between Minocqua and Tomahawk, surfaced with compacted granite suitable for walking and bicycling in summer and snowmobiling in winter.The Bearskin State Trail is celebrating its 50th anniversary in 2023!",
        "activities": [
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-842-2522",
            "email": "bayli.christorf@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/bearskin"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Few places in the world have more lakes per square mile than Oneida and Vilas counties. The lakes were formed by glaciers that melted and retreated north during the last Ice Age. Thirteen trestles cross the lakes and streams along the trail. The lakes of the Minocqua area are well known for their fishing.",
            "TheNorthern Highland\u2014American Legion (NH-AL) State Forestis nearby and offers a wide variety of recreation opportunities, including camping, hiking, bicycling, snowmobiling, canoeing, bird watching, fishing and hunting. The 6-mile Hiawatha Trail in Lincoln County is also nearby. The Hiawatha Trail, on another segment of the same rail bed as the Bearskin State Trail, travels south from Heafford Junction to Tomahawk.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and surface make this trail suitable for bicyclists, walkers and joggers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis, however localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing;, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "For the segment between County Highway K and Lake Nokomis Road, snowmobiles have a separate off-road trail. This off-road trail is for snowmobiles only. All other users must follow the road route as indicated on thetrail map [PDF].",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:",
            "A portion of the trail property in the town of Hazlehurst is more than 100 yards from the trail corridor. This portion is open to hunting and trapping during the Wisconsin state parks hunting time frame."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Bearksin.png?itok=-3zI4tUB",
        "downloaded_image_path": "images/bearskin.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/bearskin/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/bearskin/recreation"
    },
    {
        "id": "belmont",
        "name": "Belmont Mound State Park",
        "coordinate": {
            "latitude": 42.7672,
            "longitude": -90.3517
        },
        "description": "Belmont, from the Frenchbelle monte, means \"beautiful mountain.\" The top of Belmont Mound is 1,400 feet above sea level, providing some fantastic views of the area. Wisconsin's First Capitol historic site is a half mile west of the park. The park is operated by the Belmont Lions Club.",
        "activities": [
            "Hiking",
            "Hunting and trapping",
            "Picnicking",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Belmont Mound State Park is open from 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-608-523-4427",
            "email": "michael.degenhardt@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/belmont"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Belmont Mound State Park provides outdoor recreation opportunities to visitors year-round.\u00a0The park is operated by the Belmont Lions Club. Eighty acres in the northwest corner of the park are designated asBelmont Mound Woods State Natural Area.",
            "The park has 2.5 miles of hiking trails. The trails go around the base of the mound, through the center of the park and to a loop in the northeast corner of the park.Trail map.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "There is a picnic area near the park entrance.",
            "The park is open year-round for snowshoeing and winter hiking. Trails are not groomed for skiing."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Belmont%20Mound.png?itok=-QzKf51l",
        "downloaded_image_path": "images/belmont.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/belmont/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/belmont/recreation"
    },
    {
        "id": "bigbay",
        "name": "Big Bay State Park",
        "coordinate": {
            "latitude": 46.7881,
            "longitude": -90.6734
        },
        "description": "On the eastern side of Madeline Island, the largest of the Apostle Islands archipelago, Big Bay State Park features picturesque sandstone bluffs along 4 miles of Lake Superior shoreline. The park also has a 1-mile boardwalk, sandy swimming beach, hiking trails, large family campground and two group camps. A short ferry ride from Bayfield to Madeline Island is needed to reach the park.",
        "activities": [
            "Accessibility",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-747-6425",
            "email": "David.Lindsley@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/bigbay"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The 2,350-acre park has a 1.5-mile beach, campground, picnic areas and more than seven miles of hiking and nature trails. Bayfield and Madeline Island also offer bus tours, golfing, art galleries, marinas and the old La Pointe Indian Burial Grounds.\u00a0Ojibway (Chippewa) Indians were the original inhabitants of the area.",
            "At Big Bay State Park, the 1.5-mile Boardwalk Trail is a flat, well-marked, accessible boardwalk with wooden benches at several points, interpretive signs and views of Lake Superior. Big Bay State Park also offers an accessible campsite and a beach wheelchair for persons with disabilities.",
            "Boating, canoeing and kayaking at Big Bay State Park",
            "Camping at Big Bay State Park",
            "Anglers can catch northern pike in the park's lagoon and several species of trout in Lake Superior.",
            "Hiking at Big Bay State Park",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "In addition to the opportunities that are available during the state parks hunting/trapping time frame, hunting opportunities in state parks that were already established by rule and in place prior to the enactment of 2011 ACT 168, remain in place.",
            "The day-use area is equipped with picnic tables, grills, drinking water and restrooms.",
            "Swimming at Big Bay State Park",
            "Winter activities at Big Bay State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Big%20Bay%20Shore.jpg?itok=JUszImRG",
        "downloaded_image_path": "images/bigbay.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/bigbay/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/bigbay/recreation"
    },
    {
        "id": "bigfoot",
        "name": "Big Foot Beach State Park",
        "coordinate": {
            "latitude": 42.5663,
            "longitude": -88.4368
        },
        "description": "Located on the shores of Lake Geneva, Big Foot Beach State Park offers 5 miles of hiking trails, a family campground, a swimming beach and picnic and playground areas. Snowshoeing and cross-country skiing are popular in winter.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Big Foot Beach State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-262-248-2528",
            "email": "Sarah.Wolski@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/bigfoot"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Big Foot Beach State Park offers a variety of recreation opportunities. Click the links below to learn about some of the popular activities at this park.",
            "Boating, canoeing and kayaking at Big Foot Beach State Park",
            "Camping at Big Foot Beach State Park",
            "Fishing at Big Foot Beach State Park",
            "Hiking at Big Foot Beach State Park",
            "Archery-only hunting and trapping at Big Foot Beach State Park",
            "Picnic areas and playgrounds at Big Foot Beach State Park",
            "Swimming at Big Foot Beach State Park",
            "Winter activities at Big Foot Beach State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_BigFootA_0.png?itok=1_lGYvzw",
        "downloaded_image_path": "images/bigfoot.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/bigfoot/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/bigfoot/recreation"
    },
    {
        "id": "blackriver",
        "name": "Black River State Forest",
        "coordinate": {
            "latitude": 44.2839,
            "longitude": -90.8287
        },
        "description": "Two forks of the Black River flow through this 68,000-acre forest comprised of pine and oak woods under high sandstone abutments. This central Wisconsin property offers many recreational opportunities, including camping, canoeing, hunting, hiking, skiing and ATV riding. Visitors may even see elk roaming the forest. Elk we released in 2015 and 2016 after being absent from the area for over 125 years.",
        "activities": [],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-284-4103",
            "email": "dnrblackriver@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/blackriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "ATV",
            "Biking",
            "Camping",
            "Canoeing, kayaking and boating",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnic areas and shelters",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_BlackRiverA.png?itok=3bNxO7aB",
        "downloaded_image_path": "images/blackriver.png",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/blackriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/blackriver/recreation"
    },
    {
        "id": "bluemound",
        "name": "Blue Mound State Park",
        "coordinate": {
            "latitude": 43.0256,
            "longitude": -89.8441
        },
        "description": "Perched atop the highest point in southern Wisconsin, Blue Mound State Park offers spectacular views and unique geological features. A swimming pool is available during summer. Over 20 miles of scenic hiking, off-road biking and cross-country ski trails, as well as a family campground, access to the Military Ridge State Trail with bike-in campsites and a rustic cabin for people with disabilities make Blue Mound a popular destination year-round.",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Camping",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter Activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Blue Mound State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-437-5711",
            "email": "kevin.swenson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/bluemound"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Over 20 miles of scenic hiking, off-road biking and cross-country ski trails, as well as a family campground, access to the Military Ridge State Trail with bike-in campsites and a rustic cabin for people with disabilities make Blue Mound a popular destination year-round. Learn more about some of the popular activities at this park below.",
            "Blue Mound State Park offers accessible opportunities including an accessible rustic cabin, accessible campsites, accessible picnic shelters, and a universal splash pad and swimming pool equipped with a chair lift.",
            "Bicycling At Blue Mound State Park",
            "Camping At Blue Mound State Park",
            "Hiking At Blue Mound State Park",
            "Hunting And Trapping At Blue Mound State Park",
            "Picnicking And Shelters At Blue Mound State Park",
            "Swimming At Blue Mound State Park",
            "Winter Activities At Blue Mound State Park(cross-country skiing and snowshoeing)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Blue%20Mound.jpg?itok=5E4kUFYb",
        "downloaded_image_path": "images/bluemound.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/bluemound/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/bluemound/recreation"
    },
    {
        "id": "bruleriver",
        "name": "Brule River State Forest",
        "coordinate": {
            "latitude": 46.537,
            "longitude": -91.5935
        },
        "description": "The Brule River State Forest offers exceptional recreational opportunities, including river paddling, world-class trout fishing, wildlife viewing, a 23-mile stretch of the North Country National Scenic Trail and 9 miles of Lake Superior shoreline. All 44 miles of the Bois Brule River are contained in the forest. Two campgrounds offer family campsites and access to canoe landings on the Bois Brule River.",
        "activities": [
            "Biking",
            "Camping",
            "Canoeing, kayaking and boating",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnic areas and shelters",
            "Swimming",
            "Wildlife viewing",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-372-5678",
            "email": "Matthew.Leischer@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/bruleriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Brule River State Forest has no designated trails for biking; however, it does contain numerous multi-use trails and roads that are ideal for mountain biking. Cyclists who enjoy getting away from the crowd may use any of the hunter walking trails, the Afterhours Trail (off ski-season), the Brule-St. Croix Snowmobile Trail, the Tri-County Corridor and many back roads.",
            "ViewHunter Walking Trails Map Packet[PDF].",
            "Camping at Brule River State Forest",
            "Canoeing, kayaking and boating at Brule River State Forest",
            "Fishing at Brule River State Forest",
            "Hiking at Brule River State Forest",
            "Horseback riders can enjoy miles of trails within the Brule River State Forest, including the Brule-St. Croix Snowmobile Trail, hunter walking trails and numerous back roads. The North Country Trail is for foot traffic only; no horses are allowed.",
            "Riders are encouraged to locate watering points on a map before starting out or bring water along on the ride. Riders should also keep in mind that hunters use the trails during the deer season. There is no horse camping on the Brule River State Forest, but private campgrounds in the area do accommodate horse campers.",
            "ViewHunter Walking Trails Map Packet[PDF].",
            "The Brule River State Forest has more than 40 miles of hunter walking trails that provide easy access to favorable habitat for numerous game animals. Deer and grouse are the most commonly hunted species. Other hunting opportunities include woodcock, bear and waterfowl. Trapping of species such as beaver, muskrat, fisher, otter and mink is also common.",
            "ViewHunter Walking Trails Map Packet[PDF].",
            "Visit DNRhuntingfor regulation, season and license information.",
            "Picnic areas and shelters at Brule River State Forest",
            "The forest has no designated swimming beaches, but some people enjoy swimming at Rush Lake on the eastern edge of the forest or in the cold waters of Lake Superior at the mouth of the Brule. Both locations have sandy beaches and clear water. Public beaches near the state forest are located on Lake Minnesuing and Lake Nebagamon.",
            "Wildlife viewing and photography opportunities abound on the forest. Wildlife diversity is influenced by the variety of northern hardwood habitats that exist on the forest, including wetlands, pine barrens, grasslands, shrub-lands and boreal forest. The diverse terrain and soil types on the forest, as well as the Brule River itself, are responsible for this assortment of habitats.",
            "More than 200 species of birds have been recorded in the Brule River State Forest. Such rare birds as the black-backed woodpecker, white-winged crossbill, merlin, great gray owl and goshawk have been seen and likely nest on the property. Mammals such as the badger, bobcat, fisher and gray wolf can also be found.",
            "Winter activities at Brule River State Forest"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/State%20Forests_Hero%20Image_Brule%20River.jpg?itok=bZg2F3n9",
        "downloaded_image_path": "images/bruleriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/bruleriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/bruleriver/recreation"
    },
    {
        "id": "brunetisland",
        "name": "Brunet Island State Park",
        "coordinate": {
            "latitude": 45.1798,
            "longitude": -91.1623
        },
        "description": "Brunet Island State Park, on the Chippewa and Fisher rivers, offers more than 1,300 acres of scenic beauty and recreational opportunities. Quiet lagoons and channels are excellent for canoeing and wildlife watching. The rolling landscape in Chippewa County is a product of the most recent Ice Age. The park links to the Old Abe State Trail which runs from Cornell to Chippewa Falls.",
        "activities": [
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Picnicking and shelters",
            "Hunting",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-239-6888",
            "email": "Zachary.Thon@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/brunetisland"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Brunet Island provides a variety of outdoor recreation opportunities for visitors. Click the links below to learn more about some of the popular activities available at this property.",
            "Biking at Brunet Island State Park",
            "Boating, canoeing and kayaking at Brunet Island State Park",
            "Camping at Brunet Island State Park",
            "Fishing at Brunet Island State Park",
            "Hiking at Brunet Island State Park",
            "Picnicking and shelters at Brunet Island State Park",
            "Hunting and trapping at Brunet Island State Park",
            "Swimming at Brunet Island State Park",
            "Winter activities at Brunet Island State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Fishing%20Rod.jpg?itok=NbAU9NOf",
        "downloaded_image_path": "images/brunetisland.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/brunetisland/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/brunetisland/recreation"
    },
    {
        "id": "buckhorn",
        "name": "Buckhorn State Park",
        "coordinate": {
            "latitude": 43.9469,
            "longitude": -90.0042
        },
        "description": "Buckhorn State Park is a paradise for water enthusiasts, hunters, hikers, campers and nature lovers. The park and two adjacent state wildlife areas cover more than 8,000 acres on a peninsula in the Castle Rock Flowage of the Wisconsin River. Family and group campsites, unique cart-in camping, a cabin for people with disabilities, canoe trail and an accessible fishing pier, are all available at the park.",
        "activities": [
            "Accessibility",
            "Boating, canoeing and kayaking",
            "Biking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-565-2789",
            "email": "heather.wolf@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/buckhorn"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Buckhorn State Park provides a variety of recreation opportunities. In addition, the\u00a01600-acreBuckhorn Wildlife Areaand the 2,200-acreYellow River Wildlife Areanext to Buckhorn State Park offer many additional recreation opportunities, including different hunting seasons and access to the Castle Rock Flowage.",
            "View the links below to learn more about some popular activities at Buckhorn State Park.",
            "Buckhorn State Park offers several accessible opportunities, including an accessible cabin, campsites, fishing piers, picnic shelters near the beach, a boat launch with an accessible boarding pier and a universal hunting blind. The park also provides a variety of adaptive equipment, including cross-country skis, an adaptive kayak, a beach wheelchair, and amotorized all-terrain tracked wheelchair.",
            "The tracked wheelchair can be checked out through theBuckhorn State Park Track Chair Reservation System, and the beach wheelchair can be checked out at the park office. Call the property at 608-565-2789 for more information on the outdoor wheelchairs.",
            "For more information about accessibility in Wisconsin State Parks, visitAccessible Recreation.",
            "Boating, canoeing and kayaking at Buckhorn State Park",
            "Biking is allowed on park roads. In season, the Friends of Buckhorn State Park offers bicycle rentals for use in the park. Buckhorn State Park is close to theElroy-Sparta State Trailand Omaha Trail.",
            "Camping at Buckhorn State Park",
            "Fishing at Buckhorn State Park",
            "Hiking at Buckhorn State Park",
            "Hunting and trapping at Buckhorn State Park",
            "Picnicking and shelters at Buckhorn State Park",
            "Swimming at Buckhorn State Park",
            "Winter activities at Buckhorn State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Buckhorn.png?itok=oL74QMkl",
        "downloaded_image_path": "images/buckhorn.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/buckhorn/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/buckhorn/recreation"
    },
    {
        "id": "buffalo",
        "name": "Buffalo River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This trail in west-central Wisconsin follows the scenic Buffalo River valley for 36 miles between Mondovi and Fairchild. The river, which lends its name to the trail, was named by early French explorers. They called itRiviere de Beeufsfor the many bison that once inhabited the area. The trail is built on a former railroad corridor and passes by farmlands, woods, hills and wetlands while traveling through the communities of Eleva, Strum and Osseo.",
        "activities": [
            "All-terrain vehicles/Utility-terrain vehicles",
            "Horseback riding",
            "Hunting",
            "Walking and bicycling",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-534-6409",
            "email": "Lois.Larson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/buffalo"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles (ATVs) and Utility-terrain vehicles (UTVs) are allowed on the trail year-round. ATVs and UTVs must stay on the graded portion of the corridor. Operators must follow allWisconsin all-terrain vehicle laws.",
            "ATVs, UTVs and snowmobiles are the only motorized vehicles allowed on the trail. dirt bikes, motorcycles and other off-highway vehicles are not allowed on the Buffalo River State Trail.",
            "The trail is open for horseback riding when there is not enough snow cover for a groomed snowmobile trail. Riders should use caution when meeting ATVs on the trail. Each horseback rider needs a Wisconsinstate trail passwhile using the trail. Trail passes must be purchased before riding on the trail and should be carried with you while using the trail.",
            "The Buffalo River State Trail corridor is open to hunting from Mondovi to Fairchild, approximately 36 miles, during the Wisconsin state parks hunting time frame. For more information, please see:",
            "The trail is open all year to walking. Users enjoy observing wildlife, birding, photography and berry picking. The trail surface may not be suitable for some bicycle types, especially bikes with thinner tires. Mountain bike riders may enjoy the rougher terrain. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail. Trail passes must be purchased before riding on the trail and should be carried with you while using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis;\u00a0however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing;\u00a0however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Buffalo%20River.jpg?itok=e1JTeWV1",
        "downloaded_image_path": "images/buffalo.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/buffalo/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/buffalo/recreation"
    },
    {
        "id": "cadizsprings",
        "name": "Cadiz Springs State Recreation Area",
        "coordinate": {
            "latitude": 42.5842,
            "longitude": -89.7672
        },
        "description": "Cadiz Springs is a day use area that provides picnicking, hiking, hunting, fishing and wildlife watching opportunities. Located in southwest Wisconsin's driftless area, the landscape is uniquely different from the rest of the state. Here the bogs, marshes and many lakes are replaced by rolling hills and valleys with spring-fed streams. There is no camping at Cadiz Springs.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Cadiz Springs is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-523-4427",
            "email": "Michael.Degenhardt@Wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/cadizsprings"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Cadiz Springs State Recreation Area offers visitors a variety of outdoor recreation opportunities year-round.",
            "The two lakes at Cadiz Springs total 93 acres. Beckman lake has a boat landing for launching boats. Kayaks and canoes can be portaged into Zander lake. Both Beckman and Zander lakes have restrictions for electric motors only.",
            "Fishing is very popular with both warm and cold water species of fish available. Both lakes contain fine populations of largemouth bass and an abundant population of panfish, providing an enjoyable challenge to many anglers who visit the recreation area. Anglers may catch brown or rainbow trout, northern pike, catfish and bullheads. All anglers 16 years and older must have afishing license.",
            "Cadiz Springs State Recreation Area has 8 miles of hiking trails. The trail system has several unnamed loops that offer hikers wildlife watching opportunities as they travel through forests, along streams and around lakes. Cadiz Springs is one of the best places to view wildlife with its variety of forest, aquatic and meadow habitats.",
            "In addition,Zander Lake nature trailis a 1-mile self-guided nature trail around Zander Lake. You may see and hear many songbirds and shorebirds, muskrats, five species of frogs, several kinds of non-poisonous snakes, snapping turtles, painted turtles and the endangered Blandings Turtle.",
            "Hunting and trapping are permitted at the property duringlegal hunting and trapping seasons. No person may hunt or trap without first obtaining a property map identifying those areas closed to hunting and trapping within the property. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails.",
            "Cadiz Springs picnic areas offer a variety of cooking grills and picnic tables for day users. The park offers two large open shelters with lights and electricity.",
            "Cadiz Springs offers a 150-foot sand beach for swimmers to enjoy. The beach is open and monitored from Memorial Day to Labor day. No lifeguards are present. Pets and fishing are prohibited in the swimming area year-round.",
            "Ungroomed, backcountry, cross-country skiing is permitted on all trails as snow conditions allow. The trail system provides relatively flat and rewarding skiing through mature forests and along the lakes. Snowshoeing and winter hiking are permitted on all trails as snow conditions allow.",
            "Staff do not monitor or measure the thickness of the ice on the lake's surface. Ice thickness and safety can vary from day to day and from location to location. Use your best judgment about the safety of the ice. Sleds, shanties and motor vehicles choosing to enter onto the ice must enter through the boat landing. Entering onto the lake ice through the beach is prohibited."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Cadiz%20Springs.jpg?itok=N29PRdOB",
        "downloaded_image_path": "images/cadizsprings.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/cadizsprings/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/cadizsprings/recreation"
    },
    {
        "id": "capcity",
        "name": "Capital City State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Capital City State Trail is the link around and through Madison between the Military Ridge State Trail, Badger State Trail and, eventually, the Glacial Drumlin State Trail. Nine miles of the trail go through the scenic Capital Springs State Recreation Area (Dane County E-way) south of Madison between Verona Road and Industrial Drive near Nob Hill.",
        "activities": [
            "Camping",
            "Walking, bicycling and in-line skating",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-224-3730",
            "email": "Dane-parks@co.dane.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/capcity"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "In the City of Madison, the Capital City Trail follows 7 miles of city bikeways from Industrial Drive near Nob Hill, under the Beltline Highway, along John Nolen Drive, past the Monona Terrace Convention Center downtown and through the east side of Madison.",
            "A 1-mile link along Verona Road in Fitchburg connects the Capital City Trail to theMilitary Ridge State Trail. The Capital City Trail also connects to Madison's Southwest Path and theBadger State Trailto the Illinois border.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "Camping is available atCapital Springs State Recreation Area.",
            "The Capital City State Trail's asphalt surface is good for bicycling, walking, jogging and in-line skating. Astate trail passis required for anyone 16 and older who bikes, skates or roller-skis on the nine miles of the trail that go through the Capital Springs E-way south of Madison between Verona Road and Nob Hill near Industrial Drive. Passes are available at the trailheads at Verona Road and Nob Hill, the kiosk at the Syene Road parking lot or at theLussier Family Heritage Center [exit DNR]during normal business hours, 8 a.m. - 4:30 p.m.",
            "Dane County [exit DNR]subsidizes passes for bicyclists who use the trail primarily for transportation rather than recreational purposes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Capital%20City%20Trail.jpg?itok=f1AmYT_m",
        "downloaded_image_path": "images/capcity.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/capcity/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/capcity/recreation"
    },
    {
        "id": "capsprings",
        "name": "Capital Springs State Recreation Area",
        "coordinate": {
            "latitude": 43.027,
            "longitude": -89.345
        },
        "description": "Just minutes from downtown Madison, Capital Springs State Recreation Area and Dane County's William G. Lunney Lake Farm County Park, offer many recreation opportunities, including camping, hiking and skiing trails, picnicking, fishing and a boat launch on Lake Waubesa. The Capital City State Trail connects both properties to the city of Madison and links to regional Dane County bicycle trails.",
        "activities": [
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Pets",
            "Picnic areas",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Capital Springs State Recreation is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-224-3730",
            "email": "Dane-parks@co.dane.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/capsprings"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The DNR and Dane County cooperatively operate and manage Capital Springs State Recreation Area. Capital Springs and the adjacentWilliam G. Lunney Lake Farm County Parkoffer several recreation opportunities.",
            "TheCapital City State Trailwinds through Capital Springs State Recreation Area and connects to Dane County\u2019sLower Yahara River TrailandWest Waubesa Trail. The trails can be accessed from the trailhead and parking lot on Lake Farm Road across from the Lussier Family Heritage Center. These paved trails are popular for bicycling and connect to several other city of Madison and state trails.",
            "The boat launch is open year-round. Each vehicle parked in the boat launch parking area must have a lake access permit. Self-registration is available at the launch. Valid lake access permits include:",
            "Note: If you have Conservation Patron License but no sticker, you may write your name, patron license number and date on a daily permit from the kiosks and display the receipt in the lower left corner of your windshield. Don't forget to put the envelope portion into the pay tube.",
            "Dane County's William G. Lunney Lake Farm County Park, adjacent to Capital Springs, offers camping. To reserve a campsite, see theDane County Parks website.",
            "Fishing is available in Lake Waubesa.Fishing licensesapply. The Jenni and Kyle Preserve, part of Capital Springs State Recreation Area, is a fully accessible park between State Highway 14 and Fish Hatchery Road. The preserve was established as a park to be accessible and enjoyed by all children. Fishing is restricted to children age 14 and under and adults with disabilities.",
            "There are over 6 miles of hiking trails and boardwalks at Capital Springs. Some trails contain interpretive signs along the way to help visitors learn about the surrounding area. Birding is excellent throughout the year due to the variety of natural habitat.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "All pets must be on leash 8 feet or shorter and under control at all times. A Dane County Pet permit is required and can be purchased at the E-Way, Heritage Center or Shelter #1 trailhead kiosks.",
            "There are several large picnic and playground areas near Lake Waubesa. Three shelters are available for reservations within William G. Lunney Lake Farm County Park.",
            "During winter, 6 miles of trails are groomed for cross-country skiing. Hikers, snowshoers and pets are asked to remain off trails when they are snow-covered and groomed.",
            "The boat launch area provides access to Lake Waubesa for ice fishing. Staff do not monitor ice conditions."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": true,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_New%20Glarus%20Woods.png?itok=uTN4I_IW",
        "downloaded_image_path": "images/capsprings.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/capsprings/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/capsprings/recreation"
    },
    {
        "id": "cattail",
        "name": "Cattail State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Cattail State Trail travels for 18 miles on a former rail corridor between the communities of Amery and Almena in northwestern Wisconsin. Forests, farmlands, prairies, hills and various wildlife habitats surround the trail, which also passes through the Village of Turtle Lake. The trail is maintained and managed by Polk and Barron counties.",
        "activities": [
            "All-terrain vehicles",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-485-9272",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/cattail"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles (ATVs) are allowed on the trail year-round. Off-road motorcycles are allowed on the trail year-round in Polk County only. Operators must follow allWisconsin ATV operation laws. Barron County has an extensive network of ATV routes and has opened a trail that connects with the Cattail, east from Almena to the village of Poskin. The connecting trail is on private land. Please stay on the trail and respect property boundaries.",
            "About 2.5 miles east of Almena, Barron County has developed an ATV intensive use area. There is a trailhead with rest rooms available. Both ATV and snowmobile routes pass through the area and can use the trailhead.",
            "The entire trail is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "The entire trail is open to walking and bicycling, though bicycling is not recommended. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails which cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis, however localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile web pages [exit DNR]and telephone hotlines will provide the most current information.",
            "About 2.5 miles east of Almena, Barron County has developed an ATV intensive use area. There is a trailhead with rest rooms available. Both ATV and snowmobile routes pass through the area and can use the trailhead.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Cattail.jpg?itok=hRABtwai",
        "downloaded_image_path": "images/cattail.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/cattail/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/cattail/recreation"
    },
    {
        "id": "chippewaflowage",
        "name": "Chippewa Flowage",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Chippewa Flowage, a 15,300-acre impoundment, is located in central Sawyer County, 15 miles east of Hayward. Dotted with about 200 undeveloped islands, it is Wisconsin's third-largest lake and boasts a highly irregular, wooded and generally undeveloped 233-mile shoreline. Boat-in to camp at one of several primitive campsites or explore the seemingly endless maze of islands, points, bays, floating bogs and channels.",
        "activities": [
            "Boating, Canoeing and Kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Snowmobiles and ATVs"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-634-7433",
            "email": "Roy.Kenast@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/chippewaflowage"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "First filled in 1923, the \"Big Chip\" was created as a means to augment downstream water flow for power generation and flood control. Dotted with approximately 200 undeveloped islands, it is Wisconsin's third-largest lake and boasts a highly irregular, wooded\u00a0and generally undeveloped 233-mile shoreline.",
            "The flowage offers a fishing experience generally found only on lakes farther north in Minnesota or Canada. Its seemingly endless maze of islands, points, bays, floating bogs and channels offers visitors numerous opportunities for exploration, discovery and a feeling of wildness within the northern forest landscape. Camping at one of the primitive island campsites is an opportunity not common in Wisconsin. Visitors rate the natural scenery, undeveloped \"wild\" character, \"uncrowded\" atmosphere and the fine fishing as the flowage's outstanding attributes.",
            "Boating, Canoeing and Kayaking",
            "Camping at the Chippewa Flowage",
            "Fishing at the Chippewa Flowage",
            "There are 2 miles of hiking and ski trails on DNR land on the north side of the flowage that can be accessed via a parking area adjacent to County Highway B between Moss Creek and Hay Creek.",
            "A new hiking trail has been developed on DNR land located east of the CC North Boat Landing off of County Highway CC. Themino-giizhigadTrail provides hiking access through a backland forest area and offers scenic views of the Chippewa Flowage. The parking area is located near the intersection of County Highway CC and Conner Lane.",
            "No motorized vehicles are allowed on either of these trails.",
            "Snowmobiles and ATVs"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Chippewa%20Flowage.jpg?itok=qnxVtxfG",
        "downloaded_image_path": "images/chippewaflowage.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/chippewaflowage/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/chippewaflowage/recreation"
    },
    {
        "id": "chipmoraine",
        "name": "Chippewa Moraine State Recreation Area",
        "coordinate": {
            "latitude": 45.220326,
            "longitude": -91.410939
        },
        "description": "Situated along the Ice Age National Scenic Trail, the Chippewa Moraine State Recreation Area offers unspoiled beauty with kettle lakes and many glacial features. Hiking, snowshoeing, backpack camping, fishing and bird watching are popular activities. The David R. Obey Ice Age Interpretive Center houses first-class glacial, cultural and natural history displays.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Chippewa Moraine State Recreation Area is open from 6 a.m. to 11 p.m. daily."
        },
        "contact": {
            "phone": "+1-715-967-2800",
            "email": "Dave.Hladilek@Wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/chipmoraine"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Chippewa Moraine segment of theIce Age National Scientific Reserveincludes 23 miles of well-marked trails. The trails are for foot travel only and motorized vehicles, horses or mountain bikes are not allowed in the Chippewa Moraine.",
            "North and South Shattuck, Jeanstow, Knickerbocker, Townline, Horseshoe and Plummer lakes offer boating, canoeing and kayaking opportunities.",
            "Camping at Chippewa Moraine State Recreation Area",
            "Fishing is available in the many lakes within the Chippewa Moraine.Fishing licensesapply.",
            "TheIce Age National Scenic Trailtravels through the Chippewa Moraine, connecting to the interpretive center and loop trails and the three primitive, outpost campsites. The entire trail is over 1,000 miles long and follows the edge of the last continental glacier in Wisconsin.",
            "The most popular trails at Chippewa Moraine are the three, self-guided trails that begin at the interpretive center. Hike or snowshoe the trails to see glacial kettle lakes, hummocks, ice-walled lake plains and wildlife.",
            "All pets must be on leash 8 feet or shorter and under control at all times near the visitor center.",
            "Hunting and trapping are permitted in the property duringlegal hunting and trapping seasons. No person may hunt or trap without first obtaining a property map identifying those areas closed to hunting and trapping within the property. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails.",
            "There are picnic tables outside the interpretive center.",
            "During winter, Chippewa Moraine's trails are open to snowshoeing and hiking.",
            "Ice fishing is available. Staff members\u00a0do not monitor ice conditions on the area lakes."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Chippewa%20Moraine_0.jpg?itok=gX4Mv5mu",
        "downloaded_image_path": "images/chipmoraine.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/chipmoraine/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/chipmoraine/recreation"
    },
    {
        "id": "chipriver",
        "name": "Chippewa River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 30-mile trail extends from Phoenix Park in downtown Eau Claire, at the confluence of the Eau Claire and Chippewa rivers and travels south along the Chippewa River through a wide variety of habitat including river bottoms, prairies, sandstone bluffs and wetlands. The trail joins the Red Cedar State Trail in the Dunnville Wildlife Area near the confluence of the Red Cedar and Chippewa Rivers and ends at the town of Durand.",
        "activities": [
            "Canoeing and kayaking",
            "Hunting",
            "Walking, bicycling and in-line skating",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-232-1242",
            "email": "Calvin.Kunkle@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/chipriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Chippewa River State Trail is part of the Chippewa Valley Trail System. When completed, the trail system will feature an 80-mile network of trail stretching from Cornell, through Chippewa Falls and Eau Claire to Durand and Menomonie. Other trails in the system include theRed CedarandOld Abestate trails.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The trail is ideal for a bike and paddle trip. Sections of this former rail corridor parallel the Chippewa River. You can paddle downstream and then bike back to your starting point or vice versa. In season, vendors in Eau Claire offer a peddle and paddle option along the trail.",
            "The Chippewa River State Trail corridor is open to hunting from State Highway 85 (at Caryville) west, approximately 12 miles, to the intersection with the Red Cedar State Trail during the Wisconsin state parks hunting time frame. For more information, please see:",
            "The trail is paved with asphalt from downtown Eau Claire to near Caryville (about 11 miles) to provide for in-line skating as well as biking. From there to its junction with the Red Cedar State Trail, the trail is surfaced with asphalt emulsion suitable for bicycling. The section of the Chippewa River trail in Pepin County (about 6.5 miles) between Durand and the Red Cedar junction is also paved with asphalt. Bridges are wood decked and railed.",
            "No trail passes are required for the Eau Claire city trail or the Pepin County/Durand section, but on the rest of the trail, each bicyclist and in-line skater age 16 and older must have astate trail pass. There is a self-registration box and information kiosk at Short Street in Eau Claire, the dividing line between city and state trails.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail from Porterville Road to Durand. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile webpages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing;\u00a0however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Chippewa%20River%20Trail%20Bridge.jpg?itok=zewj9XyN",
        "downloaded_image_path": "images/chipriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/chipriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/chipriver/recreation"
    },
    {
        "id": "copperculture",
        "name": "Copper Culture State Park",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Copper Culture State Park was the site of a prehistoric cemetery of the Old Copper Complex people who occupied the northern Midwest from ca. 4000 \u2013 2000 BC.\u00a0 Visitors can walk throughout the park and along the Oconto River, or tour the museum with artifacts end exhibits detailing the importance of the property. The42-acre property is just west of the city of Oconto. The park and museum is operated by the Oconto County Historical Society.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/copperculture"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Prairie%20Flowers.jpg?itok=ClioaotJ",
        "downloaded_image_path": "images/copperculture.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/copperculture/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/copperculture/recreation"
    },
    {
        "id": "copperfalls",
        "name": "Copper Falls State Park",
        "coordinate": {
            "latitude": 46.3526,
            "longitude": -90.6454
        },
        "description": "Ancient lava flows, deep gorges and spectacular waterfalls make Copper Falls State Park one of Wisconsin's most scenic parks. Log buildings built by the Civilian Conservation Corps in the 1930s add to the park's charm.\u00a0 The park offers camping, hiking, bicycling, picnicking, fishing and swimming opportunities in Loon Lake. The 1.7-mile Doughboy's Nature Trail, along the Bad River, is one of the best hikes in Wisconsin.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Copper Falls is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-274-5123",
            "email": "james.enigl@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/copperfalls"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Copper Falls State Park offers a variety of recreation opportunities year-round. View the links below to learn about some of the popular activities available at this park.",
            "Copper Falls State Park offers several accessible opportunities including an accessible rustic cabin, accessible campsites, an accessible fishing pier and a historic picnic shelter with a fireplace. The park also offers an adaptive tandem kayak available through its rental program. Call the property for more information on how to check out the adaptive kayak.",
            "The park also features universally accessible trails. For more information, visitAccessible Recreation.",
            "Biking at Copper Falls State Park",
            "Boating, canoeing and kayaking at Copper Falls State Park",
            "Camping at Copper Falls State Park",
            "Fishing at Copper Falls State Park",
            "Hiking at Copper Falls State Park",
            "Hunting and trapping at Copper Falls State Park",
            "Picnicking and shelters at Copper Falls State Park",
            "Swimming at Copper Falls State Park",
            "Winter activities at Copper Falls State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Copper%20Falls.jpg?itok=FZik32dO",
        "downloaded_image_path": "images/copperfalls.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/copperfalls/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/copperfalls/recreation"
    },
    {
        "id": "coulee",
        "name": "Coulee State Forest",
        "coordinate": {
            "latitude": 43.8478,
            "longitude": -91.042
        },
        "description": "The Coulee Experimental State Forest is a unique property in Wisconsin. This 3,000-acre forest is used for long-term forest watershed research studies to develop land management practices. The property is managed for forest production and wildlife habitat, and offers recreation opportunities for hunting, cross-country skiing, hiking and horseback riding.\u00a0Coulee accurately describes the area, as the forest has many deep gulches and ravines.",
        "activities": [
            "Hiking and wildlife viewing",
            "Horseback riding",
            "Hunting",
            "Cross-country skiing"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-785-9007",
            "email": "kevin.schilling@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/coulee"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Coulee Experimental State Forest is a unique property in Wisconsin. It was purchased by the state to provide land for long-term research studies to investigate forest watershed problems and develop forest and land management practices designed to reduce water problems and improve forest yields. The forest is also managed for forest production, wildlife habitat and recreation.",
            "The forest is characteristic of southwestern Wisconsin's Driftless Area, the unglaciated portions. The name Coulee comes from an old French word meaning ravine. The name accurately describes the area, as the forest has many of these deep gulches or ravines formed by water erosion.",
            "The 12-mile ski trail can be used for hiking when not snow-covered. The primitive forest roads are also open to several day-use activities such as hiking, snowshoeing, wildlife viewing and nature study.",
            "The forest provides some horseback riding opportunities. While no trails are designated for riding, all primitive roads are open to horses unless posted closed. Horseback riding is prohibited in Native Community Management Areas, on the ski trails when snow-covered, and on any trail in the spring when the ground is soft.",
            "The Coulee Experimental State Forest provides one of the few large, public upland forests in La Crosse County suitable for hunting a variety of species. Allhunting regulationsapply.",
            "Primary game species include deer, ruffed grouse, squirrels, turkeys and rabbits. The forest is within Deer Management Unit 59D and Wild Turkey Zone 1. The habitat consists primarily of upland timber and open fields.",
            "Cross-country skiing has been a popular recreational use on the property for many years. Local volunteers groom 12 miles of trail on the property."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/State%20Forests_Hero%20Image_Pine%20Trees.jpg?itok=geRZ3N_3",
        "downloaded_image_path": "images/coulee.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/coulee/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/coulee/recreation"
    },
    {
        "id": "councilgrounds",
        "name": "Council Grounds State Park",
        "coordinate": {
            "latitude": 45.1875,
            "longitude": -89.7342
        },
        "description": "Located along the beautiful Wisconsin River near the site of Native American encampments, Council Grounds State Park is a favorite for water enthusiasts. The park offers many recreational opportunities including family and group campsites, wooded trails, a beach area and an accessible fishing pier. A boat landing offers access to Lake Alexander and the Wisconsin River.",
        "activities": [
            "Accessibility",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-536-8773",
            "email": "Sarah.Gilbert@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/councilgrounds"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Council Grounds State Park offers a variety of recreation opportunities. View the links below to learn about some of the popular activities available at this park.",
            "Council Grounds State Park offers accessible opportunities including accessible campsites, an accessible fishing pier, and accessible picnic shelters. Also, the park has an adaptive kayak available through its rental program. Call the property for more information on the adaptive kayak.",
            "Boating, canoeing and kayaking at Council Grounds State Park",
            "Camping at Council Grounds State Park",
            "Fishing at Council Grounds State Park",
            "Hiking at Council Grounds State Park",
            "Hunting and trapping at Council Grounds State Park",
            "Picnicking and shelters at Council Grounds State Park",
            "Swimming at Council Grounds State Park",
            "Winter activities at Council Grounds State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Council%20Grounds.jpg?itok=4stZa4Ew",
        "downloaded_image_path": "images/councilgrounds.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/councilgrounds/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/councilgrounds/recreation"
    },
    {
        "id": "crossplains",
        "name": "Cross Plains State Park",
        "coordinate": {
            "latitude": 43.0821,
            "longitude": -89.6112
        },
        "description": "Cross Plains State Park is located just west of Madison near the village of Cross Plains. This area contains an outstanding collection of glacial landforms, a gorge carved by meltwater and expansive views of both driftless and glaciated terrain. The state park is part of the larger Glacial Passage Area, a partnership project of public lands cooperatively managed by the Wisconsin DNR, National Park Service, U.S. Fish and Wildlife Service, Dane County Land and Water Resources Department and the nonprofit Ice Age Trail Alliance.",
        "activities": [
            "Hiking",
            "Fishing",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The state park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-831-3005",
            "email": "michael.ring@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/crossplains"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Cross Plains State Park is part of the larger Glacial Passage Area, a partnership project of public lands cooperatively managed by the Wisconsin DNR, National Park Service (NPS), U.S. Fish and Wildlife Service, Dane County Land and Water Resources Department and the nonprofit Ice Age Trail Alliance (IATA).",
            "Parking is allowed in designated areas only at the Glacial Passage Area. The main parking lot is on the south side of Old Sauk Pass Road, about 100 yards east of the NPS office building",
            "All federal, state and county lands are open to the public for hiking and walking year-round. There are 11.5 miles of hiking trails at the Glacial Passage Area; 4 miles are north of Old Sauk Pass Rd. and 7.5 miles are south of the road. TheIce Age National Scenic Trailgoes through the Glacial Passage Area for 4.25 miles.\u00a0Pets must be on a physical leash 8 feet or shorter and attended to at all times.",
            "Fishing is available near the state park in Shoveler's Sink, part of\u00a0U.S. Fish and Wildlife Service land, andBlack Earth Creek State Fishery Area.",
            "Anglers ages 16 and over must have aWisconsin fishing license.",
            "Hunting and trapping are allowed in the open areas of the DNR land south and west of Old Sauk Pass Road during the Wisconsin state parks hunting and trapping time frame. Hunting and trapping are allowed on Dane County and U.S. Fish and Wildlife Service land. Hunting is prohibited on the DNR land north of Old Sauk Pass Road or National Park Service land.",
            "Trapping is prohibited in closed areas, as noted on the hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Backcountry skiing, snowshoeing and hiking are available in winter."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Cross%20Plains.jpg?itok=mYMThN5z",
        "downloaded_image_path": "images/crossplains.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/crossplains/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/crossplains/recreation"
    },
    {
        "id": "devilslake",
        "name": "Devil's Lake State Park",
        "coordinate": {
            "latitude": 43.428405,
            "longitude": -89.732272
        },
        "description": "Situated along the Ice Age National Scenic Trail, Devil's Lake State Park offers magnificent views from 500-foot quartzite bluffs overlooking a 360-acre lake. Visitors enjoy nearly 30 miles of hiking trails, lakeshore picnic areas, swimming beaches, paddling opportunities, and year-round naturalist programs.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Hiking",
            "Hunting",
            "Fishing",
            "Picnicking and shelters",
            "Rock climbing",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6:00 AM",
            "close": "11:00 PM",
            "text_description": "Open 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-608-356-8301",
            "email": "Richard.Hesed@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/devilslake"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Devils Doorway at Devils Lake State Park.Photo by Wisconsin DNR.",
            "Devil's Lake State Park offers a variety of outdoor recreation opportunities for visitors to enjoy year-round. View the links below to learn about some of the popular activities available at this park.",
            "Devil\u2019s Lake State Park offers several accessible opportunities including campsites, concession stands, picnic shelters and picnic sites. In addition, there is an accessible walking path along the North Shore Day Use Area bringing visitors closer to nature, and an accessible binocular viewer simulating nature\u2019s closeness to visitors.",
            "The park also boasts a beach access mat and beach wheelchair for navigating Northshore Beach. The beach wheelchair can be checked out at the Chateau.",
            "Biking at Devil's Lake State Park",
            "Canoeing, kayaking, and boating at Devil's Lake State Park",
            "Camping at Devil's Lake State Park",
            "Hiking at Devil's Lake State Park",
            "Hunting at Devil's Lake State Park",
            "Fishing at Devil's Lake State Park",
            "Picnic areas and shelters at Devil's Lake State Park",
            "Rock Climbing at Devil's Lake State Park",
            "Swimming at Devil's Lake State Park",
            "Winter Activities at Devil's Lake State Park(Cross-country skiing, snowshoeing, ice fishing)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Devils%20Lake%20Vista.jpg?itok=WWri8U3S",
        "downloaded_image_path": "images/devilslake.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/devilslake/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/devilslake/recreation"
    },
    {
        "id": "devilsriver",
        "name": "Devil's River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This scenic rail trail in Brown and Manitowoc counties travels through four small communities while passing by a wide variety of scenery, including farmlands, prairies, rivers and wetlands. The trail features two dramatic railroad trestles crossing the Devil's River and tributaries.",
        "activities": [
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-448-4466",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/devilsriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers. The trail is great for avid bird watchers and nature advocates. Many different bird and wildlife species can be seen along the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile webpages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Bike%20Tire%202.jpg?itok=VJJd_clE",
        "downloaded_image_path": "images/devilsriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/devilsriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/devilsriver/recreation"
    },
    {
        "id": "eisenbahn",
        "name": "Eisenbahn State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 25-mile, county-operated trail extends from the historic city of West Bend into the scenic countryside of eastern Wisconsin past the glacial landscape of the Kettle Moraine State Forest. Built on a former railroad corridor, the history of the trail is remembered in the title \"Eisenbahn,\" a German word for railroad. The trail passes through the communities of West Bend, Kewaskum and Campbellsport, ending in Eden at the village park. Washington and Fond du Lac counties maintain and manage the Eisenbahn State Trail.",
        "activities": [
            "Ice Age National Scenic Trail",
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-929-3135",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/eisenbahn"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "TheIce Age Trailwinds through the Kettle Moraine State Forest and crosses the Eisenbahn State Trail just south of Kewaskum near County Highway H.",
            "The fairly level grade and smooth limestone and asphalt surfaces make this 25-mile trail suitable for bicyclists, walkers and joggers. The five-mile section in West Bend has been paved with asphalt suitable for in-line skating.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "In Washington County, snowmobiles are permitted on the trail for about seven miles from Lighthouse Lane to the Washington/Fond du Lac county line. Snowmobiles are not permitted in West Bend. In Fond du Lac County, snowmobiles are permitted on the entire 12 miles of trail from the county line to Eden. To protect the trail from damage, the trail is closed to snowmobiling when snow conditions are poor. Operators must follow allWisconsin snowmobile laws.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile webpages [exit DNR]and telephone hotlines will provide the most current information.",
            "The Eisenbahn State Trail is open to winter ATV use between Dec. 15 and March 15 when theground is frozenand thetemperature is 28 degrees Fahrenheit (F) or lower. Winter ATV riding is allowed on all 12 miles of the trail in Fond du Lac County, and for 7 miles in Washington County from the county line to Lighthouse Lane, just north of West Bend.",
            "In Washington County, the section south of Lighthouse Lane is open in winter for cross-country skiing and snowshoeing as long as conditions permit. In Fond du Lac County, the trail is open to cross-country skiing and snowshoeing, however, the trail is not groomed and skiers and snowshoers must share the trail with snowmobiles.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Eisenbahn.png?itok=fvgVuXnH",
        "downloaded_image_path": "images/eisenbahn.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/eisenbahn/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/eisenbahn/recreation"
    },
    {
        "id": "elroysparta",
        "name": "Elroy-Sparta State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Considered the first rail-to-trail in the United States, the Elroy-Sparta State Trail remains one of the most popular trails in the country. With three rock tunnels and five small towns along its 32.5-mile route, the trail is a favorite Wisconsin bicycling destination. Traveling between Sparta and Elroy, the trail stretches through the communities of Norwalk, Wilton and Kendall, passing by wetlands, prairies, farmland and unglaciated areas.",
        "activities": [
            "Walking and bicycling",
            "Camping",
            "Hunting",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-337-4775",
            "email": "Jayne.Collins@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/elroysparta"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Three railroad tunnels\u00a0which are each over 140 years old highlight the Elroy-Sparta State Trail. The tunnels near Kendall and Wilton are each about 0.25 miles long. The tunnel between Norwalk and Sparta is 0.75 miles long. Flashlights and jackets are recommended in the tunnels. The tunnels are dark and cool, even on the brightest days and water from springs above\u00a0can trickle onto the trail. Bikers should walk bikes through the tunnels.The tunnels are closed annually from Nov. 1 to April 30.",
            "The Elroy-Sparta State Trail is directly linked to two other state trails. A bridge over Interstate 90 in Sparta connects theLa Crosse River State Trailto the Elroy-Sparta State Trail on the west end and the400 State Trailconnects to the trail at Elroy Commons on the east end. There is also a connection at Elroy Commons to the 13-mile Omaha County Trail. The Omaha trail travels between Elroy and Camp Douglas, nearMill Bluff State Park. The Omaha trail features a shorter rock tunnel that is about two blocks long.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Camping at Elroy-Sparta State Trail",
            "The Elroy-Sparta State Trail (and campground areas) are open to hunting during the Wisconsin state parks hunting time frame. For more information, please see:",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails. The tunnels are closed in winter and there are marked snowmobile routes to go around the tunnels.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report[exit DNR], andlocal club and county snowmobile webpages[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Elroy%20Sparta.jpg?itok=9KfHK7tL",
        "downloaded_image_path": "images/elroysparta.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/elroysparta/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/elroysparta/recreation"
    },
    {
        "id": "fenley",
        "name": "Fenley State Recreation Area",
        "coordinate": {
            "latitude": 42.571,
            "longitude": -90.651
        },
        "description": "Fenley State Recreation Area is a 287-acre property located in Grant County. The property consists of upland hardwoods, steep bluffs and overlooks the Mississippi River. It is two miles west of Kieler and about four miles north of the Highway 151 bridge to Dubuque, Iowa.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": "Fenley State Recreation Area is open year-round from sunrise to sunset daily. The property is closed to visitors after dark."
        },
        "contact": {
            "phone": "+1-608-725-5374",
            "email": "oliver.reistroffer@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/fenley"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The property is open for nature-based outdoor activities including hiking, hunting, trapping and winter snowshoeing and cross-country skiing."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Coulee%20Landscape.jpg?itok=gWY3F7pv",
        "downloaded_image_path": "images/fenley.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/fenley/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/fenley/recreation"
    },
    {
        "id": "fischercreek",
        "name": "Fischer Creek State Recreation Area",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Fischer Creek has about one mile of Lake Michigan shoreline, scenic wooded bluffs, grasslands and wetlands. It's a place for hiking, picnicking, wildlife viewing and relaxing on the beach. Much of the Lake Michigan shoreline consists of scenic bluffs that rise up to 40 feet above the water level. The property is operated by Manitowoc County.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/fischercreek"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Beach%20Scene.jpg?itok=MFWd2REM",
        "downloaded_image_path": "images/fischercreek.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/fischercreek/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/fischercreek/recreation"
    },
    {
        "id": "flambeauriver",
        "name": "Flambeau River State Forest",
        "coordinate": {
            "latitude": 45.769926,
            "longitude": -90.760837
        },
        "description": "The Flambeau River State Forest provides excellent backcountry opportunities, including wooded hiking trails, ATV and snowmobile trails, family campgrounds and rustic river sites, hunting and fishing. Canoeing is the most popular activity at the forest. Different portions of the river offer varying degrees of difficulty. The North Fork is ideal for the novice, while the South Fork is for the advanced paddler. Nine landings offer access to forest lakes and the Flambeau River.",
        "activities": [
            "ATV",
            "Biking",
            "Camping",
            "Canoeing and Kayaking",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnic areas and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-332-5271;ext=103",
            "email": "michael.watt@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/flambeauriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "ATVing in the Flambeau River State Forest",
            "Biking in the Flambeau River State Forest",
            "Camping in the Flambeau River State Forest",
            "Paddling in the Flambeau River State Forest",
            "Fishing in the Flambeau River State Forest",
            "Hiking in the Flambeau River State Forest",
            "There are no designated equine trails, but visitors are welcome to ride on old logging trails and gravel roads within the property. Horses are not allowed on any beach, posted or marked hiking trail, nature trail, picnic area or campground.",
            "Hunting in the Flambeau River State Forest",
            "Picnic areas and shelters in the Flambeau River State Forest",
            "Swimming in the Flambeau River State Forest",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/State%20Forests_Hero%20Image_Flambeau%20River.jpg?itok=87xb44dI",
        "downloaded_image_path": "images/flambeauriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/flambeauriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/flambeauriver/recreation"
    },
    {
        "id": "foxriver",
        "name": "Fox River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "From downtown Green Bay, the Fox River State Trail winds along the beautiful Fox River before extending for 25 miles along a former rail corridor. The Fox River corridor has a rich history, beginning with the Native Americans who used footpaths to travel between their villages located along the river. The early French explorers, missionaries and traders built their posts and missions along these trails",
        "activities": [
            "Horseback riding",
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "5 AM",
            "close": "9 PM",
            "text_description": "The trail is open from 5 a.m. to 9 p.m. year-round."
        },
        "contact": {
            "phone": "+1-920-448-4466",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/foxriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "From the north trailhead in Green Bay, about 11 miles of the trail is asphalt-paved to Lasee Road. From Lasee Road south into Calumet County, the trail is surfaced with limestone screenings. Along the way, the trail passes by numerous overlooks along the Fox River, many local parks and the Brown County Historical Society. A \"Health Trail\" along a portion of the Fox River Trail in Allouez provides trail users with an outdoor fitness challenge course.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The southern portion of the trail, south of Highway 96 in the Village of Greenleaf to Ott Road in Calumet County allows horseback riding on the gravel surface. Riders are asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "The level grade and smooth asphalt and limestone surfaces make this trail suitable for bicyclists, walkers and joggers. The 11 miles of asphalt trail in Brown County from the northern trailhead to Lasee Road are suitable for in-line skaters. Each bicyclist and skater age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Sections of the urban, paved portion of the trail are plowed with minimal winter maintenance. Walking, bicycling, skateboarding and in-line skating are allowed on the plowed portions, however, users should use caution and be alert for slippery conditions.",
            "The limestone and paved portions which remain unplowed are open to cross-country skiing and snowshoeing, however, the trail is not groomed and skiers and snowshoers must share the trail with snowmobiles.",
            "Snowmobiles are permitted on the limestone portion of the trail in Calumet County, and from Man Cal Road north to Fair Road in Brown County. No snowmobiles or motorized vehicles are allowed on the asphalt trail segment in Brown County. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Fox%20River.jpg?itok=bpmcWqGE",
        "downloaded_image_path": "images/foxriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/foxriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/foxriver/recreation"
    },
    {
        "id": "friendship",
        "name": "Friendship State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The four-mile Friendship State Trail passes through woods and scenic farmland in Calumet County while traveling between the communities of Forest Junction and Brillion. The trail connects to the Fox River State Trail in Forest Junction. In Brillion, parking is available at Horn Park. The trail is maintained and operated by Calumet County.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-439-1008",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/friendship"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The Friendship State Trail is open for horses. Riders are asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Walker.jpg?itok=DbUDGUfn",
        "downloaded_image_path": "images/friendship.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/friendship/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/friendship/recreation"
    },
    {
        "id": "gandydancernorth",
        "name": "Gandy Dancer State Trail Northern Segment",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The northern segment of the Gandy Dancer State Trail begins on the Minnesota side of the St. Croix River. The trail runs for 31 miles in Minnesota and then crosses back into Wisconsin for 15 miles where it connects with the Saunders State Trail just south of Superior. Built on a former railroad corridor, the trail is named for the work crews who laid the railroad tracks. The crews used tools made by the Gandy Tool Company of Chicago and were known to work by keeping their voices, feet and tools in harmony, leading them to be called \"Gandy Dancers.\"",
        "activities": [
            "All-terrain vehicles",
            "Off-Highway motorcycles",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-378-2219",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/gandydancernorth"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Gandy Dancer State Trail is divided into a northern segment and asouthern segmentand trail activities vary. The northern segment of the Gandy Dancer State Trail begins on the Minnesota side of the St. Croix River. The trail runs for 31 miles in Minnesota and then crosses back into Douglas County for 15 miles.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles (ATVs) are allowed year-round on the trail in Douglas County. Operators must follow allWisconsin ATV operation laws. All-terrain vehicles must display valid registration in both Wisconsin and Minnesota. Visitors from Minnesota will need a nonresident ATV trail pass to ride the Wisconsin portion. The trail also connects to the Saunders State Trail and other Douglas County ATV routes.",
            "All-terrain vehicles and other off-road vehicles are allowed on the Gandy Dancer State Trail corridor in Minnesota. For more information and a map of the Minnesota section, visit theGandy Dancer Trail (Minnesota) webpage\u00a0[exit DNR].",
            "All-terrain vehicles and other motorized vehicles are prohibited on the southern segment of the Gandy Dancer State Trail in Burnett and Polk counties.",
            "Off-highway motorcycles (OHMs) are allowed on the one\u00a0mile stretch from Foxboro Chaffey Road\u00a0in Douglas County south to the Minnesota-Wisconsin state line, from the official spring trail opening date until Oct. 31. Operators must follow allWisconsin OHM operation laws. Off-highway motorcycles must display valid registration in both Wisconsin and Minnesota. Visitors from Minnesota will need a nonresident OHM registration to ride the Wisconsin portion. The trail also connects to Douglas County\u2019s OHM trails and Minnesota\u2019s OHM trail system.",
            "Off-highway motorcycles and other off-road vehicles are allowed on the Gandy Dancer State Trail corridor in Minnesota. For more information and a map of the Minnesota section, visit theGandy Dancer Trail (Minnesota) webpage [exit DNR].",
            "Off-highway motorcycles and other motorized vehicles are prohibited from the north of Foxboro Chaffey Road\u00a0in Douglas County and are also prohibited on the southern segment of the Gandy Dancer State Trail in Burnett and Polk counties.",
            "The trail in Douglas County is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "The entire trail is open to walking and bicycling, though bicycling is not recommended on this segment of the trail. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0web pages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gandy%20Dancer%20North.jpg?itok=U-TvHNBR",
        "downloaded_image_path": "images/gandydancernorth.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/gandydancernorth/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/gandydancernorth/recreation"
    },
    {
        "id": "gandydancer",
        "name": "Gandy Dancer State Trail Southern Segment",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The southern segment of the Gandy Dancer State Trail travels for 47 miles in Wisconsin through the communities of Centuria, Milltown, Luck, Frederic, Siren and Webster, ending in the town of Danbury at the Minnesota border. Here a 520-foot trestle crosses the St. Croix National Scenic Riverway into Minnesota. Built on a former railroad corridor, the trail is named for the work crews who laid the railroad tracks. The crews used tools made by the Gandy Tool Company of Chicago and were known to work by keeping their voices, feet and tools in harmony, leading them to be called \"Gandy Dancers.\"",
        "activities": [
            "Ice Age National Scenic Trail",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-485-9272",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/gandydancer"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Gandy Dancer State Trail is divided into anorthern segmentand a southern segment and trail activities vary. The southern segment of the Gandy Dancer trail begins in St. Croix Falls, near Interstate State Park. The southern segment travels for 47 miles in Wisconsin through the communities of Centuria, Milltown, Luck, Frederic, Siren and Webster, ending in the town of Danbury at the Minnesota border. Here a 520-foot trestle crosses the St. Croix National Scenic Riverway into Minnesota.",
            "Winter ATV/UTV use is allowed on a segment of the trail in Burnett County. Details are under the winter activities listing farther down on this page.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The western terminus of theIce Age National Scenic Trailis at Interstate State Park on the St. Croix River. The Ice Age Trail follows the Gandy Dancer State Trail corridor for about 19 miles from St. Croix Falls past the town of Luck and then continues east towards Straight Lake State Park.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Astate trail passis required for bicycling. You can buy annual and daily passes from designated vendors along the trail or at the Polk and Burnett County tourism centers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0web pages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "Depending on the snow base and location, motorized recreational vehicles (snowmobiles, ATVs and UTVs) are allowed on the south segment of the trail under specific conditions. From Dec. 1 through March 31 you may operate your snowmobile, ATV and UTV on the Gandy Dancer Trail when there is a 4-inch groomed snow base and trails are officially open. If there is no snow, the trail is open for ATV and UTV use once the Frozen Ground Trail System is open. The trail also connects to numerous miles of county winter trails.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gandy%20Dancer%20South.jpg?itok=r3h1MvW3",
        "downloaded_image_path": "images/gandydancer.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/gandydancer/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/gandydancer/recreation"
    },
    {
        "id": "glacialdrumlin",
        "name": "Glacial Drumlin State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Running between Wisconsin's two largest urban areas, this trail stretches for 52 miles through farmlands and glacial topography. The trail travels through 10 small towns from Cottage Grove to Waukesha. The trail is on an abandoned rail corridor, except for a 1.5-mile section northeast of Jefferson, between State Highway 26 and County Highway Y, which uses public roads as the trail route.",
        "activities": [
            "Camping",
            "Hunting",
            "Ice Age National Scenic Trail",
            "Walking, bicycling and in-line skating",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-648-8774",
            "email": "jamesp.abbott@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/glacialdrumlin"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "Camping near the Glacial Drumlin State Trail",
            "The Glacial Drumlin State Trail corridor is open to hunting for the 3,600-foot, re-routed section of trail within the Lake Mills State Wildlife Area \u2013 Zeloski Marsh Unit in Lake Mills township in Jefferson County. Portions of the trail property in the town of Lake Mills and the town of Aztalan are more than 100 yards from the trail corridor. These portions are open to hunting and trapping during the Wisconsin state parks hunting time frame. For more information, please see:",
            "TheIce Age Trailfollows the Glacial Drumlin State Trail corridor for about two miles west of Wales. The Ice Age Trail continues north into Lapham Peak and south along local roads into the Southern Unit of the Kettle Moraine State Forest.",
            "The fairly level grade and smooth limestone and asphalt surfaces make this 52-mile trail suitable for bicyclists, walkers and joggers. The 13-mile section from Waukesha through the town of Dousman has been paved with asphalt suitable for in-line skating.",
            "Each bicyclist or skater age 16 or older needs a Wisconsinstate trail pass. Trail passes must be purchased before using the trail and should be carried with you while using the trail. Passes are available from private vendors along the trail, at self-registration stations on the trail, at the Lake Mills Trail Headquarters and at the Lapham Peak Unit, Kettle Moraine State Forest Office near Delafield.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the 39-mile, limestone section of the trail but not the paved asphalt section between Waukesha and Dousman. West of Mickle Road, a snowmobile route parallels the paved section of trail to Dousman. Snowmobiling is prohibited east of Mickle Road in Waukesha County. Operators must follow allWisconsin snowmobile laws. The Glacial Drumlin State Trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Glacial%20Drumlin.png?itok=FpZa7R6n",
        "downloaded_image_path": "images/glacialdrumlin.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/glacialdrumlin/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/glacialdrumlin/recreation"
    },
    {
        "id": "govdodge",
        "name": "Governor Dodge State Park",
        "coordinate": {
            "latitude": 43.0184,
            "longitude": -90.1395
        },
        "description": "Governor Dodge State Park is one of the state's largest parks, with over 5,000 acres of steep hills, bluffs and deep valleys plus two lakes and a waterfall. Located in Wisconsin's scenic driftless area, Governor Dodge offers camping, picnicking, hiking, canoeing, biking, hunting, fishing, off-road biking, cross-country skiing and horseback riding opportunities.",
        "activities": [
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Governor Dodge State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-935-2315",
            "email": "robert.deroeckiii@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/govdodge"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Governor Dodge State Parks offers a variety of outdoor recreation opportunities for visitors to enjoy year-round. Click the links below to learn more about some of the popular activities available at this park.",
            "Bicycling at Governor Dodge State Park",
            "Boating, canoeing and kayaking at Governor Dodge State Park",
            "Camping at Governor Dodge State Park",
            "Fishing at Governor Dodge State Park",
            "Hiking at Governor Dodge State Park",
            "Horseback Riding at Governor Dodge State Park",
            "Hunting and trapping at Governor Dodge State Park",
            "Picnic\u00a0areas and shelters at Governor Dodge State Park",
            "Swimming at Governor Dodge State Park",
            "Winter activities at Governor Dodge State Park(cross-country skiing, ice fishing, winter hiking and snowshoeing, sledding, snowmobiling)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gov%20Dodge.png?itok=AFpK_meF",
        "downloaded_image_path": "images/govdodge.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/govdodge/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/govdodge/recreation"
    },
    {
        "id": "govknowles",
        "name": "Governor Knowles State Forest",
        "coordinate": {
            "latitude": 45.7733,
            "longitude": -92.7763
        },
        "description": "This 55-mile-long forest in northwestern Wisconsin parallels the St. Croix National Scenic Riverway and offers camping, paddling, hiking, horseback riding, biking, hunting, fishing, cross-country skiing and snowmobiling opportunities.Three campgrounds (St. Croix, Trade River Equestrian and Sioux Portage Group) and nine primitive backpack campsitesare found within 32,500 wooded acres.",
        "activities": [
            "Biking",
            "Camping",
            "Canoeing, kayaking and boating",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-463-2898",
            "email": "Brandi.Buchholz@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/govknowles"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Biking",
            "Camping",
            "Canoeing, kayaking and boating",
            "Hiking",
            "Horseback riding",
            "Hunters will find whitetail deer, turkey, black bear, squirrel, ruffed grouse and woodcock throughout the forest. It also encompasses several trout streams, of which, the Trade River and Wolf Creek are most popular for anglers. Governor Knowles State Forest is the gateway to a portion of the St. Croix River \u2014 known for small mouth bass, walleye, catfish, musky and sturgeon.",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/State%20Forests_Hero%20Image_Ferns%20and%20Forest.jpg?itok=CwE0nhFi",
        "downloaded_image_path": "images/govknowles.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/govknowles/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/govknowles/recreation"
    },
    {
        "id": "govnelson",
        "name": "Governor Nelson State Park",
        "coordinate": {
            "latitude": 43.1374,
            "longitude": -89.4399
        },
        "description": "Located on 10,000-acre Lake Mendota, recreation and nature mingle within sight of the State Capitol. Governor Nelson is a day use park offering a sand beach, boat launch, fish cleaning facility, picnic areas and playground equipment, prairie restorations and over 8 miles of trails. Native American effigy mounds can be seen on the Woodland Trail.",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Canoeing, kayaking and boating",
            "Fishing",
            "Hiking",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Governor Nelson State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-831-3005",
            "email": "michael.ring@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/govnelson"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Governor Nelson State Park provides a variety of recreation opportunities. View the links below to learn about some of the popular activities available at this park.",
            "Governor Nelson State Park offers an accessible fishing pier and an accessible picnic shelter near the sand beach. Several of the trails are spacious, natural surfaces. The adaptive cross-country sit skis are available as the winter weather permits. Please contact the visitor center for more information.",
            "TheNorth Mendota Trailis a 12-foot wide, paved shared-use trail that connects\u00a0the village of Waunakee to Governor Nelson State Park. The North Mendota Trail travels for about 0.75 miles through the state park where it connects to existing\u00a0segments on both sides of County Highway M. Future phases of the North Mendota Trail will also link Governor Nelson State Park to Mendota County Park and the city of Middleton.",
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Picnicking and shelters",
            "Swimming",
            "Winter Activities",
            "Please note, that there isno hunting and trapping allowed in the park. For more information, please seeHunting and Trapping in Wisconsin State Parks."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gov%20Nelson.jpg?itok=qNRC24_q",
        "downloaded_image_path": "images/govnelson.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/govnelson/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/govnelson/recreation"
    },
    {
        "id": "govthompson",
        "name": "Governor Thompson State Park",
        "coordinate": {
            "latitude": 45.3233,
            "longitude": -88.2218
        },
        "description": "With more than 2,800 acres of woods, a family campground, picnic and beach area on Woods Lake, hiking and skiing trails, and 6 miles of shoreline on Caldron Falls Flowage, visitors will find an atmosphere perfect for relaxation and recreation. The park is adjacent to the Peshtigo River, a popular free-flowing river for fly-fishing and canoeing.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Governor Thompson State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-757-3979",
            "email": "Kyle.Marinoff@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/govthompson"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Governor Thompson State Park provides a variety of recreation opportunities. Click the links below to learn more about some of the popular activities at this park.",
            "Boating, canoeing and kayaking at Governor Thompson State Park",
            "Camping at Governor Thompson State Park",
            "Fishing at Governor Thompson State Park",
            "Hiking at Governor Thompson State Park",
            "Hunting and trapping at Governor Thompson State Park",
            "Picnic areas at Governor Thompson State Park",
            "Swimming at Governor Thompson State Park",
            "Winter activities at Governor Thompson State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gov%20Thompson.jpg?itok=tOG2PuxM",
        "downloaded_image_path": "images/govthompson.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/govthompson/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/govthompson/recreation"
    },
    {
        "id": "greatriver",
        "name": "Great River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 24-mile trail travels through prairies and backwaters of the upper Mississippi River valley. Built on an abandoned Chicago-Northwestern railroad line, the trail has a finely crushed limestone surface suitable for walking and bicycling for much of the year and snowmobiling, cross-country skiing and snowshoeing in winter. The Great River trail is within a larger area called the Mississippi Flyway and passes through two National Wildlife Refuges. The Great River State Trail links to the La Crosse River State Trail via a short road route in the city of La Crosse.",
        "activities": [
            "Camping",
            "Canoeing and kayaking",
            "Hunting",
            "Walking and bicycling",
            "Winter activities",
            "Part of the Mississippi River Trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-534-6409",
            "email": "Lois.Larson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/greatriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "Near Trempealeau, there is direct access from the trail toPerrot State Parkwhere camping is available. In addition to camping, the park offers hiking trails, canoeing and fishing opportunities and a nature center. Perrot State Park was a natural landmark for the Hopewell Native American culture, which built many mounds along the Mississippi River Valley.",
            "Lytles Landing is a primitive canoe launch area along the Black River. Parking, water and vault toilets are available. The Great River State Trail is ideal for a bike and paddle trip. Sections of this former rail corridor parallel the Mississippi River. You can paddle downstream and then bike back to your starting point or vice versa.",
            "The Great River State Trail corridor is open to hunting from County Highway ZN in La Crosse County northwest, approximately 10 miles, to the village of Trempealeau limits in Trempealeau County. Then, from approximately two miles past the northwest limits of the Village of Trempealeau, at Lehman Road northwest, approximately 3 miles, to the Trempealeau National Wildlife Refuge access road at the junction of West Prairie Road, for a total of approximately 13 miles. These sections are open during the Wisconsin state parks hunting time frame. For more information, please see:",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Astate trail passis required for bikers 16 years of age and older.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report, andlocal club and county snowmobile\u00a0webpagesand telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "The Great River State Trail is part of the Mississippi River Trail (MRT), a designated bicycle route that travels from the headwaters of the Mississippi River at Lake Itasca, Minnesota to the Delta at the Gulf of Mexico in Louisiana. It is a 3000-mile system of bicycle-friendly roads and multi-use pathways. The MRT is a \"string of pearls\" that connects 10 states, the cities of Minneapolis, St. Louis, Memphis and New Orleans and hundreds of smaller towns along the way. The MRT is a unique way to experience the Mississippi River\u2019s natural wonders, transportation system, recreational facilities and cultural heritage. Most of the MRT in Wisconsin is routed on Highway 35, the Great River Road."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_GreatRiverB.png?itok=c08wW-LT",
        "downloaded_image_path": "images/greatriver.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/greatriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/greatriver/recreation"
    },
    {
        "id": "greatsauk",
        "name": "Great Sauk State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Great Sauk State Trail parallels the Wisconsin River through the communities of Prairie du Sac and Sauk City, extending through the heart of the Sauk Prairie State Recreation Area. Built on a former rail corridor, this 10.5-mile trail is paved with asphalt. Visitors can enjoy beautiful views as they pass through two historic towns nestled above the Wisconsin River. Parking and accommodations are available in each community.",
        "activities": [
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-355-4800",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/greatsauk"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and paved asphalt surface make this trail suitable for bicyclists, in-line skaters, walkers and joggers. Each bicyclist or skater age 16 or older needs a Wisconsinstate trail pass.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "In winter the trail is open for hiking and snowshoeing.",
            "During the winter eagle season (December to February), the segment of the trail from Lincoln Avenue\u00a0to the access path north of Prairie du Sac may be closed to reduce disturbance to wintering eagles. Gates and re-route maps will be put up when this section is closed and trail users are encouraged to use Water Street or sidewalks to connect to the open segments.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Great%20Sauk.jpg?itok=qdQYN_ds",
        "downloaded_image_path": "images/greatsauk.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/greatsauk/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/greatsauk/recreation"
    },
    {
        "id": "greencircle",
        "name": "Green Circle State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Encircling the city of Stevens Point, this trail meanders along the scenic Wisconsin and Plover rivers, recalling the history of the lumber-making and pioneer settlements of the area, while connecting secluded natural and wildlife areas, the Schmeeckle Reserve and many city parks. The trail, including all spurs, is 31 miles long and features river scenery, forests, wetlands, prairies, boardwalks and quiet neighborhoods. A 4-mile spur on Hoover Road connects to the Tomorrow River State Trail in Plover.",
        "activities": [
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-346-4992",
            "email": "Schmeeckle@uwsp.edu",
            "website": "https://dnr.wisconsin.gov/topic/parks/greencircle"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Green Circle is managed locally by the Green Circle Board of the Community Foundation of Portage County and is a cooperative effort among communities, private landowners, individuals and local governments. It is thought to be the only trail system in the country to circle an entire community.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "Walking, running and jogging are allowed on all sections of the Green Circle State Trail. The surface of the trail varies by section and can be crushed stone, asphalt, wood chips, boardwalks, sidewalks or roadways.",
            "Bicycling is allowed on most sections of the trail, however, there are some sections and spurs of the main loop posted as closed to bicycles. There are two walking trail segments (Whiting Park and Paper Mill trails) that are closed to bicycles. The main trail bypasses these segments making a complete circle. The section of trail in the Schmeeckle Reserve is surfaced with wood chips and can be difficult for riding. An alternative route around the reserve is available along North Point Drive. The roadways and some other sections of the trail are paved with asphalt suitable for in-line skating.",
            "Pets are allowed on most segments of the trail, but are not allowed in the Schmeeckle Reserve. An alternative route around the reserve is available along North Point Drive. Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Some sections of the trail are open to cross-country skiing and snowshoeing. The Plover River segment is groomed for classical (stride) skiing. Five loops totaling 6.2 miles are groomed. No racing or ski-skating are allowed. Other parts of the Green Circle can be used for snowshoeing. Hiking, pets and snowshoeing are not allowed on the groomed portions of the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Green%20Circle.png?itok=4bEXPvUI",
        "downloaded_image_path": "images/greencircle.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/greencircle/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/greencircle/recreation"
    },
    {
        "id": "hankaaron",
        "name": "Hank Aaron State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Named in honor of baseball legend Hank Aaron, this trail provides a continuous connection between American Family Field, home of the Milwaukee Brewers, and the Lake Michigan lakefront. The Hank Aaron State Trail\u00a0also links to\u00a0famous Milwaukee landmarks such as the Ward Theatre on the grounds of the Historic Soldiers Home, the Wisconsin State Fair Park and\u00a0the Pettit National Ice Center.",
        "activities": [
            "Walking, bicycling and in-line skating",
            "Winter recreation",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-414-274-4281",
            "email": "Angela.Vickio@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/hankaaron"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail extends to about 123rd St. and Bluemound Rd. in Brookfield, connecting to the Milwaukee County Oak Leaf Trail System and ending at the Waukesha County line. A ramp connects the trail to Hwy. 100 and Bluemound Rd. for access to the Milwaukee County Zoo.",
            "The trail west of American Family Field travels along a former rail corridor. This segment is paved with asphalt to 123rd St. and Bluemound Rd.",
            "The trail east of American Family Field runs along the Menomonee River on both off-street and on-street segments and connects to the Marquette Soccer Fields,Lakeshore State Park, Discovery World, the Milwaukee Art Museum and theOak Leaf Trail, a system of paved trails and parkways traversing about 100 miles through Milwaukee County.",
            "The development of the Hank Aaron State Trail has contributed to the restoration, protection and enhancement of the Menomonee River Valley. The preservation of this important environmental corridor aids in the restoration of fish and wildlife habitat and the rehabilitation of urban waterways.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers, joggers and in-line skaters. Some sections of the trail are on-street, so remember to use caution.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "The vast majority of the Hank Aaron State Trail is accessible for people with disabilities. The 0.5-mile segment of trail adjacent to the Milwaukee Brewers parking lot has accessible sidewalks, allowing easy access from the parking lot to the trail. The trail gradually goes from the parking lot to the Menomonee River. Several bump-out areas near the Marquette soccer fields offer fishing access for people with disabilities.",
            "During winter, the Hank Aaron State Trail section west of 37th Street, the Brewers Stadium Spur by American Family Field and theThree Bridges Park Spurare not maintained/plowed but are not closed. These segments are open to all non-motorized use including hiking, snowshoeing and cross-country skiing (ungroomed).",
            "The city of Milwaukee and adjacent property owners generally clear the trail east from Selig Drive, making the trail more accessible for winter biking. Please remember, the trail may be snow and ice-covered, muddy and slippery during winter.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Hank%20Aaron.png?itok=9zS0tZRm",
        "downloaded_image_path": "images/hankaaron.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/hankaaron/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/hankaaron/recreation"
    },
    {
        "id": "harringtonbeach",
        "name": "Harrington Beach State Park",
        "coordinate": {
            "latitude": 43.4974,
            "longitude": -87.8109
        },
        "description": "Harrington Beach State Park has more than a mile of beach along Lake Michigan. This 715-acre park also features a white cedar and hardwood swamp, old field grasslands with restored wetland ponds and a scenic limestone quarry lake. Camp, sunbathe, picnic, hike, bird watch, fish or practice astronomy at one of the observatory's monthly public viewings.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Harrington Beach State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-262-285-3015",
            "email": "andris.schultz@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/harringtonbeach"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Harrington Beach State Park provides a variety of recreation opportunities. View the links below to learn more about some of the popular activities available at this park.",
            "Harrington Beach State Park offers several accessible opportunities including an accessible cabin, an accessible campsite, accessible picnic shelters, a universal playground, and a paved path to the beach. Also, the park has a beach wheelchair available that can be checked out at no charge. Call the property for more information on the beach wheelchair.",
            "This property features a universally accessible trail. For more information, visitAccessible Recreation.",
            "Biking at Harrington Beach State Park",
            "Boating, canoeing and kayaking at Harrington Beach State Park",
            "Camping at Harrington Beach State Park",
            "Fishing at Harrington Beach State Park",
            "Hiking at Harrington Beach State Park",
            "Horseback riding at Harrington Beach State Park",
            "Hunting and trapping at Harrington Beach State Park",
            "Picnicking and shelters at Harrington Beach State Park",
            "Swimming at Harrington Beach State Park",
            "Winter activities at Harrington Beach State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Harrington%20Beach.png?itok=P8-G-aW6",
        "downloaded_image_path": "images/harringtonbeach.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/harringtonbeach/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/harringtonbeach/recreation"
    },
    {
        "id": "hartmancreek",
        "name": "Hartman Creek State Park",
        "coordinate": {
            "latitude": 44.3293,
            "longitude": -89.2139
        },
        "description": "Located on the beautiful Chain O' Lakes, Hartman Creek State Park is a quiet and friendly, natural gem and a popular destination in central Wisconsin. The park offers camping, boating, swimming, horseback riding and mountain biking opportunities, the historic Hellestad House log cabin, and four picnic areas including Whispering Pines along crystal-clear Marl Lake.",
        "activities": [
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-258-2372",
            "email": "Jarrod.Kehring@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/hartmancreek"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Hartman Creek State Park provides a number of recreational opportunities for all to enjoy. Click the links below to learn more about some of the popular activities available at this park.",
            "Biking at Hartman Creek State Park",
            "Boating, canoeing and kayaking at Hartman Creek State Park",
            "Camping at Hartman Creek State Park",
            "Fishing at Hartman Creek State Park",
            "Hiking at Hartman Creek State Park",
            "Horseback riding at Hartman Creek State Park",
            "Hunting and trapping at Hartman Creek State Park",
            "Picnicking and shelters at Hartman Creek State Park",
            "Swimming at Hartman Creek State Park",
            "Winter activities at Hartman Creek State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Hartman%20Creek.jpg?itok=yhjXpDpl",
        "downloaded_image_path": "images/hartmancreek.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/hartmancreek/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/hartmancreek/recreation"
    },
    {
        "id": "havenwoods",
        "name": "Havenwoods State Forest",
        "coordinate": {
            "latitude": 43.1288,
            "longitude": -87.9697
        },
        "description": "Havenwoods State Forest is Wisconsin\u2019s only urban state forest, featuring 237 acres of grasslands, woods and wetlands in the city of Milwaukee. Hike, run, bike and watch wildlife on over 6 miles of trails. Explore the nature center, the forest's ponds, stroll over the 120-foot bridge or find a bench to sit and relax outdoors.",
        "activities": [
            "Bicycling",
            "Hiking",
            "Picnic areas",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "8 PM",
            "text_description": "The forest is open year-round from 6 a.m. to 8 p.m."
        },
        "contact": {
            "phone": "+1-414-527-0232",
            "email": "DNRHavenwoods@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/havenwoods"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Havenwoods State Forest offers a variety of outdoor recreation opportunities in the city of Milwaukee.",
            "The limestone trails and asphalt roads (about 2 miles) are open to bicycles. Please use caution as these trails are shared with hikers.",
            "More than 6 miles of trails invite hikers, runners and joggers to explore the property's woods, wetlands and grasslands. With several different trail segments, visitors can choose a hike of varying lengths.\u00a0Thetrail map [PDF], marked with the lengths of trail segments, allows you to create a custom-length trail for walking, jogging or running. This map also shows\u00a0where you can and cannot walk your dog.",
            "Several geocaches and waymarks can be found at Havenwoods State Forest. Complete the \"Trek Through Time,\" a geocaching adventure, and earn a collectible wooden geotoken.",
            "Where permitted, pets are allowed in the forest on a leash 8 feet or shorter. To ensure everyone\u2019s enjoyment, visitors are required to clean up any waste left by their pets. Pets are prohibited in areas shown shaded on the forest map.",
            "Walk or run the outer trail all the way around the forest to cover about 2.7 miles.",
            "There are many trails at Havenwoods that are open to pets. Pets must be on a leash 8 feet or shorter. This trail is one possibility that is about 2.5 miles long. Pets are prohibited in areas shown shaded on the forest map. Contact the forest for more information on pet areas.",
            "This 1.3-mile trail tells the history of Havenwoods and the efforts to restore the land. Stop by the nature center to pick up a trail brochure. Pets are not permitted on this nature trail.",
            "Discover history, spend some time outside and challenge yourself with a good puzzle at Havenwoods. The Trek through Time Trail\u00a0is a geocaching adventure at the forest. Stop by the nature center to pick up a trail booklet.",
            "Visitors can picnic anywhere in the forest. There are picnic tables in the Urban Arboretum and next to the parking lot. No fires or grills are allowed. The Wisconsin State Park System has acarry in/carry out policy. Please do not leave garbage and recyclables at the forest.",
            "Cross-country skiers are welcome at the forest. Trails are not groomed. The terrain at Havenwoods is mostly flat, providing a good place for beginners.",
            "Snowshoers are welcome throughout the forest. As a courtesy to skiers, snowshoers are asked to stay off of established ski tracks. Snowshoes can be borrowed when the nature center is open."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero-Image_Havenwoods.jpg?itok=fDPbu8dH",
        "downloaded_image_path": "images/havenwoods.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/havenwoods/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/havenwoods/recreation"
    },
    {
        "id": "heritagehill",
        "name": "Heritage Hill State Park",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Experience \"living history\" at Heritage Hill State Park, a unique outdoor museum in Green Bay. The park features 24 structures from Wisconsin's past \u2014 the fur trade in 1762, Fort Howard in 1836, small towns in 1871 and ethnic farms in 1905.The park and museum is operated by theHeritage Hill Corporation. A per-person admission fee to the park is charged. Wisconsin state park vehicle admission stickers are not sold at Heritage Hill.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/heritagehill"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Heritage%20Hill.png?itok=pZeA3afK",
        "downloaded_image_path": "images/heritagehill.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/heritagehill/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/heritagehill/recreation"
    },
    {
        "id": "highcliff",
        "name": "High Cliff State Park",
        "coordinate": {
            "latitude": 44.167,
            "longitude": -88.2911
        },
        "description": "High Cliff State Park is the only state-owned recreational area on Lake Winnebago, Wisconsin's largest lake. The park gets its name from the limestone cliff of the Niagara Escarpment, which parallels the eastern shore of Lake Winnebago. The magnificent 12-foot statue of Winnebago Tribe Chief Red Bird, standing high on a huge granite rock, overlooks the lake and is a popular destination in the park.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "10 AM",
            "close": "4 PM",
            "text_description": "The park is open from 10 a.m. to 4 p.m. Tuesday through Sunday (closed Mondays and holidays)."
        },
        "contact": {
            "phone": "+1-920-989-1106",
            "email": "jay.vosters@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/highcliff"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "High Cliff State Park provides recreation opportunities for adults and children alike year-round. View the links below to learn more about popular activities in the park.",
            "High Cliff State Park offers several accessible opportunities including an accessible cabin, accessible campsites, an accessible fishing platform, a universal playground, accessible picnic shelters, and a boat launch with an accessible boarding pier.",
            "This property features universally accessible trails. For more information, visitAccessible Recreation.",
            "Biking at High Cliff State Park",
            "Boating, canoeing and kayaking at High Cliff State Park",
            "Camping at High Cliff State Park",
            "Fishing at High Cliff State Park",
            "Hiking at High Cliff State Park",
            "Horseback riding at High Cliff State Park",
            "Hunting and trapping at High Cliff State Park",
            "Picnic areas and playgrounds at High Cliff State Park",
            "Swimming at High Cliff State Park",
            "Winter activities at High Cliff State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_High%20Cliff.jpg?itok=ylsN4_yl",
        "downloaded_image_path": "images/highcliff.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/highcliff/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/highcliff/recreation"
    },
    {
        "id": "hillsboro",
        "name": "Hillsboro State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 4-mile, county operated trail connects the communities of Hillsboro and Union Center, while crossing wooded and agricultural lands, winding streams and the Baraboo River. The Hillsboro State Trail connects to the 400 State Trail in Union Center. The 400 State Trail connects to the Elroy-Sparta State Trail in Elroy.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-637-5485",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/hillsboro"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The fairly level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Biker%20in%20Fall.jpg?itok=rJY30mVR",
        "downloaded_image_path": "images/hillsboro.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/hillsboro/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/hillsboro/recreation"
    },
    {
        "id": "hoffmanhills",
        "name": "Hoffman Hills State Recreation Area",
        "coordinate": {
            "latitude": 44.944,
            "longitude": -91.7831
        },
        "description": "Hoffman Hills State Recreation Area offers 700 acres of preserved and restored wooded hills, wetlands and prairie traversed with hiking and cross-country ski trails. A 60-foot-high observation tower crowns one of the highest points in Dunn County, offering spectacular views of the surrounding countryside, especially in autumn.",
        "activities": [
            "Hiking",
            "Hunting",
            "Picnic areas",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Hoffman Hills is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-232-1242",
            "email": "Calvin.Kunkle@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/hoffmanhills"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "There are more than 9 miles of hiking trails at Hoffman Hills, including two miles of interpretive nature trails. Hike through a 15-acre tall grass prairie restoration or view wildlife along a one-mile wetland trail that's accessible for people with disabilities. Bicycles, motor vehicles and horses are not allowed on the trails.Trail map.",
            "A 60-foot-high observation tower offers spectacular views of the surrounding countryside.",
            "Pets are not allowed at Hoffman Hills.",
            "Hoffman Hills is open for the regular nine-day gun deer season in November. The area is not open for any other hunting or trapping seasons.",
            "There are three picnic areas in Hoffman Hills.",
            "There are 9 miles of ski trails that vary in difficulty and are groomed for both stride and skate styles of skiing. Sleds, snowboards, snowshoes and hikers are not allowed on groomed ski trails. Skiers age 16 years and older must have astate trail pass.",
            "There's an off-trail snowshoe area in the western part of the property."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Hoffman%20Hills.png?itok=PstDB2Fs",
        "downloaded_image_path": "images/hoffmanhills.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/hoffmanhills/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/hoffmanhills/recreation"
    },
    {
        "id": "interstate",
        "name": "Interstate Park",
        "coordinate": {
            "latitude": 45.3954,
            "longitude": -92.6405
        },
        "description": "Interstate is Wisconsin's oldest state park, established in 1900. Located along the picturesque St. Croix National Scenic Riverway, the park provides scenic views of the river and the steep-sided gorge known as the Dalles of the St. Croix. The Ice Age Interpretive Center features a film, photographs, murals and information about Wisconsin's glacial history.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Rock climbing",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Interstate Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-483-3747",
            "email": "Matthew.Densow@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/interstate"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Interstate Park provides a variety of recreation opportunities for all visitors. Click the links below to learn more about some of the popular activities available at this park.",
            "Boating, canoeing and kayaking at Interstate Park",
            "Camping at Interstate Park",
            "Fishing at Interstate Park",
            "Hiking at Interstate Park",
            "Hunting and trapping at Interstate Park",
            "Picnicking at shelters at Interstate Park",
            "Rock climbing at Interstate Park",
            "Swimming at Interstate Park",
            "Winter activities at Interstate Park",
            "There is no bicycling in the park, but in nearby St. Croix Falls, theGandy Dancer State Trailis open for bicycling."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Interstate.jpg?itok=9hPuVM-o",
        "downloaded_image_path": "images/interstate.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/interstate/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/interstate/recreation"
    },
    {
        "id": "kinnickinnic",
        "name": "Kinnickinnic State Park",
        "coordinate": {
            "latitude": 44.8373,
            "longitude": -92.7353
        },
        "description": "Located where the St. Croix and Kinnickinnic rivers meet, Kinnickinnic State Park offers experiences in two types of worlds. Enjoy the quiet and solitude of the Kinnickinnic River Valley and the many popular water-based recreational pursuits on the St. Croix River. A large sandy delta is found at the junction of the rivers. Visitors can also explore 10 miles of hiking trails.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping - Boat mooring",
            "Fishing",
            "Hiking",
            "Hunting",
            "Mountain Biking",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-425-1129",
            "email": "Aaron.Mason@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/kinnickinnic"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Kinnickinnic State Park provides a variety of recreation opportunities. Click the links below to learn about some of the popular activities at this park.",
            "Boats, canoes and kayaks",
            "Boat camping is a popular activity on the Kinnickinnic Delta. Boaters wishing to moor overnight on the beach or water are required to register and pay a mooring fee.",
            "If you are planning on staying overnight, you will need to provide your own toilet facility and sleep aboard your boat. Generator use is prohibited in all mooring areas at Kinnickinnic State Park",
            "Reservea mooring permit online or by calling 1-888-947-2757.",
            "Fishing at Kinnickinnic State Park",
            "Hiking at Kinnickinnic State Park",
            "Hunting and trapping at Kinnickinnic State Park",
            "Mountain Biking at Kinnickinnic State Park",
            "Picnicking at Kinnickinnic State Park",
            "Swimming at Kinnickinnic State Park",
            "Winter activities at Kinnickinnic State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Kinnickinnic%20Vista.jpg?itok=DO-bcOS5",
        "downloaded_image_path": "images/kinnickinnic.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/kinnickinnic/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/kinnickinnic/recreation"
    },
    {
        "id": "kohlerandrae",
        "name": "Kohler-Andrae State Park",
        "coordinate": {
            "latitude": 43.6722,
            "longitude": -87.7179
        },
        "description": "Named for John Michael Kohler and Terry Andrae state parks,Kohler-Andrae is the home of majestic sand dunes, miles of golden beach, shimmering blue Lake Michigan water, whispering pines, an abundance of wildlife and recreational activities. Kohler-Andrae State Park is one of the last natural preserves along the Lake Michigan shore and is open for everyone to explore and enjoy.",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-920-451-4080",
            "email": "Molly.Mckay@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/kohlerandrae"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Kohler-Andrae State Park has recreational opportunities for everyone. View the links below to learn more about the popular activities at this park.",
            "Kohler-Andrae State Park offers several accessible opportunities including an accessible cabin, accessible campsites, accessible picnic shelters, an accessible picnic site at the beach, an accessible fishing pier, and a nature center. Also, the park has two beach wheelchairs available that can be checked out at no charge. Call the property for more information on the beach wheelchairs.",
            "This property features universally accessible trails. For more information, visitAccessible Recreation.",
            "Bicycling at Kohler-Andrae State Park",
            "Boating, canoeing and kayaking at Kohler-Andrae State Park",
            "Camping at Kohler-Andrae State Park",
            "Fishing at Kohler-Andrae State Park",
            "Hiking at Kohler-Andrae State Park",
            "Horseback Riding at Kohler-Andrae State Park",
            "Hunting and trapping at Kohler-Andrae State Park",
            "Picnicking and shelters at Kohler-Andrae State Park",
            "Swimming at Kohler-Andrae State Park",
            "Winter activities at Kohler-Andrae State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Kohler%20Andrae.jpg?itok=jZLjFc10",
        "downloaded_image_path": "images/kohlerandrae.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/kohlerandrae/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/kohlerandrae/recreation"
    },
    {
        "id": "lacrosseriver",
        "name": "La Crosse River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The 22-mile La Crosse River State Trail has been developed from the abandoned Chicago and Northwestern Railroad between Sparta and La Crosse. The trail is open to walkers and bicyclists spring through fall and snowmobiles in winter. Packed-limestone screenings provide a smooth surface for bicycling. Mileage markers are posted every half mile on the 7-mile section between La Crosse and West Salem.",
        "activities": [
            "Camping",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-337-4775",
            "email": "Jayne.Collins@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/lacrosseriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "This trail lies in the La Crosse River valley and parallels an active rail line to the north.Prairie remnants, farmland, trout streams, hardwood forests and wetlands are found along the trail. The trail passes through the communities of La Crosse, West Salem, Bangor, Rockland and Sparta. The La Crosse River State Trail is directly linked to two other state trails. A bridge over Interstate 90 in Sparta connects the La Crosse River State Trail to theElroy-Sparta State Trailon the east end and theGreat River State Trailconnects to the trail in La Crosse on the west end.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "There is a DNR campground in Sparta that has non-reservable sites with a self-registration station available to campers for camp fees. The campground offers campsites with a fire ring and picnic table. Hand pumps and pit toilets are available. No firewood is sold at these campgrounds and there arefirewood rulesto help prevent the spread of pests and diseases. Campsites are walk-in only and vehicles can be parked in adjacent lots. The address is at 9890 Imac Ave. In Sparta, turn south on John Street. John Street turns into Igloo Road. After crossing under Interstate 90, turn left on Imac Avenue to the campground.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report,local club and county snowmobile webpagesand telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Rail%20Trail%20Fall.jpg?itok=6brQUufr",
        "downloaded_image_path": "images/lacrosseriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lacrosseriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lacrosseriver/recreation"
    },
    {
        "id": "lakekegonsa",
        "name": "Lake Kegonsa State Park",
        "coordinate": {
            "latitude": 42.9791,
            "longitude": -89.2334
        },
        "description": "Lake Kegonsa State Park offers a variety of recreational activities set along a 3,200-acre lake. A swimming beach, picnic areas with reservable shelters, and a boat launch are within 1 mile of the campground. Fishing opportunities are excellent, while hiking trails weave among oak woodlands, prairies and wetlands.",
        "activities": [
            "Accessibility",
            "Lower Yahara River Trail",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-873-9695",
            "email": "jamesp.abbott@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/lakekegonsa"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Lake Kegonsa State Park offers a variety of recreation opportunities. View the links below to learn more about some of the popular activities available at this park.",
            "Lake Kegonsa State Park offers several accessible opportunities including accessible campsites, an accessible fishing pier, a boat launch with accessible boarding piers, and two picnic shelters. For visitors interested in activities on the water, the park offers an adaptive tandem kayak available through their rental program. Call the property for more information on the adaptive kayak. Lake Kegonsa is one of several properties featuring universally accessible trails. For more information, visitAccessible Recreation.",
            "At Lake Kegonsa State Park, visitors can access theLower Yahara River Trail[exit DNR]. This county trail provides a 2.5-mile off-road section between Madison and McFarland and a 1.6-mile section between Fish Camp County Park and Lake Kegonsa State Park. Between McFarland and Fish Camp County Park, a 2-mile on-road route connects the two trail sections. The Lower Yahara River Trail is suitable for bicycles, skaters, strollers, walkers, joggers and wheelchairs. Pets are not allowed on boardwalks and bridges. The trailhead at Lake Kegonsa is next to the White Oak Trail parking lot near the campground entrance.",
            "Boating, canoeing and kayaking at Lake Kegonsa State Park",
            "Camping at Lake Kegonsa State Park",
            "Fishing at Lake Kegonsa State Park",
            "Hiking at Lake Kegonsa State Park",
            "Archery-only hunting and trapping at Lake Kegonsa State Park",
            "Picnicking and shelters at Lake Kegonsa State Park",
            "Swimming at Lake Kegonsa State Park",
            "Winter activities at Lake Kegonsa State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Lake%20Kegonsa.png?itok=ADH5Ak1w",
        "downloaded_image_path": "images/lakekegonsa.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lakekegonsa/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lakekegonsa/recreation"
    },
    {
        "id": "lakewissota",
        "name": "Lake Wissota State Park",
        "coordinate": {
            "latitude": 44.9798,
            "longitude": -91.3109
        },
        "description": "Lake Wissota State Park, northeast of Chippewa Falls, offers secluded campsites, hiking, biking and horseback riding trails, picnic and playground areas and a swimming beach on a 6,300-acre man-made lake. Boating, canoeing, kayaking and water skiing are popular summer activities on the lake.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Picnic areas and playgrounds",
            "Swimming",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-382-4574",
            "email": "Nathan.Fries@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/lakewissota"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Lake Wissota State Park offers a variety of recreation opportunities.",
            "Lake Wissota State Park offers an array of accessible opportunities, including an accessible fishing pier where beginners and angling enthusiasts alike may sight bass, walleye, and northern pike among other species. The park also provides accessible campsites and picnic shelters.",
            "For navigating the lake, an adaptive tandem kayak with a launching chariot is available. Call the park office for information on the rental program.",
            "Bicycling is a popular activity. While most of the park is level, there are over 11 miles of park trails open to off-road bicycling. Bikers can access the Old Abe State Trail and ride this paved railroad-grade trail 20 miles to Brunet Island State Park in Cornell.",
            "There are several miles of trail in the park shared by hikers and off-road bicyclists, including the Fox, Jack Pine, Plantation, Lake, Staghorn and Eagle Prairie trails. Sections of the Red Pine trail are also open to both bikers and hikers.",
            "Horseback riders and off-road bicyclists have nine miles of trails available in the park for riding. Astate trail passis required for horseback riders 16 years of age and older.",
            "Bikers can access theOld Abe State Trail. This paved railroad-grade trail runs for 20 miles and connects Lake Wissota toBrunet Island State Parkin Cornell. Astate trail passis required to use the Old Abe State Trail for all bikers and in-line skaters age 16 and older.",
            "Boating, canoeing, kayaking and water skiing are popular summer activities on the 6,300-acre Lake Wissota. Lake Wissota State Park offers excellent access to the lake with a boat launch and trailer parking area in the southern part of the park.",
            "Canoes can be rented at the park office from the Friends of Lake Wissota State Park. The office also has a list of area businesses that rent fishing boats.",
            "There is an adaptive kayak available through the park's rental program.",
            "Camping at Lake Wissota State Park",
            "Lake Wissota has several species of fish, including walleyes, muskies, bass, panfish, northern, catfish and sturgeon. A Wisconsinfishing licenseis required. Anglers of any age may check out basic fishing equipment at the park office.",
            "There is a permanent accessible fishing pier along the shore just west of the boat launch. A few fish cribs in front of the pier help attract largemouth bass and walleye.",
            "Anglers of any age may check out basic fishing equipment free of charge at the park office. This equipment was donated by theTackle Loaner Program. Call the park office to find out what equipment is available.",
            "There are more than 18 miles of hiking trails at Lake Wissota State Park. Some trails are shared with off-road bicyclists. There are two, self-guided, scenic, nature trails. More than 200 species of birds often stop on the lake during the spring and autumn migrations. Birdwatchers may pick up species checklists at the park office.",
            "Pets must be on a leash 8 feet or shorter and under control at all times.",
            "Among the park's most scenic trails is the one-mile self-guided Beaver Meadow Nature trail. A trail overlook allows visitors to view the environment and wildlife found in a beaver pond.",
            "There are several miles of trail in the park shared by hikers and off-road bicyclists, including the Fox, Jack Pine, Plantation, Lake, Staghorn and Eagle Prairie trails. Sections of the Red Pine trail are also open to both bikers and hikers.",
            "Bikers can access theOld Abe State Trail. This paved railroad-grade trail runs for 20 miles and connects Lake Wissota toBrunet Island State Parkin Cornell. Astate trail passis required to use the Old Abe State Trail for all bikers and in-line skaters age 16 and older.",
            "The self-guided Prairie Wildflower Nature trail in the middle of the park offers an up-close view of tall grasses and a variety of other plants.",
            "Horseback riders have nine miles of trails available in the park for riding. Horse rental is not available in or near the park and there is no overnight horse camping at Lake Wissota.",
            "Horseback riders and off-road bicyclists have nine miles of trails available in the park for riding. Astate trail passis required for horseback riders 16 years of age and older.",
            "Lake Wissota State Park has four picnic shelters, two of which are available for rental. There are picnic areas along the lake and near the beach and fishing pier. A large play area is in the family campground and there is a ball diamond and a volleyball court in the park.",
            "There is a swimming beach and bathhouse at Lake Wissota State Park. Remember to use caution, no lifeguards are provided.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "About eight miles of cross-country ski trails are groomed for both traditional stride and skate skiing. The park also has about 10 miles of trail open for snowshoeing. There are 5 miles of snowmobile trails within the park that connect to the extensive Chippewa County snowmobile trail system.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report,local club and county snowmobile\u00a0webpagesand telephone hotlines will provide the most current information.",
            "Ice fishing is popular. Please remember that the park does not monitor ice conditions on the lake. Ice thickness can vary from day to day and from location to location. Use your best judgment about the safety of the ice.",
            "About eight miles of cross-country ski trails are groomed for both traditional stride and skate skiing. Hikers, snowshoers and pets must keep off the trails when they are snow-covered and groomed.",
            "The park has about 10 miles of trail open for snowshoeing. During winter, about 5 miles of trail are maintained and groomed as multi-use trails, allowing for hiking, fat tire biking and skiing in addition to snowshoeing.",
            "There are 5 miles of snowmobile trails within the park that connect to the extensive Chippewa County snowmobile trail system."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Lake%20Wissota.png?itok=TDAMF0XL",
        "downloaded_image_path": "images/lakewissota.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lakewissota/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lakewissota/recreation"
    },
    {
        "id": "lakeshore",
        "name": "Lakeshore State Park",
        "coordinate": {
            "latitude": 43.0282,
            "longitude": -87.896
        },
        "description": "In the heart of downtown Milwaukee, Lakeshore State Park is adjacent to the Henry W. Maier Festival Grounds and Discovery World at Pier Wisconsin. The park is an urban oasis offering a small beach and accessible paved trails that link to Milwaukee's other lakefront parks and the Hank Aaron State Trail. The parkoffers great views of the city and Lake Michigan and has a reservable, overnight boat slip.",
        "activities": [
            "Accessibility",
            "Bicycling and skating",
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Winter activities",
            "No Hunting and trapping allowed in park"
        ],
        "hours": {
            "open": "6 AM",
            "close": "10 PM",
            "text_description": "Lakeshore State Park is open year-round from 6 a.m. to 10 p.m."
        },
        "contact": {
            "phone": "+1-414-274-4281",
            "email": "elaine.zautke@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/lakeshore"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Lakeshore State Park offers a variety of outdoor recreation opportunities in the heart of downtown Milwaukee.",
            "At Lakeshore State Park, all trails are wheelchair friendly. The park also offers an accessible fishing pier.",
            "The park'slakeside multi-use trailconnects to theHank Aaron State Trail, theOak Leaf Trailand Milwaukee's lakefront. The trail is open to walking, bicycling, skating and pets.",
            "Lakeshore State Park has a20-slip marinafor mooring boats.",
            "Lakeshore\u2019s lagoons offer a great opportunity to practice kayaking. Kayaks can launch and land on the beach or the stone steps at the south end of the island. Cars are not allowed on the trails, so kayaks must be carried or wheeled in.",
            "Users of small watercraft or floatation devices should be aware of the wind conditions on Lake Michigan. Strong west winds can blow watercraft away from the shoreline.",
            "Fishing is permitted anywhere along Lakeshore\u2019s shoreline and behind Summerfest\u2019s Marcus Amphitheater. Please avoid walking through the prairies by using the paths cut along the shoreline. Fishing from the pedestrian bridge is not permitted. An accessible fishing pier is located on the south lagoon off the western trail of the island. A fishing license is required for anyone age 16 and over.",
            "The park's trails are open to walking and running and offer great views of the Milwaukee skyline, Lake Michigan and Lakeshore\u2019s short grass prairies. Pets are welcome but must be on a leash 8 feet or shorter and under control at all times.",
            "Winter hiking and snowshoeing are allowed in the park. Only the east trail is plowed. Bird watching is popular, with close views of many northern waterfowl that use the park\u2019s lagoons. Snowy owls and snow buntings are also commonly observed.",
            "Ice fishing for trout and other fish is popular on the southern lagoon when ice thickness is sufficient.",
            "Hunting and trapping are not allowed at the property. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Lakeshore%20Aerial.jpg?itok=fy3H_s0U",
        "downloaded_image_path": "images/lakeshore.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lakeshore/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lakeshore/recreation"
    },
    {
        "id": "laphampeak",
        "name": "Lapham Peak Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 43.042,
            "longitude": -88.4029
        },
        "description": "The Lapham Peak Unit of the Kettle Moraine State Forest was formed 10,000 years ago when a glacier covered much of Wisconsin. Lapham Peak's glaciated topography provides excellent hiking, backpacking and cross-country skiing on lighted trails. Climb a 45-foot observation tower atop the highest point in Waukesha County (1,233 feet above sea level).",
        "activities": [
            "Hiking",
            "Biking",
            "Camping",
            "Hausmann Nature Center",
            "Horseback riding",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "9 PM",
            "text_description": "The forest is open from 6 a.m. to 9 p.m. year-round."
        },
        "contact": {
            "phone": "+1-262-646-3025",
            "email": "Colton.Kelly@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/laphampeak"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Lapham Peak Unit of Kettle Moraine State Forest provides a wide range of recreation opportunities. Click the links below to learn more about some of the popular activities available at this property.",
            "Hiking at Kettle Moraine State Forest - Lapham Peak Unit",
            "Biking at Kettle Moraine State Forest - Lapham Peak Unit",
            "Camping at Kettle Moraine State Forest - Lapham Peak Unit",
            "Hausmann Nature Center at Kettle Moraine State Forest - Lapham Peak Unit",
            "Horseback riding at Kettle Moraine State Forest - Lapham Peak Unit",
            "Picnicking and shelters at Kettle Moraine State Forest - Lapham Peak Unit",
            "Winter activities at Kettle Moraine State Forest - Lapham Peak Unit",
            "Please note, that there isno hunting and trapping allowed at Lapham Peak."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Lapham%20Peak.png?itok=Gnw97ATp",
        "downloaded_image_path": "images/laphampeak.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/laphampeak/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/laphampeak/recreation"
    },
    {
        "id": "lizardmound",
        "name": "Lizard Mound State Park",
        "coordinate": {
            "latitude": 43.469125,
            "longitude": -88.140723
        },
        "description": "Lizard Mound is one of the most well-preserved Native American effigy mound sites in the nation, with 28 extant conical and linear mounds on the property. The property's effigy mounds have been interpreted as representing spiritual and/or animal-like forms, including bird, panther or water spirit, and the eponymous lizard.",
        "activities": [
            "Hiking",
            "Interpretive Center",
            "Picnicking"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Lizard Mound is open from 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-262-626-2116",
            "email": "paige.ballard@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/lizardmound"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Lizard Mound property is an Indigenous burial ground and cultural landscape, featuring one of the largest and most well-preserved effigy mound groups in the area. As a burial ground, the area is considered sacred by present-day Wisconsin tribal nations. During your visit, please show respect for the site and the individuals interred here. The property is protected under the provisions of state law (Wis. Stats. s. 157.70). All unauthorized ground disturbance is prohibited. Visitors must follow all otherrecreation rules and regulations.",
            "Preserve the Soundscape- Be mindful of audio disturbances and do not interfere with the contemplative setting of the site. Speak quietly and use headphones. Motor vehicles and buses, when parked on site, must stop their engines.",
            "Enjoy the Space Appropriately- Practice respectful behavior. Activities such as running, climbing, bicycling, playing sports and unleashed pets are not allowed.",
            "Respect the Property- Stay on designated trails. Do not walk on, over, or otherwise disturb the mounds. They are historic features of this cultural landscape.",
            "More than a mile of limestone and grass-surfaced trails loop throughout the property. A self-guided tour winds around 28 well-preservedburial mounds. Please remember to remain on designated trails as walking on the mounds is strictly prohibited.",
            "There is an interactive interpretive center featuring cultural and historical information regarding the archeological aspects of the property.",
            "A picnic area with tables is located near the interpretive center. A drinking fountain and an accessible picnic table is located south of the parking lot."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/parks_hero_image_lizard_mound.jpg?itok=fRCax9d-",
        "downloaded_image_path": "images/lizardmound.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lizardmound/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lizardmound/recreation"
    },
    {
        "id": "loewlake",
        "name": "Loew Lake Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 43.2249,
            "longitude": -88.316
        },
        "description": "The Loew Lake Unit of the Kettle Moraine State Forest is situated along Wisconsin's Ice Age National Scenic Trail. Hiking, horseback riding, fishing and hunting opportunities are available in the forest. Loew Lake is a day-use property and there is no overnight camping.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-262-670-3400",
            "email": "elias.wilson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/loewlake"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Loew Lake Unit of Kettle Moraine State Forest offers a variety of recreation opportunities.",
            "Canoeing, kayaking and boating are very popular activities at Loew Lake. There is a free boat launch on County Highway Q, just west of the DNR parking lot. Only small boats are able to make it to the lake via the river from the boat launch. The river is very shallow in places and there is a low bridge across it. Loew Lake is less than 50 acres and is slow, no wake only.",
            "Fishing is available in Loew Lake.Fishing licensesapply.",
            "Over 4 miles of theIce Age National Scenic Trailgo through the forest, winding through the forest and along Emerald Drive. To the north, the Ice Age Trail continues through the Holy Hill area and to the Pike Lake Unit of the Kettle Moraine State Forest. To the south, the Ice Age Trail continues to the Lapham Peak Unit of the Kettle Moraine State Forest.",
            "There are about 5 miles of horseback riding trails in the forest. There is no overnight horse camping. Horses are only allowed on designated horse trails and vehicle parking lots.",
            "Most of the Loew Lake Unit of the Kettle Moraine State Forest's 1,200 acres are open to hunting during established hunting seasons. Special disabled permits can be obtained by contacting the forest office. Consult thehunting and trapping regulationsbefore going hunting.",
            "Deer Hunting: Only the use of muzzleloaders and\u00a0bows or crossbows during firearm deer seasons is allowed.",
            "Hunting is not permitted in intensive-use areas such as parking lots\u00a0or other posted special-use areas. There are many areas of private land scattered throughout the forest. It is the hunter's responsibility to be sure to stay on state-owned property and not trespass on adjacent private lands.",
            "The forest is open year-round for snowshoeing and winter hiking. Trails are not groomed for skiing. A snowmobile trail crosses part of the property.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis;\u00a0however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report[exit DNR],local club and county snowmobile web pages[exit DNR]and telephone hotlines will provide the most current information."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Loew%20Lake.jpg?itok=XI6Wu8l8",
        "downloaded_image_path": "images/loewlake.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/loewlake/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/loewlake/recreation"
    },
    {
        "id": "lostdauphin",
        "name": "Lost Dauphin State Park",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Lost Dauphin State Park is a small 19-acre gem along the Fox River just south of the city of De Pere in Brown County. The park offers rolling hiking trails and picnicking opportunities. Lost Dauphin State Park is operated locally by the Town of Lawrence.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/lostdauphin"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Lost%20Dauphin.jpg?itok=KJzTSTSC",
        "downloaded_image_path": "images/lostdauphin.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/lostdauphin/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/lostdauphin/recreation"
    },
    {
        "id": "lowerwisconsin",
        "name": "Lower Wisconsin State Riverway",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Lower Wisconsin is the longest free-flowing stretch of river in the Midwest. This 45,000-acre property extends along 92 miles of the river from Prairie du Sac to the confluence with the Mississippi River. A fantastically diverse resource with a wide variety of wildlife, fisheries, historical and archaeological sites, and scenic beauty found nowhere else. Abundant sand bars and islands are a popular destination for boat-in campers.",
        "activities": [
            "Boating and canoeing",
            "Camping",
            "Hiking",
            "Horseback riding",
            "Know before you go"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Three areas along the Lower Wisconsin State Riverway (Blackhawk Ridge/Wisconsin Heights, the Sauk County Canoe Landing, and Prairie du Bay) are open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-588-7723",
            "email": "harrison.stone@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/lowerwisconsin"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Explore the Lower Wisconsin State Riverway, where you can find much to do in beautiful settings close to major population centers. You can fish or hunt, canoe or boat, hike,\u00a0ride horseback or just enjoy the river scenery on a drive down country roads. The riverway abounds in birds and wildlife, and the history of Wisconsin is written in the bluffs and marshes of the area. There is something for every interest, so take your pick. To really enjoy, try them all!",
            "Two thirds of riverway users can be found on the stretch of river between Prairie du Sac and Spring Green. Those looking for a more private experience will enjoy the middle section from Spring Green to Boscobel, and for the user wishing solitude, the stretch below Boscobel is the most secluded.",
            "Boating and Canoeing along the Lower Wisconsin State Riverway",
            "Camping along the Lower Wisconsin State Riverway",
            "Hiking along the Lower Wisconsin State Riverway",
            "Horseback Riding along the Lower Wisconsin State Riverway",
            "Get conditions and read up on some safety tips before heading out on the river.",
            "Lower Wisconsin Riverway Conditions",
            "Safety on the River"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Lands_Hero%20Image_Lower%20Wisconsin%20Ferry%20Bluff.jpg?itok=45KdcsO7",
        "downloaded_image_path": "images/lowerwisconsin.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/lowerwisconsin/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/lowerwisconsin/recreation"
    },
    {
        "id": "mackenzie",
        "name": "MacKenzie Center",
        "coordinate": {
            "latitude": 43.3995,
            "longitude": -89.3632
        },
        "description": "The MacKenzie Center, just 25 miles north of Madison, is one of the most diverse education centers in Wisconsin. Located on a 285-acre property near Poynette in Columbia County, the MacKenzie Center has interpretive trails, exhibits, museums and programming available for school and youth groups. The MacKenzie Center is a wonderful place to visit and learn about the natural world.",
        "activities": [],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-635-8112",
            "email": "DNRMacKenzieCenter@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/education/mackenzie"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The MacKenzie Center has a variety of habitat types that provide a wonderful place for\u00a0family and group outings and learning about the environment.",
            "There are many self-guiding, interpretive trails to explore at MacKenzie. The Nature Trail begins at theentrance to the wildlife area, winds through the woods, and connects to the logging museum.",
            "The trail system at the south end of the property is about 0.5 miles from the main parking area. The southern trail system has five\u00a0interpretive trails that can be explored, one of which is wheelchair accessible.",
            "The MacKenzie Center is not open to hunting during public hunting seasons, but several Learn to Hunt events occur at the MacKenzie Center throughout the year. Check theLearn to Hunt webpagefor dates and more information.",
            "The MacKenzie Center has a grassy lawn picnic area with a reservable shelter to accommodate visitors. This 30-by-60-foot shelter is located on a grassy lawn adjacent to a forested area. The shelter includes ample parking, picnic tables\u00a0and grills. A flush toilet building is nearby. The shelter can be reserved through the Wisconsin State Parks reservation system either online or by calling 1-888-947-2757.",
            "Reservethe MacKenzie Picnic Shelter."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Lupine%20MacKenzie%20Hero%201170%20x%20470.jpg?itok=cx27CP4j",
        "downloaded_image_path": "images/mackenzie.jpg",
        "info_url": "https://dnr.wisconsin.gov/education/mackenzie/info",
        "recreation_url": "https://dnr.wisconsin.gov/education/mackenzie/recreation"
    },
    {
        "id": "mascoutin",
        "name": "Mascoutin Valley State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This county-operated trail goes past farms, prairies and wetlands in Green Lake, Winnebago and Fond du Lac counties. The Mascoutin Valley State Trail, built on a former railroad corridor, is divided into two sections totaling 21 miles. The western section travels between Berlin and Ripon and the eastern section travels between Rosendale and the city of Fond du Lac. The gap in the two sections, between Ripon and Rosendale, is in private ownership.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-929-3135",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/mascoutin"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The Mascoutin Valley State Trail is open to horseback riding in Winnebago and Fond du Lac counties from May to October. Riders are encouraged to pick up after their horse when it leaves manure on the trail. Horseback riding is not allowed on the Green Lake County portion of the trail.",
            "The entire trail is open to walking and bicycling. The trail base of limestone, grass and gravel makes the tread more suitable for off-road bikes. Wildlife viewing opportunities are available in the Eldorado Marsh Wildlife Area in Fond du Lac County and the Rush Lake Marsh area in Winnebago County.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Hikers.jpg?itok=ZvzvKmAf",
        "downloaded_image_path": "images/mascoutin.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/mascoutin/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/mascoutin/recreation"
    },
    {
        "id": "menominee",
        "name": "Menominee River State Recreation Area",
        "coordinate": {
            "latitude": 45.6563,
            "longitude": -87.8239
        },
        "description": "Menominee River State Recreation Area straddles the banks of the scenic Menominee River for several miles in northeast Wisconsin. Canoe the river among towering pines, rock outcrops and falls or enjoy the other areas of this quiet-use property for primitive camping, hiking, fishing and hunting opportunities.",
        "activities": [
            "Camping",
            "Canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Waterfalls",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The Menominee River State Recreation Area is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-889-6042",
            "email": "duane.hartwick@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/menominee"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The property encompasses 7,652 acres of land in Dickinson and Menominee counties, Michigan, and Marinette County, Wisconsin. Three management units make up the recreation area: Piers Gorge Unit in the north, Quiver Falls Unit, and Pemene Falls Unit in the south. Combined, these units feature 17 miles of undeveloped river corridor with both rocky gorges and wide open stretches that offer a destination for whitewater rafting and kayaking, as well as hunting, fishing and wildlife viewing.",
            "Camping at Menominee River State Recreation Area",
            "This stretch of river and roughly 13 miles upstream are some of the few remaining portions of the Menominee River that still exhibit a free-flowing river's wild, undeveloped characteristics. The property provides rustic canoe launches at Quiver Falls, a concrete boat launch at Saler Landing off Rattie Road, and the gravel Pemene boat landing off Horseshoe Road. Other launches exist beyond the property and on the Michigan side. The majority of the river is broad and gentle, with some rapids. Pemene Falls to the south is a mandatory portage (Michigan side).",
            "A comprehensive canoe trail map of the Menominee River, including this property and upstream tributaries such as the Brule, Paint and Michigamme rivers, was produced in 2003 by We Energies. This is a valuable asset if you are considering a canoe trip on this river system. Part 3 includes the stretch of river along the Menominee River Natural Resources Area. The canoe trail map costs $3 for each part or $9 for the entire set (including postage). Ask for the Menominee Watershed Canoe Trail maps and specify which parts by contacting:",
            "Wild Rivers Interpretive Center4793 Forestry DriveFlorence, WI 541211-888-889-0049",
            "Fishing is available in the Menominee River. The Menominee River is known for its smallmouth bass fishing. Many other fish species are present as well.",
            "Hiking opportunities are available on the Pemene Falls hiking trail found in the Pemene Falls Unit of the property. Hiking on the Sand Portage hiking trail can be found on the Piers Gorge Unit of the property. Other trails and logging roads exist on the property but are not maintained and managed as designated trails.",
            "The Pemene Falls hiking trail is found in the Pemene Falls Unit of the property, and the Sand Portage Falls hiking trail is in the Piers Gorge Unit. Other trails and logging roads exist on the property but are not maintained and managed as designated trails.",
            "This trail is made up of former logging roads and some stretches of paths cleared through the forest. The trail is accessed from the parking lot at the end of Verheyen Lane, off of County Road Z. The Scenery is forested with large pine stands and rock outcrops. The trail surface is made of natural materials, not graveled or paved. Most of the trail is fairly level, but there are portions of the trail on steep slopes and over rocky terrain. The trailhead leads to options to hike a short loop (0.8 miles), a long loop (1.9 miles) or to the overlook of Pemene Falls (0.5 miles). There is also a canoe/walk-in campsite that can be accessed from the hiking trail. Signage along the trail is minimal but is present at key intersections.",
            "This trail is a wooded and open trail. It has a level mowed surface and moderate hills. The 0.5-mile trail takes you from the Parking lot off Hwy. 141, just east of Knuston Road, to a wonderful view of Sand Portage Falls and Piers Gorge. There is no designated viewing area, and the trail is quite rocky if you choose to climb down to the falls.",
            "Hunting and trapping are permitted on the property duringlegal hunting and trapping seasons.",
            "Piers Gorge overlook:Piers 1, 2 and 3 are the best views from the Michigan Side of the River. Access to the Piers Gorge hiking trails and viewing area are off Hwy. 8 and Piers Gorge Road. Pier 4 is best viewed from the Sand Portage hiking trail.",
            "Quiver Falls overlook:This overlook is directly at Quiver Falls. Remnants of dams and cribbing (for log runs) are left from the logging era, which are visible upstream. It is accessible via Pemene Dam Road. A parking area and footpath lead to an area to look at the falls. A viewing area and parking lot are accessible to individuals with disabilities.",
            "Pemene Falls overlook:This overlook is primitive and is accessed via the Pemene Falls hiking trail. The trail ends at the edge of the gorge. There is no developed viewing area, but it's a sight to see. Remnants of an old concrete dam still exist. During the spring flow, the water thunders through a granite constriction in the river corridor.",
            "The property is open for snowshoeing and ungroomed cross-country skiing. Marinette County ATV/snowmobile trails cross parts of the property.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done county-wide. However, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report[exit DNR], local club and county snowmobileweb pages[exit DNR]and telephone hotlines will provide the most current information."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Menominee%20River.jpg?itok=YqKnaulh",
        "downloaded_image_path": "images/menominee.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/menominee/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/menominee/recreation"
    },
    {
        "id": "merrick",
        "name": "Merrick State Park",
        "coordinate": {
            "latitude": 44.1582,
            "longitude": -91.7596
        },
        "description": "Merrick State Park is located on the beautiful backwaters of the Mississippi River. All island campground sites and some sites in the south campground have river access for mooring watercraft or fishing directly from the sites. There are 3 miles of hiking trails, and two boat landings provide easy launching for boats of all sizes.",
        "activities": [
            "Accessibility",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas and playgrounds",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-687-4936",
            "email": "justin.wershofen@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/merrick"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Merrick State Park offers a variety of recreation opportunities for visitors to enjoy year-round.",
            "Merrick State Park offers accessible opportunities including an accessible campsite, a boat launch with accessible boarding piers, and a universal kayak launch. Also, the park has an adaptive kayak available through its rental program. Call the property for more information on the adaptive kayak.",
            "Merrick State Park offers two boat landings that can accommodate most motorized launches. There are large parking lots available at both landings. A canoe launch adjacent to the lower boat landing affords easy access for canoeists and kayakers. The adjacent quiet river backwater sloughs offer an excellent opportunity to those visitors seeking a silent-sport water experience. Enjoy the sun, wildlife and wilderness of the river backwaters five minutes from the landing.",
            "There is a universal kayak launch which features an accessible route of travel, a transfer bench, handrails, and rollers to help glide the vessel into the water. There is also an adaptive kayak available through the rental program.",
            "A self-guided canoe trail starts and ends near the lower boat landing. Follow the canoe trail markers. Parts of the trail meander through shallow water. In some areas, canoes and boats share the water. Rental canoes are available for you every day from Memorial Day through Labor Day.\u00a0Contact park staff for availability at other times.",
            "Camping at Merrick State Park",
            "The Mississippi River is alive with large and smallmouth bass, bluegills, crappies and other species.Fishing licensesapply.",
            "Anglers of any age may check out basic fishing equipment free of charge at the park office. This equipment was donated by theTackle Loaner Program. Call the park office to find out what equipment is available.",
            "There are two miles of hiking trails at the park. The trails meander along the length of the park and offer hikers a variety of river views and access to the park's secluded areas.",
            "Hiking trails wind for two miles through the park, connecting most areas. Visitors can enjoy a variety of experiences including prairies, wetlands and the hardwood forest flood plain in the lower sections of the park. The trails offer a relatively easy hiking experience appropriate to most age groups.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Picnicking and shelters at Merrick State Park",
            "Cross-country skiing is a favorite winter activity at Merrick. The natural snow surface of the trail system and undeveloped areas at the park are available to skiers who enjoy an off-trail experience. Snowshoeing offers visitors a quiet alternative. Enjoy the solitude and wildlife viewing opportunities along the river backwaters on a cold winter day.\u00a0Snowshoe enthusiasts can access the park trail system or for a more individual experience strike out on their own to explore the back corners of the park.",
            "The park offers excellent access to productive ice fishing areas along this section of the river. The park does not monitor ice conditions on the river. Be extremely cautious of ice conditions at all times."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Merrick.png?itok=Txo8Av0q",
        "downloaded_image_path": "images/merrick.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/merrick/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/merrick/recreation"
    },
    {
        "id": "militaryridge",
        "name": "Military Ridge State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The 40-mile Military Ridge State Trail, in Iowa and Dane counties, connects Dodgeville and Madison by way of an 1855 military route between Verona and Dodgeville. The trail runs along the southern borders of Governor Dodge and Blue Mound state parks passing by agricultural lands, woods, wetlands and prairies.",
        "activities": [
            "Camping",
            "Ice Age National Scenic Trail",
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-437-5711",
            "email": "kevin.swenson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/militaryridge"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The 40-mile Military Ridge State Trail, in Iowa and Dane counties, connects Dodgeville and Madison by way of an 1855 military route between Verona and Dodgeville. The trail runs along the southern borders ofGovernor DodgeandBlue Moundstate parks passing by agricultural lands, woods, wetlands and prairies. There are several observation platforms adjacent to the trail for viewing wildlife and other natural features. In Ridgeway, the trail passes by a historic railroad depot.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The Military Ridge State Trail runs along the southern borders of Governor Dodge and Blue Mound state parks. The access trail to Governor Dodge is about 2.3 miles east of Dodgeville. The access trail parallels County Highway Z and then leads walkers and bikers to the Cox Hollow beach and picnic area. The Blue Mound access trail is about 0.75 miles west of the village of Blue Mounds and enters the park near the campground. Both access trails have a steep grade and go uphill to the campgrounds.",
            "TheIce Age Trailcrosses the Military Ridge State Trail corridor for a short distance near the Verona parking lot and continues north and south through Badger Prairie County Park.",
            "The fairly level grade and smooth limestone and asphalt surfaces make this 40-mile trail suitable for bicyclists, walkers and joggers. The 2.5-mile section between Fitchburg and Verona has been paved with asphalt suitable for in-line skating. Each bicyclist or skater age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the limestone section of the tail, but not the paved asphalt section between Fitchburg and Verona. Operators must follow allWisconsin snowmobile laws. The Military Ridge State Trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile webpages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:",
            "A portion of the trail property in the town of Ridgeway is more than 100 yards from the trail corridor. This portion is open to hunting and trapping during the Wisconsin state parks hunting time frame."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Military%20Ridge.jpg?itok=zacYkrpa",
        "downloaded_image_path": "images/militaryridge.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/militaryridge/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/militaryridge/recreation"
    },
    {
        "id": "millbluff",
        "name": "Mill Bluff State Park",
        "coordinate": {
            "latitude": 43.9506,
            "longitude": -90.3194
        },
        "description": "Part of the Ice Age National Scientific Reserve, Mill Bluff State Park offers a spectacular view of picturesque rock formations. Campsites, picnic areas, a shelter, hiking trails, and a swimming pond can all be found at this park just outside Camp Douglas.",
        "activities": [
            "Bicycling",
            "Camping",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-427-6692",
            "email": "Andrew.Haffele@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/millbluff"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Mill Bluff State Park provides a variety of recreation opportunities.",
            "There are no bike trails at the park, but Juneau County's 15-mile-long Omaha Bike Trail can be reached from the park via County Highway W to County Highway C into Camp Douglas. The Omaha bike trail also connects to theElroy-Sparta State Trailand400 State Trailin Elroy.",
            "Camping at Mill Bluff State Park",
            "There are more than two miles of hiking trails at Mill Bluff offering views of the park's mesas, buttes and pinnacles. Stairs lead to the top of Mill Bluff. Pets are permitted on the hiking trails and in campsites when on an 8-foot leash. Pets are not permitted on the nature trail or in the picnic and swimming areas.",
            "About a mile north of Interstate 90/94 on Funnel Road is Camel's Bluff trail, a 1.25-mile hiking trail loop. A small parking lot is available.",
            "The nature trail begins at the far end of the east picnic area. This 0.4-mile-long trail is self-guiding. Hikers will learn about wildlife, trees, wildflowers and geology. Part of this trail is accessible for people with disabilities. A historical marker describes the geological features of the area. Pets are not permitted on the nature trail.",
            "In the mid-1930s, the Work Progress Administration (WPA) built 223 stone steps that lead to the top of Mill Bluff, where an observation deck on the north end offers an excellent view of the park and the surrounding area.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "In addition to the opportunities that are available during the state parks hunting/trapping time frame, hunting opportunities in state parks that were already established by rule and in place prior to the enactment of 2011 ACT 168, remain in place.",
            "Mill Bluff has two picnic areas, east and west of Funnel Road. Each area has a shelter, picnic tables, grills, water, toilets and parking. Pets are not permitted in the picnic areas.",
            "A pond with 2.5 acres of clear cool water from underground springs and 250 feet of white sand beach is available for public swimming. Changing stalls are available. Don't swim alone or at night. Lifeguards are not provided at any time. No fishing or pets are allowed in the pond.",
            "While Mill Bluff State Park is not staffed during the winter months, the park is still open. Visitors will often hike, snowshoe or cross-country ski in areas they are familiar with on marked trail systems. Trails are not groomed or maintained for winter use."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Mill%20Bluff.png?itok=ImT1g2fA",
        "downloaded_image_path": "images/millbluff.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/millbluff/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/millbluff/recreation"
    },
    {
        "id": "mirrorlake",
        "name": "Mirror Lake State Park",
        "coordinate": {
            "latitude": 43.5615,
            "longitude": -89.8081
        },
        "description": "Mirror Lake State Park is named for its centerpiece, a lake which often is so calm that not a ripple marks its surface. The lake reflects a wooded shoreline with cliffs up to 50 feet high, a swimming beach and wetlands that are home to a variety of wildlife. The park's 2,200 acres include\u00a0several picnic areas, wooded campsites, summer rentals and a cabin for people with disabilities.",
        "activities": [
            "Winter activities",
            "Accessibility",
            "Amphitheater",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking, playgrounds and shelters",
            "Swimming"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Mirror Lake State Park\u00a0is open from 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-608-254-2333",
            "email": "Patrick.Cieslewicz@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/mirrorlake"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Mirror Lake State Park offers recreation opportunities for everyone. See the links below to learn more about some of the popular activities at the park.",
            "Winter activities at Mirror Lake State Park",
            "Mirror Lake State Park offers an array of accessible opportunities including an accessible cabin, fishing pier, amphitheater, and boat launch, in addition to accessible campsites and picnic shelters.",
            "For maneuvering, the park features universally accessible trails. There is also a paved walkway to the beach to assist visitors with accessibility needs in getting closer to the sand and sun. For more information, visitAccessible Recreation.",
            "The park offers an adaptive tandem kayak with a launching chariot available through their loaner program. Call the park office for more information on the available adaptive kayak.",
            "Mirror Lake State Park Amphitheater",
            "Biking at Mirror Lake State Park",
            "Boating, canoeing and kayaking at Mirror Lake State Park",
            "Camping at Mirror Lake State Park",
            "Fishing at Mirror Lake State Park",
            "Hiking at Mirror Lake State Park",
            "Hunting and trapping at Mirror Lake State Park",
            "Picnicking, playgrounds and shelters at Mirror Lake State Park",
            "Swimming at Mirror Lake State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Mirror%20Lake.jpg?itok=3kFPyC_5",
        "downloaded_image_path": "images/mirrorlake.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/mirrorlake/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/mirrorlake/recreation"
    },
    {
        "id": "moundview",
        "name": "Mound View State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This pleasant, gently-rolling trail in southwest Wisconsin connects the communities of Platteville and Belmont. Enjoy traveling along charming streams and through the open countryside where two large mounds rise above farm fields on the north side of the trail. The world's largest \"M\" easily identifies Platte Mound which is about midway between the two communities.",
        "activities": [
            "Walking, bicycling and in-line skating",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-776-4864",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/moundview"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The world's largest \"M\" easily identifies Platte Mound which is about midway between the two communities. Visitors can hike the stairs next to the M to the observation deck which sits about 450 feet above the surrounding landscape.Belmont Moundis a day-use state park that offers hiking trails and picnicking about 2 miles outside of Belmont.",
            "In Platteville, the Mound View State Trail connects to the Rountree Branch Trail, a non-motorized trail that is part of the larger city of Platteville Trail Network. In Belmont, the trailhead is near the start of thePecatonica State Trailwhich is a motorized trail that connects to the Cheese Country Trail in Calamine, just south of Mineral Point.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles, snowmobiles and other motorized vehicles are prohibited on the Mound View State Trail. The Pecatonica State Trail, which begins in Belmont, is open to motorized vehicles.",
            "The trail is suitable for bicyclists, in-line skaters, walkers and joggers. Each bicyclist or skater age 16 or older needs a Wisconsinstate trail pass.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "In winter the trail is open for hiking and snowshoeing.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Mound%20View.jpg?itok=mQlaJS0g",
        "downloaded_image_path": "images/moundview.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/moundview/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/moundview/recreation"
    },
    {
        "id": "mountainbay",
        "name": "Mountain-Bay State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Mountain-Bay State Trail is one of the longest rail-trails in Wisconsin. The trail travels for 83 miles between the two geologic features it is named for; Rib Mountain and Green Bay. On the western end, the trail ends in Weston, just east of Wausau. On the eastern end, the trail ends at Howard Memorial Park near the city of Green Bay. There is a short gap in the trail in the city of Shawano near the Wolf River where local roads are used to connect the trail.",
        "activities": [
            "Horseback riding",
            "Ice Age National Scenic Trail",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-448-4466",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/mountainbay"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail is operated and maintained by Marathon, Shawano and Brown counties. The trail passes through several small communities and a wide variety of landscapes including farmlands, forests and wetlands and features numerous bridge crossings over rivers and streams.",
            "Along the Marathon County portion of the trail, there is a series of twelve interpretive signs picturing the early history of the county and the former rail line on which the trail is constructed. In Eland, the Mountain-Bay State Trail connects to the northern segment of theWiouwash State Trail.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "Trail uses vary by county, remember to watch for postings along the trail or contact the county offices for more information.",
            "Horseback riding is allowed in Shawano County only. Horses are not permitted on the trail in Marathon or Brown counties. Riders are asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "TheIce Age Trailfollows the Mountain-Bay State Trail corridor for about two miles between Ringle and Hatley in Marathon County.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are allowed on the trail in Marathon and Shawano counties, and for six miles in Brown County between Highway 32 and Brookside Drive, and between Glendale Avenue and Spring Green Park in Howard. Operators must follow allWisconsin snowmobile laws. The Mountain-Bay State Trail also connects to numerous miles of county snowmobile trail systems.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:",
            "A portion of the Mountain Bay State Trail property in the village of Howard is more than 100 yards from the trail corridor. This portion is open to hunting during the Wisconsin state parks hunting time frame."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Bike%20Handlebars.jpg?itok=lHHzqBJz",
        "downloaded_image_path": "images/mountainbay.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/mountainbay/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/mountainbay/recreation"
    },
    {
        "id": "mukwonago",
        "name": "Mukwonago River Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 42.8567,
            "longitude": -88.4178
        },
        "description": "The Mukwonago River Unit of the Kettle Moraine State Forest is in Waukesha and Walworth counties. The 970-acre, former Rainbow Springs property, is situated in the Mukwonago River watershed and is an area known for its outstanding resource waters, varied habitats and biological diversity. The forest is adjacent to Lulu Lake State Natural Area.",
        "activities": [],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The Mukwonago River Unit of the Kettle Moraine State Forest is open from 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-262-594-6204",
            "email": "Anne.Korman@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/mukwonago"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Mukwonago River Unit of the Kettle Moraine State Forest is open for nature-based outdoor activities including hiking, hunting, trapping, fishing and winter snowshoeing and cross-country skiing. The property is adjacent toLulu Lake State Natural Area."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Woman%20Fly%20Fishing.jpg?itok=ndbtBX7U",
        "downloaded_image_path": "images/mukwonago.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/mukwonago/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/mukwonago/recreation"
    },
    {
        "id": "naturalbridge",
        "name": "Natural Bridge State Park",
        "coordinate": {
            "latitude": 43.3439,
            "longitude": -89.9311
        },
        "description": "Natural Bridge State Park has a natural sandstone arch created by the eroding effects of wind and water. The bridge opening is 25 feet high by 35 feet wide. This weathered formation was missed by the glaciers during the last Ice Age. Near the bridge is a rock shelter used by native people when the glacier was melting, 11,000 years ago. The park is for day use only.",
        "activities": [
            "Hiking",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-356-8301",
            "email": "Richard.Hesed@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/naturalbridge"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Natural Bridge State Park is a day-use park, offering nearly 4 miles of wooded, hiking trails. The property protects anatural sandstone arch and rock shelter.Climbing on the arch itself or going into the shelter is prohibited to protect the natural area.Picnic tables, water and restrooms are not available at the park.",
            "The park's trails all begin at the parking lot on County Highway C. Natural Bridge itself is located along the Indian Moccasin Trail, a 1-mile loop trail north of the highway. The Whitetail Trail crosses south of the highway and back again, traveling through woodlands and prairie.",
            "The native land cover of the property is mainly oak woods, with some open fields and patches of native prairie. Several wildflowers bloom throughout the growing season and bird watchers may see turkey vultures, pileated woodpeckers, songbirds and bald eagles, among other species.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas, as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Cross-country skiing is allowed in the park, but there are no trails groomed for skiing. Winter hiking and snowshoeing are allowed anywhere in the park."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Natural%20Bridge.png?itok=m8YQp-5x",
        "downloaded_image_path": "images/naturalbridge.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/naturalbridge/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/naturalbridge/recreation"
    },
    {
        "id": "nelsondewey",
        "name": "Nelson Dewey State Park",
        "coordinate": {
            "latitude": 42.7316,
            "longitude": -91.0175
        },
        "description": "Nelson Dewey State Park overlooks the Mississippi River from a 500-foot bluff. At this park combine your interest in history with your enjoyment of the outdoors.\u00a0Camp, hike or picnic high above the Mighty Mississippi. Named for Wisconsin\u2019s first governor, Nelson Dewey, the park offers a rich history, featuring the Dewey home and the nearby Stonefield Historic site.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-725-5374",
            "email": "oliver.reistroffer@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/nelsondewey"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Nelson Dewey State Park offers a variety of recreation opportunities.",
            "Nelson Dewey State Park does not have river access. A boat landing is in the city of Cassville at Riverside Park.",
            "Camping at Nelson Dewey State Park",
            "There is no fishing in Nelson Dewey State Park. Riverside Park in Cassville is a popular place to fish.",
            "Nelson Dewey State Park offers over two miles of hiking trails. Trails may vary in difficulty. Use caution when on steep bluffs or near a cliff. Stay well away from cliffs, which are not protected by a barricade or barrier.",
            "Nelson Dewey\u2019s five trails are all less than a mile but offer a variety of scenery. Several trails in the park offer great views of the Mississippi River valley.",
            "Cedar trail (0.2 miles)",
            "A trail along the bluff with excellent views of the Mississippi River and Stonefield Village Historic Site.",
            "Prairie trail (0.2 miles)",
            "This trail goes through native prairie with a nice view of the Mississippi River.",
            "Mound Point trail (0.6 miles)",
            "This trail offers views of the Mississippi River and passes near Indian mounds. Benches are at the wildlife observation area.",
            "Oakwood trail (0.4 miles)",
            "A short, heavily wooded trail with an easy, gentle slope.",
            "Woodbine Nature trail (0.3 miles)",
            "This self-guided nature trail winds through woods, openings and near the prairie.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Picnic Areas and Shelters\u00a0at Nelson Dewey State Park",
            "The roads at Nelson Dewey are not maintained during the winter months. The parking lot at the park entrance is plowed. Cross-country skiers, snowshoers and hikers are welcome to park in the parking lot and hike or ski into the park."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_NelsonDeweyB.png?itok=A8_mqXV-",
        "downloaded_image_path": "images/nelsondewey.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/nelsondewey/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/nelsondewey/recreation"
    },
    {
        "id": "ngwoods",
        "name": "New Glarus Woods State Park",
        "coordinate": {
            "latitude": 42.7869,
            "longitude": -89.6306
        },
        "description": "New Glarus Woods State Park is a 435-acre state park offering camping, hiking, picnicking and snowshoeing just south of the city of New Glarus. The park has direct access to the Sugar River State Trail, a 24-mile linear trail surfaced with compressed limestone screenings, for bicycling, hiking and snowmobiling.",
        "activities": [
            "Accessibility",
            "Biking",
            "Camping",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas and playgrounds",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-527-2335",
            "email": "Melissa.Burns@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/ngwoods"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "New Glarus Woods State Park offers a variety of recreation opportunities.",
            "New Glarus Woods State Park offers universally accessible restrooms and an accessible group campsite. The park also offers several accessible picnic tables.",
            "A 1-mile, single track mountain bike trail loop is located in the eastern part of the park. The trailhead can be accessed from the parking lot and picnic area for the walk-to campground. For mountain bike trail conditions, please see theCapital Off-Road Pathfinders website.",
            "Bicycles are also allowed on all paved surfaces within the park and campgrounds. Bicycles are not allowed on hiking trails. The New Glarus Spur passes through the walk-to campground and connects to the 24-mile Sugar River State Trail.",
            "Bicycle rental is available in the Village of New Glarus at the Sugar River State Trail. For bicycle rental information, see theNew Glarus Chamber of Commerce website, or call 608-527-2095.",
            "Camping at New Glarus Woods State Park",
            "Hiking at New Glarus Woods State Park",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas, as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "New Glarus Woods provides one large picnic area with cooking grills and picnic tables.",
            "The picnic area has a large playground, an open picnic shelter with lights and electricity, vault toilet restrooms and drinking fountains. A small picnic area with grills and tables is next to the walk-to campsites.",
            "New Glarus Woods State Park offers one open-air picnic shelter with lights and electricity. The shelter holds about 10 tables and can accommodate about 64 people. There is a large group-size grill next to the shelter. Water fountains, vault toilets and a playground are all within walking distance.",
            "Cross-country skiing is permitted on all trails, but the trails are ungroomed. Snowshoeing and winter hiking are allowed on all trails. Pets are welcome but must be leashed at all times."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Hiking%20Boots.jpg?itok=nrJ8zm6R",
        "downloaded_image_path": "images/ngwoods.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/ngwoods/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/ngwoods/recreation"
    },
    {
        "id": "newport",
        "name": "Newport State Park",
        "coordinate": {
            "latitude": 45.2346,
            "longitude": -86.9979
        },
        "description": "Newport's wilderness experience offers over 2,300 acres of forest on 11 miles of Lake Michigan shoreline, 30 miles of hiking trails, and backpack camping as a quiet alternative to bustling Door County. At the far end of the Door Peninsula, Newport is also designated as a Dark Sky Park, a perfect destination for stargazing.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Night sky viewing",
            "Picnic areas",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Newport State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-920-854-2500",
            "email": "brian.grube@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/newport"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Newport State Park offers a variety of recreation opportunities.",
            "Newport State Park offers an array of accessible opportunities, including an accessible picnic shelter a paved walkway to the beach and a beach wheelchair. For more information on the beach wheelchair, contact the park office.",
            "Fern/Europe Bay Trail is a flat and wide universal trail paved with crushed limestone and segmented with the boardwalk. The Discovery Pen located at the park office is filled with auditory and tactile messages created for the Fern/Europe Bay Trail.",
            "For more information on universally accessible trails, visitAccessible Recreation.",
            "Biking at Newport State Park",
            "There is not a boat launch at the park. Users of small watercraft or floatation devices should be aware of the wind conditions on Lake Michigan. Strong west winds can blow watercraft away from the shoreline. Parents, watch your children at all times. Rubber rafts and other boats require personal floatation devices.",
            "Camping at Newport State Park",
            "Fishing is available in Lake Michigan and Europe Lake in the northern part of the park.Fishing licensesapply.",
            "Hiking at Newport State Park",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas, as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Dark Sky at Newport State Park",
            "There is a picnic area on Newport Bay by parking lot #3.",
            "The accessible shelter in the picnic area at Newport State Park can be reserved.",
            "Reservea shelter online.",
            "Over 26 miles of trails are open for cross-country skiing. There are 12 miles of groomed and tracked trails for classical skiing, and two miles are groomed for skate skiing. About five miles of trails are open for snowshoeing."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Newport%20Shoreline.jpg?itok=PSHGQwcp",
        "downloaded_image_path": "images/newport.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/newport/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/newport/recreation"
    },
    {
        "id": "newton",
        "name": "Newton Blackmour State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Newton Blackmour State Trail spans 22 miles on a former rail corridor in Outagamie County. The trail name is derived from the four communities the trail passes through: New London, Shiocton, Black Creek and Seymour. The trail's eastern end in Seymour connects to the Duck Creek Trail, which travels east towards Green Bay for 5 miles.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-832-4791",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/newton"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "To avoid damage to the trail, horses should stay off the trail in the spring until the trail is dry, usually until around May 15. Riders are also asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "In Seymour, the Newton Blackmour State Trail connects to the Duck Creek Trail. Snowmobiles are not allowed on the Duck Creek Trail.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Bikes%20in%20Sunset.jpg?itok=B0iKlMzn",
        "downloaded_image_path": "images/newton.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/newton/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/newton/recreation"
    },
    {
        "id": "nicolet",
        "name": "Nicolet State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This county-operated trail meanders for more than 89 miles through the Nicolet National Forest in northeastern Wisconsin. The trail follows the same corridor built by railroad companies in the late 19th century to open up Wisconsin's pine and hardwood forests for the timber industry. The Nicolet State Trail runs through several small communities from Gillett in Oconto County to the Michigan state line.",
        "activities": [
            "All-terrain vehicles (ATVs) and Off-highway motorcycles (OHMs)",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-834-6995",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/nicolet"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Wild, free-flowing rivers and streams abound in this part of Wisconsin, adding to an area already rich in natural resources. TheNicolet National Forest\u00a0[exit DNR]which encompasses the trail has an abundance of recreation opportunities. In addition to camping, hunting, fishing and water recreation, the forest provides numerous miles of trail for hiking, mountain biking, cross-country skiing and wildlife viewing.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "ATVs and OHMs both need to be registered before riding on the trail. Operators must use only legally marked routes to leave the trail. Cross-country travel through the Nicolet National Forest or on private land is prohibited. Wisconsin ATV and OHM operation laws must be followed.",
            "All-terrain vehicleuse varies by different sections on the trail.",
            "All three counties have hundreds of miles of ATV routes that connect with the Nicolet State Trail.",
            "Street-legal off-highway motorcycleuse varies by different sections on the trail. OHMs are permitted on the Nicolet State Trail in Forest County when ATV use is allowed. OHMs are not allowed on the trail in Florence and Oconto counties.",
            "Horseback riding varies by different sections on the trail. Horses are allowed year-round on the trail in Florence County. Horses are allowed year-round on the trail in Forest County, except from the close of the snowmobiling season to May 1 (or when moisture conditions allow). In Oconto County, horses are allowed on the trail from April 15 through Nov. 10. The trail may be rough or soft in many sections and riders must share the trail with motorized vehicles.",
            "The entire trail is open to walking and bicycling, though bicycling is not recommended. The trail may be rough or soft in many sections and walkers and bikers must share the trail with motorized vehicles. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "When operating a snowmobile use only legally marked routes to leave the Nicolet State Trail. Cross-country travel through the Nicolet National Forest or on private land is prohibited.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_ATV%20on%20Trail.jpg?itok=gj1KcMQl",
        "downloaded_image_path": "images/nicolet.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/nicolet/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/nicolet/recreation"
    },
    {
        "id": "nhal",
        "name": "Northern Highland American Legion State Forest",
        "coordinate": {
            "latitude": 45.8648,
            "longitude": -89.6509
        },
        "description": "With over 236,000 acres and more than 900 lakes within its boundaries, the Northern Highland - American Legion State Forest provides wonderfully scenic opportunities for a variety of outdoor recreation from wild and remote campsites accessible only by boat, to developed family and group campgrounds, beaches, boat launches and trails. The forest is spread across three counties near the towns of Woodruff, Minocqua and Boulder Junction. There are two main contact stations at Crystal and Clear lakes. TheNorthern Highland-American Legion State Forestis celebrating its 100th anniversary in 2025.",
        "activities": [
            "ATVs/UTVs",
            "Biking",
            "Camping",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Pets",
            "Picnic areas and shelters",
            "Water activities",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-356-3668",
            "email": "DNRFWPPRMNHALRec@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/nhal"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "All-Terrain Vehicles (ATVs) and Utility Terrain Vehicles (UTVs) are allowed on limited roads/trails within the Northern Highland American Legion State Forest.ATVs/UTVs are not allowed in any of the campgrounds.Many local county and town roads are designated ATV/UTV routes. Please see theNHAL State Forest ATV/UTV Planning webpageor the\u202fDNRATV information webpagefor more information.",
            "Biking at NHAL State Forest",
            "Camping at NHAL State Forest overview",
            "Modern campgrounds",
            "Group campgrounds",
            "Rustic campgrounds",
            "Primitive camping",
            "Hiking at NHAL State Forest",
            "There are no designated equestrian trails on the state forest. However, there are many places people can ride within the property such as public roads, old logging roads and snowmobile trails when not snow-covered.",
            "Horses are not allowed in any campground, beach, designated hiking or nature trail or contrary to other posted notices.",
            "Hunting is permitted in the forest. Hunters are reminded to check their regulations for open seasons and contact forest headquarters to confirm open areas.",
            "Hunting is not allowed within 100 yards of any state campground, picnic area or other special use area designated by posted notice.",
            "Picnic areas and shelters at NHAL State Forest",
            "Water activities at NHAL State Forest",
            "Winter activities at NHAL State Forest"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": true,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/State%20Forests_Hero%20Image_NHAL%20Hemlock%20Lake.jpg?itok=3LkQMQ2h",
        "downloaded_image_path": "images/nhal.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/nhal/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/nhal/recreation"
    },
    {
        "id": "kmn",
        "name": "Northern Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 43.665,
            "longitude": -88.1606
        },
        "description": "The first and largest unit of the Kettle Moraine State Forest offers year-round recreation among world-famous glacial landforms. Visitors can swim at three beaches, enjoy challenging mountain biking trails or groomed ski trails, hike the Ice Age Trail, take in a nature program, or just escape among 30,000 acres of rolling, wooded hills and prairies. The Ice Age Visitor Center is open all year. The forest has over 350 campsites, including family, group, equestrian and backpack opportunities.",
        "activities": [
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Cross-country skiing",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Nature Programs",
            "Pets and dog training",
            "Picnicking and shelters",
            "State Natural Areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open from 6 a.m. to 11 p.m. daily."
        },
        "contact": {
            "phone": "+1-262-626-2116",
            "email": "paige.ballard@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/kmn"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Northern Unit of the Kettle Moraine State Forest offers a variety of outdoor recreation opportunities for visitors to enjoy year-round. Click the links below to learn more about some of the popular activities available at this property.",
            "Bicycling at Kettle Moraine State Forest - Northern Unit",
            "Boating, canoeing and kayaking at Kettle Moraine State Forest - Northern Unit",
            "Camping at Kettle Moraine State Forest - Northern Unit",
            "Cross-country skiing at Kettle Moraine State Forest - Northern Unit",
            "Fishing at Kettle Moraine State Forest - Northern Unit",
            "Hiking at Kettle Moraine State Forest - Northern Unit",
            "Horseback riding at Kettle Moraine State Forest - Northern Unit",
            "Hunting and trapping at Kettle Moraine State Forest - Northern Unit",
            "Nature Programs at Kettle Moraine State Forest - Northern Unit",
            "Pets and dog training at Kettle Moraine State Forest - Northern Unit",
            "Picnicking and Shelters at Kettle Moraine State Forest - Northern Unit",
            "State Natural Areas and Points of Interest within the forest",
            "Swimming at Kettle Moraine State Forest - Northern Unit",
            "Winter activities at Kettle Moraine State Forest - Northern Unit(cross-country skiing, ice fishing, winter bicycling, snowshoeing, snowmobiling)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": true,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Kettle%20Moraine%20North%20Trees.png?itok=EuYm3hcu",
        "downloaded_image_path": "images/kmn.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/kmn/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/kmn/recreation"
    },
    {
        "id": "oconto",
        "name": "Oconto River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 8-mile trail passes through the forests and farms of Oconto County between the communities of Oconto and Stiles Junction. Outside of Oconto, the trail parallels the Oconto River. The river has a long history of human activity, dating back 6,000 years to the early Native Americans who lived along the river, to the fur trading and logging operations of the last few centuries, to present-day recreation activities such as canoeing and kayaking.",
        "activities": [
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-834-6995",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/oconto"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Copper Culture State Park, which is near the trail, sits on the banks of the river and features a Native American burial ground and museum. The Copper Culture burial ground is the oldest cemetery site in Wisconsin and possibly the oldest site in eastern North America.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers. The Oconto River is popular for paddle and float trips as well as fishing. Users can float part of the river and safely walk or bike back on the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Bike%20Gears.jpg?itok=RR40ndN7",
        "downloaded_image_path": "images/oconto.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/oconto/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/oconto/recreation"
    },
    {
        "id": "oldabe",
        "name": "Old Abe State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Old Abe State Trail is a paved 20-mile trail connects Lake Wissota State Park and Brunet Island State Park.The trail is on an abandoned railroad grade and winds through agricultural and forest land while following the undeveloped shoreline of the beautiful Chippewa River. The trail features an abundance of wildlife and natural beauty, with many historical sites along the way.",
        "activities": [
            "Horseback riding",
            "Hunting",
            "Ice Age National Scenic Trail",
            "Walking, bicycling and in-line skating",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-726-7920",
            "email": "LCD@co.chippewa.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/oldabe"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Old Abe State Trail is part of the Chippewa Valley Trail System. When completed, the trail system will feature an 80-mile network of trail stretching from Cornell, through Chippewa Falls and Eau Claire to Durand and Menomonie. Other trails in the system include theChippewa RiverandRed Cedarstate trails.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The southern portion of the trail (from Jim Falls south to County Highway O), has a parallel trail next to the asphalt trail which is developed for horseback riding. Riders must keep off the asphalt trail. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "The Old Abe State Trail corridor is open to hunting from County Highway S in Jim Falls north, approximately 10 miles, to the Cornell city limits during the Wisconsin state parks hunting time frame. For more information, please see:",
            "TheIce Age Trailcrosses the Old Abe State Trail near Brunet Island State Park in Cornell.",
            "The level grade and paved surface make this trail suitable for bicyclists, walkers, joggers and in-line skaters. Each bicyclist and skater age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Old%20Abe%20Trail.jpg?itok=R9FMV92f",
        "downloaded_image_path": "images/oldabe.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/oldabe/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/oldabe/recreation"
    },
    {
        "id": "pattison",
        "name": "Pattison State Park",
        "coordinate": {
            "latitude": 46.5371,
            "longitude": -92.1192
        },
        "description": "Pattison State Park features the highest waterfalls in Wisconsin and the fourth highest waterfall east of the Rocky Mountains. Big Manitou Falls is 165 feet high and Twin Little Manitou Falls is 31 feet high. This 1,400-acre park also has a lake with a beach, a nature center, camping and scenic hiking trails.",
        "activities": [
            "Accessibility",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Pattison State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-399-3111",
            "email": "gervase.thompson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/pattison"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Pattison State Park provides varied opportunities for outdoor recreation. View the links below to learn more about some of the popular activities available at this park.",
            "Pattison State Park offers several accessible opportunities including accessible campsites and an accessible shower building, shelter building, nature center and bathhouse. In addition, both Little Manitou Falls and Big Manitou Falls offer accessible overlooks.",
            "Camping at Pattison State Park",
            "Fishing at Pattison State Park",
            "Hiking at Pattison State Park",
            "Hunting and trapping at Pattison State Park",
            "Picnicking and shelters at Pattison State Park",
            "Swimming at Pattison State Park",
            "Winter activities at Pattison State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Pattison.png?itok=7TvQ2RBm",
        "downloaded_image_path": "images/pattison.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/pattison/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/pattison/recreation"
    },
    {
        "id": "pecatonica",
        "name": "Pecatonica State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Running 10 miles through the picturesque Bonner Branch valley, this county-operated trail links Belmont with the 47-mile Cheese Country Trail in Calamine. The Pecatonica State Trail follows the old Milwaukee Road railroad corridor that at one time hauled lead through this valley, reminiscent of the mining era which once dominated this region of Wisconsin. The western terminus of the trail ends in Belmont where it connects to the Mound View State Trail.",
        "activities": [
            "All-terrain vehicles (ATVs) and Off-highway motorcycles (OHMs)",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-776-4864",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/pecatonica"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles and Off-highway motorcycles are allowed year-round on the Pecatonica State Trail when there is less than one inch of snow coverage on the trail. Operators must follow all Wisconsin ATV and OHM operation laws. ATVs and OHMs both need to be registered before riding on the trail. The Pecatonica State Trail also provides connections to the Cheese Country Trail and the Lafayette County ATV trail system.",
            "The entire trail is open to horseback riding when there is less than one inch of snow coverage on the trail. The trail may be rough or soft in many sections. Riders must share the trail with motorized vehicles. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "The entire trail is open to walking and bicycling when there is less than one inch of snow coverage on the trail. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes. Bikers mush share the trail with motorized vehicles and horses. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero-Image_ATV.jpg?itok=ez6uRhtI",
        "downloaded_image_path": "images/pecatonica.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/pecatonica/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/pecatonica/recreation"
    },
    {
        "id": "peninsula",
        "name": "Peninsula State Park",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Considered Wisconsin's most complete park, Peninsula State Park offers over 460 campsites, three group camps, a summer theater, an 18-hole golf course, sand beach, bike trails, a lighthouse and eight miles of Door County shoreline. The rollicking waves that skip towards Peninsula's sky high bluffs are part of the Niagara Escarpment.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Golfing",
            "Hiking",
            "Hunting",
            "Lighthouse tours",
            "Northern Sky Theater",
            "Picnicking, playgrounds and shelters",
            "Sightseeing and touring",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-920-868-3258",
            "email": "Jennifer.Birkholz@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/peninsula"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Many people consider Peninsula to be Wisconsin's most complete park. When you see its many offerings, it is easy to see why. Click the links below to learn more about some of the popular activities available at this park.",
            "Accessibility at Peninsula State Park",
            "Biking at Peninsula State Park",
            "Boating, Canoeing and Kayaking at Peninsula State Park",
            "Camping at Peninsula State Park",
            "Fishing at Peninsula State Park",
            "Golfing at Peninsula State Park",
            "Hiking at Peninsula State Park",
            "Anoutdoor track wheelchaircan be checked out for use on certain days of the week by park visitors. The wheelchair can be checked out through theFriends of Peninsula website.",
            "Hunting and Trapping",
            "Lighthouse Tours at Peninsula State Park",
            "Northern Sky Theater at Peninsula State Park",
            "Picnic areas and playgrounds at Peninsula State Park",
            "Sightseeing and touring at Peninsula State Park",
            "Swimming at Peninsula State Park",
            "Winter activities at Peninsula State Park(cross-country skiing, snowshoeing, ice fishing, snowmobiling, sledding and tubing)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Peninsula%20Kayakers.jpg?itok=ekPlubdB",
        "downloaded_image_path": "images/peninsula.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/peninsula/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/peninsula/recreation"
    },
    {
        "id": "perrot",
        "name": "Perrot State Park",
        "coordinate": {
            "latitude": 44.0157,
            "longitude": -91.4745
        },
        "description": "Perrot State Park is nestled among 500-foot bluffs where the Trempealeau and Mississippi rivers meet. Enjoy breathtaking river views from the hiking trails in this park, known for its natural, archaeological, and historical resources. There is direct access for bicyclists from the campground to the 24-mile Great River State Trail. There is also a marked canoe trail in Trempealeau Bay. Canoes can be rented at the park in season.",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-534-6409",
            "email": "justin.wershofen@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/perrot"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Perrot State Park offers recreation opportunities for all visitors. View the links below to learn more about some of the popular activities at this park.",
            "Perrot State Park offers several accessible opportunities including an accessible campsite, accessible overlook, and picnic shelters. The nature center has a crushed limestone trail loop that goes through the prairie. Also, the park has an adaptive kayak with a launching chariot available through their rental program. Call the property for more information on the adaptive kayak.",
            "There is direct bicycle access from the campground to theGreat River State Trail.",
            "Boating, canoeing and kayaking at Perrot State Park",
            "Camping at Perrot State Park",
            "Fishing at Perrot State Park",
            "Hiking at Perrot State Park",
            "Hunting and trapping at Perrot State Park",
            "Picnicking and shelters at Perrot State Park",
            "Winter activities at Perrot State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20image_Perrot%20State%20Park.jpg?itok=AWeegWcj",
        "downloaded_image_path": "images/perrot.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/perrot/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/perrot/recreation"
    },
    {
        "id": "govearl",
        "name": "Governor Earl Peshtigo River State Forest",
        "coordinate": {
            "latitude": 45.3233,
            "longitude": -88.2218
        },
        "description": "Governor Earl Peshtigo River State Forest is a long, linear state forest in northeast Wisconsin bordering some of the most beautiful and exciting sections of the Peshtigo River. Anglers know the river's free-flowing portion for its excellent fly-fishing; paddlers brave the Midwest's longest continuous whitewater rapids; and boaters can access more than 3,000 acres of flowage from 15 boat landings. The forest offers a family campground and several remote boat-in campsites along the river.",
        "activities": [
            "ATV",
            "Hiking",
            "Horseback riding and mountain biking",
            "Hunting",
            "Water activities",
            "Wildlife viewing",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-757-3965",
            "email": "Kyle.Marinoff@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/StateForests/govearl"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Twenty five miles of river, 3,200 acres of water and 9,200 acres of forest await you on the Governor Earl Peshtigo River State Forest, the natural gem of Marinette County. This long, linear state forest borders some of the most beautiful and exciting sections of the Peshtigo River.",
            "A small portion of the Woodland ATV Trail runs through the state forest. Other than the snowmobile trails that ATVs may use in winter, this is the only location open to ATVs on the state forest. It is your responsibility to know where you can legally ride. Illegal ATV use is strictly prohibited.",
            "The state forest provides two systems of trails. Numerous rustic roads and volunteer-maintained hunter walking trails on the forest are also open to hikers.",
            "The 5-mile Spring Rapids Trail can be accessed by driving 5 miles west of Crivitz on County Road W to Kirby Lake Lane. This hiking and skiing trail system includes various loops that provide some extremely steep hills, breathtaking views, several distances and quiet serenity broken only by the rush of the Peshtigo River.",
            "During ski season, the trails are groomed for classical and skate skiing. Pets, hiking and snowshoeing are not permitted on groomed ski trails.",
            "This 3-mile trail is 9.5 miles west of Crivitz, off Bushman Road and Marinette County Road 1634. Although smaller than the Spring Rapids Trail, this system provides some steep hills and beautiful scenery. This trail is open to hiking, and trails are not groomed at this time for cross-country skiing.",
            "There are no designated equestrian or mountain bike trails on the state forest, however, the forest is open to these activities. Except during the winter months, snowmobile trails and angler access roads are open to equestrian riders and mountain bikers. In addition, horseback riders and bikers can use the many volunteer-maintained hunter walking trails throughout the forest. Together, these trails provide over 35 miles of trail riding.",
            "There are several native communities within the state forest that are prohibited to horseback riding because they contain sensitive and endangered plant species. These areas are posted closed to horseback riding. Please visit the forest office for further information.",
            "Horseback riders and bikers should exercise caution as other users may be on the trails at the same time. Also be aware that many trails cross private land. Please respect private landowners and do not trespass.",
            "For a safe trail riding experience, mountain bikers should yield the right of way to let horses pass. Equestrian riders are also encouraged to let other trail users know when it safe to pass.",
            "All ground blinds and elevated devices must be removed from the property at the close of hunting hours each day, unless ground blinds are constructed entirely of dead vegetation found on the forest. You must have the appropriate licenses and please review Wisconsin's regulations before you hunt or trap on the state forest.",
            "The Governor Earl Peshtigo River State Forest offers ample opportunities for hunters and trappers seeking all types of game. The majority of lands within the state forest are open to hunting during the scheduled seasons. The exception is a 100-yard buffer around the campground in Old Veteran's Lake Campground. White-tail deer, small game, black bear and migratory birds are the primary game species. Trappers can find beaver, muskrat, raccoon, fisher and mink on the property.",
            "Water activities",
            "The forests surrounding the Peshtigo flowages offer abundant food, water and shelter for a variety of animal species such as songbirds, turkeys, white-tail deer, black bears and butterflies. In addition, the waters of the flowages provide habitat for bald eagles, sandhill cranes, ospreys, common loons, great blue herons and many species of waterfowl. The flowages are also home to many furbearers and various species of amphibians and reptiles.",
            "There are numerous opportunities to observe and enjoy wildlife in a remote and wild setting, but please remember to observe from a distance. In particular, make sure to stay at least 100 yards away from eagle and osprey nests to minimize disturbance.",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Gov%20Earl.jpg?itok=vbhZTLdy",
        "downloaded_image_path": "images/govearl.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/StateForests/govearl/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/StateForests/govearl/recreation"
    },
    {
        "id": "pikelake",
        "name": "Pike Lake Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 43.3196,
            "longitude": -88.3195
        },
        "description": "The Pike Lake Unit of the Kettle Moraine State Forest is in the middle of the Kettle Moraine, a strip of glacial landforms which extends through southeast Wisconsin. The forest is named after the 522-acre, spring-fed kettle lake. Powder Hill, a large glacial kame, provides terrific views of the landscape. Visitors can enjoy camping, swimming, hiking, fishing, picnicking and more.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-262-670-3400",
            "email": "elias.wilson@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/pikelake"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Pike Lake Unit of the Kettle Moraine State Forest provides visitors with a wide range of recreational opportunities. View the links below to learn more about some of the popular activities available at this property.",
            "Kettle Moraine State Forest \u2013 Pike Lake Unit offers several accessible opportunities including accessible campsites, an accessible fishing pier, a boat launch with an accessible boarding pier, and an amphitheater with accessible seating and universal paths between parking lots and park spaces.",
            "The Pike Lake Unit also offers a beach wheelchair and a manual all-terrain GRIT Freedom wheelchair. Both chairs are available to check out from the office at no charge. Call the property for more information on the outdoor wheelchair.",
            "This property features universally accessible trails. For more information, visit theAccessible Recreation.",
            "Biking at Kettle Moraine State Forest - Pike Lake Unit",
            "Boating, canoeing and kayaking at Kettle Moraine State Forest - Pike Lake Unit",
            "Camping at Kettle Moraine State Forest - Pike Lake Unit",
            "Fishing at Kettle Moraine State Forest - Pike Lake Unit",
            "Hiking at Kettle Moraine State Forest - Pike Lake Unit",
            "Hunting and trapping at Kettle Moraine State Forest - Pike Lake Unit",
            "Picnicking and shelters at Kettle Moraine State Forest - Pike Lake Unit",
            "Swimming at Kettle Moraine State Forest - Pike Lake Unit",
            "Winter activities at Kettle Moraine State Forest - Pike Lake Unit"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Pike%20Lake.jpg?itok=hzUzrLZ7",
        "downloaded_image_path": "images/pikelake.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/pikelake/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/pikelake/recreation"
    },
    {
        "id": "pikeriver",
        "name": "Pike Wild River",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Numerous rapids and waterfalls blend with rock bluffs along this rugged river in northeast Wisconsin. The Pike River watershed includes over 300 miles of streams and lakes, providing terrific opportunities for paddling, fishing, hunting and hiking in a wild and scenic area.",
        "activities": [],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-889-6042",
            "email": "Duane.Hartwick@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/pikeriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Pike Wild River watershed is made up of approximately 310 square miles, including over 300 miles of streams and numerous lakes. Streams range from small spring seeps to the main branch of the Pike River, which is over 100 feet wide. The largest lake in the watershed is Coleman Lake, 246 acres. Smaller lakes range in size down to spring ponds of 1 acre or less. The Pike River flows into the Menominee River northeast of the Village of Wausaukee, which then empties into Lake Michigan.",
            "On DNR land, there is walk-in access only, no motorized vehicles, no stream alterations, no maintained trails, few developed parking lots or canoe put-ins\u00a0and no camping. These rules are intended to preserve the wild and scenic qualities of the river.",
            "The Pike Wild River landscape is characterized by rock outcrop and forests of all types found in Marinette County. From aspen stands and northern hardwood to swamp conifer and wetlands,\u00a0nearly the full spectrum\u00a0of habitat types are represented. A no-cut buffer implemented within 150 feet of the river provides for older-growth forest habitat. Numerous rapids and waterfalls are found throughout the length of the river. Rock bluffs provide scenic views of the river in many places.",
            "Opportunities for recreational users are numerous. The property gets a fair amount of use by hunters, hikers, wildlife watchers\u00a0and berry pickers, but possibly the biggest user group is comprised\u00a0of\u00a0spring canoeing and kayaking enthusiasts. Protected wildlife species such as the red-shouldered hawk and wood turtle are but a few of the natural resources preserved within this scenic\u00a0natural area.",
            "The upper reaches of the river are difficult to canoe but provide excellent trout fishing opportunities. River users are urged to use caution while traversing the river as waterfalls and rapids make some stretches challenging and dangerous, particularly during high flow periods. A unique fish species that is observed but can't be fished is lake sturgeon (40- to 60-inch adults). They don't live year-round or spawn in the Pike River but migrate from the Menominee into the lower Pike River, downstream from Highway 141."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Lands_Hero%20Image_Pike%20River.png?itok=zveeYFNj",
        "downloaded_image_path": "images/pikeriver.png",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/pikeriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/pikeriver/recreation"
    },
    {
        "id": "pinepopple",
        "name": "Pine-Popple Wild Rivers",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The 89-mile Pine River and its major tributary, the 62-mile Popple River, offer a true wild experience, being among Wisconsin's more remote river systems. The rivers alternate from quiet sections to swift, rocky riffles, low rapids and waterfalls, offering high-quality paddling and fishing in a secluded, natural environment.",
        "activities": [
            "Camping",
            "Canoeing and Kayaking",
            "Fishing",
            "Waterfalls",
            "Neighboring lands"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-889-6042",
            "email": "Duane.Hartwick@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/pinepopple"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Pine and Popple Wild Rivers\u00a0alternate from quiet sections that meander lazily through lowland forest to swift, rocky riffles, low rapids and waterfalls. These rivers offer high-quality paddling and fishing in a secluded, natural environment.",
            "The lakes, rivers\u00a0and lands of the Pine and Popple Wild Rivers project are popular for multiple uses, including canoeing, kayaking, tubing, sightseeing, fishing, hunting, camping, berry picking, photography, bird watching and other outdoor recreation activities. All publicly owned lands are open for these uses. The rivers' greatest attractions are the miles of undeveloped river that allows everyone a chance to find their own special place.",
            "Camping along the Pine and Popple Wild Rivers",
            "Canoeing and kayaking along the Pine and Popple Wild Rivers",
            "Fishing along the Pine and Popple Wild Rivers",
            "The Pine and Popple Wild Rivers have eight named waterfalls, with the Pine River's Breakwater Falls being the tallest at about 60 feet. La Salle Falls also on the Pine River is 22 feet high and the most visited of the waterfalls.\u00a0Most waterfalls are accessible by foot from, either town or county forest roads. Aguide pamphlet[exit DNR] [PDF]dealing specifically with waterfalls in Florence County has been developed by the Florence County Forestry and Parks Department and is available at theFlorence Natural Resource and Wild Rivers Interpretive Center[exit DNR].",
            "Little Bull Falls, Big Bull Falls, Washburn Falls\u00a0and Jennings Falls are located on the Popple River. Breakwater Falls, Meyers Falls, Bull Falls\u00a0and La Salle Falls are located on the Pine River.",
            "The private property in the Wild Rivers Legacy Forest is under a conservation easement, open to the public for recreational uses including hiking, hunting\u00a0and fishing. Certain trails and roads across both public and private property are open for vehicle access, snowmobile and all-terrain vehicles as posted.",
            "The We Energies lands are also open to the public, except for the areas near the dam and power generating facilities, which are closed for public safety and security reasons."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Lands_Hero%20Image_Pine%20Popple.jpg?itok=FVSmKAB6",
        "downloaded_image_path": "images/pinepopple.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/pinepopple/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/pinepopple/recreation"
    },
    {
        "id": "pointbeach",
        "name": "Point Beach State Forest",
        "coordinate": {
            "latitude": 44.2113,
            "longitude": -87.5102
        },
        "description": "Point Beach State Forest features 3,000 acres of land and 6 miles of sandy beach along the shores of Lake Michigan. Point Beach offers family campsites, two large group cabins and an outdoor group camp. A popular feature within the property is the Rawley Point Lighthouse, which has been operated and maintained by the U.S. Coast Guard since 1853.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Hiking",
            "Horseback Riding",
            "Hunting",
            "Lighthouse",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The forest is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-920-794-7480",
            "email": "erin.dembski@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/pointbeach"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Point Beach State Forest provides recreational activities for everyone. Click the links below to learn about some of the popular activities available at this property.",
            "Point Beach State Forest offers accessible opportunities and amenities including accessible campsites, picnic shelters and a universally accessible trail also known as a universal trail.",
            "In addition, there are two outdoor wheelchairs at the property, including a beach wheelchair and a motorized all-terrain tracked wheelchair. Both chairs are available to checkout at no charge. For more information on the outdoor wheelchairs, call 1-920-794-7480.",
            "For more information including recommendations, visit theAccessible Recreationwebpage.",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Hiking",
            "There are 3.6 miles of horse trails at Point Beach State Forest. A horse trailer parking lot is off County Highway O just north of the main entrance to the State Forest. The northern horse trail loop is 1.3 miles and the southern loop is 2.3 miles. Horse trails are open seasonally, from May through October.",
            "Hunting and trapping",
            "Lighthouse",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Point%20Beach.jpg?itok=EFBGOww4",
        "downloaded_image_path": "images/pointbeach.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/pointbeach/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/pointbeach/recreation"
    },
    {
        "id": "potawatomi",
        "name": "Potawatomi State Park",
        "coordinate": {
            "latitude": 44.8518,
            "longitude": -87.425
        },
        "description": "Potawatomi State Park on the shore of Sturgeon Bay in southern Door County, has 1,200 acres of gently rolling upland terrain bordered by steep slopes and rugged limestone cliffs. The park is named in honor of the tribe that inhabited Green Bay\u2019s shores and islands when Europeans first settled the area. The tribe called themselves Bo-De-Wad-Me which means \"keeper of the fire.\"",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-920-746-2890",
            "email": "Erin.BrownStender@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/potawatomi"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Potawatomi State Park's 1,200 acres provide a variety of recreation opportunities. View the links below to learn more about some of the popular activities at this park.",
            "Potawatomi State Park offers accessible opportunities including an accessible cabin, accessible campsites, an accessible fishing pier, picnic shelters, and a boat launch with an accessible boarding pier.",
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Potawatomi.jpg?itok=TavbMiuQ",
        "downloaded_image_path": "images/potawatomi.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/potawatomi/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/potawatomi/recreation"
    },
    {
        "id": "redcedar",
        "name": "Red Cedar State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 14.5-mile rail trail shadows the steep walls of the Red Cedar Valley from Menomonie to its connection with the Chippewa River State Trail. Along its route, the trail passes through the communities of Irvington and Downsville and the Dunnville State Wildlife Area. The trail passes by prairies, marshland bottoms, forests and farmlands, including sandstone bluffs and other unique rock formations.",
        "activities": [
            "Canoeing and kayaking",
            "Cross-country skiing, snowshoeing and winter biking",
            "Hunting",
            "Snowmobiling",
            "Walking and bicycling"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-232-1242",
            "email": "Calvin.Kunkle@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/redcedar"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Red Cedar State Trail is part of the Chippewa Valley Trail System. When completed, the trail system will feature an 80-mile network of trail stretching from Cornell, through Chippewa Falls and Eau Claire to Durand and Menomonie. Other trails in the system include theChippewa RiverandOld Abestate trails.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The trail is ideal for a bike and paddle trip. Sections of this former rail corridor parallel the Red Cedar River. You can paddle downstream and then bike back to your starting point or vice versa.",
            "Menomonie to Downsville:In winter, seven miles of the Red Cedar State Trail are groomed for skiing from Menomonie to Downsville. Please do not hike, snowshoe, bike or walk pets on this section. These activities are permitted on the ungroomed section from Downsville to the intersection of the Chippewa River State Trail. Skiers age 16 or older need astate trail passbefore using this groomed section of trail.",
            "Downsville to Chippewa River State Trail:Winter bicyclists 16 years and older also need astate trail passto use the trail south of Downsville. Passes may be obtained by using the self-registration stations available at the Menomonie depot trailhead and in Downsville.",
            "The Red Cedar State Trail corridor is open to hunting from the intersection with the Chippewa River State Trail north, approximately four miles, to the north boundary of the southeast quarter of section 11 in T26, R13W, as posted (the area where the trail goes through the Dunnville Wildlife Area). A portion of the trail property in the town of Dunn is more than 100 yards from the trail corridor. This portion is open to hunting and trapping during the Wisconsin state parks hunting time frame. For more information, please see:",
            "Two miles of the Red Cedar State Trail are open for snowmobiling from the junction of the Chippewa River State Trail north to County Road Y. Operators must follow allWisconsin snowmobile laws. The trail also connects to county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail. Passes are available at the Menomonie depot trailhead and in Downsville.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Runner.jpg?itok=SkDhRPmM",
        "downloaded_image_path": "images/redcedar.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/redcedar/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/redcedar/recreation"
    },
    {
        "id": "ribmt",
        "name": "Rib Mountain State Park",
        "coordinate": {
            "latitude": 44.9205,
            "longitude": -89.6831
        },
        "description": "This billion-year-old hill is one of the oldest geological formations on earth. Rib Mountain State Park is a premier day-use property with picnicking, hiking trails and reservable facilities that include a scenic amphitheater, indoor gathering space and picnic shelters. The top of the park offers spectacular views of the Wausau area and Wisconsin River. Granite Peak Ski Area is on the north face of the mountain and offers downhill skiing and snowboarding.",
        "activities": [
            "Hiking",
            "Hunting and trapping",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-842-2522",
            "email": "bayli.christorf@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/ribmt"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Rib Mountain State Park offers a variety of recreation opportunities. Click the links below to learn more about some of the popular activities available at this park.",
            "Hiking at Rib Mountain State Park",
            "Hunting and trapping at Rib Mountain State Park",
            "Picnicking and shelters at Rib Mountain State Park",
            "New this year is a 2-mile groomed snowshoe trail on the Middle Yellow Trail loop. Users can access this trail from the parking lot just south of the entrance station. This loop is marked with green ribbon and groomed by the Friends of Rib Mountain.",
            "There are no groomed cross-country ski trails at the park. Winter hiking and snowshoeing are allowed in most areas of the park. About 1.5 miles of club-operated snowmobile trails travel through the park, however, there is no access to the trails from the park.",
            "Granite Peak Ski and Snowboard Area"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Rib%20Mountain.jpg?itok=uxtCP9TT",
        "downloaded_image_path": "images/ribmt.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/ribmt/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/ribmt/recreation"
    },
    {
        "id": "richardbong",
        "name": "Richard Bong State Recreation Area",
        "coordinate": {
            "latitude": 42.634,
            "longitude": -88.1272
        },
        "description": "Once designated to be a jet fighter base, Richard Bong State Recreation Area is named after Major Richard I. Bong, a Poplar, WI native who was America's leading air ace during World War II. The air base was abandoned three days before concrete was to be poured for a 12,500-foot runway. Local citizens had the foresight to protect this open space for future generations.",
        "activities": [
            "Accessibility",
            "ATVs and UTVs",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback Riding",
            "Hunting",
            "Nature Center",
            "Off-highway Motorcycles",
            "Picnicking and shelters",
            "Special Use Zone",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Richard Bong State Recreation Area\u00a0is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-262-878-5600",
            "email": "bart.tucker@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/richardbong"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Richard Bong State Recreation Area provides a variety of recreation opportunities. View the links below to learn more about some of the popular activities available at this property.",
            "Richard Bong State Recreation Area offers accessible opportunities including an accessible cabin, accessible campsites, accessible picnic shelters, an accessible fishing pier, an accessible boat launch pier, a wildlife viewing platform, universal hunting blind, and a nature center with an outdoor classroom. Also, the park has a beach access mat.",
            "This property features a universally accessible trail. For more information, visitAccessible Recreation.",
            "ATVs and UTVs at Richard Bong State Recreation Area",
            "Biking at Richard Bong State Recreation Area",
            "Boating, canoeing and kayaking at Richard Bong State Recreation Area",
            "Camping at Richard Bong State Recreation Area",
            "Fishing at Richard Bong State Recreation Area",
            "Hiking at Richard Bong State Recreation Area",
            "Horseback riding at Richard Bong State Recreation Area",
            "Hunting at Richard Bong State Recreation Area",
            "Nature Center at Richard Bong State Recreation Area",
            "Off-highway motorcycles (OHMs) at Richard Bong State Recreation Area",
            "Picnic areas and shelters at Richard Bong State Recreation Area",
            "Special Use Zone at Richard Bong State Recreation Area",
            "Swimming at Richard Bong State Recreation Area",
            "Winter activities at Richard Bong State Recreation Area(cross-country skiing, sledding, ice fishing, snowmobiling)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Richard%20Bong.jpg?itok=ig_DiKJe",
        "downloaded_image_path": "images/richardbong.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/richardbong/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/richardbong/recreation"
    },
    {
        "id": "rocheacri",
        "name": "Roche-A-Cri State Park",
        "coordinate": {
            "latitude": 44.0011,
            "longitude": -89.8132
        },
        "description": "Roche-A-Cri State Park, established in 1948, protects a 300-foot-high rock outcropping and Native American petroglyphs and pictographs. The name \"Roche-A-Cri\" comes from French words meaning \"screaming rock.\" The park offers camping, picnicking, fishing and hiking trails with a stairway to the top of the mound. Native American petroglyphs and a wayside exhibit can also be viewed.Roche-A-Cri State Park is celebrating its 75th anniversary in 2023!",
        "activities": [
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas and shelters",
            "Rock art",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-339-6881",
            "email": "Heather.Wolf@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/rocheacri"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Roche-A-Cri State Park offers a variety of recreation opportunities.",
            "Camping at Roche-A-Cri State Park",
            "Brown and brook trout and a variety of panfish can be caught in Carter Creek.Fishing licensesapply.",
            "Hiking at Roche-A-Cri State Park",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Picnicking at Roche-A-Cri State Park",
            "Roche-A-Cri State Park has the only interpreted rock art site in the state. The observation area is west of the office on the main park road. The accessible ramp and observation deck allow all visitors to view the petroglyphs and pictographs. Rock art consists of a number of stylized birds, bird tracks and other bird symbols. One painting depicts a connection between a human and a thunderbird. The mound also has numerous more recent carvings, from the mid-1800s to the 1950s.",
            "Winter hiking, snowshoeing and ungroomed cross-country skiing are popular in the park. During winter, the main entrance is closed and visitors should park in the lot on the north side of Czech Avenue, west of State Highway 13."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_RocheACri.png?itok=Ao8pLdbw",
        "downloaded_image_path": "images/rocheacri.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/rocheacri/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/rocheacri/recreation"
    },
    {
        "id": "rockisland",
        "name": "Rock Island State Park",
        "coordinate": {
            "latitude": 45.4004,
            "longitude": -86.8567
        },
        "description": "Take the ferry Memorial Day weekend through the second Monday in October to this primitive Lake Michigan island where no vehicles are allowed. This unique park features the Pottawatomie Lighthouse as well as stone buildings built by a wealthy inventor who owned the island between 1910 and 1964. Rock Island offers rustic, walk-in campsites, hiking trails, a swimming beach and miles of shoreline to explore.",
        "activities": [
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Lighthouse tours",
            "Picnic areas",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open from 6 a.m. to 11 p.m. daily."
        },
        "contact": {
            "phone": "+1-920-854-2500",
            "email": "brian.grube@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/rockisland"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Rock Island State Park provides a variety of recreation opportunities.",
            "Visitors may take their boats to Rock Island, but caution is urged as Lake Michigan can be hazardous due to reefs and storms. There is a nightly fee of $1 per foot of boat length for all boats mooring on the dock overnight at Rock Island. Dock space is limited and cannot be reserved.",
            "Canoes and Kayaks are popular around the island, but lake conditions can change rapidly, resulting in dangerous wind and waves. Early season (May and June) cold water conditions pose a special hypothermia hazard. The passenger ferry, Karfi, may transport canoes and kayaks for a nominal fee as space and safety conditions permit (that decision is up to the captain of the ferry). Kayaks and canoes can be pulled up on the shore near campsites. All campers must register at the visitor contact station for campsites.",
            "Camping at Rock Island State Park",
            "Afishing licenseis required for fishing at Rock Island State Park. No live bait is sold on the island, so you need to bring your own or use artificial lures. Smallmouth bass and gobies are the most often caught fish. Bass season opens July 1 in the waters surrounding the islands.",
            "There are about ten miles of trails with six miles of shoreline for hiking.",
            "All trails on Rock Island are open to hiking. There are about 10 miles of hiking trails on the island. Several shorter trails connect the walk-in campsites and the day-use area near the ferry landing and boathouse.",
            "Algonquin nature trail (1.0 mile)",
            "This trail is a 1.0-mile nature trail loop that begins near the campground.",
            "Fernwood trail (1.2 miles)",
            "This 1.2-mile trail travels through the middle of Rock Island, connecting to the east and west shores",
            "Havamal trail (1.0 miles)",
            "This 1.0-mile trail begins near the large field area and travels through the southern part of the island.",
            "Thordarson loop trail (5.2 miles)",
            "The Thordarson trail follows the circumference of the island for 5.2 miles. The trail is named for Chester Thordarson and his family, who owned the island from 1910 to 1964. Highlights include the Pottawatomie Lighthouse, historic cemeteries, scenic overlooks and a historic water tower.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "Tours are given of the historicPottawatomie Lighthousedaily from 10 a.m. to 4 p.m. from Memorial Day through Columbus Day. During tours, visitors are permitted to climb to the lantern room. Donations are accepted but not required as this service is provided by the Friends of Rock Island State Park.",
            "Near the boathouse, there is a large playfield/picnic area with tables and grills. No playground equipment is provided however, some games, puzzles, balls and outside play toys are available in the Greenhouse shelter building nearby.",
            "Rock Island has one of the most beautiful sand beaches in Door County. The water is tested regularly for safety. Swimming is permitted anywhere along the coast except near the boat dock. Many people swim from the cobble shores near their campsites.",
            "Ice conditions on Lake Michigan vary significantly during winter. The ferry does not run during winter and travel to the island over the ice is not recommended."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Rock%20Island.jpg?itok=hDVutrvK",
        "downloaded_image_path": "images/rockisland.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/rockisland/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/rockisland/recreation"
    },
    {
        "id": "rockyarbor",
        "name": "Rocky Arbor State Park",
        "coordinate": {
            "latitude": 43.6408,
            "longitude": -89.8024
        },
        "description": "Rocky Arbor State Park is just 1.5 miles from Wisconsin Dells, offering seclusion from the busy vacation community with wooded campsites, hiking trails and picnic and playground areas in a setting surrounded by pine trees and sandstone bluffs.",
        "activities": [
            "Camping",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas and playgrounds",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-254-8001",
            "email": "Patrick.Cieslewicz@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/rockyarbor"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Camping at Rocky Arbor State Park",
            "The park has a 1-mile, self-guided nature trail. Walk quietly, stop often, listen and watch for wildlife. You may see deer, raccoons, squirrels, bats and chipmunks.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "The park has a picnic area and playground by the park entrance, down the hill from the campground.",
            "The park is open year round for winter hiking and snowshoeing."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Rocky%20Arbor.png?itok=Y0W9Gyn-",
        "downloaded_image_path": "images/rockyarbor.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/rockyarbor/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/rockyarbor/recreation"
    },
    {
        "id": "saukprairie",
        "name": "Sauk Prairie State Recreation Area",
        "coordinate": {
            "latitude": 43.37,
            "longitude": -89.7672
        },
        "description": "Sauk Prairie State Recreation Area was once designated as an army ammunition plant that operated during World War II, the Korean War and the Vietnam War. It was the largest munitions factory in the world during World War II. The plant was declared excess to the Army's needs and has since been transferred to the state and other owners for recreation, conservation and research.",
        "activities": [],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m. daily."
        },
        "contact": {
            "phone": "+1-608-356-2185",
            "email": "samuel.kujak@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/saukprairie"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Sauk Prairie State Recreation Area, located in southeastern Sauk County, consists of a portion of the decommissioned Badger Army Ammunition Plant.",
            "Visitors may hunt, trap, hike, bird watch, pick mushrooms and berries, study nature, take photographs and other traditional outdoor activities. You may also drive, bike or ride horses on the roads within the complex that are open. Roads are in variable condition; some have many ruts and potholes.",
            "The property is still undergoing demolition and clean-up work. Please be aware of closed areas and potential hazards from construction debris and demolished structures.",
            "The recreation area is open year-round from one hour before sunrise to one hour after sunset. Roads are not plowed during winter."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": null,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Sauk%20Prairie.jpg?itok=CFfcx4fj",
        "downloaded_image_path": "images/saukprairie.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/saukprairie/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/saukprairie/recreation"
    },
    {
        "id": "saunders",
        "name": "Saunders State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 8-mile county-operated trail links with the Gandy Dancer State Trail south of the city of Superior in Douglas County. The trail begins near the town of Saunders and passes through the communities of Boylston Junction, Boylston and Borea before continuing into Minnesota. Along its route, the trail crosses Clear Creek and the Pokegama River.",
        "activities": [
            "Horseback riding",
            "Motorized vehicles",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-378-2219",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/saunders"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The entire trail is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "All-terrain vehicles (ATVs) are allowed on the trail year-round. Operators must follow allWisconsin ATV operation laws. The trail also connects to the Gandy Dancer State Trail and other Douglas County ATV routes.",
            "The Saunders State Trail corridor continues into Minnesota and is maintained and operated by the Minnesota DNR as an ATV trail known as theSoo Line South ATV Trail\u00a0[exit DNR].",
            "The entire trail is open to walking and bicycling, though bicycling is not recommended. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20ATV%202.jpg?itok=6qUi37zY",
        "downloaded_image_path": "images/saunders.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/saunders/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/saunders/recreation"
    },
    {
        "id": "kms",
        "name": "Southern Unit Kettle Moraine State Forest",
        "coordinate": {
            "latitude": 42.9365,
            "longitude": -88.4739
        },
        "description": "Covering more than 22,000 acres of forested glacial hills, kettle lakes and prairies, the Southern Unit of the Kettle Moraine State Forest is interlaced with more than 100 miles of mountain biking, horseback riding and hiking and nature trails. Paddling, boating, swimming, fishing, hunting and winter sport opportunities are all available. There are three family campgrounds, a horseriders camp, two group camps and remote backpack shelters on the Ice Age Trail.",
        "activities": [
            "Accessibility",
            "Bicycling",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The state forest is open from 6 a.m. to 11 p.m. daily."
        },
        "contact": {
            "phone": "+1-262-594-6200",
            "email": "Oliviaj.Boeck@Wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/kms"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "With more than 22,000 acres of glacial hills, kettles, lakes, prairie restoration sites, pine woods and hardwood forests, Kettle Moraine State Forest - Southern Unit offers a wide variety of recreation opportunities. View the links below to learn about some of the popular activities available at this forest.",
            "Kettle Moraine State Forest \u2013 Southern Unit offers several accessible opportunities. Whitewater Lake features accessible fishing piers. Ottawa Lake features an accessible cabin and campsites, and an accessible fishing pier and boat launch built with an accessible boarding pier. Accessible picnic shelters are located near both Whitewater and Ottawa Lake.",
            "A beach wheelchair and an adaptive tandem kayak are available for checkout at Ottawa Lake without charge. Call the park office for more information on available adaptive equipment.",
            "This property features universally accessible trails. For more information, visitAccessible Recreation.",
            "Bicycling at Kettle Moraine State Forest - Southern Unit",
            "Boating, canoeing and kayaking at Kettle Moraine State Forest - Southern Unit",
            "Camping at Kettle Moraine State Forest - Southern Unit",
            "Fishing at Kettle Moraine State Forest - Southern Unit",
            "Hiking at Kettle Moraine State Forest - Southern Unit",
            "Horseback riding at Kettle Moraine State Forest - Southern Unit",
            "Hunting, trapping and target shooting at Kettle Moraine State Forest - Southern Unit",
            "Picnicking and shelters at Kettle Moraine State Forest - Southern Unit",
            "Swimming at Kettle Moraine State Forest - Southern Unit",
            "Winter activities at Kettle Moraine State Forest - Southern Unit(cross-country skiing, snowmobiling, ice fishing, snowshoeing)"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Kettle%20Moraine%20South.png?itok=gGocTnEt",
        "downloaded_image_path": "images/kms.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/kms/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/kms/recreation"
    },
    {
        "id": "stower",
        "name": "Stower Seven Lakes State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "Built on a former railroad corridor, this 14-mile trail begins in Amery, travels through the communities of Deronda, Wanderoos and Nye, ending about one mile from Dresser at 90th Avenue. The trail passes through maple and oak forests, wetlands, prairies and farmlands and past seven picturesque lakes. The trail crosses between the North Twin and South Twin lakes in Amery, then skirts Bear Trap, Kinney, Dwight, Horse and Lotus lakes.",
        "activities": [
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-485-9272",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/stower"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Stower Seven Lakes State Trail is named to recognize the exceptional natural resources the trail traverses and the longtime public service and leadership demonstrated by Harvey and Marilyn Stower of Amery. Harvey Stower served in the Wisconsin Legislature and as Mayor of Amery for many years. Camping and hiking opportunities are available nearby atInterstate State Park.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles, snowmobiles and other motorized vehicles are prohibited on the trail. TheCattail State Trail, which begins in Amery just east of Highway 46 at Center Street, is open to motorized vehicles.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "In winter the trail is open for cross-country skiing and snowshoeing. The trail is groomed for cross-country skiing. Snowmobiles are not permitted on the trail and snowshoers must stay off the groomed portion of the trail. Each skier age 16 or older needs astate trail passbefore using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Hikers%202.jpg?itok=lJ-ljw-i",
        "downloaded_image_path": "images/stower.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/stower/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/stower/recreation"
    },
    {
        "id": "straightlake",
        "name": "Straight Lake State Park",
        "coordinate": {
            "latitude": 45.5987,
            "longitude": -92.4064
        },
        "description": "Lake views and glacial features provide great vistas on the trails within this 2,000-acre park. Ten walk-in campsites, carry-in boat launches, and a picnic area with reservable shelter are found on the south side of the park's two wild lakes. A premier segment of the Ice Age National Scenic Trail meanders through the park.",
        "activities": [
            "Accessibility",
            "Camping",
            "Canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-483-3747",
            "email": "hannah.cross@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/straightlake"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Straight Lake State Park offers a variety of recreation opportunities. In addition, the state park is adjacent to thestate wildlife area, providing nearly 3,500 contiguous acres at Straight Lake.",
            "Straight Lake State Park offers an accessible campsite and an accessible fishing pier.",
            "Camping at Straight Lake",
            "Canoes, kayaks and other non-motorized watercraft can be carried from the parking areas to the lakes. The carry-in boat launch for Rainbow Lake is a short, 100-yard hike. The east carry-in boat launch on Straight Lake is 300 yards from the parking lot. The west carry-in boat launch on Straight Lake is 750 yards from the campground parking lot. Courtesy boat/canoe/kayak carry-in carts are available at the campground parking lot from May 1 through November.",
            "Canoes, kayaks and rowboats are not allowed to be left at the boat launches overnight.",
            "Straight Lake is fed and drained by the Straight River. It is a premier northern wild lake with a great fishery of bass, northern pike and panfish. Boats may be carried in to fish.",
            "Rainbow Lake is stocked every year with brown trout. Trout may be harvested from the first Saturday in May to the first Sunday in March. An accessible fishing platform is located on Rainbow Lake, next to the carry-in boat launch.",
            "A fishing license is required for anyone age 16 or over. Seefishing regulations.",
            "The park is open to the public for foot traffic only. No motorized vehicles, bikes or horses are allowed. The Ice Age National Scenic Trail winds through the middle of the park along the Straight River and Straight Lake. There are about 8.5 miles of trail at the park.",
            "Ice Age National Scenic Trail",
            "From the headwaters of the Trade River to Straight Lake and the Straight River, this beautiful stretch of the trail meanders for nearly 6 miles through the park. TheIce Age National Scenic Trailroute is marked with yellow blazes. After leaving the park boundary to the west, the Ice Age Trail continues northwest towards the town of Frederic, and leaving the park boundary to the east, the trail travels towards the McKenzie Creek State Wildlife Area. The western terminus of the entire Ice Age Trail is inInterstate State Parknear St. Croix Falls, about 20 miles from Straight Lake.",
            "Rainbow Lake Trail",
            "This challenging 1-mile loop trail provides excellent views of Rainbow Lake and the surrounding landscape. The trail starts at the picnic area parking lot and can be used to connect to the Ice Age Trail and the Glacial Trail. The trail has a natural surface with steep terrain.",
            "Glacial Trail",
            "This 0.8-mile trail provides views of the hummocky terrain left behind after the last Ice Age. The trail meanders from the Rainbow Lake Trail to the eastern boundary of the park, where it meets the Ice Age National Scenic Trail. The trail has a natural surface with some steep terrain.",
            "Straight Lake Trail",
            "This 0.9-mile trail traverses the highland on the south side of Straight Lake, providing some excellent views of the lake before working its way to the southern lakeshore. All-access trails to the campsites are along the trail, which has a natural surface or gravel.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas, as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "During winter, trails are not groomed or packed. Winter hiking, snowshoeing and cross-country skiing are allowed anywhere in the park.",
            "Ice fishing is a popular activity at the park, but combustion-powered ice augers are prohibited."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Straight%20Lake.jpg?itok=vFPDZyUM",
        "downloaded_image_path": "images/straightlake.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/straightlake/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/straightlake/recreation"
    },
    {
        "id": "sugarriver",
        "name": "Sugar River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Sugar River State Trail follows an abandoned railroad line in south central Wisconsin for 24 miles from New Glarus to Brodhead. A short access trail connects the Sugar River State Trail to New Glarus Woods State Park. Fourteen trestle bridges cross over the Sugar River and its tributaries, while the trail passes by farmlands, woods, rolling hills, and remnant prairies. The trail has also been designated as a National Recreational Trail.",
        "activities": [
            "Camping",
            "Ice Age National Scenic Trail",
            "Hunting",
            "Walking and bicycling",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-608-527-2335",
            "email": "Melissa.Burns@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/sugarriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Sugar River Trail headquarters is in the restored 1887 railroad depot in New Glarus. The building is on the National Registry of Historic Places and houses displays of local culture and railroad history. The Sugar River State Trail connects with theBadger State Trailjust south of the Monticello trailhead.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "A short access trail connects the Sugar River State Trail toNew Glarus Woods State Parkwhere camping is available throughout the year. The access trail parallels State Highway 69 and then leads uphill to the park.",
            "The Sugar River State Trail, from Bump Road (in the village of Albany) to the Badger State Trail, is part of theIce Age National Scenic Trail. The Ice Age Trail winds for more than 1,000 miles through Wisconsin, along the terminal edge of the Wisconsin lobe of the last glacier to cover the state.",
            "The Sugar River State Trail corridor is open to hunting within the Albany State Wildlife Area, approximately eight miles, in Albany township, Green County from the Saturday nearest Oct. 17 through Jan. 31. The trail is posted open to hunting from the south side of County Highway EE in Monticello to the north side of Highway 59 in Albany. For more information, please see:",
            "The fairly level grade and compacted limestone surface makes this 24-mile trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are allowed when there are over 4 inches of snow or when the trail has a groomed base. At all other times, the trail is closed to snowmobiling. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of Green County snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Sugar%20River%20Trail%20Fall.jpg?itok=h6-k25pp",
        "downloaded_image_path": "images/sugarriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/sugarriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/sugarriver/recreation"
    },
    {
        "id": "tomorrow",
        "name": "Tomorrow River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 29-mile rail trail travels through scenic glacial terrain and farm country from Plover in Portage County to just outside the village of Manawa in Waupaca County, while passing through the communities of Amherst Junction, Scandinavia and Ogdensburg. The western end of the trail connects to the Green Circle State Trail at Hoover Road in Plover.",
        "activities": [
            "Horseback riding",
            "Ice Age National Scenic Trail",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-346-1433",
            "email": "parks@co.waupaca.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/tomorrow"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "There is a short one-mile gap in the trail in Amherst Junction and trail users will need to use local roads as the trail route. The eastern terminus of the trail in Waupaca County ends at Wolf Road. Users will need to use local roads for about 0.5 miles between the trail and the village of Manawa.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "There is a separate 14-mile horse trail alongside the limestone trail from Plover to the Portage/Waupaca county line, with the horse trail under construction in Waupaca County. Horses should never be on the limestone trail except in posted areas where the two are shared. In areas where a separate horse trail is not complete, riders are allowed to use the south side of the limestone trail, providing they stay on the edge of the trail. Riders should follow the horse signs. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "TheIce Age Trailcrosses the Tomorrow River State Trail in Waupaca County at Gillman Road.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Some sections may have hoof marks where the limestone trail is shared with horses. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail. Passes are available along the trail at self-registration stations or at the Portage County and Waupaca County Parks offices.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Running%20Fall.jpg?itok=jy1DtugK",
        "downloaded_image_path": "images/tomorrow.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/tomorrow/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/tomorrow/recreation"
    },
    {
        "id": "totogatic",
        "name": "Totogatic Wild River",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Totogatic River is a wild gem flowing through Bayfield, Sawyer, Washburn, Douglas and Burnett counties. The river provides rich habitat for diverse aquatic and terrestrial species, has excellent water quality and beautiful scenery, and offers great fishing and paddling opportunities.",
        "activities": [
            "Paddling"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-638-0351",
            "email": "Christopher.Spaight@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/totogatic"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Totogatic Wild River provides rich habitat for diverse aquatic and terrestrial species, has excellent water quality and\u00a0beautiful scenery, and offers great fishing, paddling, hunting and wildlife watching opportunities.",
            "This large 2,113-acre property is split into seven different blocks, spread over three townships in two counties with the majority of the acreage in northwestern Washburn County along the lower reaches of the Totogatic River. The property was former Wausau/Mosinee Paper land and is approximately 90% upland woods and 10% lowland and swamp. Several town roads intersect the blocks creating points of access to the land.",
            "Due to the highly erodible steep banks and the natural vegetated state of the river shoreline, access to the river from these parcels is not recommended. Better access is available to the river from other access points in the county, e.g., at County Highway I below the Minong Flowage. Please tread lightly at any point of access as the shoreline along the river is fragile and erodible. Also remember that river water levels are variable. Check out the river, let someone know your plan\u00a0and establish your route ahead of time.",
            "The free-flowing reaches of the Totogatic River are designated wild, with the four flowages (Nelson Lake, Totogatic Flowage, Colton Flowage\u00a0and Minong Flowage) excluded. Here is a description of the designated reaches:",
            "The name \"Totogatic\" comes from the Ojibwa word \"Totogan\" meaning \"place of floating bogs\" or \"boggy river\" (according to \"Romance of Wisconsin Place Names,\" Heartland Press, 1988). Plat books, maps and tour books show a couple of spellings for the river and its namesake flowages. \"Totagatic\" and \"Totogatic\" are used interchangeably in these reference materials (sometimes both are used on the same page). Pronunciation is varied among several versions including\u00a0\"Tuh-TO-ga-tec,\" \"To-TA-ga-tec,\" \"To-to-GAT-ic,\" \"To-TA-tec\" and\u00a0\"TO-ga-tec,\" according to long-time local residents. Each of these spellings and pronunciations seems to have a strongly defended local following, and devotees of one will consider use of the others as incorrect."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Autumn%20River%20Closeup.jpg?itok=NMTUOvxK",
        "downloaded_image_path": "images/totogatic.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/totogatic/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/totogatic/recreation"
    },
    {
        "id": "towerhill",
        "name": "Tower Hill State Park",
        "coordinate": {
            "latitude": 43.1471,
            "longitude": -90.0478
        },
        "description": "Visitors can see how lead shot was made in the mid-1800s, hike bluff trails and enjoy river views at this park outside Spring Green. A picnic area and shelter, hiking trails, canoe landing on the Wisconsin River and a small campground are all available.",
        "activities": [
            "Camping",
            "Canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Picnic areas"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-935-2315",
            "email": "harrison.stone@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/towerhill"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Tower Hill State Park provides a variety of recreation opportunities.",
            "Camping at Tower Hill State Park",
            "Tower Hill State Park does not have a boat launch. The park borders the Wisconsin River and backwaters and is a popular place to explore by canoe or kayak.",
            "Fishing is available in the backwaters of the Wisconsin River.Fishing licensesapply.",
            "There are\u00a02\u00a0miles of trails that meander through the park.\u00a0Tower Hill is an excellent area for amateur bird watchers, offering a variety of habitat with riverbanks, deep woods and clearings.",
            "Hunting and trapping are allowed in the open areas of the park during the Wisconsin state parks hunting and trapping time frame. Trapping is not permitted in closed areas as noted on the park hunting map or within 100 yards of any designated use area, including trails. Certain trap types are restricted on state park properties. For more information, please see:",
            "In addition to the opportunities that are available during the state parks hunting/trapping time frame, hunting opportunities in state parks that were already established by rule and in place prior to the enactment of 2011 ACT 168, remain in place.",
            "Tower Hill State Park has picnic areas, a large play field and a reservable shelter."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Tower%20Hill.png?itok=ka1VLXqS",
        "downloaded_image_path": "images/towerhill.png",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/towerhill/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/towerhill/recreation"
    },
    {
        "id": "turtleflambeau",
        "name": "Turtle-Flambeau Scenic Waters Area",
        "coordinate": {
            "latitude": 46.0994,
            "longitude": -90.1699
        },
        "description": "Undisturbed, wooded shorelines and islands offer the opportunity to boat, camp, fish and enjoy the outdoors in wild and rugged northern Wisconsin. Spread across 40,000 acres in Iron County, the Turtle-Flambeau Scenic Waters Area offers 66 remote campsites accessible by water only.",
        "activities": [
            "Auto Tour",
            "Boating and canoeing",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Skiing and snowshoeing",
            "Snowmobiling and ATVs"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m. year-round."
        },
        "contact": {
            "phone": "+1-715-614-5120",
            "email": "casey.baye@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/turtleflambeau"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Undisturbed, wooded shorelines and islands offer the opportunity to boat, camp, fish and enjoy the outdoors in wild and rugged northern Wisconsin.",
            "Auto tour at Turtle-Flambeau Scenic Waters Area",
            "Boating and canoeing at Turtle-Flambeau Scenic Waters Area",
            "Camping at Turtle-Flambeau Scenic Waters Area",
            "Fishing at Turtle-Flambeau Scenic Waters Area",
            "Hiking and nature trails at Turtle-Flambeau Scenic Waters Area",
            "Hunting at Turtle-Flambeau Scenic Waters Area",
            "Cross-country skiing and snowshoeing at Turtle-Flambeau Scenic Waters Area",
            "Snowmobiling and ATVing at Turtle-Flambeau Scenic Waters Area"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero_TurtleFlambeauA.png?itok=Z9CDagVW",
        "downloaded_image_path": "images/turtleflambeau.png",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/turtleflambeau/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/turtleflambeau/recreation"
    },
    {
        "id": "tuscobia",
        "name": "Tuscobia State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 74-mile trail on a former rail corridor is one of the longest rail trails in the state, running from Park Falls to the Wild Rivers State Trail just north of Rice Lake. The trail passes through part of the Flambeau River State Forest and the rugged wilderness of Wisconsin's Blue Hills. The trail connects seven small communities in Barron, Washburn, Sawyer and Price counties, each providing year-round accommodations and services.",
        "activities": [
            "Walking and bicycling",
            "Horseback riding",
            "Hunting",
            "Ice Age National Scenic Trail",
            "All-Terrain Vehicles",
            "Winter activities"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-332-5271;ext=103",
            "email": "Michael.Watt@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/tuscobia"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Tuscobia State Trail is a year-round multiple use recreational trail that offers opportunities for ATVs, snowmobiling, horseback riding, off-road bicycling and walking. Trail activities vary by time of year and by county. The western end of the trail is part of the Ice Age National Scenic Trail.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The entire trail is open to walking and bicycling year-round, though bicycling is not recommended. The trail is not groomed or surfaced and may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "The entire trail is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "The Tuscobia State Trail corridor is open to hunting from Park Falls west, approximately 64.5 miles, to the Washburn/Barron county line during the Wisconsin state parks hunting time frame. No hunting on the Tuscobia State Trail in Barron County. Certified Ice Age National Scenic Trail utilizes the Tuscobia State Trail corridor in Barron County. For more information, please see:",
            "The section of the Tuscobia State Trail from its connection with the Wild Rivers State Trail north of Rice Lake (County Highway SS in Barron County near Haugen) to the Barron/Washburn county line west of Red Cedar Lake at 30th Avenue is certified as part of theIce Age National Scenic Trail. The Ice Age Trail is designated further east over the Red Cedar Lake Bridge to Loch Lomond Boulevard.",
            "After crossing over the bridge, the current route of the Ice Age Trail goes off the Tuscobia State Trail corridor and continues east on Featherstone Road (which parallels State Highway 48), then south on Loch Lomond Boulevard\u00a0to the Barron County Forest.",
            "All-terrain vehicles are permitted to cross west over the Red Cedar Lake Bridge to connect with Washburn County ATV trails, but must stay off the Ice Age Trail certified/designated portion of the Tuscobia Trail corridor from the the Red Cedar Lake Bridge to County Highway SS.",
            "All-terrain vehicle use varies by different sections on the trail. In Price County, ATVs are allowed on the trail during the summer months between April 15 and Nov. 15. From the Price/Sawyer county line to the Red Cedar Lake Bridge just west of Birchwood (Sawyer County and a small part of Washburn County), ATVs are allowed year-round on the trail, except during hunting seasons from Nov. 15 to Dec. 15. Operators must follow allWisconsin ATV operation laws. The trail also provides numerous connections to many county ATV trail systems.",
            "All-terrain vehicles are not allowed on the Tuscobia State Trail between the Red Cedar Lake Bridge and the junction with the Wild Rivers State Trail as this segment is currently designated as part of the Ice Age National Scenic Trail. All-terrain vehicles are permitted to cross west over the bridge to connect with Washburn County ATV trails, but must stay off the Tuscobia Trail corridor from the Red Cedar Lake Bridge to the Wild Rivers Trail.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20Hikers%203.jpg?itok=r-t1qVg5",
        "downloaded_image_path": "images/tuscobia.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/tuscobia/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/tuscobia/recreation"
    },
    {
        "id": "whiteriver",
        "name": "White River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 19-mile trail follows a former rail corridor as it travels between Elkhorn in Walworth County and Dover in Racine County, with a short gap in Burlington. The trail passes by numerous bridges, scenic vistas, quaint towns, farmlands and wetlands. The trail is operated by Walworth and Racine counties and is within five miles of Lake Geneva and Big Foot Beach State Park.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/whiteriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The two-mile adjacent horse trail is open along the corridor between Springfield and Lyons for horseback riding. Each rider age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "The fairly level grade and smooth limestone surface make this 19-mile trail suitable for bicyclists, walkers and joggers. Each bicyclist age 16 or older needs a Wisconsinstate trail passwhile using the trail.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_White%20%20River%20Trail.jpg?itok=Awc32Kxh",
        "downloaded_image_path": "images/whiteriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/whiteriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/whiteriver/recreation"
    },
    {
        "id": "whitefish",
        "name": "Whitefish Dunes State Park",
        "coordinate": {
            "latitude": 44.9284,
            "longitude": -87.182
        },
        "description": "Whitefish Dunes State Park protects the fragile dune environment on the eastern Door County Peninsula. At this day-use park, stroll along Lake Michigan or on one of the many trails throughout the huge sand dunes and forest. A nature center features year-round programs, exhibits and displays. The park's reservable picnic shelter overlooks Lake Michigan and is adjacent to the nature center, beach and hiking trails.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Hunting and trapping",
            "Pets",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "8 PM",
            "text_description": "The park is open year-round from 6 a.m. to 8 p.m. The main gate opens at 8 a.m."
        },
        "contact": {
            "phone": "+1-920-823-2400",
            "email": "sarah.stepanik@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/whitefish"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Whitefish Dunes State Park offers a variety of recreation opportunities to visitors year-round. View the links below to learn more about some of the popular activities available at this park.",
            "Whitefish Dunes State Park offers accessible opportunities including a nature center, beach viewing platform, and accessible picnic shelter. The park has a beach wheelchair available that can be checked out at no charge. Call the property for more information on the beach wheelchair.",
            "This property features a universally accessible trail. For more information, visitAccessible Recreation.",
            "Biking at Whitefish Dunes State Park",
            "Boating, canoeing and kayaking at Whitefish Dunes State Park",
            "Fishing at Whitefish Dunes State Park",
            "Hiking at Whitefish Dunes State Park",
            "Hunting and trapping at Whitefish Dunes State Park",
            "Pets at Whitefish Dunes State Park",
            "Picnicking and shelters at Whitefish Dunes State Park",
            "Swimming and Lake Michigan at Whitefish Dunes State Park",
            "Winter activities at Whitefish Dunes State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": true,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Whitefish%20Dunes.jpg?itok=sqisvyzc",
        "downloaded_image_path": "images/whitefish.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/whitefish/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/whitefish/recreation"
    },
    {
        "id": "wildgoose",
        "name": "Wild Goose State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This 34-mile rail trail skirts the western edge of the vast Horicon Marsh, a National Wildlife Refuge and world-famous home to over 250 migrant bird species.\u00a0The Wild Goose State Trail was Wisconsin\u2019s first \u201ccooperative\u201d State trail and is maintained and operated by Dodge and Fond du Lac counties.\u00a0 The trail runs from State Highway 60 in Clyman Junction to the city of Fond du Lac, passing by several small communities.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-920-929-3135",
            "email": "parks@co.dodge.wi.us",
            "website": "https://dnr.wisconsin.gov/topic/parks/wildgoose"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "In Dodge County, horses are welcomed on a separate 14-mile pathway along the main trail corridor between Highway 60 and Pautsch Road. Horses must keep off the limestone surfaced trail except at designated horse trail crossings. The horse trail winds through wooded and open areas and the terrain is generally easy riding, however, special caution is necessary for areas with steep side slopes, wet crossings and near highways and roads. The trail surface is a combination of grass, dirt and wood chips. Parking and portable toilet facilities are available at the State Highway 60 trailhead and the Minnesota Junction area just north of State Highway 33. Water and electricity are not provided.",
            "The level grade and smooth surface make this trail suitable for bicyclists, walkers and joggers. Walkers and bikers must stay on the main trail corridor and keep off the adjacent horse trail in Dodge County.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "Winter All-Terrain Vehicle (ATV) and Utility Terrain Vehicle (UTV) use are permitted on the main trail betweenDec. 1 and March 31 in Dodge County onlyand only when conditions allow. Operators must follow allWisconsin ATV and UTV laws. This segment of the trail is 20 miles long. ATVs and UTVs are prohibited from using the adjacent horse trail and are not permitted in Fond du Lac County. For the most current trail conditions during winter, call 920-386-3705.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Walkers%20on%20Trail.jpg?itok=hRojgr-1",
        "downloaded_image_path": "images/wildgoose.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wildgoose/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wildgoose/recreation"
    },
    {
        "id": "wildrivers",
        "name": "Wild Rivers State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Wild Rivers State Trail stretches 104 miles through Douglas, Washburn and Barron counties in northwest Wisconsin. The surrounding area is rich in natural resources and wildlife habitat. The trail crosses numerous rivers and streams, including the Namakagon River, a federally designated river which is part of the St. Croix National Scenic Riverway. The trail passes through the communities of Solon Springs, Gordon, Minong, Trego, Spooner, Haugen and Rice Lake.",
        "activities": [
            "All-terrain Vehicles",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-378-2219",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/wildrivers"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Wild Rivers State Trail stretches 104 miles through Douglas, Washburn and Barron counties in northwest Wisconsin. The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "All-terrain vehicles (ATVs) are allowed on the trail year-round. Operators must follow allWisconsin ATV operation laws. The Wild Rivers State Trail also provides connections to many miles of county ATV trail systems.",
            "The entire trail is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "The entire trail is open to walking and bicycling, though bicycling is not recommended. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Both theNorth Country National Scenic Trailand theIce Age National Scenic Trailcross the Wild Rivers State Trail. Just north of Rice Lake, the Wild Rivers State Trail connects to the Tuscobia State Trail. The segment of the Tuscobia trail nearest its junction with the Wild Rivers State Trail, from Highway SS to the Barron/Washburn county line (near Angus), is designated as part of the Ice Age Trail and is limited to non-motorized use, with the exception of snowmobiling in winter. Motorized vehicles are also prohibited on the North Country Trail.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails is at the discretion of each county. Snowmobile trails which cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails is done on a county-wide basis, however localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails. TheTravel Wisconsin Snow Conditions Report[exit DNR], andlocal club and county snowmobile web pages[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Trail%20ATV%20Yellow.jpg?itok=q-Mcn2p-",
        "downloaded_image_path": "images/wildrivers.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wildrivers/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wildrivers/recreation"
    },
    {
        "id": "wildcat",
        "name": "Wildcat Mountain State Park",
        "coordinate": {
            "latitude": 43.6976,
            "longitude": -90.574
        },
        "description": "Located on a ridge rising steeply above the Kickapoo River, Wildcat Mountain State Park offers camping for families, groups and horseback riders. Twenty-one miles of scenic hiking, nature and equestrian trails meander through the park. An observation point and picnic areas overlook the Kickapoo Valley. The Kickapoo River is popular for paddling and rentals are available in the village of Ontario.Wildcat Mountain State Park is celebrating its 75th anniversary in 2023!",
        "activities": [
            "Camping",
            "Canoeing and kayaking",
            "Fishing",
            "Hiking",
            "Horseback riding",
            "Hunting",
            "Picnicking and shelters",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-337-4775",
            "email": "Andrew.Haffele@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/wildcat"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Wildcat Mountain State Park provides a wide variety of recreational opportunities for every visitor. Click the links below to learn about some of the popular activities available at this park. The park is also an excellent location to experience the awe and wonder of a trulydark sky!",
            "Camping Wildcat Mountain State Park",
            "Canoeing and kayaking Wildcat Mountain State Park",
            "Fishing Wildcat Mountain State Park",
            "Hiking at Wildcat Mountain State Park",
            "Horseback riding Wildcat Mountain State Park",
            "Hunting and trapping Wildcat Mountain State Park",
            "Picnicking and shelters Wildcat Mountain State Park",
            "Winter activities Wildcat Mountain State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Wildcat.jpg?itok=aXBAPceB",
        "downloaded_image_path": "images/wildcat.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wildcat/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wildcat/recreation"
    },
    {
        "id": "willowflowage",
        "name": "Willow Flowage",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "With limited development and access, the Willow Flowage Scenic Waters Area is a large, island-studded reservoir with a truly wild flavor. The property includes 73 miles of shoreline (95% of which is undeveloped), 106 islands and seven boat landings. There are 37 rustic campsites scattered along the flowage shoreline and islands and 4 rustic campsites along the Lower Tomahawk River. All campsites are accessible by watercraft and are clearly marked along the water's edge.",
        "activities": [
            "Biking",
            "Boating, Canoeing and Kayaking",
            "Camping",
            "Dogs",
            "Fishing",
            "Hiking",
            "Horses",
            "Hunting and trapping",
            "Snowmobile and ATVs",
            "Wildlife Viewing"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The property is open from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-892-0143",
            "email": "adam.wallace@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/lands/willowflowage"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Surrounded by swamps, bogs and other watery lowlands, the Willow Flowage Scenic Waters Area is isolated from roads and development. This remoteness, along with its natural shoreline, draws visitors from around the state and region. For a wilderness experience described as \"almost Canada,\" come visit the Willow Flowage Scenic Waters Area.",
            "Mountain biking is allowed on all interior roads and trails on the Willow Flowage, including the Nature Trail and Hiking Trail. Please be courteous and use caution if hikers or hunters are also using the trails.",
            "Boating, Canoeing and Kayaking at Willow Flowage",
            "Camping at Willow Flowage",
            "Due to nesting loons and waterfowl, leashes are required on the flowage from April 1 until July 1 each year. In addition, dogs must be prevented from damaging the fragile shorelines and banks at campsites. If any damage occurs due to dogs, owners may receive citations or be held liable for repair costs.",
            "Fishing at Willow Flowage",
            "An accessible Nature Trail is located a quarter-mile\u00a0mile north of the dam on Willow Dam Road. A paved parking lot provides access to the trail, which includes over 1 mile of crushed-granite surface and another mile of mowed trail out to Indian Shack Point if water levels allow. Interpretive signs and benches are located along the trail. Walk-in access is available to campsites 1, 3 and G5 via the Nature Trail.",
            "Another primitive, multi-loop Hiking Trail is located about two miles north of Willow Dam Road on Cedar Falls Road. The trailhead is\u00a0about one mile west of Cedar Falls Road. The Hiking Trail provides visitors with more than five miles of mowed and signed trails, multiple scenic vistas and many benches for relaxing.",
            "Horseback riding is allowed on all interior roads and trails of the Willow Flowage, except for the Nature Trail or other signed and posted areas.",
            "All lands are open for hunting only during the scheduled seasons and with the appropriate licenses. Ruffed grouse, snowshoe hare, white-tailed deer, black bears, and turkeys are the primary game species. Willow Flowage contains more than 30 miles of hunter walking trails which are periodically maintained and mowed for access. Trappers can find beaver, muskrat, otter, raccoon, fisher and mink on the property. Please review the most current regulations before you hunt or trap. Firearms must be cased and unloaded while in or within 100 yards of designated campsites.",
            "Snowmobile and ATVs",
            "White-tailed deer, bear, ruffed grouse, ducks, eagles, loons, wolves and even occasionally moose roam the area. According to 2016 surveys, there were seven nesting pairs of ospreys on the flowage that provide lucky visitors with dramatic fishing displays from April through October."
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Lands_Hero%20Image_Fishing%20in%20Morning.jpg?itok=UfOh8P4M",
        "downloaded_image_path": "images/willowflowage.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/lands/willowflowage/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/lands/willowflowage/recreation"
    },
    {
        "id": "willowriver",
        "name": "Willow River State Park",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "This popular park in northwest Wisconsin\u00a0features spectacular views of\u00a0Willow Falls and the Willow River Gorge. Prairie remnants, miles of scenic hiking trails,\u00a0family and group campgrounds, lakeside picnic areas and a nature center are all found within 2,800 acres of rolling countryside. Visitors will also enjoy paddling, fishing and swimming opportunities on Little Falls Lake.",
        "activities": [
            "Accessibility",
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-715-386-5931",
            "email": "Aaron.Mason@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/willowriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Willow River State Park offers a variety of recreational opportunities for visitors to enjoy year-round. View the links below to learn more about some of the popular activities available at this park.",
            "Willow River State Park offers an accessible fishing pier. Accessible campsites are available in the \u201c100\u201d and \u201c300\u201d campgrounds. In addition, the Hidden Ponds Nature Trail is universally accessible.\u00a0Accessible restroom facilities are available at the beach and in the campgrounds.",
            "Biking at Willow River State Park",
            "Boating, canoeing and kayaking at Willow River State Park",
            "Camping at Willow River State Park",
            "Fishing at Willow River State Park",
            "Hiking at Willow River State Park",
            "Hunting and trapping at Willow River State Park",
            "Picnic areas and playgrounds at Willow River State Park",
            "Swimming at Willow River State Park",
            "Winter activities at Willow River State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Willow%20River.jpg?itok=2vuLX5lc",
        "downloaded_image_path": "images/willowriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/willowriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/willowriver/recreation"
    },
    {
        "id": "wiouwash",
        "name": "Wiouwash State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Wiouwash State Trail is named for Winnebago, Outagamie, Waupaca and Shawano counties. This trail, built on a former rail corridor, is maintained and operated by the four counties the trail traverses. Two sections of the trail are complete and are separated by a gap of about 30 miles. In Shawano County, the northern segment of the trail travels 19 miles between Birnamwood and Split Rock. The southern segment of the trail is open for 22 miles from Hortonville to Oshkosh.",
        "activities": [
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-526-5216",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/wiouwash"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Several gaps remain along the rail corridor before the two segments of the Wiouwash State Trail are connected by a continuous trail. Ongoing efforts are being made to acquire right-of-way or obtain the necessary easements to complete the trail. Once completed, the trail may eventually run from the town of Aniwa in Shawano County to downtown Oshkosh.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "The two segments of the Wiouwash State Trail corridor are open for horses. Riders are asked to limit their use of the trail immediately following a heavy rainfall to reduce the amount of damage to the trail. Riders must pick up after their horse.",
            "The level grade and limestone surface make this trail suitable for bicyclists, walkers and joggers. Bikers do not need a trail pass while using the trail. Due to the possibility of hoof marks on the trail surface, wider-tire bicycles are recommended.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report\u00a0[exit DNR], andlocal club and county snowmobile\u00a0webpages\u00a0[exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to walking, bicycling, cross-country skiing and snowshoeing, however, the trail is not groomed and users must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero-Image_Wiouwash.jpg?itok=Ex9pXvCP",
        "downloaded_image_path": "images/wiouwash.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wiouwash/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wiouwash/recreation"
    },
    {
        "id": "wolfriver",
        "name": "Wolf River State Trail",
        "coordinate": {
            "latitude": null,
            "longitude": null
        },
        "description": "The Wolf River State Trail runs 33 miles on a former rail corridor from White Lake to Crandon. Four additional miles of trail are currently under development south of White Lake to the Menomonee/Langlade county line. Once complete, the Wolf River State Trail will total 37 miles. The trail skirts the Wolf River and the Nicolet National Forestwhere camping, hunting, fishing, hiking, mountain biking and cross-country skiing opportunities are plentiful.",
        "activities": [
            "All-terrain vehicles (ATVs) and Off-highway motorcycles (OHMs)",
            "Horseback riding",
            "Walking and bicycling",
            "Winter activities",
            "No Hunting and trapping allowed on trail"
        ],
        "hours": {
            "open": "",
            "close": "",
            "text_description": ""
        },
        "contact": {
            "phone": "+1-715-478-3475",
            "email": "",
            "website": "https://dnr.wisconsin.gov/topic/parks/wolfriver"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": ""
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "The Wolf River State Trail runs adjacent to theNicolet National Forest\u00a0[exit DNR]where camping, hunting, fishing, hiking, mountain biking and cross-country skiing opportunities are plentiful. A segment of the corridor between Highway 64 and Lily is near the Wolf River. The river is well known for trout fishing and the whitewater rapids frequently draw rafters, kayakers and canoeists.",
            "The trail may bring a number of different users to the trail at the same time. It is important to use good trail etiquette to ensure the enjoyment and safety of all trail users.",
            "ATVs and OHMs both need to be registered before riding on the trail. Operators must use only legally marked routes to leave the trail. Cross-country travel through the Nicolet National Forest or on private land is prohibited. Wisconsin ATV and OHM operation laws must be followed.",
            "All-terrain vehicle useuse varies by different sections on the trail.",
            "Street-legal off-highway motorcycleuse varies by different sections on the trail. OHMs are permitted on the Wolf River State Trail in Forest County when ATV use is allowed. OHMs are not allowed on the trail in Langlade County.",
            "The Forest County segment is open to horseback riding. The trail is not groomed or surfaced and may be rough or soft in many sections. Riders must share the trail with motorized vehicles.",
            "The trail in Forest County is open to walking and bicycling. The trail may be rough or soft in many sections. If you plan to bike the trail, the tread is more suitable for off-road bikes. The trail is not developed in Langlade County but walkers and bicyclists may use the trail tread.",
            "Pet owners, please be sure to have your pet on a leash, 8 feet or shorter, at all times. You must pick up after your pet.",
            "Snowmobiles are permitted on the trail. Operators must follow allWisconsin snowmobile laws. The undeveloped segment of trail between White Lake and the Menomonee County line is open to snowmobiles, but not to other motorized uses. The trail also connects to numerous miles of county snowmobile trails.",
            "The opening and closing of snowmobile trails are at the discretion of each county. Snowmobile trails that cross DNR lands are opened and closed consistent with the surrounding county (or counties). Whenever possible, the opening and closing of snowmobile trails are done on a county-wide basis, however, localized conditions may require localized trail opening and closing. It is the responsibility of the county to provide notification about the status of snowmobile trails.",
            "TheTravel Wisconsin Snow Conditions Report [exit DNR], andlocal club and county snowmobile webpages [exit DNR]and telephone hotlines will provide the most current information.",
            "The trail is open to cross-country skiing and snowshoeing; however, the trail is not groomed and skiers and snowshoers must share the trail with snowmobiles. Skiers do not need a trail pass while using the trail.",
            "Hunting and trapping are not allowed on the trail corridor. For more information, please see:"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Hiking%20Boot%20Fall.jpg?itok=7oXZArM5",
        "downloaded_image_path": "images/wolfriver.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wolfriver/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wolfriver/recreation"
    },
    {
        "id": "wyalusing",
        "name": "Wyalusing State Park",
        "coordinate": {
            "latitude": 42.9778,
            "longitude": -91.1139
        },
        "description": "At Wyalusing State Park, camp 500 feet above the confluence of the Wisconsin and Mississippi rivers. One of Wisconsin's oldest state parks, Wyalusing features family and group campsites, hiking trails, a canoe trail, Native American burial mounds, bird watching, fishing, boating, bicycling and picnicking on bluff top overlooks. Wyalusing's overnight group lodge and dormitories can be reserved by contacting the property office.",
        "activities": [
            "Accessibility",
            "Hiking",
            "Biking",
            "Camping",
            "Picnicking and shelters",
            "Boating, canoeing and kayaking",
            "Fishing",
            "Hunting and trapping",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "The park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-996-2261",
            "email": "oliver.reistroffer@wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/wyalusing"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Wyalusing State Park provides a wide variety of recreational opportunities. Click the links below to learn about some of the popular activities at this park.",
            "Wyalusing State Park offers an accessible campsite and an accessible fishing pier.",
            "Hiking at Wyalusing State Park",
            "Biking at Wyalusing State Park",
            "Camping at Wyalusing State Park",
            "Picnicking and shelters at Wyalusing State Park",
            "Boating, canoeing and kayaking at Wyalusing State Park",
            "Fishing at Wyalusing State Park",
            "Hunting and trapping at Wyalusing State Park",
            "Winter activities at Wyalusing State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": true,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Wyalusing%20Hero%201170%20x%20470.jpg?itok=15OaM-_x",
        "downloaded_image_path": "images/wyalusing.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/wyalusing/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/wyalusing/recreation"
    },
    {
        "id": "yellowstone",
        "name": "Yellowstone Lake State Park",
        "coordinate": {
            "latitude": 42.771,
            "longitude": -89.9857
        },
        "description": "One of a few lakes in southwestern Wisconsin, 450-acre Yellowstone Lake State Park is a popular year-round recreation area that offers visitors ample space to enjoy camping, swimming, fishing, boating, hiking, biking and picnicking. In winter the park is open to ice fishing, snowmobiling and cross-country skiing. A large family campground and group camp are just a short walk from the beach and boat landing.",
        "activities": [
            "Biking",
            "Boating, canoeing and kayaking",
            "Camping",
            "Fishing",
            "Hiking",
            "Hunting",
            "Picnicking and shelters",
            "Swimming",
            "Winter activities"
        ],
        "hours": {
            "open": "6 AM",
            "close": "11 PM",
            "text_description": "Yellowstone Lake State Park is open year-round from 6 a.m. to 11 p.m."
        },
        "contact": {
            "phone": "+1-608-523-4427",
            "email": "Michael.Degenhardt@Wisconsin.gov",
            "website": "https://dnr.wisconsin.gov/topic/parks/yellowstone"
        },
        "facilities": [],
        "entranceFee": {
            "daily": null,
            "annual": null,
            "text_description": "A vehicle admission sticker is required."
        },
        "parking": {
            "totalSpaces": null,
            "isFree": null
        },
        "rules": [
            "Yellowstone Lake State Park provides a variety of recreation opportunities. Click the links below to learn more about some of the popular activities at this park.",
            "Biking at Yellowstone Lake State Park",
            "Boating, canoeing and kayaking at Yellowstone Lake State Park",
            "Camping at Yellowstone Lake State Park",
            "Fishing at Yellowstone Lake State Park",
            "Hiking at Yellowstone Lake State Park",
            "Hunting and trapping at Yellowstone Lake State Park",
            "Picnicking and shelters at Yellowstone Lake State Park",
            "Swimming at Yellowstone Lake State Park",
            "Winter activities at Yellowstone Lake State Park"
        ],
        "seasonalInfo": {
            "bestTimeToVisit": "May through October",
            "seasonalClosures": [
                "Some facilities closed in winter"
            ]
        },
        "isDogFriendly": false,
        "isAccessible": false,
        "image_from_listing": "https://dnr.wisconsin.gov/sites/default/files/styles/content_page_landscape_278_x_185/public/hero-images/Parks_Hero%20Image_Yellowstone%20Lake.jpg?itok=UHF7iimq",
        "downloaded_image_path": "images/yellowstone.jpg",
        "info_url": "https://dnr.wisconsin.gov/topic/parks/yellowstone/info",
        "recreation_url": "https://dnr.wisconsin.gov/topic/parks/yellowstone/recreation"
    }
]
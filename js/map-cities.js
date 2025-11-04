
const cities = [
    {
        name: "New York",
        state: "NY",
        lat: 40.7128,
        lng: -74.0060,
        info: ""
    },
    {
        name: "Rockland Lake State Park",
        state: "NY",
        lat: 41.1166,
        lng: -73.9160,
        info: ""
    },
    {
        name: "Newburgh",
        state: "NY",
        lat: 41.5034,
        lng: -74.0107,
        info: ""
    },
    {
        name: "Livingston",
        state: "NY",
        lat: 42.1273,
        lng: -73.8440,
        info: ""
    },
    {
        name: "Troy",
        state: "NY",
        lat: 42.7284,
        lng: -73.6918,
        info: ""
    },
    {
        name: "Whitehall",
        state: "NY",
        lat: 43.5670,
        lng: -73.4079,
        info: ""
    },
    {
        name: "Addison County Airport (Skydive)",
        state: "VT",
        lat: 44.0264,
        lng: -73.2384,
        info: ""
    },
    {
        name: "South Hero",
        state: "VT",
        lat: 44.6293,
        lng: -73.3079,
        info: ""
    },
    {
        name: "Noyan",
        state: "QC",
        lat: 45.0065,
        lng: -73.3644,
        info: ""
    },
    {
        name: "Montreal",
        state: "QC",
        lat: 45.5017,
        lng: -73.5673,
        info: ""
    },
    {
        name: "St-Jérôme Aerodrome",
        state: "QC",
        lat: 45.7909,
        lng: -74.0416,
        info: ""
    },
    {
        name: "Mont-Tremblant",
        state: "QC",
        lat: 46.1219,
        lng: -74.5951,
        info: ""
    },
    {
        name: "Mont-Laurier",
        state: "QC",
        lat: 46.5492,
        lng: -75.4988,
        info: ""
    },
    {
        name: "Lac-Sainte-Marie (near Lac Roland)",
        state: "QC",
        lat: 46.0694,
        lng: -75.8344,
        info: ""
    },
    {
        name: "Lac Gabro (near Sainte-Anne-du-Lac)",
        state: "QC",
        lat: 46.7333,
        lng: -75.6167,
        info: ""
    },
    {
        name: "Val-d'Or",
        state: "QC",
        lat: 48.1066,
        lng: -77.7818,
        info: ""
    },
    {
        name: "Val-d'Or (20km South/Approx)",
        state: "QC",
        lat: 47.9268,
        lng: -77.7718,
        info: ""
    },
    {
        name: "Amos",
        state: "QC",
        lat: 48.5667,
        lng: -78.1167,
        info: ""
    },
    {
        name: "Rouyn-Noranda",
        state: "QC",
        lat: 48.2366,
        lng: -79.0152,
        info: ""
    },
    {
        name: "Bruno-Guigues",
        state: "QC",
        lat: 47.5303,
        lng: -79.2553,
        info: ""
    },
    {
        name: "Témiscamingue (Quebec-Ontario Border Area)",
        state: "QC/ON",
        lat: 46.7269,
        lng: -79.1000,
        info: ""
    },
    {
        name: "North Bay",
        state: "ON",
        lat: 46.3090,
        lng: -79.4608,
        info: ""
    },
    {
        name: "Sudbury",
        state: "ON",
        lat: 46.4900,
        lng: -81.0100,
        info: ""
    },
    {
        name: "Whitefish",
        state: "ON",
        lat: 46.3986,
        lng: -81.3094,
        info: ""
    },
    {
        name: "Highway 17 (near Thessalon, ON - approx for Case Road)",
        state: "ON",
        lat: 46.2570,
        lng: -83.5650,
        info: ""
    },
    {
        name: "Highway 17 (near Blind River, ON - 85km west of Thessalon)",
        state: "ON",
        lat: 46.1950,
        lng: -82.9550,
        info: ""
    },
    {
        name: "Little Rapids",
        state: "ON",
        lat: 46.4172,
        lng: -82.8808,
        info: ""
    },
    {
        name: "Sault Ste. Marie",
        state: "ON",
        lat: 46.5333,
        lng: -84.3467,
        info: ""
    },
    {
        name: "Batchawana Bay",
        state: "ON",
        lat: 46.8997,
        lng: -84.5768,
        info: ""
    },
{
        name: "Wawa",
        state: "ON",
        lat: 47.9942,
        lng: -84.7709,
        info: ""
    },
    {
        name: "White River",
        state: "ON",
        lat: 48.5833,
        lng: -85.2500,
        info: ""
    },
    {
        name: "Marathon",
        state: "ON",
        lat: 48.7180,
        lng: -86.3860,
        info: ""
    },
    {
        name: "Pays Plat First Nation",
        state: "ON",
        lat: 48.8680,
        lng: -87.2140,
        info: ""
    },
    {
        name: "Highway 17 (Nipigon Area)",
        state: "ON",
        lat: 49.0069,
        lng: -88.2435,
        info: ""
    },
    {
        name: "Kenora",
        state: "ON",
        lat: 49.7690,
        lng: -94.4913,
        info: ""
    },
    {
        name: "Elma",
        state: "MB",
        lat: 50.0837,
        lng: -95.8450,
        info: ""
    },
    {
        name: "Winnipeg",
        state: "MB",
        lat: 49.8951,
        lng: -97.1384,
        info: ""
    },
    {
        name: "Edmonton",
        state: "AB",
        lat: 53.5461,
        lng: -113.4938,
        info: ""
    },
    {
        name: "Calgary",
        state: "AB",
        lat: 51.0447,
        lng: -114.0719,
        info: ""
    },
    {
        name: "Banff",
        state: "AB",
        lat: 51.1784,
        lng: -115.5708,
        info: ""
    },
    {
        name: "Kelowna",
        state: "BC",
        lat: 49.8880,
        lng: -119.4960,
        info: ""
    },
    {
        name: "Highway 97C (Merritt-Kelowna area)",
        state: "BC",
        lat: 49.7711,
        lng: -120.3700,
        info: ""
    },
    {
        name: "New Westminster",
        state: "BC",
        lat: 49.2069,
        lng: -122.9110,
        info: ""
    },
    {
        name: "Vancouver",
        state: "BC",
        lat: 49.2827,
        lng: -123.1207,
        info: ""
    },
    {
        name: "Sidney Airport (Skydive)",
        state: "BC",
        lat: 48.6470,
        lng: -123.4280,
        info: ""
    },
    {
        name: "Victoria",
        state: "BC",
        lat: 48.4284,
        lng: -123.3656,
        info: ""
    },
    {
        name: "Metchosin/Sooke (Farm area)",
        state: "BC",
        lat: 48.4000,
        lng: -123.6300,
        info: ""
    },
    {
        name: "Nanaimo",
        state: "BC",
        lat: 49.1659,
        lng: -124.0080,
        info: ""
    },
    {
        name: "Port Alberni",
        state: "BC",
        lat: 49.2330,
        lng: -124.8000,
        info: ""
    },
    {
        name: "Tofino",
        state: "BC",
        lat: 49.1558,
        lng: -125.9083,
        info: ""
    },
    {
        name: "Vancouver (Return 1)",
        state: "BC",
        lat: 49.2827,
        lng: -123.1207,
        info: ""
    },
    {
        name: "Calgary (Return 1)",
        state: "AB",
        lat: 51.0447,
        lng: -114.0719,
        info: ""
    },
    {
        name: "Sicamous",
        state: "BC",
        lat: 50.8440,
        lng: -119.0069,
        info: ""
    },
    {
        name: "Revelstoke",
        state: "BC",
        lat: 50.9990,
        lng: -118.1970,
        info: ""
    },
    {
        name: "Edmonton (Return 1)",
        state: "AB",
        lat: 53.5461,
        lng: -113.4938,
        info: ""
    },
    {
        name: "Prince George",
        state: "BC",
        lat: 53.9171,
        lng: -122.7497,
        info: ""
    },
    {
        name: "Fort St. John",
        state: "BC",
        lat: 56.2483,
        lng: -120.8524,
        info: ""
    },
    {
        name: "Fort Nelson",
        state: "BC",
        lat: 58.8050,
        lng: -122.7050,
        info: ""
    },
    {
        name: "Whitehorse",
        state: "YT",
        lat: 60.7161,
        lng: -135.0558,
        info: ""
    },
    {
        name: "Fort Nelson (Return)",
        state: "BC",
        lat: 58.8050,
        lng: -122.7050,
        info: ""
    },
    {
        name: "Edmonton (Return 2)",
        state: "AB",
        lat: 53.5461,
        lng: -113.4938,
        info: ""
    },
    {
        name: "Calgary (Return 2)",
        state: "AB",
        lat: 51.0447,
        lng: -114.0719,
        info: ""
    },
    {
        name: "Vancouver (Return 2)",
        state: "BC",
        lat: 49.2827,
        lng: -123.1207,
        info: ""
    },
    {
        name: "New Westminster (Return)",
        state: "BC",
        lat: 49.2069,
        lng: -122.9110,
        info: ""
    },
    {
        name: "White Rock",
        state: "BC",
        lat: 49.0200,
        lng: -122.8000,
        info: ""
    },
    {
        name: "Burlington",
        state: "WA",
        lat: 48.4735,
        lng: -122.3276,
        info: ""
    },
    {
        name: "Freeland",
        state: "WA",
        lat: 48.0333,
        lng: -122.5667,
        info: ""
    },
    {
        name: "Seattle",
        state: "WA",
        lat: 47.6062,
        lng: -122.3321,
        info: ""
    },
    {
        name: "Bellevue",
        state: "WA",
        lat: 47.6104,
        lng: -122.2015,
        info: ""
    },
    {
        name: "Rosburg",
        state: "WA",
        lat: 46.2928,
        lng: -123.6375,
        info: ""
    },
    {
        name: "Astoria",
        state: "OR",
        lat: 46.1878,
        lng: -123.8313,
        info: ""
    },
    {
        name: "Rockaway Beach",
        state: "OR",
        lat: 45.6032,
        lng: -123.9454,
        info: ""
    },
    {
        name: "Newport",
        state: "OR",
        lat: 44.6293,
        lng: -124.0534,
        info: ""
    },
    {
        name: "Florence",
        state: "OR",
        lat: 43.9912,
        lng: -124.1065,
        info: ""
    },
    {
        name: "Coos Bay",
        state: "OR",
        lat: 43.3754,
        lng: -124.2185,
        info: ""
    },
    {
        name: "Brookings",
        state: "OR",
        lat: 42.0573,
        lng: -124.2987,
        info: ""
    },
    {
        name: "Highway 1 (Redwood National Park Area)",
        state: "CA",
        lat: 41.2000,
        lng: -124.0800,
        info: ""
    },
    {
        name: "San Francisco",
        state: "CA",
        lat: 37.7749,
        lng: -122.4194,
        info: ""
    },
    {
        name: "Berkeley",
        state: "CA",
        lat: 37.8715,
        lng: -122.2730,
        info: ""
    },
    {
        name: "San Jose",
        state: "CA",
        lat: 37.3382,
        lng: -121.8863,
        info: ""
    },
    {
        name: "Aptos",
        state: "CA",
        lat: 36.9899,
        lng: -121.8908,
        info: ""
    },
    {
        name: "Carmel Valley",
        state: "CA",
        lat: 36.5298,
        lng: -121.7247,
        info: ""
    },
    {
        name: "Highway 1 (Big Sur Coast)",
        state: "CA",
        lat: 36.1400,
        lng: -121.6800,
        info: ""
    },
    {
        name: "Grover Beach",
        state: "CA",
        lat: 35.1972,
        lng: -120.6214,
        info: ""
    },
    {
        name: "Taft-Maricopa Airport (Skydiving)",
        state: "CA",
        lat: 35.1528,
        lng: -119.4670,
        info: ""
    },
    {
        name: "Highway 178 (Mojave Area)",
        state: "CA",
        lat: 35.6000,
        lng: -118.0000,
        info: ""
    },
    {
        name: "Furnace Creek",
        state: "CA",
        lat: 36.4627,
        lng: -116.8676,
        info: ""
    },
    {
        name: "Death Valley Junction",
        state: "CA",
        lat: 36.3119,
        lng: -116.4025,
        info: ""
    },
    {
        name: "Las Vegas",
        state: "NV",
        lat: 36.1716,
        lng: -115.1391,
        info: ""
    },
    {
        name: "Las Vegas (Hostel Area/Return)",
        state: "NV",
        lat: 36.1000,
        lng: -115.1000,
        info: ""
    },
    {
        name: "Kelso Depot (Mojave)",
        state: "CA",
        lat: 35.0347,
        lng: -115.5867,
        info: ""
    },
    {
        name: "Amboy",
        state: "CA",
        lat: 34.5558,
        lng: -115.7533,
        info: ""
    },
    {
        name: "Cathedral City",
        state: "CA",
        lat: 33.7786,
        lng: -116.4842,
        info: ""
    },
    {
        name: "Palm Springs",
        state: "CA",
        lat: 33.8303,
        lng: -116.5453,
        info: ""
    },
    {
        name: "Escondido",
        state: "CA",
        lat: 33.1192,
        lng: -117.0869,
        info: ""
    },
    {
        name: "Lake Elsinore (Skydive)",
        state: "CA",
        lat: 33.6600,
        lng: -117.3333,
        info: ""
    },
    {
        name: "Dana Point",
        state: "CA",
        lat: 33.4686,
        lng: -117.6800,
        info: ""
    },
    {
        name: "Escondido (Return)",
        state: "CA",
        lat: 33.1192,
        lng: -117.0869,
        info: ""
    },
    {
        name: "Brawley",
        state: "CA",
        lat: 32.9789,
        lng: -115.5342,
        info: ""
    },
    {
        name: "Slab City",
        state: "CA",
        lat: 33.2667,
        lng: -115.5000,
        info: ""
    },
    {
        name: "Palo Verde",
        state: "CA",
        lat: 33.3283,
        lng: -114.7356,
        info: ""
    },
    {
        name: "Aguila",
        state: "AZ",
        lat: 34.1670,
        lng: -113.1930,
        info: ""
    },
{
        name: "Prescott",
        state: "AZ",
        lat: 34.5400,
        lng: -112.4685,
        info: ""
    },
    {
        name: "Sedona",
        state: "AZ",
        lat: 34.8697,
        lng: -111.9774,
        info: ""
    },
    {
        name: "Highway 180 (Flagstaff Area)",
        state: "AZ",
        lat: 35.1500,
        lng: -111.7500,
        info: ""
    },
    {
        name: "Springerville",
        state: "AZ",
        lat: 34.1378,
        lng: -109.2882,
        info: ""
    },
    {
        name: "Reserve",
        state: "NM",
        lat: 33.7081,
        lng: -108.7561,
        info: ""
    },
    {
        name: "Santa Fe",
        state: "NM",
        lat: 35.6870,
        lng: -105.9378,
        info: ""
    },
    {
        name: "New Mexico-Colorado Border (near US-285)",
        state: "CO",
        lat: 37.0000,
        lng: -106.0000,
        info: ""
    },
    {
        name: "Moffat",
        state: "CO",
        lat: 37.9328,
        lng: -105.8906,
        info: ""
    },
    {
        name: "Lakewood",
        state: "CO",
        lat: 39.7118,
        lng: -105.0805,
        info: ""
    },
    {
        name: "Denver",
        state: "CO",
        lat: 39.7392,
        lng: -104.9903,
        info: ""
    },
    {
        name: "Fort Morgan",
        state: "CO",
        lat: 40.2458,
        lng: -103.7997,
        info: ""
    },
    {
        name: "Wray",
        state: "CO",
        lat: 40.0633,
        lng: -102.2471,
        info: ""
    },
    {
        name: "Stratton",
        state: "NE",
        lat: 40.1264,
        lng: -101.4018,
        info: ""
    },
    {
        name: "Arapahoe",
        state: "NE",
        lat: 40.2975,
        lng: -99.8971,
        info: ""
    },
    {
        name: "Holdrege",
        state: "NE",
        lat: 40.4522,
        lng: -99.3787,
        info: ""
    },
    {
        name: "Hastings",
        state: "NE",
        lat: 40.5878,
        lng: -98.3965,
        info: ""
    },
    {
        name: "Fairmont",
        state: "NE",
        lat: 40.6385,
        lng: -97.5501,
        info: ""
    },
    {
        name: "Lincoln",
        state: "NE",
        lat: 40.8136,
        lng: -96.7026,
        info: ""
    },
    {
        name: "Omaha",
        state: "NE",
        lat: 41.2565,
        lng: -95.9345,
        info: ""
    },
    {
        name: "Corning",
        state: "IA",
        lat: 40.9995,
        lng: -94.7377,
        info: ""
    },
    {
        name: "Highway 34 (Near Osceola, IA)",
        state: "IA",
        lat: 41.0400,
        lng: -93.7500,
        info: ""
    },
    {
        name: "Burlington",
        state: "IA",
        lat: 40.8037,
        lng: -91.1090,
        info: ""
    },
    {
        name: "Kewanee",
        state: "IL",
        lat: 41.2356,
        lng: -89.9218,
        info: ""
    },
    {
        name: "Rochelle Airport (Skydive)",
        state: "IL",
        lat: 41.8700,
        lng: -89.0600,
        info: ""
    },
    {
        name: "Chicago",
        state: "IL",
        lat: 41.8781,
        lng: -87.6298,
        info: ""
    },
    {
        name: "Skydive Chicago (Ottawa Area)",
        state: "IL",
        lat: 41.3653,
        lng: -88.9419,
        info: ""
    },
    {
        name: "Spring Valley",
        state: "IL",
        lat: 41.3217,
        lng: -89.1981,
        info: ""
    },
    {
        name: "Peoria",
        state: "IL",
        lat: 40.6936,
        lng: -89.5888,
        info: ""
    },
    {
        name: "Mount Sterling",
        state: "IL",
        lat: 40.1775,
        lng: -90.7580,
        info: ""
    },
    {
        name: "Pleasant Hill",
        state: "IL",
        lat: 39.5250,
        lng: -90.8750,
        info: ""
    },
    {
        name: "St. Louis",
        state: "MO",
        lat: 38.6270,
        lng: -90.1994,
        info: ""
    },
    {
        name: "Chester",
        state: "IL",
        lat: 37.9150,
        lng: -89.8228,
        info: ""
    },
    {
        name: "Charleston",
        state: "MO",
        lat: 36.9200,
        lng: -89.3622,
        info: ""
    },
    {
        name: "Tiptonville",
        state: "TN",
        lat: 36.3684,
        lng: -89.4795,
        info: ""
    },
    {
        name: "Covington",
        state: "TN",
        lat: 35.5681,
        lng: -89.6462,
        info: ""
    },
    {
        name: "Memphis",
        state: "TN",
        lat: 35.1495,
        lng: -90.0489,
        info: ""
    },
    {
        name: "Clarksdale",
        state: "MS",
        lat: 34.1983,
        lng: -90.5723,
        info: ""
    },
    {
        name: "Eudora",
        state: "AR",
        lat: 33.1009,
        lng: -91.2415,
        info: ""
    },
    {
        name: "Newellton",
        state: "LA",
        lat: 32.0674,
        lng: -91.2290,
        info: ""
    },
    {
        name: "Road 418LA (Near St. Joseph)",
        state: "LA",
        lat: 31.8500,
        lng: -91.2000,
        info: ""
    },
    {
        name: "Baton Rouge",
        state: "LA",
        lat: 30.4515,
        lng: -91.1871,
        info: ""
    },
    {
        name: "LaPlace",
        state: "LA",
        lat: 30.0694,
        lng: -90.4734,
        info: ""
    },
    {
        name: "New Orleans",
        state: "LA",
        lat: 29.9511,
        lng: -90.0715,
        info: ""
    },
    // ** Florida Segment **

    {
        name: "Mobile",
        state: "AL",
        lat: 30.6954,
        lng: -88.0399,
        info: "City in Alabama"
    },
    {
        name: "Tallahassee",
        state: "FL",
        lat: 30.4383,
        lng: -84.2807,
        info: "Capital of Florida"
    },
    {
        name: "Homosassa Springs",
        state: "FL",
        lat: 28.7905,
        lng: -82.5802,
        info: "Homosassa Springs, Florida"
    },
    
    {
        name: "Bradenton",
        state: "FL",
        lat: 27.4989,
        lng: -82.5748,
        info: ""
    },
    {
        name: "Miami",
        state: "FL",
        lat: 25.7617,
        lng: -80.1918,
        info: "Miami, Florida"
    },
    {
        name: "Key Largo",
        state: "FL",
        lat: 25.1053,
        lng: -80.4475,
        info: "Key Largo, Florida"
    },
    {
        name: "Key West",
        state: "FL",
        lat: 24.5551,
        lng: -81.7800,
        info: ""
    },
    {
        name: "Key Largo",
        state: "FL",
        lat: 25.1053,
        lng: -80.4475,
        info: "Key Largo, Florida"
    },
    {
        name: "Miami",
        state: "FL",
        lat: 25.7617,
        lng: -80.1918,
        info: "Miami, Florida"
    },
    {
        name: "Atlantic Beach",
        state: "FL",
        lat: 30.3341,
        lng: -81.3984,
        info: ""
    },
    {
        name: "West Palm Beach",
        state: "FL",
        lat: 26.7153,
        lng: -80.0534,
        info: ""
    },
{
        name: "Tallahassee",
        state: "FL",
        lat: 30.4383,
        lng: -84.2807,
        info: "Capital of Florida"
    },
    {
        name: "Mobile",
        state: "AL",
        lat: 30.6954,
        lng: -88.0399,
        info: "City in Alabama"
    },
    // ** Return to Louisiana/Texas **
    {
        name: "New Orleans (Return)",
        state: "LA",
        lat: 29.9511,
        lng: -90.0715,
        info: ""
    },
    {
        name: "Houma",
        state: "LA",
        lat: 29.5952,
        lng: -90.7198,
        info: ""
    },
    {
        name: "Adeline (Near New Iberia)",
        state: "LA",
        lat: 30.0258,
        lng: -91.7317,
        info: ""
    },
    {
        name: "Lafayette",
        state: "LA",
        lat: 30.2241,
        lng: -92.0198,
        info: ""
    },
    {
        name: "Kemah",
        state: "TX",
        lat: 29.5399,
        lng: -95.0210,
        info: ""
    },
    {
        name: "Houston",
        state: "TX",
        lat: 29.7604,
        lng: -95.3698,
        info: ""
    },
    {
        name: "Bellville",
        state: "TX",
        lat: 29.9324,
        lng: -96.2573,
        info: ""
    },
    {
        name: "Smithville",
        state: "TX",
        lat: 30.0099,
        lng: -97.1408,
        info: ""
    },
    {
        name: "Austin",
        state: "TX",
        lat: 30.2672,
        lng: -97.7431,
        info: ""
    },
    {
        name: "Highway 80 (Near San Marcos, TX)",
        state: "TX",
        lat: 29.8800,
        lng: -97.9400,
        info: ""
    },
    {
        name: "Skidmore",
        state: "TX",
        lat: 28.3275,
        lng: -97.7472,
        info: ""
    },
    {
        name: "Edinburg",
        state: "TX",
        lat: 26.3023,
        lng: -98.1633,
        info: ""
    },
    {
        name: "Highway 97 (Near Sarita)",
        state: "TX",
        lat: 27.2400,
        lng: -97.6300,
        info: ""
    },
    // ** Mexico Segment **
    {
        name: "San Fernando",
        state: "MX-TAM",
        lat: 24.8550,
        lng: -98.8070,
        info: ""
    },
    {
        name: "Jiménez",
        state: "MX-TAM",
        lat: 24.2690,
        lng: -98.2040,
        info: ""
    },
    {
        name: "Ciudad Victoria",
        state: "MX-TAM",
        lat: 23.7333,
        lng: -99.1333,
        info: ""
    },
    {
        name: "Ciudad del Maíz",
        state: "MX-SLP",
        lat: 22.4080,
        lng: -99.6050,
        info: ""
    },
    {
        name: "San Luis Potosí",
        state: "MX-SLP",
        lat: 22.1528,
        lng: -100.9859,
        info: ""
    },
    {
        name: "Zacatecas",
        state: "MX-ZAC",
        lat: 22.7715,
        lng: -102.5830,
        info: ""
    },
    {
        name: "Tabasco",
        state: "MX-ZAC",
        lat: 22.4283,
        lng: -102.8500,
        info: ""
    },
    {
        name: "Aguascalientes",
        state: "MX-AGS",
        lat: 21.8833,
        lng: -102.2833,
        info: ""
    },
    {
        name: "Lagos de Moreno",
        state: "MX-JAL",
        lat: 21.3650,
        lng: -101.9300,
        info: ""
    },
    {
        name: "León",
        state: "MX-GUA",
        lat: 21.1219,
        lng: -101.6823,
        info: ""
    },
    {
        name: "León (20km Area)",
        state: "MX-GUA",
        lat: 21.0500,
        lng: -101.7500,
        info: ""
    },
    {
        name: "Guanajuato",
        state: "MX-GUA",
        lat: 21.0189,
        lng: -101.2589,
        info: ""
    },
    {
        name: "Dolores Hidalgo",
        state: "MX-GUA",
        lat: 20.9333,
        lng: -100.9333,
        info: ""
    },
    {
        name: "San Miguel de Allende",
        state: "MX-GUA",
        lat: 20.9144,
        lng: -100.7420,
        info: ""
    },
    {
        name: "Yuriria",
        state: "MX-GUA",
        lat: 20.2000,
        lng: -101.1500,
        info: ""
    },
    {
        name: "Morelia",
        state: "MX-MIC",
        lat: 19.7042,
        lng: -101.1965,
        info: ""
    },
    {
        name: "Pátzcuaro",
        state: "MX-MIC",
        lat: 19.5167,
        lng: -101.6000,
        info: ""
    },
    {
        name: "Morelia (Return)",
        state: "MX-MIC",
        lat: 19.7042,
        lng: -101.1965,
        info: ""
    },
    {
        name: "Highway 15 Bridge (Near Zitácuaro)",
        state: "MX-MIC",
        lat: 19.4100,
        lng: -100.3500,
        info: ""
    },
    {
        name: "Toluca",
        state: "MX-MEX",
        lat: 19.2826,
        lng: -99.6542,
        info: ""
    },
    {
        name: "Nevado de Toluca (Summit Area)",
        state: "MX-MEX",
        lat: 19.1090,
        lng: -99.7610,
        info: ""
    },
    {
        name: "Metepec",
        state: "MX-MEX",
        lat: 19.2558,
        lng: -99.5997,
        info: ""
    },
    {
        name: "Mexico City",
        state: "MX-CMX",
        lat: 19.4326,
        lng: -99.1332,
        info: ""
    },
    {
        name: "Cuautla (Skydive)",
        state: "MX-MOR",
        lat: 18.8100,
        lng: -98.9600,
        info: ""
    },
    {
        name: "Mexico City (Return)",
        state: "MX-CMX",
        lat: 19.4326,
        lng: -99.1332,
        info: ""
    },
    {
        name: "Huejotzingo",
        state: "MX-PUE",
        lat: 19.1417,
        lng: -98.4000,
        info: ""
    },
    {
        name: "Cholula",
        state: "MX-PUE",
        lat: 19.0620,
        lng: -98.3130,
        info: ""
    },
    {
        name: "Puebla",
        state: "MX-PUE",
        lat: 19.0438,
        lng: -98.2001,
        info: ""
    },
    {
        name: "Skydive Puebla (Atlixco Area)",
        state: "MX-PUE",
        lat: 18.8913,
        lng: -98.4410,
        info: ""
    },
    {
        name: "Huajuapan de León",
        state: "MX-OAX",
        lat: 17.8000,
        lng: -97.7833,
        info: ""
    },
    {
        name: "Asunción Nochixtlán",
        state: "MX-OAX",
        lat: 17.4833,
        lng: -96.9500,
        info: ""
    },
    {
        name: "Oaxaca City",
        state: "MX-OAX",
        lat: 17.0732,
        lng: -96.7266,
        info: ""
    },
    {
        name: "Sola de Vega",
        state: "MX-OAX",
        lat: 16.5167,
        lng: -97.0000,
        info: ""
    },
    {
        name: "El Vidrio (Near San Pedro Juchatengo)",
        state: "MX-OAX",
        lat: 16.2000,
        lng: -97.0600,
        info: ""
    },
    {
        name: "Puerto Escondido",
        state: "MX-OAX",
        lat: 15.8600,
        lng: -97.0730,
        info: ""
    },
    {
        name: "Palotada (Near Santa María Tonameca)",
        state: "MX-OAX",
        lat: 15.7500,
        lng: -96.6500,
        info: ""
    },
    {
        name: "Highway 200 (Coastal Road)",
        state: "MX-OAX",
        lat: 16.0500,
        lng: -95.8000,
        info: ""
    },
    {
        name: "Tehuantepec",
        state: "MX-OAX",
        lat: 16.3333,
        lng: -95.2333,
        info: ""
    },
    {
        name: "San Pedro Tapanatepec",
        state: "MX-OAX",
        lat: 16.3888,
        lng: -94.2052,
        info: ""
    },
    {
        name: "San Miguel Chimalapa (Approx for San Miguel)",
        state: "MX-OAX",
        lat: 16.8900,
        lng: -94.0100,
        info: ""
    },
{
        name: "Tuxtla Gutiérrez",
        state: "MX-CHP",
        lat: 16.7535,
        lng: -93.1165,
        info: ""
    },
    {
        name: "Ocosingo",
        state: "MX-CHP",
        lat: 16.9602,
        lng: -92.0910,
        info: ""
    },
    {
        name: "Highway 199 (Near Palenque)",
        state: "MX-CHP",
        lat: 17.5000,
        lng: -91.9000,
        info: ""
    },
    {
        name: "Villahermosa",
        state: "MX-TAB",
        lat: 17.9869,
        lng: -92.9304,
        info: ""
    },
    {
        name: "Highway 180 Church (Near Ciudad del Carmen)",
        state: "MX-CAM",
        lat: 18.6500,
        lng: -91.5000,
        info: ""
    },
    {
        name: "Isla Aguada",
        state: "MX-CAM",
        lat: 18.6656,
        lng: -91.4920,
        info: ""
    },
    {
        name: "Campeche",
        state: "MX-CAM",
        lat: 19.8324,
        lng: -90.5369,
        info: ""
    },
    {
        name: "Mérida",
        state: "MX-YUC",
        lat: 20.9671,
        lng: -89.5925,
        info: ""
    },
    {
        name: "X-Can",
        state: "MX-YUC",
        lat: 20.7300,
        lng: -87.8967,
        info: ""
    },
    {
        name: "Cancún",
        state: "MX-ROO",
        lat: 21.1619,
        lng: -86.8515,
        info: ""
    },
    {
        name: "Puerto Morelos",
        state: "MX-ROO",
        lat: 20.8547,
        lng: -86.8795,
        info: ""
    },
    {
        name: "Playa Del Carmen",
        state: "MX-ROO",
        lat: 20.6277,
        lng: -87.0805,
        info: ""
    },
    {
        name: "Felipe Carrillo Puerto",
        state: "MX-ROO",
        lat: 19.5810,
        lng: -88.0560,
        info: ""
    },
    {
        name: "Bacalar",
        state: "MX-ROO",
        lat: 18.6667,
        lng: -88.3833,
        info: ""
    },
    {
        name: "Orange Walk Town",
        state: "BZ",
        lat: 18.0772,
        lng: -88.5606,
        info: ""
    },
    {
        name: "Belize City",
        state: "BZ",
        lat: 17.5000,
        lng: -88.2000,
        info: ""
    },
    {
        name: "Belize-Guatemala Border (Benque Viejo del Carmen)",
        state: "BZ/GT",
        lat: 17.0600,
        lng: -89.1400,
        info: ""
    },
    {
        name: "Flores",
        state: "GT",
        lat: 16.9230,
        lng: -89.8890,
        info: ""
    },
    {
        name: "Cobán",
        state: "GT",
        lat: 15.4700,
        lng: -90.3667,
        info: ""
    },
    {
        name: "Santa Cruz del Quiché",
        state: "GT",
        lat: 15.0333,
        lng: -91.1333,
        info: ""
    },
    {
        name: "Lake Atitlán (Panajachel)",
        state: "GT",
        lat: 14.7350,
        lng: -91.1500,
        info: ""
    },
    {
        name: "San Andrés Itzapa",
        state: "GT",
        lat: 14.6500,
        lng: -90.9500,
        info: ""
    },
    {
        name: "Jocotenango",
        state: "GT",
        lat: 14.6000,
        lng: -90.7500,
        info: ""
    },
    {
        name: "Road CA-2 (Escuintla Area)",
        state: "GT",
        lat: 14.0000,
        lng: -91.0000,
        info: ""
    },
    {
        name: "Garita Palmera",
        state: "SV",
        lat: 13.8000,
        lng: -90.0000,
        info: ""
    },
    {
        name: "San Salvador",
        state: "SV",
        lat: 13.6929,
        lng: -89.2182,
        info: ""
    },
    {
        name: "San Lorenzo",
        state: "HN",
        lat: 13.4500,
        lng: -87.4500,
        info: ""
    },
    {
        name: "San Miguel",
        state: "SV",
        lat: 13.4833,
        lng: -88.1667,
        info: ""
    },
    {
        name: "Jícaro Galán",
        state: "HN",
        lat: 13.3833,
        lng: -87.4167,
        info: ""
    },
    {
        name: "Choluteca",
        state: "HN",
        lat: 13.3000,
        lng: -87.2000,
        info: ""
    },
    {
        name: "Chichigalpa",
        state: "NI",
        lat: 12.5700,
        lng: -86.3500,
        info: ""
    },
    {
        name: "Las Peñitas",
        state: "NI",
        lat: 12.3500,
        lng: -86.9500,
        info: ""
    },
    {
        name: "Lake Xiloá (Near Managua)",
        state: "NI",
        lat: 12.2000,
        lng: -86.3300,
        info: ""
    },
    {
        name: "Granada",
        state: "NI",
        lat: 11.9271,
        lng: -85.9557,
        info: ""
    },
    {
        name: "Ometepe Island (Moyogalpa)",
        state: "NI",
        lat: 11.5333,
        lng: -85.6700,
        info: ""
    },
    {
        name: "Rivas",
        state: "NI",
        lat: 11.4372,
        lng: -85.8272,
        info: ""
    },
    {
        name: "Palmares",
        state: "CR",
        lat: 10.0000,
        lng: -84.4500,
        info: ""
    },
    {
        name: "Atenas",
        state: "CR",
        lat: 9.9730,
        lng: -84.3750,
        info: ""
    },
    {
        name: "San José",
        state: "CR",
        lat: 9.9328,
        lng: -84.0850,
        info: ""
    },
    {
        name: "Santa María de Dota",
        state: "CR",
        lat: 9.6500,
        lng: -84.0000,
        info: ""
    },
    {
        name: "Copey de Dota",
        state: "CR",
        lat: 9.5850,
        lng: -83.9000,
        info: ""
    },
    {
        name: "Cartago",
        state: "CR",
        lat: 9.8644,
        lng: -83.9197,
        info: ""
    },
    {
        name: "Río Banano (Near Limón)",
        state: "CR",
        lat: 9.9700,
        lng: -83.1500,
        info: ""
    },
    {
        name: "Playa Negra",
        state: "CR",
        lat: 9.6917,
        lng: -82.7483,
        info: ""
    },
    {
        name: "San José (Return 1)",
        state: "CR",
        lat: 9.9328,
        lng: -84.0850,
        info: ""
    },
    {
        name: "Tierras Enamoradas (Near San Carlos)",
        state: "CR",
        lat: 10.4200,
        lng: -84.2800,
        info: ""
    },
    {
        name: "San José (Return 2)",
        state: "CR",
        lat: 9.9328,
        lng: -84.0850,
        info: ""
    },
    {
        name: "Río Banano (Return 1)",
        state: "CR",
        lat: 9.9700,
        lng: -83.1500,
        info: ""
    },
    {
        name: "Jiménez",
        state: "CR",
        lat: 10.2170,
        lng: -84.0500,
        info: ""
    },
    {
        name: "Florencia",
        state: "CR",
        lat: 10.3700,
        lng: -84.4500,
        info: ""
    },
    {
        name: "Tierras Enamoradas (Return)",
        state: "CR",
        lat: 10.4200,
        lng: -84.2800,
        info: ""
    },
    {
        name: "Atenas (Return)",
        state: "CR",
        lat: 9.9730,
        lng: -84.3750,
        info: ""
    },
    {
        name: "San José (Return 3)",
        state: "CR",
        lat: 9.9328,
        lng: -84.0850,
        info: ""
    },
    {
        name: "Turrialba",
        state: "CR",
        lat: 9.9000,
        lng: -83.6833,
        info: ""
    },
    {
        name: "Pacuare (River Area)",
        state: "CR",
        lat: 10.0800,
        lng: -83.4700,
        info: ""
    },
    {
        name: "Río Banano (Return 2)",
        state: "CR",
        lat: 9.9700,
        lng: -83.1500,
        info: ""
    },
    {
        name: "Puerto Viejo de Talamanca",
        state: "CR",
        lat: 9.6565,
        lng: -82.7533,
        info: ""
    },
    {
        name: "Catarina (Near Puerto Viejo)",
        state: "CR",
        lat: 9.7000,
        lng: -82.7500,
        info: ""
    },
    {
        name: "Guabito (CR-PA Border)",
        state: "PA",
        lat: 9.5333,
        lng: -82.5000,
        info: ""
    },
    {
        name: "Chiriquí Grande",
        state: "PA",
        lat: 8.9500,
        lng: -82.1000,
        info: ""
    },
    {
        name: "Tolé",
        state: "PA",
        lat: 8.3581,
        lng: -81.7408,
        info: ""
    },
    {
        name: "Santiago de Veraguas",
        state: "PA",
        lat: 8.0933,
        lng: -80.9789,
        info: ""
    },
    {
        name: "24 de Diciembre (Panama City East)",
        state: "PA",
        lat: 9.0833,
        lng: -79.3333,
        info: ""
    },
    {
        name: "Panama City",
        state: "PA",
        lat: 8.9824,
        lng: -79.5199,
        info: ""
    },
    {
        name: "Sabanitas",
        state: "PA",
        lat: 9.3500,
        lng: -79.8667,
        info: ""
    },
    {
        name: "Portobelo",
        state: "PA",
        lat: 9.5500,
        lng: -79.6500,
        info: ""
    },
    {
        name: "Linton Bay",
        state: "PA",
        lat: 9.6000,
        lng: -79.7000,
        info: ""
    },
    {
        name: "La Chorrera",
        state: "PA",
        lat: 8.8833,
        lng: -79.7833,
        info: ""
    },
    {
        name: "El Llano",
        state: "PA",
        lat: 8.8000,
        lng: -78.6800,
        info: ""
    },
    {
        name: "Puerto de Cartí (Darién Starting Point)",
        state: "PA",
        lat: 9.3500,
        lng: -78.9500,
        info: ""
    },
    {
        name: "Puerto Obaldía (Boat to Colombia)",
        state: "PA",
        lat: 8.6500,
        lng: -77.4000,
        info: ""
    },
    {
        name: "Turbo (Darién Ending Point)",
        state: "CO",
        lat: 8.0900,
        lng: -76.7300,
        info: ""
    },
    {
        name: "Arboletes",
        state: "CO",
        lat: 8.8500,
        lng: -76.4333,
        info: ""
    },
    {
        name: "Hotel Manhattan (Near Tolú)",
        state: "CO",
        lat: 9.5000,
        lng: -75.7500,
        info: ""
    },
    {
        name: "Chinú",
        state: "CO",
        lat: 8.9100,
        lng: -75.4000,
        info: ""
    },
    {
        name: "Ovejas",
        state: "CO",
        lat: 9.5167,
        lng: -75.1667,
        info: ""
    },
    {
        name: "San Jacinto",
        state: "CO",
        lat: 9.8333,
        lng: -75.1667,
        info: ""
    },
    {
        name: "Turbaco",
        state: "CO",
        lat: 10.3333,
        lng: -75.4000,
        info: ""
    },
    {
        name: "Road (Near Barranquilla)",
        state: "CO",
        lat: 10.7000,
        lng: -74.9000,
        info: ""
    },
    {
        name: "Palermo (Near Ciénaga)",
        state: "CO",
        lat: 10.9800,
        lng: -74.3000,
        info: ""
    },
    {
        name: "El Rodadero",
        state: "CO",
        lat: 11.2000,
        lng: -74.2000,
        info: ""
    },
    {
        name: "Santa Marta",
        state: "CO",
        lat: 11.2333,
        lng: -74.1997,
        info: ""
    },
    {
        name: "Palomino",
        state: "CO",
        lat: 11.4500,
        lng: -73.5500,
        info: ""
    },
    {
        name: "Police Control (Riohacha Area)",
        state: "CO",
        lat: 11.5500,
        lng: -72.9000,
        info: ""
    },
    {
        name: "Colombia - Venezuela Border (Maicao Area)",
        state: "CO/VE",
        lat: 11.3500,
        lng: -72.2300,
        info: ""
    },
    {
        name: "Paraguaipoa",
        state: "VE",
        lat: 11.2200,
        lng: -71.9714,
        info: ""
    },  
   {
        name: "Santa Cruz de Mara",
        state: "VE",
        lat: 10.7900,
        lng: -71.6900,
        info: "Near Maracaibo"
    },
    {
        name: "Paraguaipoa",
        state: "VE",
        lat: 11.2200,
        lng: -71.9714,
        info: ""
    },
    {
        name: "Maicao",
        state: "CO",
        lat: 11.3850,
        lng: -72.2420,
        info: ""
    },
    {
        name: "San Juan del Cesar",
        state: "CO",
        lat: 10.8667,
        lng: -73.0000,
        info: ""
    },
    {
        name: "Agustín Codazzi",
        state: "CO",
        lat: 10.0465,
        lng: -73.0067,
        info: ""
    },
    {
        name: "San Roque",
        state: "CO",
        lat: 9.3800,
        lng: -73.7800,
        info: ""
    },
    {
        name: "San Alberto",
        state: "CO",
        lat: 8.0000,
        lng: -73.9600,
        info: ""
    },
    {
        name: "Road 45A (Near Bucaramanga)",
        state: "CO",
        lat: 7.5000,
        lng: -73.3000,
        info: ""
    },
    {
        name: "La Reserva Natural (Near Cimitarra)",
        state: "CO",
        lat: 6.5000,
        lng: -74.0000,
        info: ""
    },
    {
        name: "Bucaramanga",
        state: "CO",
        lat: 7.1132,
        lng: -73.1195,
        info: ""
    },
    {
        name: "Road 45A (Near San Gil)",
        state: "CO",
        lat: 6.5000,
        lng: -73.1800,
        info: ""
    },
    {
        name: "Mogotes",
        state: "CO",
        lat: 6.4667,
        lng: -72.9667,
        info: ""
    },
    {
        name: "Onzaga",
        state: "CO",
        lat: 6.1667,
        lng: -72.8833,
        info: ""
    },
    {
        name: "Soatá",
        state: "CO",
        lat: 6.3333,
        lng: -72.7167,
        info: ""
    },
    {
        name: "La Uvita",
        state: "CO",
        lat: 6.2667,
        lng: -72.7000,
        info: ""
    },
{
        name: "Panqueba",
        state: "CO",
        lat: 6.2736,
        lng: -72.6369,
        info: ""
    },
    {
        name: "Güicán de la Sierra",
        state: "CO",
        lat: 6.4250,
        lng: -72.4500,
        info: ""
    },
    {
        name: "Sierra Nevada del Cocuy (High Point)",
        state: "CO",
        lat: 6.4700,
        lng: -72.3000,
        info: ""
    },
    {
        name: "El Cocuy",
        state: "CO",
        lat: 6.4172,
        lng: -72.3364,
        info: ""
    },
    {
        name: "Finca (Near La Cabaña)",
        state: "CO",
        lat: 6.1000,
        lng: -72.5000,
        info: ""
    },
    {
        name: "Sogamoso",
        state: "CO",
        lat: 5.7188,
        lng: -72.9351,
        info: ""
    },
    {
        name: "Lake Tota (Acuaparque Area)",
        state: "CO",
        lat: 5.5900,
        lng: -72.9300,
        info: ""
    },
    {
        name: "Toca",
        state: "CO",
        lat: 5.6667,
        lng: -73.2000,
        info: ""
    },
    {
        name: "Tunja",
        state: "CO",
        lat: 5.5350,
        lng: -73.3598,
        info: ""
    },
    {
        name: "Villa de Leyva",
        state: "CO",
        lat: 5.6450,
        lng: -73.5350,
        info: ""
    },
    {
        name: "Gachantivá",
        state: "CO",
        lat: 5.6350,
        lng: -73.5850,
        info: ""
    },
    {
        name: "Vélez",
        state: "CO",
        lat: 6.0083,
        lng: -73.6806,
        info: ""
    },
    {
        name: "Cimitarra",
        state: "CO",
        lat: 6.1833,
        lng: -73.9167,
        info: ""
    },
    {
        name: "Highway 62 (Near Puerto Olaya)",
        state: "CO",
        lat: 6.4800,
        lng: -74.3000,
        info: ""
    },
    {
        name: "San José del Nus",
        state: "CO",
        lat: 6.4500,
        lng: -74.9000,
        info: ""
    },
    {
        name: "Highway 25 (Near Barbosa)",
        state: "CO",
        lat: 6.5500,
        lng: -75.3000,
        info: ""
    },
    {
        name: "Medellín",
        state: "CO",
        lat: 6.2442,
        lng: -75.5812,
        info: ""
    },
    {
        name: "La Ceja",
        state: "CO",
        lat: 6.0333,
        lng: -75.4333,
        info: ""
    },
    {
        name: "San Antonio de Prado",
        state: "CO",
        lat: 6.1500,
        lng: -75.6000,
        info: ""
    },
    {
        name: "La Pintada",
        state: "CO",
        lat: 5.6700,
        lng: -75.5700,
        info: ""
    },
    {
        name: "Aguadas",
        state: "CO",
        lat: 5.6333,
        lng: -75.5333,
        info: ""
    },
    {
        name: "Salamina",
        state: "CO",
        lat: 5.4333,
        lng: -75.6000,
        info: ""
    },
    {
        name: "Neira",
        state: "CO",
        lat: 5.1700,
        lng: -75.5200,
        info: ""
    },
    {
        name: "Manizales",
        state: "CO",
        lat: 5.0688,
        lng: -75.5173,
        info: ""
    },
    {
        name: "Pereira",
        state: "CO",
        lat: 4.8143,
        lng: -75.6961,
        info: ""
    },
    {
        name: "Farm (Near Cartago)",
        state: "CO",
        lat: 4.7000,
        lng: -75.9500,
        info: ""
    },
    {
        name: "Corozal (Near Tuluá)",
        state: "CO",
        lat: 4.1000,
        lng: -76.1000,
        info: ""
    },
    {
        name: "El Cabuyal (Near Buga)",
        state: "CO",
        lat: 3.9000,
        lng: -76.3000,
        info: ""
    },
    {
        name: "Piendamó",
        state: "CO",
        lat: 2.6500,
        lng: -76.4833,
        info: ""
    },
    {
        name: "Popayán",
        state: "CO",
        lat: 2.4419,
        lng: -76.6062,
        info: ""
    },
    {
        name: "Highway 25 (Near Rosas)",
        state: "CO",
        lat: 2.2000,
        lng: -76.7000,
        info: ""
    },
    {
        name: "Higuerones-Mercaderes",
        state: "CO",
        lat: 1.8000,
        lng: -76.9000,
        info: ""
    },
    {
        name: "El Empate (Near Chachagüí)",
        state: "CO",
        lat: 1.4500,
        lng: -77.2000,
        info: ""
    },
    {
        name: "Pasto",
        state: "CO",
        lat: 1.2136,
        lng: -77.2842,
        info: ""
    },
    {
        name: "Laguna de la Cocha",
        state: "CO",
        lat: 1.1000,
        lng: -77.1700,
        info: ""
    },
    {
        name: "Sibundoy",
        state: "CO",
        lat: 1.2222,
        lng: -76.9200,
        info: ""
    },
    {
        name: "Villagarzón",
        state: "CO",
        lat: 0.9922,
        lng: -76.6083,
        info: ""
    },
    {
        name: "La Dorada (Near Putumayo)",
        state: "CO",
        lat: 0.8000,
        lng: -76.6500,
        info: ""
    },
    // ** Ecuador Segment **
    {
        name: "Quito",
        state: "EC",
        lat: -0.2201,
        lng: -78.5126,
        info: ""
    },
    {
        name: "Quito (Return/Area)",
        state: "EC",
        lat: -0.2300,
        lng: -78.5000,
        info: ""
    },
    {
        name: "Santa Rita (Near Sangolquí)",
        state: "EC",
        lat: -0.4000,
        lng: -78.4500,
        info: ""
    },
    {
        name: "Cotopaxi National Park Entrance",
        state: "EC",
        lat: -0.6300,
        lng: -78.4300,
        info: ""
    },
    {
        name: "Sigchos",
        state: "EC",
        lat: -0.7300,
        lng: -79.0300,
        info: ""
    },
    {
        name: "Road (Near Zumbahua)",
        state: "EC",
        lat: -0.9000,
        lng: -78.9500,
        info: ""
    },
    {
        name: "Lake Quilotoa",
        state: "EC",
        lat: -0.8660,
        lng: -78.9050,
        info: ""
    },
    {
        name: "Latacunga",
        state: "EC",
        lat: -0.9381,
        lng: -78.6166,
        info: ""
    },
    {
        name: "Ambato",
        state: "EC",
        lat: -1.2443,
        lng: -78.6186,
        info: ""
    },
    {
        name: "Baños de Agua Santa",
        state: "EC",
        lat: -1.3980,
        lng: -78.4330,
        info: ""
    },
    {
        name: "Ambato (Return)",
        state: "EC",
        lat: -1.2443,
        lng: -78.6186,
        info: ""
    },
    {
        name: "Aguas Termales (Near Chimborazo)",
        state: "EC",
        lat: -1.5000,
        lng: -78.9000,
        info: ""
    },
    {
        name: "Chimborazo (Refuge Area)",
        state: "EC",
        lat: -1.4500,
        lng: -78.8500,
        info: ""
    },
    {
        name: "Road (Near Guamote)",
        state: "EC",
        lat: -1.7500,
        lng: -78.7000,
        info: ""
    },
    {
        name: "Guamote",
        state: "EC",
        lat: -2.0100,
        lng: -78.7150,
        info: ""
    },
    {
        name: "Joyagshi",
        state: "EC",
        lat: -2.3000,
        lng: -78.8000,
        info: ""
    },
    {
        name: "Cañar",
        state: "EC",
        lat: -2.5600,
        lng: -78.9300,
        info: ""
    },
    {
        name: "Cuenca",
        state: "EC",
        lat: -2.8900,
        lng: -79.0040,
        info: ""
    },
    {
        name: "Tarqui (Near Cuenca)",
        state: "EC",
        lat: -3.0000,
        lng: -79.0500,
        info: ""
    },
    {
        name: "Loja",
        state: "EC",
        lat: -3.9840,
        lng: -79.2000,
        info: ""
    },
    {
        name: "Loja (Area)",
        state: "EC",
        lat: -3.9900,
        lng: -79.2100,
        info: ""
    },
    {
        name: "Yangana",
        state: "EC",
        lat: -4.3800,
        lng: -79.1600,
        info: ""
    },
    {
        name: "Palanda",
        state: "EC",
        lat: -4.5600,
        lng: -79.1300,
        info: ""
    },
    // ** Peru Segment **
    {
        name: "Namballe",
        state: "PE",
        lat: -5.0500,
        lng: -79.2500,
        info: ""
    },
    {
        name: "Flor de la Frontera",
        state: "PE",
        lat: -5.3000,
        lng: -79.0500,
        info: ""
    },
    {
        name: "La Floresta",
        state: "PE",
        lat: -5.6000,
        lng: -79.0000,
        info: ""
    },
    {
        name: "Jaén",
        state: "PE",
        lat: -5.7600,
        lng: -78.8000,
        info: ""
    },
    {
        name: "Chiple",
        state: "PE",
        lat: -6.0000,
        lng: -78.6000,
        info: ""
    },
    {
        name: "Cutervo",
        state: "PE",
        lat: -6.3800,
        lng: -78.8300,
        info: ""
    },
    {
        name: "Chota",
        state: "PE",
        lat: -6.5800,
        lng: -78.6500,
        info: ""
    },
    {
        name: "Road 3NPE (Cajamarca Area)",
        state: "PE",
        lat: -7.0000,
        lng: -78.3000,
        info: ""
    },
    {
        name: "Cajabamba (Near Cobro Negro)",
        state: "PE",
        lat: -7.6000,
        lng: -78.1000,
        info: ""
    },
    {
        name: "Cajamarca",
        state: "PE",
        lat: -7.1500,
        lng: -78.5000,
        info: ""
    },
    {
        name: "Church (Near San Marcos)",
        state: "PE",
        lat: -7.3000,
        lng: -77.9500,
        info: ""
    },
    {
        name: "Cachachi",
        state: "PE",
        lat: -7.5000,
        lng: -77.9000,
        info: ""
    },
    {
        name: "Cajabamba",
        state: "PE",
        lat: -7.6000,
        lng: -78.0500,
        info: ""
    },
    {
        name: "Laguna Sausacocha",
        state: "PE",
        lat: -7.6500,
        lng: -77.8500,
        info: ""
    },
    {
        name: "Laguna Huangagocha (Near Huamachuco)",
        state: "PE",
        lat: -7.7500,
        lng: -77.9000,
        info: ""
    },
    {
        name: "Cochamarca",
        state: "PE",
        lat: -7.9000,
        lng: -77.7500,
        info: ""
    },
    {
        name: "Chuquicara",
        state: "PE",
        lat: -8.5500,
        lng: -78.2000,
        info: ""
    },
    {
        name: "Huarochiri",
        state: "PE",
        lat: -9.0000,
        lng: -78.0000,
        info: ""
    },
    {
        name: "Caraz",
        state: "PE",
        lat: -9.0400,
        lng: -77.8100,
        info: ""
    },
    {
        name: "Lake Parón",
        state: "PE",
        lat: -8.9600,
        lng: -77.6500,
        info: ""
    },
    {
        name: "Caraz (Return)",
        state: "PE",
        lat: -9.0400,
        lng: -77.8100,
        info: ""
    },
    {
        name: "Huamachuco",
        state: "PE",
        lat: -7.8000,
        lng: -78.0500,
        info: ""
    },
    {
        name: "Lake 69 Trailhead (Near Caraz)",
        state: "PE",
        lat: -9.0500,
        lng: -77.5800,
        info: ""
    },
    {
        name: "Yánama",
        state: "PE",
        lat: -9.1000,
        lng: -77.6000,
        info: ""
    },
    {
        name: "Huaraz",
        state: "PE",
        lat: -9.5260,
        lng: -77.5287,
        info: ""
    },
    {
        name: "Conococha",
        state: "PE",
        lat: -10.1500,
        lng: -77.3000,
        info: ""
    },
    {
        name: "Carhuajara (Near Cajatambo)",
        state: "PE",
        lat: -10.4000,
        lng: -77.0000,
        info: ""
    },
    {
        name: "Llipa",
        state: "PE",
        lat: -10.5500,
        lng: -77.1000,
        info: ""
    },
    {
        name: "Huacho",
        state: "PE",
        lat: -11.0833,
        lng: -77.6000,
        info: ""
    },
    {
        name: "Oyón",
        state: "PE",
        lat: -10.6667,
        lng: -76.8000,
        info: ""
    },
    {
        name: "Rapaz",
        state: "PE",
        lat: -10.7500,
        lng: -76.5000,
        info: ""
    },
    {
        name: "Parquín",
        state: "PE",
        lat: -10.9000,
        lng: -76.3500,
        info: ""
    },
    {
        name: "Vichaycocha",
        state: "PE",
        lat: -11.1000,
        lng: -76.2500,
        info: ""
    },
    {
        name: "Huayllay",
        state: "PE",
        lat: -11.2333,
        lng: -76.4167,
        info: ""
    },
    {
        name: "Yantac (Near Huayllay)",
        state: "PE",
        lat: -11.3500,
        lng: -76.3500,
        info: ""
    },
    {
        name: "Marcapomacocha",
        state: "PE",
        lat: -11.4500,
        lng: -76.3000,
        info: ""
    },
    {
        name: "Río Blanco (Near San Mateo)",
        state: "PE",
        lat: -11.7500,
        lng: -76.0500,
        info: ""
    },
    {
        name: "Carhuapampa de Pariac",
        state: "PE",
        lat: -11.8500,
        lng: -75.9000,
        info: ""
    },
    {
        name: "Jauja",
        state: "PE",
        lat: -11.7500,
        lng: -75.5000,
        info: ""
    },
    {
        name: "Huancayo",
        state: "PE",
        lat: -12.0673,
        lng: -75.2117,
        info: ""
    },
    {
        name: "Laria",
        state: "PE",
        lat: -12.2500,
        lng: -75.1000,
        info: ""
    },
    {
        name: "Manta",
        state: "PE",
        lat: -12.4500,
        lng: -75.0500,
        info: ""
    },
    {
        name: "Huancavelica",
        state: "PE",
        lat: -12.7833,
        lng: -74.9667,
        info: ""
    },
    {
        name: "Pucapampa",
        state: "PE",
        lat: -13.0000,
        lng: -74.8000,
        info: ""
    },
    {
        name: "Rumichaca (Near Acobambilla)",
        state: "PE",
        lat: -13.3000,
        lng: -74.5000,
        info: ""
    },
    {
        name: "Santa Fe (Near Huanta)",
        state: "PE",
        lat: -13.5000,
        lng: -74.1500,
        info: ""
    },
    {
        name: "Totos",
        state: "PE",
        lat: -13.7500,
        lng: -73.9000,
        info: ""
    },
    {
        name: "Pampa Cangallo",
        state: "PE",
        lat: -14.0500,
        lng: -73.8000,
        info: ""
    },
    {
        name: "Vilcas Huamán",
        state: "PE",
        lat: -13.6000,
        lng: -73.9500,
        info: ""
    },
    {
        name: "Village (Near Huancarama)",
        state: "PE",
        lat: -13.4000,
        lng: -73.3000,
        info: ""
    },
    {
        name: "Andahuaylas",
        state: "PE",
        lat: -13.6500,
        lng: -73.3833,
        info: ""
    },
    {
        name: "Huancabamba (Near Andahuaylas)",
        state: "PE",
        lat: -13.8000,
        lng: -73.2000,
        info: ""
    },
    {
        name: "Santa Rosa",
        state: "PE",
        lat: -14.0500,
        lng: -72.7000,
        info: ""
    },
{
        name: "Matara",
        state: "PE",
        lat: -14.3500, // Approximated Matara near Antabamba region
        lng: -73.3000,
        info: ""
    },
    {
        name: "Antabamba",
        state: "PE",
        lat: -14.3600,
        lng: -72.8800,
        info: ""
    },
    {
        name: "Curanco",
        state: "PE",
        lat: -15.0000, // Approximation towards the next road segment
        lng: -72.5000,
        info: ""
    },
    {
        name: "Road (Near Cotahuasi)",
        state: "PE",
        lat: -15.4000,
        lng: -72.2000,
        info: ""
    },
    {
        name: "Arequipa",
        state: "PE",
        lat: -16.3989,
        lng: -71.5369,
        info: ""
    },
    {
        name: "Arequipa (Area)",
        state: "PE",
        lat: -16.3900,
        lng: -71.5300,
        info: ""
    },
    {
        name: "Cayma (Arequipa Suburb)",
        state: "PE",
        lat: -16.3700,
        lng: -71.5600,
        info: ""
    },
    {
        name: "Cañahuas",
        state: "PE",
        lat: -16.0200,
        lng: -71.4500,
        info: ""
    },
    {
        name: "Pulpera (Near Chivay)",
        state: "PE",
        lat: -15.6500,
        lng: -71.3000,
        info: ""
    },
    {
        name: "Condorcuyo",
        state: "PE",
        lat: -15.3100,
        lng: -71.6100,
        info: ""
    },
    {
        name: "Espinar",
        state: "PE",
        lat: -14.9000,
        lng: -71.2900,
        info: ""
    },
    {
        name: "El Descanso",
        state: "PE",
        lat: -14.5333,
        lng: -71.3056,
        info: ""
    },
    {
        name: "Layo",
        state: "PE",
        lat: -14.5000,
        lng: -71.1500,
        info: ""
    },
    {
        name: "Combapata",
        state: "PE",
        lat: -14.1000,
        lng: -71.4300,
        info: ""
    },
    {
        name: "Palcoyo (Rainbow Mountain)",
        state: "PE",
        lat: -13.9000,
        lng: -71.2800,
        info: ""
    },
    {
        name: "Combapata (Return)",
        state: "PE",
        lat: -14.1000,
        lng: -71.4300,
        info: ""
    },
    {
        name: "Pitumarca",
        state: "PE",
        lat: -13.9200,
        lng: -71.3500,
        info: ""
    },
    {
        name: "Cusipata",
        state: "PE",
        lat: -13.9000,
        lng: -71.5000,
        info: ""
    },
    {
        name: "Pampacamara (Near Checacupe)",
        state: "PE",
        lat: -13.7000,
        lng: -71.4000,
        info: ""
    },
    {
        name: "Mazuko",
        state: "PE",
        lat: -13.1000,
        lng: -70.3700,
        info: ""
    },
    {
        name: "Road (Near Mazuco)",
        state: "PE",
        lat: -12.7500,
        lng: -69.8000,
        info: ""
    },
    {
        name: "Puerto Maldonado",
        state: "PE",
        lat: -12.5933,
        lng: -69.1914,
        info: ""
    },
    {
        name: "Alerta",
        state: "PE",
        lat: -11.9000,
        lng: -68.8000,
        info: ""
    },
    {
        name: "Cubija (Cobija)",
        state: "BO",
        lat: -11.0200,
        lng: -68.7667,
        info: ""
    },
    {
        name: "Brazilia (Near Assis Brasil)",
        state: "BR",
        lat: -10.9200,
        lng: -69.5700,
        info: ""
    },
    {
        name: "Rio Branco",
        state: "BR",
        lat: -9.9700,
        lng: -67.8100,
        info: ""
    },
    {
        name: "Road 364 (Near Abunã)",
        state: "BR",
        lat: -9.7000,
        lng: -66.5000,
        info: ""
    },
    {
        name: "Gas station Abunã",
        state: "BR",
        lat: -9.6900,
        lng: -65.3300,
        info: ""
    },
    {
        name: "Lourdes (Near Nova Mamoré)",
        state: "BR",
        lat: -10.0000, // Approximated location
        lng: -64.7000,
        info: ""
    },
    {
        name: "Jaci Paraná",
        state: "BR",
        lat: -9.2500,
        lng: -64.4100,
        info: ""
    },
    {
        name: "Porto Velho",
        state: "BR",
        lat: -8.7619,
        lng: -63.9039,
        info: ""
    },
    {
        name: "Porto Velho (Boat Departure)",
        state: "BR",
        lat: -8.7500,
        lng: -63.9000,
        info: ""
    },
    {
        name: "Manaus",
        state: "BR",
        lat: -3.1200,
        lng: -60.0200,
        info: ""
    },
    {
        name: "Manaus (Boat Departure)",
        state: "BR",
        lat: -3.1100,
        lng: -60.0100,
        info: ""
    },
    {
        name: "Santarém",
        state: "BR",
        lat: -2.4333,
        lng: -54.7167,
        info: ""
    },
    {
        name: "Macapá",
        state: "BR",
        lat: 0.0400,
        lng: -51.0600,
        info: ""
    },
    {
        name: "Macapá (Area)",
        state: "BR",
        lat: 0.0500,
        lng: -51.0500,
        info: ""
    },
    {
        name: "Porto Grande",
        state: "BR",
        lat: 0.5500,
        lng: -51.4167,
        info: ""
    },
    {
        name: "Tartarugalzinho",
        state: "BR",
        lat: 1.5000,
        lng: -50.9167,
        info: ""
    },
    {
        name: "Calafate (Near Amapá)",
        state: "BR",
        lat: 2.1000,
        lng: -51.2000,
        info: ""
    },
    {
        name: "Carnot (Near Calçoene)",
        state: "BR",
        lat: 2.5000,
        lng: -51.1000,
        info: ""
    },
    {
        name: "BR156 community (Near Oiapoque)",
        state: "BR",
        lat: 3.5000,
        lng: -51.5000,
        info: ""
    },
    {
        name: "Oiapoque",
        state: "BR",
        lat: 3.8400,
        lng: -51.8300,
        info: ""
    },
    {
        name: "St. George (Saint-Georges-de-l'Oyapock)",
        state: "GF",
        lat: 3.8833,
        lng: -51.8000,
        info: ""
    },
    {
        name: "Cayenne",
        state: "GF",
        lat: 4.9400,
        lng: -52.3400,
        info: ""
    },
    {
        name: "Remire-MontJoly",
        state: "GF",
        lat: 4.8800,
        lng: -52.2800,
        info: ""
    },
    {
        name: "Kourou",
        state: "GF",
        lat: 5.1600,
        lng: -52.6400,
        info: ""
    }
];

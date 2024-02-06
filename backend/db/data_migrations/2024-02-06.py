from utils.operations import SqlAlchemyOperations


op = SqlAlchemyOperations()
op.bulk_insert([
    {
        "slug":"fried-porkchops",
        "title":"Fried Porkchops",
        "subtitle":"A delicious breakfast or great with curry or gravy.",
        "img":"fried_porkchops_2.jpeg",
        "img_alt":"Fried Porkchops",
        "category":"Food",
        "subcategory":[
            "Pork",
            "Breakfast",
            "Dinner",
            "Recipe"
        ],
        "created_at":"Tuesday, May 2, 2023 4:50 PM",
        "updated_at": "Tuesday, May 2, 2023 4:50 PM"
    },
    {
        "slug":"smother-me-in-lemon-curd",
        "title":"Smother Me In Lemon Curd",
        "subtitle":"Recipes of things to make that pair well with lemon curd.",
        "img":"lemon_curd.jpeg",
        "img_alt":"Lemon Curd",
        "category":"Food",
        "subcategory":[
            "Baking",
            "Lists"
        ],
        "created_at":"Sunday, November 26, 2023 8:15 PM",
        "updated_at":"Sunday, November 26, 2023 8:15 PM"
    },
    {
        "slug":"summer-2023-garden",
        "title":"Summer 2023 Garden",
        "subtitle":"Summer 2023 Garden",
        "img":"garden_boxes.jpeg",
        "img_alt":"Summer 2023 Garden Boxes",
        "category":"Gardening",
        "subcategory":[
            "Raised Beds",
            "Companion Planting"
        ],
        "created_at":"Monday, May 1, 2023 1:30 PM",
        "updated_at":"Monday, May 1, 2023 1:30 PM"
    },
    {
        "slug":"building-a-pig-shelter",
        "title":"Building a Pig Shelter",
        "subtitle":"A shelter for my future piggies",
        "img":"pig_shelter_4.jpeg",
        "img_alt":"Pig Shelter Frame",
        "category":"Gardening",
        "subcategory":[
            "Pigs",
            "Livestock",
            "Woodworking"
        ],
        "created_at":"Tuesday, May 2, 2023 3:40 PM",
        "updated_at":"Tuesday, May 2, 2023 3:40 PM"
    },
    {
        "slug":"2024-spring-summer-garden-plan",
        "title":"2024 Spring/Summer Garden Plan",
        "subtitle":"Yet again, going overboard",
        "img":"garden_2024.jpeg",
        "img_alt":"Garden 2024 Plan",
        "category":"Gardening",
        "subcategory":[
            "Raised Beds",
            "Companion Planting",
            "Woodworking"
        ],
        "created_at":"Saturday, January 27, 2024 8:10 PM",
        "updated_at":"Saturday, January 27, 2024 8:10 PM"
    },
    {
        "slug":"making-curtains-and-valences",
        "title":"Making Curtains & Valences",
        "subtitle":"Getting to Know My Sewing Machine",
        "img":"curtain_2.jpeg",
        "img_alt":"DIY Bedroom Curtains",
        "category":"Crafts",
        "subcategory":[
            "Sewing",
            "DIY"
        ],
        "created_at":"Saturday, January 27, 2024 7:13 PM",
        "updated_at":"Saturday, January 27, 2024 7:13 PM"
    },
    {
        "slug":"i-built-an-arbor",
        "title":"I Built An Arbor!",
        "subtitle":"",
        "img":"arbor_2.jpeg",
        "img_alt":"DIY Garden Arbor",
        "category":"Crafts",
        "subcategory":[
            "Woodworking",
            "Easy Projects",
            "Backyard Projects"
        ],
        "created_at":"Saturday, January 27, 2024 7:41 PM",
        "updated_at":"Saturday, January 27, 2024 7:41 PM"
    },
    {
        "slug":"home-is-where-the-cake-is",
        "title":"Home is Where the Cake Is",
        "subtitle":"A surprise for my boyfriend who's moving in with me",
        "img":"cake_home_3.jpeg",
        "img_alt":"Home is Where the Cake Is Cross Stitch",
        "category":"Crafts",
        "subcategory":[
            "Cross Stitch"
        ],
        "created_at":"Saturday, January 27, 2024 7:50 PM",
        "updated_at":"Saturday, January 27, 2024 7:50 PM"
    },
    {
        "slug":"squirrel-sampler",
        "title":"A Squirrel Sampler",
        "subtitle":"A present for my mom",
        "img":"squirrel_sampler_2.jpeg",
        "img_alt":"Squirrel Sampler Cross Stitch",
        "category":"Crafts",
        "subcategory":[
            "Cross Stitch"
        ],
        "created_at":"Saturday, January 27, 2024 7:55 PM",
        "updated_at":"Saturday, January 27, 2024 7:55 PM"
    },
    {
        "slug":"fresh-baked-pies",
        "title":"Fresh Baked Pies!",
        "subtitle":"A present for my aunt!",
        "img":"pies_2.jpeg",
        "img_alt":"Fresh Baked Pies Embroidery",
        "category":"Crafts",
        "subcategory":[
            "Embroidery"
        ],
        "created_at":"Saturday, January 27, 2024 7:56 PM",
        "updated_at":"Saturday, January 27, 2024 7:56 PM"
    },
    {
        "slug":"building-a-workbench",
        "title":"Building a Workbench",
        "subtitle":"So I can finally not work on the floor",
        "img":"workbench_2.jpeg",
        "img_alt":"DIY Workbench",
        "category":"Crafts",
        "subcategory":[
            "Woodworking",
            "Easy Projects",
            "DIY"
        ],
        "created_at":"Sunday, January 28, 2024 2:24 PM",
        "updated_at":"Sunday, January 28, 2024 2:24 PM"
    },
    {
        "slug":"connecting-a-django-backend-to-a-react-frontend-via-cloudfront-and-terraform",
        "title":"Connecting a Django Backend to a React Frontend via Cloudfront and Terraform",
        "subtitle":"",
        "img":"tcahdotcom.jpeg",
        "img_alt":"tegacayanimalhospital.com Screenshot",
        "category":"Coding",
        "subcategory":[
            "React.js",
            "Django",
            "Web Development"
        ],
        "created_at":"Tuesday, May 2, 2023 9:25 AM",
        "updated_at":"Tuesday, May 2, 2023 9:25 AM"
    },
    {
        "slug":"a-local-bands-website",
        "title":"A Local Band's Website",
        "subtitle":"NoseyNeighborBand.com",
        "img":"noseyneighbor.jpeg",
        "img_alt":"noseyneighborband.com Screenshot",
        "category":"Coding",
        "subcategory":[
            "React.js",
            "Web Development"
        ],
        "created_at":"Friday, May 5, 2023 4:38 PM",
        "updated_at":"Friday, May 5, 2023 4:38 PM"
    },
    {
        "slug":"a-journaling-diary-website",
        "title":"A Journaling/Diary Website",
        "subtitle":"https://journal.poppyland.dev",
        "img":"poppylandjournal.jpeg",
        "img_alt":"journal.poppyland.dev Screenshot",
        "category":"Coding",
        "subcategory":[
            "React.js",
            "Web Development",
            "AWS",
            "Serverless"
        ],
        "created_at":"Thursday, November 16, 2023 11:19 AM",
        "updated_at":"Thursday, November 16, 2023 11:19 AM"
    },
    {
        "slug":"drip-irrigation-via-raspberry-pi",
        "title":"Drip Irrigation via Raspberry Pi",
        "subtitle":"Lazily watering my plants",
        "img":"poppylandraincloud.jpeg",
        "img_alt":"home.poppyland.dev Screenshot",
        "category":"Coding",
        "subcategory":[
            "Raspberry Pi",
            "Gardening",
            "Drip Irrigation"
        ],
        "created_at":"Thursday, November 16, 2023 11:20 AM",
        "updated_at":"Thursday, November 16, 2023 11:20 AM"
    },
    {
        "slug":"jurassic-park-review",
        "title":"Jurassic Park: A Review",
        "subtitle":"I've got dinosaurs on the brain",
        "img":"jurassic_park.jpeg",
        "img_alt":"Jurassic Park on Kindle",
        "category":"Books",
        "subcategory":[
            "Book Review",
            "Fiction",
            "Science Fiction"
        ],
        "created_at":"Sunday, July 18, 2021 11:25 AM",
        "updated_at":"Sunday, July 18, 2021 11:25 AM"
    },
    {
        "slug":"thoughts-on-anne-of-green-gables",
        "title":"Thoughts on Anne of Green Gables",
        "subtitle":"A reminder that it's okay to be a romantic",
        "img":"anne.jpeg",
        "img_alt":"Anne of Green Gables on Kindle",
        "category":"Books",
        "subcategory":[
            "Book Review",
            "Fiction",
            "Classics"
        ],
        "created_at":"Sunday, September 5, 2021 6:50 PM",
        "updated_at":"Sunday, September 5, 2021 6:50 PM"
    }
])
import asyncio
from external.supabase_client import get_supabase_admin
import uuid

async def seed_food():
    supabase = get_supabase_admin()
    
    restaurants = [
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-mX_c8-X_WvE1m-A-M-K-L-V-X-N-I-A&s",
            "name": "Dicos",
            "description": "Founded in 1994, Dicos rivals KFC and McDonald's, serving distinctive fried chicken and burgers, with halal options for travelers worldwide.",
            "address": "Seng Ming Court",
            "rating": 3.6,
            "price": 50,
            "cuisine": "Chinese-style fast food",
            "halal": True,
            "link_to_website": "https://www.foodpanda.hk/restaurant/tqjl/dicos",
            "link_to_google_maps": "https://maps.app.goo.gl/xV53i4AZZUC8xQhv8"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P",
            "name": "Islam Centre Canteen",
            "description": "Popular Wan Chai canteen serving fully halal Cantonese food, famous for authentic dim sum, plus rice and noodle dishes locals.",
            "address": "Wan Chai",
            "rating": 4.5,
            "price": 75,
            "cuisine": "Cantonese food",
            "halal": True,
            "link_to_website": "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d3330314-Reviews-Islamic_Centre_Canteen-Hong_Kong.html",
            "link_to_google_maps": "https://maps.app.goo.gl/9wNk9xuVqPx4gp6"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_U_V_W_X_Y_Z",
            "name": "Ebeneezer's Restaurant & Bar (Hollywood Road)",
            "description": "This Middle-east cuisine restaurant opened in 1993, and there are many branches in different districts. It mainly offers kebab and curry with reasonable prices.",
            "address": "Central",
            "rating": 4.9,
            "price": 150,
            "cuisine": "South Asian",
            "halal": True,
            "link_to_website": "https://www.foodpanda.hk/restaurant/s9fk/ebeneezers-kebabs-and-pizzeria-central",
            "link_to_google_maps": "https://maps.app.goo.gl/fWoi2QbBf1GWHybB9"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_T_U_V_W",
            "name": "Wai Kee",
            "description": "Popular halal Cantonese restaurant in Hong Kong, famous for roast duck, beef brisket noodles, generous portions, and affordable comfort food.",
            "address": "Wan Chai",
            "rating": 3.7,
            "price": 50,
            "cuisine": "Cantonese",
            "halal": True,
            "link_to_website": "https://www.foodpanda.hk/restaurant/zqzc/wai-kee-food",
            "link_to_google_maps": "https://maps.app.goo.gl/8bkcp3Sn1VSvLySY6"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S_T_U_V",
            "name": "Pakeeza",
            "description": "Pakeeza is a Hong Kong restaurant serving authentic Pakistani and Indian halal cuisine, known for rich curries, biryanis, and hospitality",
            "address": "Tsim Sha Tsui",
            "rating": 5.0,
            "price": 150,
            "cuisine": "South Asian",
            "halal": True,
            "link_to_website": "https://www.foodpanda.hk/restaurant/xmio/pakeeza-food-restaurant",
            "link_to_google_maps": "https://maps.app.goo.gl/u81GHPtFWsKeZgCt9"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R_S_T_U",
            "name": "Islam Food In Kowloon City",
            "description": "Islamic restaurants in Kowloon City offer halal beef noodles, lamb curries, naan, friendly service, strong Muslim heritage atmosphere and community.",
            "address": "Kowloon City",
            "rating": 4.1,
            "price": 125,
            "cuisine": "Chinese",
            "halal": True,
            "link_to_website": "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d799850-Reviews-Islam_Food-Hong_Kong.html",
            "link_to_google_maps": "https://maps.app.goo.gl/AkNYyJrjtzXdwPRd6"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcP_Q_R_S_T",
            "name": "Amber restaurant",
            "description": "Amber in Hong Kong is a Michelin-starred restaurant by Richard Ekkebus, renowned for refined French cuisine with modern, sustainable philosophy",
            "address": "Central",
            "rating": 4.6,
            "price": 2000,
            "cuisine": "Modern French",
            "halal": False,
            "link_to_website": "https://www.mandarinoriental.com/en/hong-kong/the-landmark/dine/amber",
            "link_to_google_maps": "https://maps.app.goo.gl/i3a7QnWFwadjAPhm9"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcO_P_Q_R_S",
            "name": "Mott 32",
            "description": "Upscale modern Cantonese cuisine featuring signature Peking duck, refined dim sum, premium meats, regional Chinese influences, and elegant fine-dining atmosphere",
            "address": "Central",
            "rating": 4.5,
            "price": 300,
            "cuisine": "Modern Cantonese",
            "halal": False,
            "link_to_website": "https://mott32.com/",
            "link_to_google_maps": "https://maps.app.goo.gl/fQUKXFBDx5ZRy1M87"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcN_O_P_Q_R",
            "name": "Tim Ho Wan",
            "description": "Tim Ho Wan is a Hong Kong dim sum restaurant, known for affordable Michelin-starred dishes like baked barbecue pork buns",
            "address": "Central",
            "rating": 4.1,
            "price": 100,
            "cuisine": "Cantonese",
            "halal": False,
            "link_to_website": "https://www.timhowan.com/",
            "link_to_google_maps": "https://maps.app.goo.gl/qj3ihFdgArT7h2oy9"
        },
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcM_N_O_P_Q",
            "name": "Yurt",
            "description": "Yurt is a Hong Kong restaurant serving creative modern Central Asian cuisine with bold flavors, interiors, and a lively dining atmosphere",
            "address": "Central",
            "rating": 4.7,
            "price": 150,
            "cuisine": "Central Asian",
            "halal": True,
            "link_to_website": "https://yurthk.com/",
            "link_to_google_maps": "https://maps.app.goo.gl/Wtd21p9Bnv4Vyq1V8"
        }
    ]

    print(f"Seeding {len(restaurants)} restaurants...")
    
    for rest in restaurants:
        try:
            # Omit 'id' and let Supabase auto-generate BIGINT ID
            # This avoids 'invalid input syntax for type bigint' error
            response = supabase.table("GoHK Food").insert(rest).execute()
            if response.data:
                print(f"Successfully seeded: {rest['name']}")
            else:
                print(f"Failed to seed: {rest['name']}")
        except Exception as e:
            print(f"Error seeding {rest['name']}: {e}")

if __name__ == "__main__":
    asyncio.run(seed_food())

import { type FC, useState, useEffect } from 'react'
import ReactStars from "react-stars";
import { foodService } from '../services/food.service';
import type { FoodCardResponse } from '../Types/food';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
import { LuChefHat } from 'react-icons/lu'
import { toast } from 'react-toastify';

const Food: FC = () => {
  const [restaurants, setRestaurants] = useState<FoodCardResponse[]>([])

  // const restaurants: rest[] = [
  //   {
  //     image: dicos,
  //     name: "Dicos",
  //     description: "Founded in 1994, Dicos rivals KFC and McDonald's, serving distinctive fried chicken and burgers, with halal options for travelers worldwide.",
  //     address: "Seng Ming Court",
  //     rating: 3.6,
  //     price: 50,
  //     cuisine: "Chinese-style fast food",
  //     halal: true,
  //     link_to_website: "https://www.foodpanda.hk/restaurant/tqjl/dicos",
  //     link_to_google_maps: "https://maps.app.goo.gl/xV53i4AZZUC8xQhv8"
  //   },
  //   {
  //     image: ICC,
  //     name: "Islam Centre Canteen",
  //     description: "Popular Wan Chai canteen serving fully halal Cantonese food, famous for authentic dim sum, plus rice and noodle dishes locals.",
  //     address: "Wan Chai",
  //     rating: 4.5,
  //     price: 75,
  //     cuisine: "Cantonese food",
  //     halal: true,
  //     link_to_website: "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d3330314-Reviews-Islamic_Centre_Canteen-Hong_Kong.html",
  //     link_to_google_maps: "https://maps.app.goo.gl/9wNk9xuVqPwPx4gp6"
  //   },
  //   {
  //     image: Ebik,
  //     name: "Ebeneezer's Restaurant & Bar (Hollywood Road) ",
  //     description: "This Middle-east cuisine restaurant opened in 1993, and there are many branches in different districts. It mainly offers kebab and curry with reasonable prices.",
  //     address: "Central",
  //     rating: 4.9,
  //     price: 150,
  //     cuisine: "South Asian",
  //     halal: true,
  //     link_to_website: "https://www.foodpanda.hk/restaurant/s9fk/ebeneezers-kebabs-and-pizzeria-central",
  //     link_to_google_maps: "https://maps.app.goo.gl/fWoi2QbBf1GWHybB9"
  //   },
  //   {
  //     image: waikee,
  //     name: "Wai Kee",
  //     description: "Popular halal Cantonese restaurant in Hong Kong, famous for roast duck, beef brisket noodles, generous portions, and affordable comfort food.",
  //     address: "Wan Chai",
  //     rating: 3.7,
  //     price: 50,
  //     cuisine: "Cantonese",
  //     halal: true,
  //     link_to_website: "https://www.foodpanda.hk/restaurant/zqzc/wai-kee-food",
  //     link_to_google_maps: "https://maps.app.goo.gl/8bkcp3Sn1VSvLySY6"
  //   },
  //   {
  //     image: pakeeza,
  //     name: "Pakeeza",
  //     description: "Pakeeza is a Hong Kong restaurant serving authentic Pakistani and Indian halal cuisine, known for rich curries, biryanis, and hospitality",
  //     address: "Tsim Sha Tsui",
  //     rating: 5,
  //     price: 150,
  //     cuisine: "South Asian",
  //     halal: true,
  //     link_to_website: "https://www.foodpanda.hk/restaurant/xmio/pakeeza-food-restaurant",
  //     link_to_google_maps: "https://maps.app.goo.gl/u81GHPtFWsKeZgCt9"
  //   },
  //   {
  //     image: ifink,
  //     name: "Islam Food In Kowloon City",
  //     description: "Islamic restaurants in Kowloon City offer halal beef noodles, lamb curries, naan, friendly service, strong Muslim heritage atmosphere and community.",
  //     address: "Kowloon City",
  //     rating: 4.1,
  //     price: 125,
  //     cuisine: "Chinese",
  //     halal: true,
  //     link_to_website: "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d799850-Reviews-Islam_Food-Hong_Kong.html",
  //     link_to_google_maps: "https://maps.app.goo.gl/AkNYyJrjtzXdwPRd6"
  //   },
  //   {
  //     image: amber,
  //     name: "Amber restaurant",
  //     description: "Amber in Hong Kong is a Michelin-starred restaurant by Richard Ekkebus, renowned for refined French cuisine with modern, sustainable philosophy",
  //     address: "Central",
  //     rating: 4.6,
  //     price: 2000,
  //     cuisine: "Modern French",
  //     halal: false,
  //     link_to_website: "https://www.mandarinoriental.com/en/hong-kong/the-landmark/dine/amber",
  //     link_to_google_maps: "https://maps.app.goo.gl/i3a7QnWFwadjAPhm9"
  //   },
  //   {
  //     image: mott,
  //     name: "Mott 32",
  //     description: "Upscale modern Cantonese cuisine featuring signature Peking duck, refined dim sum, premium meats, regional Chinese influences, and elegant fine-dining atmosphere",
  //     address: "Central",
  //     rating: 4.5,
  //     price: 300,
  //     cuisine: "Modern Cantonese",
  //     halal: false,
  //     link_to_website: "https://mott32.com/",
  //     link_to_google_maps: "https://maps.app.goo.gl/fQUKXFBDx5ZRy1M87"
  //   },
  //   {
  //     image: timhowan,
  //     name: "Tim Ho Wan",
  //     description: "Tim Ho Wan is a Hong Kong dim sum restaurant, known for affordable Michelin-starred dishes like baked barbecue pork buns",
  //     address: "Central",
  //     rating: 4.1,
  //     price: 100,
  //     cuisine: "Cantonese",
  //     halal: false,
  //     link_to_website: "https://www.timhowan.com/",
  //     link_to_google_maps: "https://maps.app.goo.gl/qj3ihFdgArT7h2oy9"
  //   },
  //   {
  //     image: yurt,
  //     name: "Yurt",
  //     description: "Yurt is a Hong Kong restaurant serving creative modern Central Asian cuisine with bold flavors, interiors, and a lively dining atmosphere",
  //     address: "Central",
  //     rating: 4.7,
  //     price: 150,
  //     cuisine: "Central Asian",
  //     halal: true,
  //     link_to_website: "https://yurthk.com/",
  //     link_to_google_maps: "https://maps.app.goo.gl/Wtd21p9Bnv4Vyq1V8"
  //   }
  // ];

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await foodService.getFoodCardList()
        setRestaurants(response.food)
      } catch (error) {
        toast.error("Error fetching restaurants")
        console.error("Error fetching restaurants:", error)
      }
    }
    fetchRestaurants()
  }, [])

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-96/100 md:w-98/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Must-Try Spots</div>
        <p className="mt-1 text-sm text-gray-600">
          Discover irresistible flavors, where bold tastes, fresh ingredients, and delicious experiences await every food lover:
        </p>
        <div className='rounded-lg border-black/10 mt-3'>
          <div>
            {restaurants.map((rest, index) => (
              <div key={index} className='flex flex-col min-[1300px]:flex-row mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                <img src={rest.image} alt="" className="w-full min-[1300px]:w-100 min-[1300px]:h-50 object-cover rounded-l-lg shrink-0" />
                <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-4 lg:mx-10'>
                  <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end'>
                    <p className='font-medium text-xl'>{rest.name}</p>
                    <p className='text-md font-medium'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={rest.link_to_website}>Here</a></p>
                  </div>
                  <p className='text-xs mt-2 w-full lg:w-3/5'>{rest.description}</p>
                  <div className='flex items-center mt-2'>
                    <ReactStars
                      count={5}
                      value={rest.rating}
                      size={20}
                      color2={"#FFD700"}
                      edit={false}
                    />
                    <p className='text-lg ml-2 font-medium'>{rest.rating}</p>
                  </div>
                  <div className='flex justify-between mt-3'>
                    <div className='flex items-center justify-between w-3/4 gap-x-2'>
                      <div className='flex gap-x-4 items-center flex-wrap'>
                        <a target='_blank' href={rest.link_to_google_maps}>
                          <div className='flex gap-x-1 text-red-700 items-center'>
                            <IoLocationOutline size={15} />
                            {rest.address}
                          </div>
                        </a>
                      </div>
                      <div className='flex gap-x-1 items-center w-1/2'>
                        <LuChefHat size={15} />
                        {rest.cuisine} cuisine
                      </div>
                      {rest.halal ? (<div className='text-green-700 flex gap-x-1 items-center'>
                        <CiCircleCheck size={15} />
                        Halal-friendly
                      </div>) : <></>}
                    </div>
                    <div className='text-lg mb:text-xl text-green-700'>
                      ${rest.price}+
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food

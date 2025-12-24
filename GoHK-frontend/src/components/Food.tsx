import type {FC} from 'react'
import ReactStars from "react-stars";

import { IoLocationOutline } from "react-icons/io5";
import { type rest } from '../Types/accomodation_rest_types';
import dicos from '../assets/Food/dicos.jpeg'
import ICC from "../assets/Food/IslamCentreCanteen.jpeg"
import Ebik from "../assets/Food/ebeneezers.jpg"
import waikee from "../assets/Food/wai-kee-1920x1080-b.jpg"
import pakeeza from "../assets/Food/pakeeza.jpeg"
import ifink from "../assets/Food/islam-food-in-kowloon.jpg"
const Food: FC = () => {
  const restaurants: rest[] = [
    {
      image: dicos,
      name: "Dicos",
      description: "Founded in 1994, Dicos rivals KFC and McDonald's, serving distinctive fried chicken and burgers, with halal options for travelers worldwide.",
      address: "Seng Ming Court, 375-377 King's Rd, North Point, Гонконг",
      rating: 3.6,
      price: 50,
      cuisine: "Chinese-style fast food",
      halal: true,
      link_to_website: "https://www.foodpanda.hk/restaurant/tqjl/dicos",
      link_to_google_maps: "https://maps.app.goo.gl/xV53i4AZZUC8xQhv8"
    },
    {
      image: ICC,
      name: "Islam Centre Canteen",
      description: "Popular Wan Chai canteen serving fully halal Cantonese food, famous for authentic dim sum, plus rice and noodle dishes locals.",
      address: "Гонконг, Wan Chai, Oi Kwan Rd, 40號伊斯蘭中心5樓",
      rating: 4.5,
      price: 75,
      cuisine: "Cantonese food",
      halal: true,
      link_to_website: "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d3330314-Reviews-Islamic_Centre_Canteen-Hong_Kong.html",
      link_to_google_maps: "https://maps.app.goo.gl/9wNk9xuVqPwPx4gp6"
    },
    {
      image: Ebik,
      name: "Ebeneezer's Restaurant & Bar (Hollywood Road) ",
      description: "This Middle-east cuisine restaurant opened in 1993, and there are many branches in different districts. It mainly offers kebab and curry with reasonable prices.",
      address: "G/F, 24 Hollywood Road, Soho, Central",
      rating: 4.9,
      price: 150,
      cuisine: "",
      halal: true,
      link_to_website: "https://www.foodpanda.hk/restaurant/s9fk/ebeneezers-kebabs-and-pizzeria-central",
      link_to_google_maps: "https://maps.app.goo.gl/fWoi2QbBf1GWHybB9"
    },
    {
      image: waikee,
      name: "Wai Kee",
      description: "Popular halal Cantonese restaurant in Hong Kong, famous for roast duck, beef brisket noodles, generous portions, and affordable comfort food.",
      address: "Shop 5, Bowrington Road Cooked Food Centre, 1/F, Bowrington Road Market, 21 Bowrington Road, Wan Chai",
      rating: 3.7,
      price: 50,
      cuisine: "Halal Cantonese cuisine",
      halal: true,
      link_to_website: "https://www.foodpanda.hk/restaurant/zqzc/wai-kee-food",
      link_to_google_maps: "https://maps.app.goo.gl/8bkcp3Sn1VSvLySY6"
    },
    {
      image: pakeeza,
      name: "Pakeeza",
      description: "Pakeeza is a Hong Kong restaurant serving authentic Pakistani and Indian halal cuisine, known for rich curries, biryanis, and hospitality",
      address: "Shop 51, 2nd Floor, Mirador Mansion, 58 Nathan Road, Tsim Sha Tsui, Hong Kong China",
      rating: 5,
      price: 150,
      cuisine: "Pakistani and North Indian cuisine",
      halal: true,
      link_to_website: "https://www.foodpanda.hk/restaurant/xmio/pakeeza-food-restaurant",
      link_to_google_maps: "https://maps.app.goo.gl/u81GHPtFWsKeZgCt9"
    },
    {
      image: ifink,
      name: "Islam Food In Kowloon City",
      description: "Islamic restaurants in Kowloon City offer halal beef noodles, lamb curries, naan, friendly service, strong Muslim heritage atmosphere and community.",
      address: "G/F, 1 Lung Kong Road, Kowloon City",
      rating: 4.1,
      price: 125,
      cuisine: "Halal Asian / Hong Kong-style Chinese food",
      halal: true,
      link_to_website: "https://www.tripadvisor.co.uk/Restaurant_Review-g294217-d799850-Reviews-Islam_Food-Hong_Kong.html",
      link_to_google_maps: "https://maps.app.goo.gl/AkNYyJrjtzXdwPRd6"
    },
    {
      image: ifink,
      name: "",
      description: "",
      address: "",
      rating: 0,
      price: 0,
      cuisine: "",
      halal: false,
      link_to_website: "",
      link_to_google_maps: ""
    },
    {
      image:ifink ,
      name: "",
      description: "",
      address: "",
      rating: 0,
      price: 0,
      cuisine: "",
      halal: false,
      link_to_website: "",
      link_to_google_maps: ""
    },
    {
      image: ifink,
      name: "",
      description: "",
      address: "",
      rating: 0,
      price: 0,
      cuisine: "",
      halal: false,
      link_to_website: "",
      link_to_google_maps: ""
    },
    {
      image: ifink,
      name: "",
      description: "",
      address: "",
      rating: 0,
      price: 0,
      cuisine: "",
      halal: false,
      link_to_website: "",
      link_to_google_maps: ""
    }
  ];
  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-99/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Accomodation</div>
          <p className="mt-1 text-sm text-gray-600">
            Here are both hotels and hostels: 
          </p>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* list of hotels and hostels */}
              {restaurants.map((rest, index) => (
                <div key={index} className='flex mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img className='rounded-l-lg' src={rest.image} alt="" height={150} width={350} />
                  <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-10'>
                    <div className='flex justify-between items-end'>
                      <p className='font-medium text-xl'>{rest.name}</p>
                      <p className='text-md font-medium'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={rest.link_to_website}>Here</a></p>
                    </div>
                    <p className='text-xs mt-2 w-3/5'>{rest.description}</p>
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
                      <div className='flex gap-x-4 items-center flex-wrap'>
                        <a target='_blank' href={rest.link_to_google_maps}>
                          <div className='flex gap-x-1 text-red-700 items-center'>
                            <IoLocationOutline size={15} />
                            {rest.address}
                          </div>
                        </a>
                      </div>
                      <div className='text-xl text-green-700'>
                        ~{rest.price}+ USD
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

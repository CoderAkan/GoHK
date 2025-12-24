import type { FC } from 'react';
import ReactStars from "react-stars";

import chatterhouse from '../assets/accomodation/chatterhouse.png'
import panda from '../assets/accomodation/panda_hotel.png'
import regala from '../assets/accomodation/regala.png'
import tstHotel from '../assets/accomodation/tsthotel.png'
import iclub from '../assets/accomodation/iclub.png'

import yHostel from '../assets/accomodation/y_hostel.png'
import fourSeasons from '../assets/accomodation/4seasons.png'
import cubee from '../assets/accomodation/cubee.png'
import days from "../assets/accomodation/days.png"
import enl from '../assets/accomodation/1331.png'

import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

import { type accom } from '../Types/accomodation_rest_types';



const Hotels: FC = () => {
  const hotelsAndHostels: accom[] = [
    {
      image: chatterhouse,
      name: "Chatterhouse Hotel",
      address: "Causeway Bay",
      description: "The Charterhouse Causeway Bay Hotel Hong Kong is an elegant hotel, conveniently located at the edge of Causeway Bay in Hong Kong Island",
      rating: 3.6,
      price: 80,
      pros: [
        "Shopping & Nightlife",
        "Close to food spots and transports"
      ],
      link_to_website: "https://www.charterhouse.com/",
      link_to_google_maps: "https://maps.app.goo.gl/oxTfniJUeJm1s4YBA"
    },
    {
      image: panda,
      name: "Panda Hotel",
      address: "Tsuen Wan",
      description: "The Charterhouse Causeway Bay Hotel Hong Kong is an elegant hotel, conveniently located at the edge of Causeway Bay in Hong Kong Island",
      rating: 4.15,
      price: 64,
      pros: [
        "Great Size & Facilities",
        "Perfect transportation access location"
      ],
      link_to_website: "https://www.pandahotel.com.hk/",
      link_to_google_maps: "https://maps.app.goo.gl/QWp4YHLsYK3SfsGW9"
    },
    {
      image: regala,
      name: "Regala Skycity Hotel by Regal Hotels",
      address: "Near Airport",
      description: "Regala Skycity Hotel at HKIA offers 1,208 rooms, restaurants, and direct access to AsiaWorld-Expo, 11 SKIES, and Macau.",
      rating: 4.35,
      price: 115,
      pros: [
        "Well-equipped rooms",
        "Comfortable luxury"
      ],
      link_to_website: "https://www.regala-hotels.com/en/regala-skycity-hotel",
      link_to_google_maps: "https://maps.app.goo.gl/MDvh8BWFdEr9Z74D9"
    },
    {
      image: tstHotel,
      name: "Empire Hotel Kowloon",
      address: "Tsim Sha Tsui",
      description: "The Empire Hotel Kowloon in Tsim Sha Tsui offers modern rooms, restaurants, harbor or city views, and convenient transport access.",
      rating: 4.5,
      price: 121,
      pros: [
        "Unbeatable location",
        "Business-friendly facilities"
      ],
      link_to_website: "https://www.empirehotel.com.hk/en/hotel/empire-hotel-hong-kong-tsim-sha-tsui/about",
      link_to_google_maps: "https://maps.app.goo.gl/ZKsagJexRHPHu419A"
    },
    {
      image: yHostel,
      name: "Yesinn @YMT Youth Hostel",
      address: "Yau Tsim Mong District",
      description: "Budget-friendly hostel near Yau Ma Tei MTR, close to Mong Kok, ideal for solo travelers and convenient city access.",
      rating: 4.15,
      price: 22,
      pros: [
        "Close to attractions",
        "Solo traveler friendly"
      ],
      link_to_website: "https://yesinn.hotelhk.cn/en",
      link_to_google_maps: "https://maps.app.goo.gl/mXRfe3Ce81GbM58k7"
    },
    {
      image: iclub,
      name: "iclub Fortress Hill Hotel",
      address: "North Point & Quarry Bay",
      description: "iclub Fortress Hill Hotel offers a modern stay near Fortress Hill and North Point, with easy access to Causeway Bay.",
      rating: 4.15,
      price: 77,
      pros: [
        "Modern amenities",
        "Central location"
      ],
      link_to_website: "https://www.iclub-hotels.com/en/iclub-fortress-hill-hotel",
      link_to_google_maps: "https://maps.app.goo.gl/y4QSoQgBaoXNh22V7"
    },
    {
      image: fourSeasons,
      name: "Four Seasons Hostel",
      address: "Tsim Sha Tsui",
      description: "Four Seasons Hostel offers budget-friendly stays near Victoria Harbour, Avenue of Stars, and the vibrant, multicultural life of Chungking Mansions.",
      rating: 4.1,
      price: 39,
      pros: [
        "Cleanliness and great staff",
        "Great location"
      ],
      link_to_website: "https://four-seasons-hostel.hongkonghotelsandrates.com/en/",
      link_to_google_maps: "https://maps.app.goo.gl/GevtUxQwQsVf18Yu5"
    },
    {
      image: cubee,
      name: "Sleep Cubee Hostel",
      address: "Causeway Bay",
      description: "Sleep Cubee Hostel offers budget-friendly capsule accommodation in central Hong Kong, close to Ocean Park, Happy Valley, and Disneyland.",
      rating: 4.05,
      price: 31,
      pros: [
        "Affordable capsule-style rooms",
        "Wi-Fi included"
      ],
      link_to_website: "https://www.guestreservations.com/sleep-cubee-hostel/booking?utm_source=google&utm_medium=cpc&utm_campaign=22108216032&gad_source=1&gad_campaignid=22108216032&gbraid=0AAAAADiMQMblUu2SbNcz-TCQoCIMHa6UQ",
      link_to_google_maps: "https://maps.app.goo.gl/cnRsNyRv2Vf7hsai6"
    },
    {
      image: days,
      name: "Days Hostel",
      address: "Tsim Sha Tsui",
      description: "Days Hostel in Tsim Sha Tsui offers comfortable, well-equipped rooms, Wi-Fi, and easy access to Hong Kong’s top attractions.",
      rating: 3.2,
      price: 20,
      pros: [
        "Small and cozy",
        "Family-friendly facilities"
      ],
      link_to_website: "https://days.hongkonghotelsandrates.com/nl/",
      link_to_google_maps: "https://maps.app.goo.gl/VX2MJtcaqEfPJ6pf8"
    },
    {
      image: enl,
      name: "Runway 1331 - Enlight Youth Hostel",
      address: "Hung Hom",
      description: "Runway 1331, a large youth hostel on the former Kai Tak runway, offers creative, cultural, and recreational spaces for young travelers.",
      rating: 3.65,
      price: 44,
      pros: [
        "Youth-focused ecosystem",
        "Spacious, furnished rooms"
      ],
      link_to_website: "https://runwayenlight.hotelsofhongkong.com/en/",
      link_to_google_maps: "https://maps.app.goo.gl/ZiVwKK7722oCZ3xK9"
    },
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
              {hotelsAndHostels.map((hot, index) => (
                <div key={index} className='flex mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img className='rounded-l-lg' src={hot.image} alt="" height={150} width={350} />
                  <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-10'>
                    <div className='flex justify-between items-end'>
                      <p className='font-medium text-xl'>{hot.name}</p>
                      <p className='text-md font-medium'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={hot.link_to_website}>Here</a></p>
                    </div>
                    <p className='text-xs mt-2 w-3/5'>{hot.description}</p>
                    <div className='flex items-center mt-2'>
                      <ReactStars
                        count={5}
                        value={hot.rating}
                        size={20}
                        color2={"#FFD700"}
                        edit={false} 
                      />
                      <p className='text-lg ml-2 font-medium'>{hot.rating}</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                      <div className='flex gap-x-4 items-center flex-wrap'>
                        <a target='_blank' href={hot.link_to_google_maps}>
                          <div className='flex gap-x-1 text-red-700 items-center'>
                            <IoLocationOutline size={15} />
                            {hot.address}
                          </div>
                        </a>
                        {hot.pros.map((pro, index) => (
                          <div key={index} className='flex items-center gap-x-1 text-green-700'>
                            <FaPlus size={10} />
                            {pro}
                          </div>
                        ))}
                      </div>
                      <div className='text-xl text-green-700'>
                        ~{hot.price}+ USD
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

export default Hotels

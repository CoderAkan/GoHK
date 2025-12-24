import type { FC } from 'react'
import type { place } from '../Types/accomodation_rest_place_types'

import { SiMtr } from "react-icons/si";


import victoriaPeak from "../assets/places/victoriaPeak.jpg"
import avenuesOfStars from "../assets/places/avenue.jpg"
import chung from "../assets/accomodation/4seasons.png"
import oceanPark from "../assets/places/oceanPark.jpg"
import happyValley from "../assets/places/happyValley.jpg"
import disneyland from "../assets/places/disneyland.jpg"
import ladies from '../assets/places/LadiesMarket.jpeg'
import lionRock from '../assets/places/lionRock.jpg'

import ReactStars from 'react-stars'
import { IoLocationOutline } from 'react-icons/io5'

const VisitingPlaces: FC = () => {
  const places: place[] = [
    {
      name: "Victoria Peak",
      description: "Victoria Peak (552 m) offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
      image: victoriaPeak,
      location: "Hong Kong Island",
      type: "Nature",
      link_to_google_maps: "https://share.google/n5ENw2ys8cAXPMBC2",
      rating: 4.6,
      nearby_mtr_station: "Central",
      entry_fee: "Free",
      link_to_website: "https://www.hk-victoria-peak.com/",
    },
    {
      name: "Avenue of Stars",
      description: "Avenue of the Stars celebrates Hong Kong’s film industry, offering harbor views, celebrity handprints, and scenic waterfront strolls.",
      image: avenuesOfStars,
      location: "Tsim Sha Tsui",
      type: "City",
      link_to_google_maps: "https://share.google/k64eSLgLJnZaAqmOw",
      rating: 4.3,
      nearby_mtr_station: "East Tsim Sha Tsui",
      entry_fee: "Free",
      link_to_website: "https://www.avenueofstars.com.hk/",
    },
    {
      name: "Chungking Mansions",
      description: "Chungking Mansions in Tsim Sha Tsui offers vibrant multicultural experiences with shops, budget accommodations, diverse cuisine, and lively city life.",
      image: chung,
      location: "Tsim Sha Tsui",
      type: "City",
      link_to_google_maps: "https://maps.app.goo.gl/h6s2hw3BpZv3YXfG6",
      rating: 3.4,
      nearby_mtr_station: "Tsim Sha Tsui",
      entry_fee: "Free",
      link_to_website: "https://www.hongkongfuns.com/chungkingmansion",
    },
    {
      name: "Ocean Park",
      description: "Ocean Park Hong Kong is a marine-themed amusement park featuring rides, aquariums, animal exhibits, and family-friendly entertainment in scenic surroundings.",
      image: oceanPark,
      location: "Hong Kong Island",
      type: "Attractions",
      link_to_google_maps: "https://maps.app.goo.gl/GDC9JfPVAjX8K9BEA",
      rating: 4.3,
      nearby_mtr_station: "Ocean Park",
      entry_fee: "$538 HKD",
      link_to_website: "https://www.oceanpark.com.hk/en",
    },
    {
      name: "Happy Valley Racecourse" ,
      description: "Happy Valley in Hong Kong is famous for its horse racing, historic racecourse, vibrant nightlife, dining, and urban recreation.",
      image: happyValley,
      location: "Hong Kong Island",
      type: "Sports",
      link_to_google_maps: "https://maps.app.goo.gl/optr7h2WSF9gP8y27",
      rating: 4.6,
      nearby_mtr_station: "Causeway Bay",
      entry_fee: "$10-50 HKD",
      link_to_website: "https://www.happyvalleyracecourse.com/",
    },
    {
      name: "Disneyland",
      description: "Hong Kong Disneyland offers magical experiences with themed lands, thrilling rides, Disney characters, live shows, parades, and family-friendly entertainment.",
      image: disneyland,
      location: "Lantau Island",
      type: "Attractions",
      link_to_google_maps: "https://maps.app.goo.gl/rUY6tnRJFTzSEc4W7",
      rating: 4.5,
      nearby_mtr_station: "Disneyland Resort",
      entry_fee: "$669 HKD",
      link_to_website: "https://www.hongkongdisneyland.com/",
    },
    {
      name: "Ladies' Market",
      description: "Ladies Market in Mong Kok is a bustling street market offering fashion, accessories, souvenirs, bargains, and vibrant local shopping experiences.",
      image: ladies,
      location: "Mong Kok",
      type: "City",
      link_to_google_maps: "https://maps.app.goo.gl/faypqp5yGhauU2rR6",
      rating: 3.9,
      nearby_mtr_station: "Mong Kok",
      entry_fee: "Free",
      link_to_website: "https://www.ladies-market.hk/",
    },
    {
      name: "Lion Rock",
      description: "Lion Rock (495 m) offers a scenic hiking trail with panoramic views of Hong Kong’s cityscape, lush hills, and iconic skyline.",
      image: lionRock,
      location: "Kowloon",
      type: "Nature",
      link_to_google_maps: "https://maps.app.goo.gl/Tan5ZGJq73aSVjL77",
      rating: 4.6,
      nearby_mtr_station: "Diamond Hill",
      entry_fee: "Free",
      link_to_website: "https://www.discoverhongkong.com/uk/interactive-map/lion-rock-country-park.html",
    },
  ]

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-99/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Top Attractions You Can’t Miss</div>
          <p className="mt-1 text-sm text-gray-600">
          Discover Hong Kong’s iconic spots, where unforgettable views, vibrant culture, and thrilling experiences await every traveler: 
          </p>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* list of hotels and hostels */}
              {places.map((place, index) => (
                <div key={index} className='flex mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img src={place.image} alt="" className="w-[400px] h-[200px] object-cover rounded-l-lg flex-shrink-0" />
                  <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-10'>
                    <div className='flex justify-between items-end'>
                      <p className='font-medium text-xl'>{place.name}</p>
                      <p className='text-md font-medium'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={place.link_to_website}>Here</a></p>
                    </div>
                    <p className='text-xs mt-2 w-3/5'>{place.description}</p>
                    <div className='flex items-center mt-2'>
                      <ReactStars
                        count={5}
                        value={place.rating}
                        size={20}
                        color2={"#FFD700"}
                        edit={false} 
                      />
                      <p className='text-lg ml-2 font-medium'>{place.rating}</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                      <div 
                        className={`flex gap-x-4 items-center flex-wrap ${
                          place.type === 'Nature' ? 'text-green-500' :
                          place.type === 'City'   ? 'text-blue-500' :
                          place.type === 'Art'    ? 'text-red-500' :
                          place.type === 'Sports' ? 'text-yellow-500' :
                          place.type === "Attractions" ? 'text-cyan-500' :
                          'text-gray-500'
                        }`}>
                        <a target='_blank' href={place.link_to_google_maps}>
                          <div className='flex gap-x-1 items-center'>
                            <IoLocationOutline size={15} />
                            {place.location}
                          </div>
                        </a>
                        <div key={index} className='flex items-center gap-x-1'>
                            <SiMtr size={15} />
                            {place.nearby_mtr_station}
                        </div>
                      </div>
                      <div className='text-xl text-green-700'>
                        {place.entry_fee}
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

export default VisitingPlaces

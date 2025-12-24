import type { FC } from 'react'
import type { place } from '../Types/accomodation_rest_place_types'

import { SiMtr } from "react-icons/si";


import victoriaPeak from "../assets/places/victoriaPeak.jpeg"
import avenuesOfStars from "../assets/places/avenueOfStars.jpeg"

import ReactStars from 'react-stars'
import { IoLocationOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'

const VisitingPlaces: FC = () => {
  const places: place[] = [
    {
      name: "Victoria Peak",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
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
      name: "Victoria Harbour",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
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
      name: "Chungking Mansions",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
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
      name: "Ocean Park",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
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
      name: "Happy Valley",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
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
      name: "Disneyland",
      description: "Victoria Peak offers breathtaking panoramic views of Hong Kong’s skyline, Victoria Harbour, and surrounding islands, especially stunning at sunset.",
      image: victoriaPeak,
      location: "Hong Kong Island",
      type: "Nature",
      link_to_google_maps: "https://share.google/n5ENw2ys8cAXPMBC2",
      rating: 4.6,
      nearby_mtr_station: "Central",
      entry_fee: "Free",
      link_to_website: "https://www.hk-victoria-peak.com/",
    },
  ]

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-99/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Places to visit</div>
          <p className="mt-1 text-sm text-gray-600">
            Here are touristic spots every traveler should visit: 
          </p>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* list of hotels and hostels */}
              {places.map((place, index) => (
                <div key={index} className='flex mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img className='rounded-l-lg' src={place.image} alt="" height={150} width={350} />
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

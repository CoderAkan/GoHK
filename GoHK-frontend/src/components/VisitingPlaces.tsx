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
import saiKung from '../assets/places/saiKung.jpg'
import poLin from '../assets/places/poLin.jpeg'
import hkSpace from '../assets/places/hkSpace.jpg'
import kowloonPark from '../assets/places/kowloonPark.png'
import che from "../assets/places/che.webp"
import times from "../assets/places/times.jpg"

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
    {
      name: "Sai Kung",
      description: "Sai Kung is a coastal district known for pristine beaches, scenic hiking trails, volcanic landscapes, seafood villages, and clear blue waters.",
      image: saiKung,
      location: "Sai Kung",
      type: "Nature",
      link_to_google_maps: "https://maps.app.goo.gl/PQFjguM5SnE2ytJP8",
      rating: 4.4,
      nearby_mtr_station: "No MTR",
      entry_fee: "Free",
      link_to_website: "https://www.discoverhongkong.com/eng/explore/neighbourhoods/sai-kung.html",
    },
    {
      name: "Po Lin Monastery",
      description: "Po Lin Monastery on Lantau Island is a peaceful Buddhist complex, home to the iconic Tian Tan Buddha statue.",
      image: poLin,
      location: "Lantau Island",
      type: "Spiritual",
      link_to_google_maps: "https://maps.app.goo.gl/upmgDGpmUEDsSssd9",
      rating: 4.5,
      nearby_mtr_station: "No MTR",
      entry_fee: "Free",
      link_to_website: "https://www.plm.org.hk/eng/home.php",
    },
    {
      name: "Hong Kong Space Museum",
      description: "Hong Kong Space Museum showcases interactive exhibits, planetarium shows, space science, astronomy, and educational experiences overlooking Victoria Harbour for families.",
      image: hkSpace,
      location: "Tsim Sha Tsui",
      type: "Art",
      link_to_google_maps: "https://maps.app.goo.gl/Qg51X9Q5yuPaU6oE8",
      rating: 4.2,
      nearby_mtr_station: "Tsim Sha Tsui",
      entry_fee: "$10 HKD",
      link_to_website: "https://hk.space.museum/en/web/spm/home.html",
    },
    {
      name: "Kowloon Park",
      description: "Kowloon Park transformed from former military barracks into a peaceful urban green space, offering nature, culture, and relaxation in busy Tsim Sha Tsui.",
      image: kowloonPark,
      location: "Tsim Sha Tsui",
      type: "Nature",
      link_to_google_maps: "https://maps.app.goo.gl/aeeFaaSmNR29HdA19",
      rating: 4.4,
      nearby_mtr_station: "Tsim Sha Tsui",
      entry_fee: "Free",
      link_to_website: "https://www.lcsd.gov.hk/en/parks/kp/",
    },
    {
      name: "Sha Tin Che Kung Temple",
      description: "Sha Tin Che Kung Temple is a historic Taoist temple famous for worshipping Che Kung and spinning windmills for good fortune.",
      image: che,
      location: "Sha Tin",
      type: "Spiritual",
      link_to_google_maps: "https://maps.app.goo.gl/iUcVmYPm8jrWmq5Z9",
      rating: 4.4,
      nearby_mtr_station: "Che Kung Temple",
      entry_fee: "Free",
      link_to_website: "https://www.ctc.org.hk/en/temple/%E6%B2%99%E7%94%B0%E8%BB%8A%E5%85%AC%E5%BB%9F/",
    },
    {
      name: "Times Square",
      description: "Times Square in Causeway Bay is a lively shopping complex featuring international brands, dining, events, and vibrant urban atmosphere.",
      image: times,
      location: "Causweway Bay",
      type: "City",
      link_to_google_maps: "https://maps.app.goo.gl/t7syP2Yckp121ST39?g_st=ipc",
      rating: 4.1,
      nearby_mtr_station: "Causeway Bay",
      entry_fee: "Free",
      link_to_website: "https://timessquare.com.hk/",
    },
  ]

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-96/100 md:w-98/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Top Attractions You Can’t Miss</div>
          <p className="mt-1 text-sm text-gray-600">
          Discover Hong Kong’s iconic spots, where unforgettable views, vibrant culture, and thrilling experiences await every traveler: 
          </p>
          <div className="mt-4 mb-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
            <p className="text-sm font-medium text-blue-900">Good to know</p>
            <ul className="mt-1 list-disc list-inside text-sm text-blue-800">
              <li>You can download "MTR Mobile", "Citymapper", "Google Maps" for navigation</li>
              <li>Always bring cash with yourself</li>
              <li>You can ask Customer Service Center in any MTR station for assistance</li>
            </ul>
          </div>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* list of hotels and hostels */}
              {places.map((place, index) => (
                <div key={index} className='flex flex-col min-[1300px]:flex-row mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img src={place.image} alt="" className="w-full min-[1300px]:w-100 object-cover rounded-l-lg shrink-0" />
                  <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-4 lg:mx-10'>
                    <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end'>
                      <p className='font-medium text-xl'>{place.name}</p>
                      <p className='text-md font-medium'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={place.link_to_website}>Here</a></p>
                    </div>
                    <p className='text-xs mt-2 w-full lg:w-3/5'>{place.description}</p>
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
                    <div className='flex justify-between mt-3 items-center'>
                      <div 
                        className={`flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-start flex-wrap ${
                          place.type === 'Nature' ? 'text-green-500' :
                          place.type === 'City'   ? 'text-blue-500' :
                          place.type === 'Art'    ? 'text-red-500' :
                          place.type === 'Sports' ? 'text-yellow-500' :
                          place.type === "Attractions" ? 'text-cyan-500' :
                          place.type === "Spiritual" ? 'text-indigo-500' :
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
                      <div className='text-lg lg:text-xl text-green-700'>
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

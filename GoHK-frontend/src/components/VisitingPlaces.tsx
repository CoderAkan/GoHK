import { useEffect, useState, type FC } from 'react'
import { SiMtr } from "react-icons/si";
import ReactStars from 'react-stars'
import { IoLocationOutline } from 'react-icons/io5'
import { placesService } from '../services/places.service';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPlaces } from '../store/slices/dataSlice';

const VisitingPlaces: FC = () => {
  const dispatch = useAppDispatch()
  const places = useAppSelector((state) => state.data.places)
  const [isLoading, setIsLoading] = useState(!places)

  useEffect(() => {
    const fetchAccomodations = async () => {
      if (places) return;

      try {
        setIsLoading(true)
        const response = await placesService.getPlacesCardList()
        dispatch(setPlaces(response.places))
      } catch (error) {
        toast.error("Error fetching places")
        console.error("Error fetching places:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAccomodations()
  }, [places, dispatch])


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

        {isLoading ? (
          <Loader />
        ) : (
          <div className='rounded-lg border-black/10 mt-3 animate-in fade-in duration-500'>
            <div> {/* list of hotels and hostels */}
              {places?.map((place, index) => (
                <div key={index} className='flex flex-col min-[1300px]:flex-row mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img src={place.image} alt="" className="w-full min-[1300px]:w-100 min-[1300px]:h-50 object-cover rounded-l-lg shrink-0" />
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
                        className={`flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-start flex-wrap ${place.type === 'Nature' ? 'text-green-500' :
                          place.type === 'City' ? 'text-blue-500' :
                            place.type === 'Art' ? 'text-red-500' :
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
        )}
      </div>
    </div>
  )
}

export default VisitingPlaces

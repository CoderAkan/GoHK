import { useEffect, useState, type FC } from 'react';
import ReactStars from "react-stars";

import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

import { accommodationService } from '../services/accom.service';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setHotels } from '../store/slices/dataSlice';

const Hotels: FC = () => {
  const dispatch = useAppDispatch()
  const hotels = useAppSelector((state) => state.data.hotels)
  const [isLoading, setIsLoading] = useState(!hotels)

  useEffect(() => {
    const fetchAccomodations = async () => {
      if (hotels) return; // Use cache

      try {
        setIsLoading(true)
        const response = await accommodationService.getAccommodationCardList()
        dispatch(setHotels(response.accommodations))
      } catch (error) {
        toast.error("Error fetching hotels")
        console.error("Error fetching hotels:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAccomodations()
  }, [hotels, dispatch])

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-96/100 md:w-98/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Your Perfect Stay Awaits</div>
        <p className="mt-1 text-sm text-gray-600">
          Here are hotels and hostels to suit every style and budget:
        </p>

        {isLoading ? (
          <Loader />
        ) : (
          <div className='rounded-lg border-black/10 mt-3 animate-in fade-in duration-500'>
            <div> {/* list of hotels and hostels */}
              {hotels?.map((hot, index) => (
                <div key={index} className='flex flex-col min-[1300px]:flex-row mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
                  <img src={hot.images[0]} alt="" className="w-full min-[1300px]:w-100 min-[1300px]:h-50 object-cover rounded-l-lg shrink-0" />
                  <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-4 lg:mx-10'>
                    <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end'>
                      <p className='font-medium text-lg lg:text-xl'>{hot.name}</p>
                      <p className='text-xs lg:text-md font-medium mt-2'>For more details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href={hot.link_to_website}>Here</a></p>
                    </div>
                    <p className='text-xs mt-2 w-full lg:w-3/5'>{hot.description}</p>
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
                    <div className='flex items-end lg:items-center justify-between mt-3'>
                      <div className='flex flex-col lg:flex-row gap-y-2 gap-x-0 lg:gap-y-0 lg:gap-x-4 lg:items-center flex-wrap'>
                        <a target='_blank' href={hot.link_to_google_maps}>
                          <div className='flex gap-x-1 text-red-700 hover:text-red-400 items-center'>
                            <IoLocationOutline size={15} />
                            {hot.address}
                          </div>
                        </a>
                        {hot.pros.map((pro, index) => (
                          <div key={index} className='flex items-center text-left gap-x-1 text-green-700 ml-1 lg:ml-0'>
                            <FaPlus size={10} />
                            {pro}
                          </div>
                        ))}
                      </div>
                      <div className='text-lg text-green-700'>
                        {hot.price}+ HKD
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

export default Hotels

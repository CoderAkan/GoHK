import { type FC, useState, useEffect } from 'react'
import ReactStars from "react-stars";
import { foodService } from '../services/food.service';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
import { LuChefHat } from 'react-icons/lu'
import { toast } from 'react-toastify';
import Loader from './Loader';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFood } from '../store/slices/dataSlice';

const Food: FC = () => {
  const dispatch = useAppDispatch()
  const restaurants = useAppSelector((state) => state.data.food)
  const [isLoading, setIsLoading] = useState(!restaurants)

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (restaurants) return;

      try {
        setIsLoading(true)
        const response = await foodService.getFoodCardList()
        dispatch(setFood(response.food))
      } catch (error) {
        toast.error("Error fetching restaurants")
        console.error("Error fetching restaurants:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRestaurants()
  }, [restaurants, dispatch])

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-96/100 md:w-98/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Must-Try Spots</div>
        <p className="mt-1 text-sm text-gray-600">
          Discover irresistible flavors, where bold tastes, fresh ingredients, and delicious experiences await every food lover:
        </p>

        {isLoading ? (
          <Loader />
        ) : (
          <div className='rounded-lg border-black/10 mt-3 animate-in fade-in duration-500'>
            <div>
              {restaurants?.map((rest, index) => (
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
        )}
      </div>
    </div>
  )
}

export default Food

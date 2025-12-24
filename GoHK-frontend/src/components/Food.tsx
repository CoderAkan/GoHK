import type {FC} from 'react'
import ReactStars from "react-stars";

import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { type rest } from '../Types/accomodation_rest_types';


const Food: FC = () => {
  const restaurants: rest[] = [
    {
      image: "",
      name: "",
      description: "",
      address: "",
      rating: 0,
      price: 0,
      cuisine: "",
      halal: true,
      dishes: [
        "",
        "",
        ""
      ],
      link_to_website: ""
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
                        <div className='flex gap-x-1 text-red-700 items-center'>
                          <IoLocationOutline size={15} />
                          {rest.address}
                        </div>
                        {rest.dishes.map((dish, index) => (
                          <div key={index} className='flex items-center gap-x-1 text-green-700'>
                            <FaPlus size={10} />
                            {dish}
                          </div>
                        ))}
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

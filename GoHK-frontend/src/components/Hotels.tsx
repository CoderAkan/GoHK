import { type FC, useEffect, useState } from 'react';
import ReactStars from "react-stars";
import { IoLocationOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

import { type accom } from '../Types/accomodation_rest_place_types';
import accommodationImages from '../assets/accomodation/chatterhouse.png';

const Hotels: FC = () => {
  const [hotelsAndHostels, setHotelsAndHostels] = useState<accom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/accommodations");
        if (!res.ok) throw new Error("Failed to fetch accommodations");

        const data: accom[] = await res.json();

        // attach images
        const mappedData = data.map(item => ({
          ...item,
          image: accommodationImages[item.image] ?? accommodationImages.chatterhouse
        }));

        setHotelsAndHostels(mappedData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading accommodations...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-99/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>
          Your Perfect Stay Awaits
        </div>

        <p className="mt-1 text-sm text-gray-600">
          Here are hotels and hostels to suit every style and budget:
        </p>

        <div className='rounded-lg border-black/10 mt-3'>
          {hotelsAndHostels.map((hot, index) => (
            <div
              key={index}
              className='flex mt-5 first:mt-0 border rounded-lg items-stretch border-black/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'
            >
              <img
                src={hot.image}
                alt={hot.name}
                className="w-[400px] h-[200px] object-cover rounded-l-lg flex-shrink-0"
              />

              <div className='flex text-xs justify-between mb-4 flex-col mt-4 mx-10'>
                <div className='flex justify-between items-end'>
                  <p className='font-medium text-xl'>{hot.name}</p>
                  <p className='text-md font-medium'>
                    For more details:{' '}
                    <a
                      target='_blank'
                      rel="noreferrer"
                      className='text-blue-500 hover:text-blue-800'
                      href={hot.link_to_website}
                    >
                      Here
                    </a>
                  </p>
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
                    <a target='_blank' rel="noreferrer" href={hot.link_to_google_maps}>
                      <div className='flex gap-x-1 text-red-700 items-center'>
                        <IoLocationOutline size={15} />
                        {hot.address}
                      </div>
                    </a>

                    {hot.pros.map((pro, i) => (
                      <div key={i} className='flex items-center gap-x-1 text-green-700'>
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
    </div>
  );
};

export default Hotels;

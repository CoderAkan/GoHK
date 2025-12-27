import type {FC} from 'react'
import mtr from "../assets/transport/mtr.svg"
import bus from "../assets/transport/bus.png"
import tram from '../assets/transport/tram.png'
import taxi from '../assets/transport/taxi.png'
import ferry from '../assets/transport/ferry.png'
import train from '../assets/transport/train.png'

const Transportation: FC = () => {
  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-97/100'>
        <div className='text-xl font-semibold w-97/100 border-b pb-3 border-black/10'>Transportation</div>
          <p className="mt-1 text-sm text-gray-600 w-97/100">
            Different transportation options are available from the airport to the city and for getting around the city.          </p>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* types */}
              <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col w-full md:w-1/2 mr-1'>
                  <div> {/* MTR (Mass Transit Railway) */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-red-300/20 py-2 px-1 rounded-t-lg'>
                      {/* <PiNumberSquareSevenLight className='ml-3' size={30}/> */}
                      <img src={mtr} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>MTR</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>What it is:</p>
                        <ul className="list-disc pl-5 first:mt-2">
                          <li>Main subway / rail system</li>
                          <li>Fast, clean, covers most of Hong Kong</li>
                        </ul>
                      </div>
                      <div className=''> {/* Bottom side */}
                        <p className='text-xl font-medium'>Where to use:</p>
                        <div className='flex flex-col  w-4/5 h-full'>
                          <ul className="list-disc pl-5">
                            <li>Hong Kong Island</li>
                            <li>Kowloon</li>
                            <li>New Territories</li>
                          </ul>
                        </div>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>Ranges from HK$73 - HK$130</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Octopus Card</li>
                            <li>Bank cards (VISA, Mastercard)</li>
                            <li>Cash (Buy a Single Journey Ticket)</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.mtr.com.hk">Here</a></p>
                      </div>
                    </div>
                  </div>
                  <div> {/* Trams */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-blue-300/20 py-2 px-1 rounded-t-lg'>
                      <img src={tram} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>Trams (Ding Ding)</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>What it is:</p>
                        <ul className="list-disc pl-5 first:mt-2">
                          <li>Street trams on Hong Kong Island</li>
                          <li>Very slow but scenic</li>
                        </ul>
                      </div>
                      <div className=''> {/* Bottom side */}
                        <p className='text-xl font-medium'>Where to use:</p>
                        <div className='flex flex-col  w-4/5 h-full'>
                          <ul className="list-disc pl-5">
                            <li>Hong Kong Island (Kennedy Town ↔ Shau Kei Wan)</li>
                          </ul>
                        </div>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>HK$3.3 flat fare (adult)</li>
                            <li>HK$1.6 flat fare (children age 3-11 and elderly age 65+)</li>
                            <li>Free (children under age 3)</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Octopus Card</li>
                            <li>Bank cards (VISA, Mastercard)</li>
                            <li>Cash (Exact fare into the coin box)</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hktramways.com">Here</a></p>
                      </div>
                    </div>
                  </div>
                  <div> {/* Ferries */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-pink-300/20 py-2 px-1 rounded-t-lg'>
                      <img src={ferry} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>Ferries</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>What it is:</p>
                        <ul className="list-disc pl-5 first:mt-2">
                          <li>Ferry services between islands & mainland</li>
                        </ul>
                      </div>
                      <div className=''> {/* Bottom side */}
                        <p className='text-xl font-medium'>Popular routes:</p>
                        <div className='flex flex-col  w-4/5 h-full'>
                          <ul className="list-disc pl-5">
                            <li>Central ↔ Tsim Sha Tsui (Star Ferry)</li>
                            <li>Central ↔ Lamma Island</li>
                            <li>Central ↔ Cheung Chau</li>
                          </ul>
                        </div>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>~HK$3–40 depending on route</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Octopus Card</li>
                            <li>Bank cards (like VISA, Mastercard, but not in every ferry)</li>
                            <li>Cash</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hkkf.com.hk">Here</a></p>
                        <p>More info about Star Ferry: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.starferry.com.hk/en/home">Here</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full md:w-1/2 mr-1'>
                  <div> {/* Public buses */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-yellow-500/10 py-2 px-1 rounded-t-lg'>
                      <img src={bus} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>Public buses</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>What it is:</p>
                        <ul className="list-disc pl-5">
                          <li className='mt-2'>Extensive bus network (double-deckers common)</li>
                          <li>Extensive bus network (double-deckers common)</li>
                        </ul>
                      </div>
                      <div className=''> {/* Bottom side */}
                        <p className='text-xl font-medium'>Main operators:</p>
                        <div className='flex flex-col  w-4/5 h-full'>
                          <ul className="list-disc pl-5">
                            <li><a target='_blank' href="https://www.kmb.hk" className='text-blue-500 hover:text-blue-800'>KMB (Kowloon & New Territories)</a></li>
                            <li><a target='_blank' href="https://www.kmb.hk" className='text-blue-500 hover:text-blue-800'>Citybus (Hong Kong Island & cross-harbour)</a></li>
                            <li><a target='_blank' href="https://www.td.gov.hk/en/transport_in_hong_kong/public_transport/buses/long_win_bus/index.html" className='text-blue-500 hover:text-blue-800'>Long Win Bus (Airport & Lantau)</a></li>
                          </ul>
                        </div>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>Ranges from HK$4 - HKD$50</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Octopus Card</li>
                            <li>Cash (exact fare, doesn't return change)</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hongkongairport.com/en/transport/to-from-airport/public-buses.page">Here</a></p>
                      </div>
                    </div>
                  </div> 
                  <div> {/* Taxis */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-green-500/10 py-2 px-1 rounded-t-lg'>
                      <img src={taxi} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>Taxis</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>Types: </p>
                        <ul className="list-disc pl-5 first:mt-2 pb-2">
                          <li><span className='text-red-500'>Red</span> – urban areas (most common)</li>
                          <li><span className='text-green-500'>Green</span> – New Territories</li>
                          <li><span className='text-blue-500'>Blue</span> – Lantau Island</li>
                          <li>Uber is also available ✅</li>
                        </ul>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>Starts at ~HK$27 (urban taxis)</li>
                            <li>Extra for luggage, tunnels, long distance</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Some taxis accept Octopus / cards (not all)</li>
                            <li>Cash</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.td.gov.hk/en/transport_in_hong_kong/public_transport/taxi/index.html">Here</a></p>
                        <p>More info about Uber: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.uber.com/global/en/r/cities/hong-kong-hong-kong-hk/">Here</a></p>
                      </div>
                    </div>
                  </div>
                  <div> {/* Airport Express */}
                    <div className='flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] mt-3 items-center gap-x-3 bg-cyan-500/10 py-2 px-1 rounded-t-lg'>
                      <img src={train} className='ml-2' alt="" height={30} width={30} />
                      <p className='text-2xl'>Airport Express</p>
                    </div>
                    <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                      <div className=' border-black/10'> {/* Top side */}
                        <p className='text-xl font-medium'>What it is: </p>
                        <ul className="list-disc pl-5 first:mt-2 pb-2">
                          <li>Fast train between airport & city</li>
                        </ul>
                        <p className='text-xl font-medium'>Routes:</p>
                        <ul className="list-disc pl-5">
                            <li>Airport ↔ Hong Kong Station</li>
                            <li>Stops at Tsing Yi & Kowloon</li>
                        </ul>
                        <p className='text-xl font-medium'>Price:</p>
                        <ul className="list-disc pl-5">
                            <li>HK$65–115 (depending on station)</li>
                        </ul>
                        <p className='text-xl font-medium'>Travel Time:</p>
                        <ul className="list-disc pl-5">
                            <li>~24 minutes to Hong Kong Station</li>
                        </ul>
                        <p className='text-xl font-medium'>How to pay:</p>
                        <ul className="list-disc pl-5 pb-2 border-b border-black/10">
                            <li>Octopus Card</li>
                            <li>Bank cards (VISA, Mastercard)</li>
                        </ul>
                        <p>More info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.mtr.com.hk/en/customer/services/airport_express_index.html">Here</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Transportation

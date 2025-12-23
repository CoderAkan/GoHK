import type {FC} from 'react'
import { FaSimCard } from "react-icons/fa";
import { PiNumberSquareSevenLight } from "react-icons/pi";
import { BsSim } from "react-icons/bs";



const ESimAndInternet: FC = () => {
  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='text-xl font-bold border-b pb-3 border-black/10'>SIM & Internet</div>
      <div className='rounded-lg border-black/10 mt-3 overflow-auto'>
        <div> {/* companies */}
          <div> {/* CSL */}
            <div className='flex items-center gap-x-4 bg-amber-300/20 py-2 px-1 rounded-t-lg'>
              <FaSimCard className='ml-3' size={25}/>
              <p className='text-2xl'>CSL – “Discover Hong Kong Tourist SIM”</p>
            </div>
            <div className='flex border-b border-x border-black/10 rounded-b-lg p-2'>
              <div className='w-4/5 border-r border-black/10'> {/* Left side */}
                <p className='text-xl font-medium'>Where to buy:</p>
                <ul className="list-disc pl-5">
                  <li className='mt-2'>Pick up at 1010 / CSL counters at Hong Kong International Airport</li>
                  <li>CSL stores in town (Central, Tsim Sha Tsui, Causeway Bay)</li>
                  <li>Online booking: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.traveloka.com/en-sg/activities/hong-kong/product/csl-discover-hong-kong-tourist-sim-card-hong-kong-airport-pickup-at-stores-5830898286132?">Click here</a></li>
                </ul>
              </div>
              <div className='w-4/5 ml-2'> {/* Right side */}
                <p className='text-xl font-medium mb-2'>Plans & Data:</p>
                <div className='flex items-center'>
                  <div className='flex flex-col justify-start items-center w-4/5 border-r border-black/10 text-xs h-full'>
                    <p className='font-medium text-sm'>7-Day Pass</p>
                    <p>~HK$88</p>
                    <p>~50GB total</p>
                    <p>Unlimited local calls</p>
                    <p>Free CSL Wi-Fi</p>
                    <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://shop.theclub.com.hk/csl-7-day-5g-discover-hong-kong-tourist-esim-2114881.html?utm_source=Club+Shopping&utm_medium=webpage&utm_campaign=club_shopping_88_7d_tb">Click here</a></p>
                  </div>
                  <div className='flex flex-col justify-start items-center w-4/5 text-xs h-full'>
                    <p className='font-medium text-sm'>15-Day Pass</p>
                    <p>~HK$118</p>
                    <p>~80GB total</p>
                    <p>Unlimited local calls</p>
                    <p>Free CSL Wi-Fi</p>
                    <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://shop.theclub.com.hk/electronics-and-office/mobile/prepaid-sim-cards/csl-15-day-discover-hong-kong-tourist-sim-card-esim.html?utm_source=Club+Shopping&utm_medium=csl&utm_campaign=club_shopping_15d_tb">Click here</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-1/2 mr-1'> {/* 7-Eleven */}
              <div className='flex mt-3 items-center gap-x-4 bg-red-300/20 py-2 px-1 rounded-t-lg'>
                <PiNumberSquareSevenLight className='ml-3' size={30}/>
                <p className='text-2xl'>7-Eleven Tourist SIM Cards (Limited Offers)</p>
              </div>
              <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                <div className=' border-black/10'> {/* Left side */}
                  <p className='text-xl font-medium'>Where to buy:</p>
                  <ul className="list-disc pl-5">
                    <li className='mt-2'>Any 7-Eleven stores (including many at the airport)</li>
                    <li>For more info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.7-eleven.com.hk/en/service/prepaid-sim/for-hong-kong-tourists?srsltid=AfmBOoqJBKlV9d-iumfpFZT25csOnOO_ymldx5GoEyXTaNpbZBzycIyM&">Click here</a></li>
                  </ul>
                </div>
                <div className=' ml-2'> {/* Right side */}
                  <p className='text-xl font-medium mb-2'>Plans & Data:</p>
                    <div className='flex items-center'>                    
                      <div className='flex flex-col justify-start items-center w-4/5 border-r border-black/10 text-xs h-full'>
                        <p className='font-medium text-sm'>3-Day 5G Hong Kong Card</p>
                        <p>HK$38</p>
                        <p>~15GB local 5G data</p>
                        <p>Valid for 3 days</p>
                        <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.7-eleven.com.hk/en/service/prepaid-sim/for-hong-kong-tourists?srsltid=AfmBOoqJBKlV9d-iumfpFZT25csOnOO_ymldx5GoEyXTaNpbZBzycIyM&">Click here</a></p>
                      </div>
                      <div className='flex flex-col justify-start items-center w-4/5 text-xs h-full'>
                        <p className='font-medium text-sm'>Standard 3-Day SIM</p>
                        <p>HK$48</p>
                        <p>~15GB local data</p>
                        <p>Valid for 3 days</p>
                        <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.7-eleven.com.hk/en/service/prepaid-sim/for-hong-kong-tourists?srsltid=AfmBOoqJBKlV9d-iumfpFZT25csOnOO_ymldx5GoEyXTaNpbZBzycIyM&">Click here</a></p>
                      </div>
                    </div>
                    
                </div>
              </div>
            </div>
            <div className='ml-1 w-8/10'> {/* China Mobile Hong Kong */}
              <div className='flex mt-3 items-center gap-x-4 bg-green-300/20 py-2 px-1 rounded-t-lg'>
                <BsSim className='ml-3' size={30}/>
                <p className='text-2xl'>China Mobile Hong Kong (CMHK) Tourist Physical SIM</p>
              </div>
              <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                <div className=''> {/* Left side */}
                  <p className='text-xl font-medium'>Where to buy:</p>
                  <ul className="list-disc pl-5">
                    <li className='mt-2'>CMHK retail stores</li>
                    <li>7-Eleven</li>
                    <li>Circle K</li>
                    <li>For more info: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hk.chinamobile.com/en/home/prepaid-card?areaIds=1000">Click here</a></li>
                  </ul>
                </div>
                <div className=''> {/* Right side */}
                  <p className='text-xl font-medium mb-2'>Plans & Data:</p>
                     <div className='flex items-center'>                    <div className='flex flex-col justify-start items-center w-4/5 border-r border-black/10 text-xs h-full'> 
                      <p className='font-medium text-sm'>Common Plan</p>
                      <p>HK$78</p>
                      <p>~7GB high-speed data</p>
                      <p>~200 minutes local calls</p>
                      <p>~1GB data usable in Macau / Mainland China</p>
                      <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hk.chinamobile.com/en/home/prepaid-card/product?commodityId=21202509281972135311092355072&subId=21202511251993216889578983424">Click here</a></p>
                    </div>
                    <div className='flex flex-col justify-start items-center w-4/5 text-xs h-full'>
                      <p className='font-medium text-sm'>30-Days Unlimited Variant</p>
                      <p>HK$38</p>
                      <p>First ~60GB at high speed (unlimited data)</p>
                      <p>~5000 min voice calls</p>
                      <p>Physical SIM</p>
                      <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hk.chinamobile.com/en/home/prepaid-card/product?commodityId=21202509261971529579263299584&subId=21202307261684093572504752128">Click here</a></p>
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

export default ESimAndInternet

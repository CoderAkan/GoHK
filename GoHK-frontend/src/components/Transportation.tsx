import type {FC} from 'react'
import mtr from "../assets/mtr.svg"

const Transportation: FC = () => {
  return (
    <div className='p-1 h-[70vh] overflow-y-auto'>
      <div className='w-99/100'>
        <div className='text-xl font-semibold border-b pb-3 border-black/10'>Transportation</div>
          <div className='rounded-lg border-black/10 mt-3'>
            <div> {/* types */}
              <div className='flex justify-between'>
                <div className='w-1/2 mr-1'> {/* MTR (Mass Transit Railway) */}
                  <div className='flex mt-3 items-center gap-x-3 bg-red-300/20 py-2 px-1 rounded-t-lg'>
                    {/* <PiNumberSquareSevenLight className='ml-3' size={30}/> */}
                    <img src={mtr} className='ml-2' alt="" height={30} width={30} />
                    <p className='text-2xl'>MTR (Mass Transit Railway)</p>
                  </div>
                  <div className='flex flex-col border-b border-x border-black/10 rounded-b-lg p-2'>
                    <div className=' border-black/10'> {/* Top side */}
                      <p className='text-xl font-medium'>What it is:</p>
                      <ul className="list-disc pl-5">
                        <li className='mt-2'>Main subway / rail system</li>
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
                          <li>Ranges from HKD$73 - HKD$130</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='ml-1 w-8/10'> {/* Public buses */}
                  <div className='flex mt-3 items-center gap-x-4 bg-green-300/20 py-2 px-1 rounded-t-lg'>
                    {/* <BsSim className='ml-3' size={30}/> */}
                    <p className='text-2xl'>Public buses</p>
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
                        <div className='flex items-center'>                    
                          <div className='flex flex-col justify-start items-center w-4/5 border-r border-black/10 text-xs h-full'> 
                            <p className='font-medium text-sm'>5G Hong Kong Tourist SIM card (7-day)</p>
                            <p>HK$100</p>
                            <p>5GB/day local data</p>
                            <p>Daily 500 MB Macao and Mainland China data</p>
                            <p>30 minutes local calls</p>
                            <p>Physical SIM</p>
                            <p>Details: <a target='_blank' className='text-blue-500 hover:text-blue-800' href="https://www.hk.chinamobile.com/en/home/prepaid-card/product?commodityId=21202509281972135311092355072&subId=21202511251993216889578983424">Click here</a></p>
                          </div>
                          <div className='flex flex-col justify-start items-center w-4/5 text-xs h-full'>
                            <p className='font-medium text-sm'>30-Days Unlimited Variant</p>
                            <p>HK$38</p>
                            <p>First ~60GB at high speed (unlimited data)</p>
                            <p>~5000 min voice calls</p>
                            <p>50 Local Intra SMS</p>
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
    </div>
  )
}

export default Transportation

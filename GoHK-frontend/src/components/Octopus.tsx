import { type FC } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import sevenEleven from '../assets/Без названия.png';
import Relay from "../assets/Relay_logo.svg.png";




const Octopus: FC = () => {
  return (
    <div>
      <div>{/*  obshiy div */}
        <p className="text-xl font-semibold p-5">Octopus card(recommended)</p>
        <p className="pb-8">You can buy an Octopus Card immediately after landing at the following locations:</p>
        <div className='flex flex-col border pb-3 border-black/10'>{/* store div */}
          <div className='px-2 py-1 rounded-lg flex bg-green-200/50 w-full items-center'>
            <FaCircleCheck size={20} className='mr-5' />
            <p className='text-ls'>Convenience Store</p>
          </div>
          <div className=''>
            <div className='flex'> {/* 7-11 */}
              <img src={sevenEleven} alt="7-Eleven" className='w-25 h-15 mt-3 mb-3 ml-3 mr-1' />
              <div className='flex flex-col mt-4 mb-4 ml-4'>
                <p>7-Eleven (Arrival Hall & airport levels)</p>
                <p>Source: <a href='https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html' target='_blank' className='text-blue-600 hover:text-blue-900'>Click here</a></p>

              </div>
            </div>
            <div className='flex'>{/* Relay */}
              <img src={Relay} alt="Relay-icon" className='w-25 h-15 mt-3 mb-3 ml-3 mr-1' ></img>
              <div className='flex flex-col mt-4 mb-4 ml-4 '>
                <p>Relay (Arrival / pre-immigration area)</p>
                <p>Source: <a href='https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html' target='_blank' className='text-blue-600 hover:text-blue-900'>Click here</a></p>

              </div>
            </div>
          </div>
          
        </div>
        <div className='flex flex-col border pb-3 border-black/10'>{/* MTR div */}
          <div className='px-2 py-1 rounded-lg flex bg-green-200/50 w-full items-center'>
            <FaCircleCheck size={20} className='mr-5' />
            <p className='text-ls'>MTR(Airport station)</p>
          </div>
          <div className=''>
            <div className='flex'> {/* 7-11 */}
              <img src={sevenEleven} alt="7-Eleven" className='w-25 h-15 mt-3 mb-3 ml-3 mr-1' />
              <div className='flex flex-col mt-4 mb-4 ml-4'>
                <p>7-Eleven (Arrival Hall & airport levels)</p>
                <p>Source: <a href='https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html' target='_blank' className='text-blue-600 hover:text-blue-900'>Click here</a></p>

              </div>
            </div>
            <div className='flex'>{/* Relay */}
              <img src={Relay} alt="Relay-icon" className='w-25 h-15 mt-3 mb-3 ml-3 mr-1' ></img>
              <div className='flex flex-col mt-4 mb-4 ml-4 '>
                <p>Relay (Arrival / pre-immigration area)</p>
                <p>Source: <a href='https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html' target='_blank' className='text-blue-600 hover:text-blue-900'>Click here</a></p>

              </div>
            </div>
          </div>

        </div>
        <div></div>{/* Exchange div */}
      </div>
    </div>
  )
}

export default Octopus

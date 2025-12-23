import {useState, type FC} from 'react'
import ESimAndInternet from '../../components/ESim';
import Octopus from '../../components/Octopus';
import Transportation from '../../components/Transportation';
import Hotels from '../../components/Hotels';
import Food from '../../components/Food';
import VisitingPlaces from '../../components/VisitingPlaces';
import { IoIosSearch } from "react-icons/io";

const HomePage: FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ["SIM & Internet", "Octopus", "Transportation", "Accomodation", "Food", "Visit Places"];

  const next_stage = () => {
    setCurrentStage((currentStage + 1) % stages.length);
  }

  const previous_stage = () => {
    setCurrentStage((currentStage - 1) % stages.length);
  }

  const another_stage = (index: number) => {
    setCurrentStage(index);
  }


  return (
    <div className='flex flex-col m-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] h-[90vh] rounded-lg border border-black/10'>
      {/* Header */}
      <div className='flex justify-between font-bold p-5'> 
        <p className='ml-5 text-xl'>HK Trip Planner</p>
        <IoIosSearch size={25}/>
      </div>
      <div className='flex h-full border-t border-black/10'>
        {/* Left Side */}
        <div className='w-2/10 py-5 border-r border-black/10'>
          <div className='relative'>
            <div className="absolute left-5 top-0 h-full w-px bg-gray-300 z-0" />
            {stages.map((stage, index) => (
              <div 
                onClick={() => {another_stage(index)}}
                key={index} 
                className={`flex relative z-10 gap-x-3 p-2 py-4 ${index == currentStage ? 'bg-green-400/10 text-green-700 font-bold' : ''}`}
              >
                <div className={`w-4 h-4 p-3 text-xs rounded-full font-normal ${index == currentStage ? 'bg-green-600 text-white' : 'bg-white border border-y-green-700 text-green-700'} flex items-center justify-center`}>{index+1}</div>
                <div>{stage}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <div className='w-8/10 p-5'>
          {
            {
              0: <ESimAndInternet/>,
              1: <Octopus />,
              2: <Transportation/>,
              3: <Hotels />,
              4: <Food />,
              5: <VisitingPlaces />
            }[currentStage]
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage

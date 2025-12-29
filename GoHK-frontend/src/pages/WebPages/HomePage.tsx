import { useState, type FC } from 'react';
import ESimAndInternet from '../../components/ESim';
import Octopus from '../../components/Octopus';
import Transportation from '../../components/Transportation';
import Hotels from '../../components/Hotels';
import Food from '../../components/Food';
import VisitingPlaces from '../../components/VisitingPlaces';
import { FaSimCard, FaCarSide, FaHotel, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiMountaintop } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/userSlice';
import { removeTokenFromLocalStorage } from '../../helpers/localstorage.helper';
import { toast } from 'react-toastify';

const HomePage: FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const stages = ["SIM & Internet", "Octopus", "Transportation", "Accommodation", "Food", "Sights"];

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { access_token } = useAppSelector((state) => state.user)
  const isAuthenticated = !!access_token

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You successfully logged out')
    navigate('/auth');
  }

  const another_stage = (index: number) => {
    setCurrentStage(index);
  }

  const icons = [
    <FaSimCard className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />,
    <CiCreditCard1 className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />,
    <FaCarSide className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />,
    <FaHotel className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />,
    <FaBowlFood className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />,
    <GiMountaintop className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
  ];

  return (
    <div className="flex flex-col m-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] h-[90vh] rounded-lg border border-black/10">
      <div className="flex justify-between items-center font-bold p-5">
        <p className="ml-2 md:ml-5 lg:ml-5 text-md md:text-lg lg:text-xl">HK Trip Planner</p>
        {isAuthenticated ? (
          <button className='flex items-center gap-x-2 bg-red-300 text-white hover:bg-red-500 px-2 py-1 rounded-lg' onClick={logoutHandler}>
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        ) : (
          <Link to="/auth">
            <button className='flex items-center gap-x-2 bg-green-500 text-white hover:bg-green-600 px-2 py-1 rounded-lg'>
              <FaSignInAlt />
              <span>Log In</span>
            </button>
          </Link>
        )}
      </div>

      <div className="flex h-full border-t border-black/10">
        <div className="py-5 md:py-1 border-r border-black/10">
          <div className="relative grid grid-cols-[3rem_auto]">
            <div className="absolute top-0 h-full w-px bg-gray-300 z-0" style={{ left: '1.95rem' }} />

            {stages.map((stage, index) => (
              <div
                key={index}
                onClick={() => another_stage(index)}
                className={`col-span-2 flex items-center py-4 px-2 ${index === currentStage ? 'bg-green-400/10 text-green-700 font-bold' : ''}`}
              >
                <div className="w-12 flex justify-center z-1">
                  <div className={`
                    w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12
                    rounded-full
                    flex items-center justify-center
                    shrink-0
                    ${index === currentStage
                      ? 'bg-green-600 text-white'
                      : 'bg-white border border-green-700 text-green-700'
                    }
                  `}>
                    {icons[index]}
                  </div>
                </div>
                <div className="hidden md:block text-sm lg:text-lg ml-2">
                  {stage}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2 lg:p-5 flex-1 overflow-auto">
          {
            [
              <ESimAndInternet />,
              <Octopus />,
              <Transportation />,
              <Hotels />,
              <Food />,
              <VisitingPlaces />
            ][currentStage]
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import { type FC } from 'react'
import { FaCircleCheck } from "react-icons/fa6";

import sevenEleven from '../assets/companies/Без названия.png';
import Relay from "../assets/companies/Relay_logo.svg.png";
import mtr from "../assets/transport/mtr.svg";
import travelex from "../assets/companies/travelex.png";
import hung from "../assets/companies/hung fook tong.png";
import CircleK from "../assets/companies/Circle-K-Symbol.png"
const Octopus: FC = () => {
  return (
    <div className="p-1 h-[70vh] overflow-y-auto">
      <div>
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Octopus Card (Recommended to get)
        </h1>

        {/* Intro */}
        <p className="mt-1 text-sm text-gray-600">
          You can buy an Octopus Card immediately after landing at the following locations:
        </p>

        {/* Description */}
        <p className="pb-6 text-sm text-gray-600 underline underline-offset-3 decoration-gray-400/50">
          The Octopus Card allows payment for public transport (MTR, buses, trams) and purchases at convenience stores.
        </p>

        {/* Tip */}
        <p className="mb-4 text-sm text-gray-500 italic">
          Tip: Buying the Octopus Card at the airport saves time compared to purchasing it later in the city.
        </p>

        {/* Good to know box */}
        <div className="mb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
          <p className="text-sm font-medium text-blue-900">Good to know</p>
          <ul className="mt-1 list-disc list-inside text-sm text-blue-800">
            <li>You can top up the Octopus Card with cash or card</li>
            <li>No registration is required</li>
            <li>The card can be refunded when leaving Hong Kong</li>
          </ul>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
          Places where you can get Octopus Card:
        </h1>
        {/* Convenience Stores */}
        <div className="flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex-col border border-black/10 rounded-lg mb-2.5 pb-3">
          <div className="px-3 py-2 rounded-lg flex bg-green-200/50 w-full items-center">
            <FaCircleCheck size={20} className="mr-5 text-green-700" />
            <p className="text-sm font-medium">Convenience Stores</p>
          </div>

          <div>
            {/* CircleK */}
            <div className="flex">
              <img
                src={CircleK}
                alt="CricleK"
                className="w-24 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
              />
              <div className="flex flex-col mt-4 mb-4 ml-4">
                <p className="text-sm font-medium">
                  CircleK (Arrival Hall & airport levels)
                </p>
                <p className="text-xs text-gray-500">
                  Source:{' '}
                  <a
                    href="https://www.octopus.com.hk/en/consumer/octopus-cards/merchant-memberships/about/circlek.html"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Click here
                  </a>
                </p>
              </div>
            </div>

            {/* Relay */}
            <div className="flex">
              <img
                src={Relay}
                alt="Relay"
                className="w-24 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
              />
              <div className="flex flex-col mt-4 mb-4 ml-4">
                <p className="text-sm font-medium">
                  Relay (Arrival / pre-immigration area)
                </p>
                <p className="text-xs text-gray-500">
                  Source:{' '}
                  <a
                    href="https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Click here
                  </a>
                </p>
              </div>
            </div>
            {/* 7-Eleven */}
            <div className="flex">
              <img
                src={sevenEleven}
                alt="7-Eleven"
                className="w-24 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
              />
              <div className="flex flex-col mt-4 mb-4 ml-4">
                <p className="text-sm font-medium">
                  7-Eleven (Arrival Hall & airport levels)
                </p>
                <p className="text-xs text-gray-500">
                  Source:{' '}
                  <a
                    href="https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MTR */}
        <div className="flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex-col border border-black/10 rounded-lg mb-2.5 pb-3">
          <div className="px-3 py-2 rounded-lg flex bg-green-200/50 w-full items-center">
            <FaCircleCheck size={20} className="mr-5 text-green-700" />
            <p className="text-sm font-medium">MTR (Airport Station)</p>
          </div>

          <div className="flex mt-4 mb-2 ml-4">
            <img
              src={mtr}
              alt="MTR"
              className="w-20 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
            />
            <div className="flex flex-col mt-4 mb-4 ml-4">
              <p className="text-sm font-medium">
                MTR Airport Station – Customer Service Centre
              </p>
              <p className="text-sm text-gray-600">
                MTR Ticket & Octopus Selling Machines
              </p>
            </div>
          </div>

          <p className="pl-5 text-xs text-gray-500">
            Source:{' '}
            <a
              href="https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html"
              target="_blank"
              className="text-blue-600 hover:text-blue-900"
            >
              Click here
            </a>
          </p>
        </div>

        {/* Exchange / Retail Counters */}
        <div className="flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex-col border border-black/10 rounded-lg pb-3">
          <div className="px-3 py-2 rounded-lg flex bg-green-200/50 w-full items-center">
            <FaCircleCheck size={20} className="mr-5 text-green-700" />
            <p className="text-sm font-medium">Exchange / Retail Counters</p>
          </div>

          {/* Travelex */}
          <div className="flex">
            <img
              src={travelex}
              alt="Travelex"
              className="w-28 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
            />
            <div className="flex flex-col mt-4 mb-4 ml-4">
              <p className="text-sm font-medium">
                Travelex (Terminal 1, Arrival Hall A & B)
              </p>
              <p className="text-xs text-gray-500">
                Source:{' '}
                <a
                  href="https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-900"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>

          {/* Hung Fook Tong */}
          <div className="flex">
            <img
              src={hung}
              alt="Hung Fook Tong"
              className="w-28 h-12 mt-3 mb-3 ml-3 mr-1 object-contain"
            />
            <div className="flex flex-col mt-4 mb-4 ml-4">
              <p className="text-sm font-medium">
                Hung Fook Tong (selected airport locations)
              </p>
              <p className="text-xs text-gray-500">
                Source:{' '}
                <a
                  href="https://www.octopus.com.hk/en/consumer/tourist/channels/air/index.html"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-900"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Octopus;

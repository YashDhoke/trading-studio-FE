import React from "react";
import Header from "./Header";
import Features from "./Features";
import { FaRegCalendar } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-[rgba(249,250,251,255)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-16">
          <div>
            <h1 className="text-5xl font-semibold">
              Dynamic Returns <br />
              Calculator
            </h1>
            <p className="text-[rgba(110,117,130,255)] mt-5">
              Calculate your potential returns with our advanced trading
              analytics
              <br />
              platform. Make informed decisions with real-time data and <br />
              comprehensive analysis tools.
            </p>
          </div>
          <div className="border border-white w-[500px] shadow-md rounded-lg bg-white p-5 text-[rgba(75,85,99,255)] space-y-2">
            <h3>Start Date</h3>
            <div className="flex justify-between items-center">
              <div className="flex w-full items-center">
                <p className="border-b border-gray-200 w-full">01/01/2024</p>
              </div>
              <FaRegCalendar />
            </div>

            <h3>End Date</h3>
            <div className="flex justify-between items-center">
              <div className="flex w-full items-center">
                <p className="border-b border-gray-200 w-full">01/03/2024</p>
              </div>
              <FaRegCalendar />
            </div>

            <h3>Initial Investment</h3>
            <p className="border-b border-gray-200 w-full">$ 10000</p>

            <h3>Monthly Growth (%)</h3>
            <p className="border-b border-gray-200 w-full">5</p>

            <div className="flex bg-[rgba(249,250,251,255)] justify-between h-12 p-2 items-center rounded-md mt-2">
              <h3>Projected Value:</h3>
              <p className="font-bold">$ 11,025</p>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Home;

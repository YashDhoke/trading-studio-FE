import React from "react";
import { HiMiniChartBar } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="flex justify-between m-5 max-w-7xl mx-auto">
        <div className="flex items-center">
          <HiMiniChartBar className="text-2xl mr-2 text-[rgba(80,70,229,255)]" />
          <h1 className="font-bold">Trading Studio</h1>
        </div>
        <div className="flex gap-7 items-center text-[rgba(75,85,99,255)]">
          <h2>Features</h2>
          <h2>Documentation</h2>
          <h2>Pricing</h2>
          <h2>Contact Us</h2>
          <h2>FAQ</h2>
          <button className="bg-[rgba(80,70,229,255)] text-white rounded-md px-4 py-2">
            Login
          </button>
        </div>
      </div>
      <div className="absolute left-0 w-full h-[2px] bg-gray-100 shadow-2xl"></div>
    </>
  );
};

export default Header;

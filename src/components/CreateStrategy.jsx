import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

const CreateStrategy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex shadow-lg max-w-4xl mx-auto mt-40 h-100 flex-col p-5">
      <h1 className="text-xl font-semibold">Strategy Builder</h1>
      <input
        type="text"
        className="border border-gray-300  mt-2 rounded-md p-2"
        placeholder="New Strategy"
      />
      <div className="bg-[rgba(249,250,251,255)] h-23 mt-5 rounded-md p-3">
        <h2 className="font-semibold">Buy Trigger Conditions</h2>
        <div className="flex items-center mt-3">
          <FaPlus className="text-xs text-[rgba(37,99,235,255)] mr-2" />
          <p className="text-[rgba(37,99,235,255)]">Add Buy Condition</p>
        </div>
      </div>
      <div className="bg-[rgba(249,250,251,255)] h-25 mt-5 rounded-md p-3">
        <h2 className="font-semibold">Sell Trigger Conditions</h2>
        <div className="flex items-center mt-3">
          <FaPlus className="text-xs text-[rgba(37,99,235,255)] mr-2" />
          <p className="text-[rgba(37,99,235,255)]">Add Sell Condition</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-[rgba(37,99,235,255)]  rounded-md mt-4 h-10 p-3 text-white flex items-center">
          <LuSave className="mr-2" />
          Save Strategy
        </button>
      </div>
    </div>
  );
};

export default CreateStrategy;

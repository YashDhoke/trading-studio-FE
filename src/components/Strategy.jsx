import React from "react";
import { useNavigate } from "react-router-dom";

const Strategy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex shadow-lg max-w-4xl mx-auto mt-40 h-70 flex-col items-center">
      <h1 className="text-3xl font-bold">Create a Strategy</h1>
      <p className="mt-2">to Simulate returns</p>
      <button
        className="mt-10 bg-[rgba(80,70,229,255)] rounded-md w-24 hover:bg-[rgba(60,50,200,255)] hover:scale-105 p-2 text-white transition duration-300 ease-in-out"
        onClick={() => navigate("/create-strategy")}
      >
        BEGIN
      </button>
      <div className="border border-gray-100 mt-10 w-[95%]"></div>
      <p className="mt-7 text-[rgba(75,85,99,255)]">
        Or test with built-in strategies...
      </p>
    </div>
  );
};

export default Strategy;

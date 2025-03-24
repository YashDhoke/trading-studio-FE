import React from "react";
import { PiChartLineBold } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <PiChartLineBold />,
      heading: "Advanced Analytics",
      description: "Real-time market analysis and predictive modeling",
    },
    {
      icon: <FiBookOpen />,
      heading: "Educational Resources",
      description: "Comprehensive trading guides and tutorials",
    },
    {
      icon: <FiUsers />,
      heading: "Community Support",
      description: "Connect with experienced traders",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Features</h1>
        <p className="text-[rgba(119,125,138,255)] mt-3">
          Everything you need to succeed in trading
        </p>
      </div>
      <div className="flex mt-10 justify-center gap-7">
        {features.map((item) => (
          <div className="flex flex-col items-center border w-[400px] h-[220px] p-5 rounded-lg bg-[rgba(249,250,251,255)] border-white overflow-auto">
            <div className="text-[rgba(90,81,230,255)] text-5xl">
              {item.icon}
            </div>
            <div className="font-semibold mt-5">{item.heading}</div>
            <div className="text-[rgba(119,125,138,255)] mt-5 text-center break-words">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

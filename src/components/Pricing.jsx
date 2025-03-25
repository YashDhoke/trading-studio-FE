import React from "react";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      period: "month",
      description: "Perfect for getting started",
      features: ["Basic analytics", "Up to 5 projects", "Community support"],
      buttonText: "Get Started",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      price: "$29",
      period: "month",
      description: "For growing businesses",
      features: [
        "Advanced analytics",
        "Up to 20 projects",
        "Priority support",
        "Custom domains",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "filled",
      mostPopular: true,
    },
    {
      title: "Business",
      price: "$99",
      period: "month",
      description: "For larger teams",
      features: [
        "Enterprise analytics",
        "Unlimited projects",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outlined",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: [
        "Custom solutions",
        "Dedicated support team",
        "Custom contracts",
        "On-premise options",
        "Advanced security",
      ],
      buttonText: "Talk to Sales",
      buttonVariant: "outlined",
    },
  ];

  return (
    <>
      <div className="flex justify-center max-w-6xl mx-auto mt-10 ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Simple, transparent pricing</h1>
          <p className="text-[rgba(75,85,99,255)] mt-3">
            Choose the perfect plan for your needs
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-10 relative">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg p-4 shadow-lg flex flex-col items-center w-70 h-110 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl 
      ${item.title === "Pro" ? "border-2 border-[rgba(80,70,229,255)]" : ""}`}
          >
            {item.title === "Pro" && (
              <span className="absolute top-[-15px] left-[10px] bg-[rgba(80,70,229,255)] text-white px-3 py-1 rounded-md text-sm font-semibold">
                Most Popular
              </span>
            )}

            <p className="text-lg font-semibold">{item.title}</p>
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold mt-2">{item.price}</h1>
              {item.price !== "Custom" && (
                <p className="mt-4">/{item.period}</p>
              )}
            </div>
            <p className="text-gray-500 mt-2 font-semibold">
              {item.description}
            </p>
            <ul className="mt-2 space-y-1">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-1 mt-5">
                  <TiTick className="text-2xl text-[rgba(80,70,229,255)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-7 border border-[rgba(80,70,229,255)] px-5 py-2 rounded-md w-full text-[rgba(80,70,229,255)] font-semibold transition duration-300 ease-in-out hover:bg-[rgba(80,70,229,255)] hover:text-white">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>

      <p className="flex justify-center mt-15 text-[rgba(80,70,229,255)] font-semibold">
        Have Questions? Check our FAQ
      </p>
    </>
  );
};

export default Pricing;

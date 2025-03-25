import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

const CreateStrategy = () => {
  const navigate = useNavigate();
  const [strategyName, setStrategyName] = useState("");
  const [buyConditions, setBuyConditions] = useState([]);
  const [sellConditions, setSellConditions] = useState([]);
  const [newBuyCondition, setNewBuyCondition] = useState("");
  const [newSellCondition, setNewSellCondition] = useState("");
  const [isAddingBuyCondition, setIsAddingBuyCondition] = useState(false);
  const [isAddingSellCondition, setIsAddingSellCondition] = useState(false);
  const [errors, setErrors] = useState({
    strategyName: "",
    buyCondition: "",
    sellCondition: "",
  });

  const handleSaveStrategy = () => {
    const newErrors = { strategyName: "", buyCondition: "", sellCondition: "" };

    if (!strategyName.trim()) {
      newErrors.strategyName = "Please enter a strategy name.";
    }

    if (!newBuyCondition.trim() && isAddingBuyCondition) {
      newErrors.buyCondition = "Buy condition cannot be empty.";
    }

    if (!newSellCondition.trim() && isAddingSellCondition) {
      newErrors.sellCondition = "Sell condition cannot be empty.";
    }

    if (
      newErrors.strategyName ||
      newErrors.buyCondition ||
      newErrors.sellCondition
    ) {
      setErrors(newErrors);
      return;
    }

    const strategy = {
      name: strategyName,
      buyConditions,
      sellConditions,
    };

    const savedStrategies =
      JSON.parse(localStorage.getItem("strategies")) || [];
    localStorage.setItem(
      "strategies",
      JSON.stringify([...savedStrategies, strategy])
    );

    alert("Strategy saved successfully!");
    setStrategyName("");
    setBuyConditions([]);
    setSellConditions([]);
    setNewBuyCondition("");
    setNewSellCondition("");
    setIsAddingBuyCondition(false);
    setIsAddingSellCondition(false);
    setErrors({
      strategyName: "",
      buyCondition: "",
      sellCondition: "",
    });
  };

  const handleAddBuyCondition = () => {
    if (buyConditions.length >= 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        buyCondition: "You can only add up to 5 buy conditions.",
      }));
      setIsAddingBuyCondition(false);
      return;
    }

    if (newBuyCondition.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        buyCondition: "Buy condition cannot be empty.",
      }));
      return;
    }

    setBuyConditions([...buyConditions, newBuyCondition]);
    setNewBuyCondition("");
    setIsAddingBuyCondition(false);
    setErrors((prevErrors) => ({ ...prevErrors, buyCondition: "" }));
  };

  const handleAddSellCondition = () => {
    if (sellConditions.length >= 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sellCondition: "You can only add up to 5 sell conditions.",
      }));
      setIsAddingSellCondition(false);
      return;
    }

    if (newSellCondition.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sellCondition: "Sell condition cannot be empty.",
      }));
      return;
    }

    setSellConditions([...sellConditions, newSellCondition]);
    setNewSellCondition("");
    setIsAddingSellCondition(false);
    setErrors((prevErrors) => ({ ...prevErrors, sellCondition: "" }));
  };

  const handleInputChange = (field, value) => {
    if (field === "strategyName") {
      setStrategyName(value);
      if (errors.strategyName) {
        setErrors((prevErrors) => ({ ...prevErrors, strategyName: "" }));
      }
    } else if (field === "newBuyCondition") {
      setNewBuyCondition(value);
      if (errors.buyCondition) {
        setErrors((prevErrors) => ({ ...prevErrors, buyCondition: "" }));
      }
    } else if (field === "newSellCondition") {
      setNewSellCondition(value);
      if (errors.sellCondition) {
        setErrors((prevErrors) => ({ ...prevErrors, sellCondition: "" }));
      }
    }
  };

  return (
    <>
      <div className="flex justify-end p-8">
        <button
          className="flex bg-[rgba(37,99,235,255)] text-white rounded-md p-1 w-30 items-center justify-center"
          onClick={() => navigate("/saved-strategies")}
        >
          My Strategies
        </button>
      </div>
      <div className="flex shadow-lg max-w-4xl mx-auto mt-40 flex-col p-5">
        <h1 className="text-xl font-semibold">Strategy Builder</h1>
        <input
          type="text"
          className="border border-gray-300 mt-2 rounded-md p-2"
          placeholder="New Strategy"
          value={strategyName}
          onChange={(e) => handleInputChange("strategyName", e.target.value)}
        />
        {errors.strategyName && (
          <p className="text-red-500 text-sm mt-2">{errors.strategyName}</p>
        )}

        <div
          className="bg-[rgba(249,250,251,255)] mt-5 rounded-md p-3"
          style={{ minHeight: "100px" }}
        >
          <h2 className="font-semibold">Buy Trigger Conditions</h2>
          <div className="flex items-center mt-3">
            <FaPlus
              className="text-xs text-[rgba(37,99,235,255)] mr-2 cursor-pointer"
              onClick={() => setIsAddingBuyCondition(true)}
            />
            <p className="text-[rgba(37,99,235,255)] cursor-pointer">
              Add Buy Condition
            </p>
          </div>

          {isAddingBuyCondition && (
            <div className="mt-3 flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 mr-2"
                placeholder="Enter Buy Condition"
                value={newBuyCondition}
                onChange={(e) =>
                  handleInputChange("newBuyCondition", e.target.value)
                }
              />
              <button
                className="bg-[rgba(37,99,235,255)] text-white rounded-md px-3 py-1"
                onClick={handleAddBuyCondition}
              >
                Add
              </button>
            </div>
          )}
          {errors.buyCondition && (
            <p className="text-red-500 text-sm mt-2">{errors.buyCondition}</p>
          )}

          <ul>
            {buyConditions.map((condition, index) => (
              <li key={index} className="mt-2">
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="bg-[rgba(249,250,251,255)] mt-5 rounded-md p-3"
          style={{ minHeight: "100px" }}
        >
          <h2 className="font-semibold">Sell Trigger Conditions</h2>
          <div className="flex items-center mt-3">
            <FaPlus
              className="text-xs text-[rgba(37,99,235,255)] mr-2 cursor-pointer"
              onClick={() => setIsAddingSellCondition(true)}
            />
            <p className="text-[rgba(37,99,235,255)] cursor-pointer">
              Add Sell Condition
            </p>
          </div>

          {isAddingSellCondition && (
            <div className="mt-3 flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 mr-2"
                placeholder="Enter Sell Condition"
                value={newSellCondition}
                onChange={(e) =>
                  handleInputChange("newSellCondition", e.target.value)
                }
              />
              <button
                className="bg-[rgba(37,99,235,255)] text-white rounded-md px-3 py-1"
                onClick={handleAddSellCondition}
              >
                Add
              </button>
            </div>
          )}
          {errors.sellCondition && (
            <p className="text-red-500 text-sm mt-2">{errors.sellCondition}</p>
          )}

          <ul>
            {sellConditions.map((condition, index) => (
              <li key={index} className="mt-2">
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[rgba(37,99,235,255)] rounded-md mt-4 h-10 p-3 text-white flex items-center"
            onClick={handleSaveStrategy}
          >
            <LuSave className="mr-2" />
            Save Strategy
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateStrategy;

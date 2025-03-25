import React, { useEffect, useState } from "react";

const SavedStrategies = () => {
  const [savedStrategies, setSavedStrategies] = useState([]);
  useEffect(() => {
    const strategies = JSON.parse(localStorage.getItem("strategies")) || [];
    setSavedStrategies(strategies);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-5">Saved Strategies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {savedStrategies.length === 0 ? (
          <p>No strategies saved yet.</p>
        ) : (
          savedStrategies.map((strategy, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md p-4 shadow-lg flex flex-col h-100"
            >
              <h2 className="text-lg font-semibold mb-2">{strategy.name}</h2>

              <div className="mt-2">
                <h3 className="font-semibold">Buy Conditions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {strategy.buyConditions.length > 0 ? (
                    strategy.buyConditions.map((condition, idx) => (
                      <div
                        key={idx}
                        className="text-sm bg-gray-100 p-2 rounded-md"
                      >
                        {condition}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm">No buy conditions set</div>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <h3 className="font-semibold">Sell Conditions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {strategy.sellConditions.length > 0 ? (
                    strategy.sellConditions.map((condition, idx) => (
                      <div
                        key={idx}
                        className="text-sm bg-gray-100 p-2 rounded-md"
                      >
                        {condition}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm">No sell conditions set</div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedStrategies;

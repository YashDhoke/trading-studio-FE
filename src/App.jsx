import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Strategy from "./components/Strategy";
import CreateStrategy from "./components/CreateStrategy";
import SavedStrategies from "./components/SavedStrategies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/create-strategy" element={<CreateStrategy />} />
        <Route path="/saved-strategies" element={<SavedStrategies />} />
      </Routes>
    </Router>
  );
};

export default App;

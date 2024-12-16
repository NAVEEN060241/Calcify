import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import FuelAccordionData from "../../AccordionData/FuelAccordionData";
import fuelImage from "../../../assets/SidebarAssets/fuelImage.png";

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuelEfficiency, setFuelEfficiency] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [fuelCost, setFuelCost] = useState(null);
  const [error, setError] = useState("");

  // Fuel Accordion Data
  const fuelAccordionData = FuelAccordionData();

  const handleCalculate = () => {
    if (!distance || !fuelEfficiency || !fuelPrice) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the fields.",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
      setFuelCost(null);
      return;
    }

    const distanceValue = parseFloat(distance);
    const fuelEfficiencyValue = parseFloat(fuelEfficiency);
    const fuelPriceValue = parseFloat(fuelPrice);

    if (
      isNaN(distanceValue) ||
      isNaN(fuelEfficiencyValue) ||
      isNaN(fuelPriceValue)
    ) {
      Swal.fire({
        title: "Error!",
        text: "Please enter valid numbers.",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
      setFuelCost(null);
      return;
    }

    setError("");

    const cost = (distanceValue / fuelEfficiencyValue) * fuelPriceValue;
    setFuelCost(cost.toFixed(2));
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={fuelImage} alt="Fuel" width={50} />
        <h1 className="global-gradient-heading">Fuel Cost Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex flex-column justify-content-center align-items-center gap-5">
        {/* Distance & Efficiency Container */}
        <div className="d-flex flex-row gap-5 mb-4">
          {/* Distance */}
          <label className="form-label" id="distance">
            Distance <span className="text-secondary">(km)</span>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter distance"
              className="form-control rounded-5 mt-2"
              id="distance"
            />
          </label>
          {/* Fuel Efficiency */}
          <label className="form-label" id="fuelEfficiency">
            Fuel Efficiency / Mileage{" "}
            <span className="text-secondary">(km/l)</span>
            <input
              type="number"
              value={fuelEfficiency}
              onChange={(e) => setFuelEfficiency(e.target.value)}
              placeholder="Enter fuel efficiency"
              className="form-control rounded-5 mt-2"
              id="fuelEfficiency"
            />
          </label>
        </div>

        {/* Fuel Price & Button */}
        <div className="d-flex flex-row gap-5 align-items-end ">
          {/* Fuel Price */}
          <label className="form-label" id="fuelPrice">
            Fuel Price <span className="text-secondary">(₹/l)</span>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              placeholder="Enter fuel price"
              className="form-control rounded-5 mt-2"
              id="fuelPrice"
            />
          </label>
          {/* Global Button */}
          <div style={{ marginBottom: "6px" }}>
            <button
              className="btn btn-secondary global-button rounded-5"
              onClick={handleCalculate}
            >
              Calculate Fuel Cost
            </button>
          </div>
        </div>
        {/* Result container */}
        <div className="d-flex flex-row justify-content-center">
          {error && (
            <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>
          )}
          {fuelCost !== null && (
            <div className="global-result-container global-animate-zoom-in mt-4">
              <h3>🎯 Estimated Fuel Cost: ₹{fuelCost} 🎯</h3>
            </div>
          )}
        </div>
      </div>

      {/* Accordion Component */}
      <Accordion data={fuelAccordionData} />
    </div>
  );
};

export default FuelCostCalculator;

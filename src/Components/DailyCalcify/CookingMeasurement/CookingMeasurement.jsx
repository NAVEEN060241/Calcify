import { useState } from "react";
import Swal from "sweetalert2";
import Accordion from "../../Accordion/Accordion";
import CookingAccordionData from "../../AccordionData/CookingAccordionData";
import cookingImage from "../../../assets/SidebarAssets/cookingImage.png";

// Remove the fraction conversion function
const CookingMeasurementConverter = () => {
  const [category, setCategory] = useState("volume"); // Default category is volume
  const [baseUnit, setBaseUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Cooking Accordion Data
  const cookingAccordionData = CookingAccordionData();

  // Unit categories and their corresponding units (no temperature category)
  const units = {
    volume: ["Cups", "Milliliters", "Tablespoons", "Teaspoons"],
    weight: ["Grams", "Kilograms", "Ounces"],
  };

  // Conversion factors for unit pairs
  const conversionFactors = {
    volume: {
      Cups: { Milliliters: 240, Tablespoons: 16, Teaspoons: 48 },
      Milliliters: { Cups: 1 / 240, Tablespoons: 1 / 15, Teaspoons: 1 / 5 },
      Tablespoons: { Cups: 1 / 16, Milliliters: 15, Teaspoons: 3 },
      Teaspoons: { Cups: 1 / 48, Milliliters: 5, Tablespoons: 1 / 3 },
    },
    weight: {
      Grams: { Ounces: 0.0353, Kilograms: 0.001 },
      Ounces: { Grams: 28.3495, Kilograms: 0.0283495 },
      Kilograms: { Grams: 1000, Ounces: 35.274 },
    },
  };

  const handleConversion = () => {
    if (!value || !baseUnit || !targetUnit) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
      setResult(null);
      return;
    }

    const numValue = parseFloat(value);

    if (isNaN(numValue)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid number.",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
      setResult(null);
      return;
    }

    setError("");

    // Fetch the conversion factors based on the selected category
    const factors = conversionFactors[category];

    // Handle volume conversions with decimal result
    if (
      category === "volume" &&
      factors[baseUnit] &&
      factors[baseUnit][targetUnit] != null
    ) {
      let convertedValue = numValue * factors[baseUnit][targetUnit];

      // Get the decimal value (rounded to 4 decimal places)
      const decimalValue = convertedValue.toFixed(2);

      // Set the result as only decimal value
      setResult(`${numValue} ${baseUnit} = ${decimalValue} ${targetUnit}`);
    } else if (
      category === "weight" &&
      factors[baseUnit] &&
      factors[baseUnit][targetUnit] != null
    ) {
      // Handle weight conversions with decimal or integer result
      let convertedValue = numValue * factors[baseUnit][targetUnit];
      setResult(
        `${numValue} ${baseUnit} = ${convertedValue.toFixed(2)} ${targetUnit}`
      );
    } else {
      setError("Conversion not supported.");
      setResult(null);
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={cookingImage} alt="Cooking" width={50} />
        <h1 className="global-gradient-heading">
          Cooking Measurement Calculator
        </h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex justify-content-center align-items-center flex-column gap-5 ">
        {/* Select Category Container */}
        <div className="d-flex flex-row">
          {/* Select Category */}
          <label className="form-label">
            Select Category
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setBaseUnit("");
                setTargetUnit("");
                setResult(null);
              }}
              className="form-select rounded-5 mt-2"
            >
              {Object.keys(units).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* Base & Target Unit Container */}
        <div className="d-flex flex-row gap-5">
          {/* Base unit */}
          <label className="form-label">
            Base Unit
            <select
              value={baseUnit}
              onChange={(e) => setBaseUnit(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="">Select Unit</option>
              {units[category].map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
          {/* Target Unit */}
          <label className="form-label">
            Target Unit
            <select
              value={targetUnit}
              onChange={(e) => setTargetUnit(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="">Select Unit</option>
              {units[category].map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
        </div>
        {/* Value & Button Container */}
        <div className="d-flex flex-row gap-5 align-items-end mb-2">
          <label className="form-label">
            Value <span className="text-secondary">(e.g., 2 Cups)</span>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="form-control rounded-5 mt-2"
            />
          </label>
          {/* Global Button */}
          <div style={{ marginBottom: "6px" }}>
            <button
              className="global-button rounded-5"
              onClick={handleConversion}
            >
              Convert
            </button>
          </div>
        </div>
        {/* Result container */}
        <div>
          {error && (
            <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>
          )}
          {result !== null && (
            <div className="global-result-container global-animate-zoom-in ">
              <h4 className="fw-bold">🎯 {result} 🎯</h4>
            </div>
          )}
        </div>
      </div>
      {/* Accordion Component */}
      <Accordion data={cookingAccordionData} />
    </div>
  );
};

export default CookingMeasurementConverter;

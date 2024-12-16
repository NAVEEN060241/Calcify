import { useState } from "react";
import PhysicsAccordionData from "../../AccordionData/PhysicsAccordionData";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import physicsImage from "../../../assets/SidebarAssets/physicsImage.png";

const PhysicsCalculator = () => {
  const [category, setCategory] = useState("force"); // Default category
  const [formula, setFormula] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Physics Accordion Data
  const physicsAccordionData = PhysicsAccordionData();

  // Physics formulas and units
  const units = {
    force: ["Force"],
    energy: ["Kinetic Energy", "Potential Energy"],
    motion: ["Angular Velocity"],
    areaVolume: ["Surface Area of Sphere", "Volume of Cylinder"],
  };

  // Constants
  const constants = {
    pi: 3.1416, // for surface area and volume
    G: 6.6743e-11, // Gravitational constant
  };

  // Value unit tips for each formula
  const valueTips = {
    Force: "(Acceleration (a) in m/s²)",
    "Kinetic Energy": "(Velocity (v) in m/s)",
    "Potential Energy": "(Height (h) in meters)",
    "Angular Velocity": "(Angular displacement (θ))",
    "Surface Area of Sphere": "(Radius (r) in meters)",
    "Volume of Cylinder": "(Radius (r) in meters)",
  };

  const handleCalculation = () => {
    if (!value || !formula) {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all the fields",
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
        text: "Please enter a valid number",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
      setResult(null);
      return;
    }

    setError("");

    // Handle each type of calculation based on the selected formula
    let calculatedResult = null;
    let unit = "";

    // Force Calculations
    if (category === "force") {
      if (formula === "Force") {
        const mass = 10; // Mass in kg (fixed)
        const acceleration = numValue; // User input is acceleration
        // F = m * a
        calculatedResult = mass * acceleration;
        unit = "N"; // Newtons
      }
    }

    // Energy Calculations
    else if (category === "energy") {
      if (formula === "Kinetic Energy") {
        const mass = 50; // kg (fixed)
        const velocity = numValue; // User input is velocity
        // KE = 0.5 * m * v²
        calculatedResult = 0.5 * mass * Math.pow(velocity, 2);
        unit = "J"; // Joules
      } else if (formula === "Potential Energy") {
        const mass = 10; // kg (fixed)
        const height = numValue; // User input is height
        // PE = m * g * h
        calculatedResult = mass * 9.81 * height;
        unit = "J"; // Joules
      }
    }

    // Motion Calculations
    else if (category === "motion") {
      if (formula === "Angular Velocity") {
        const angularDisplacement = numValue; // User input is angular displacement (in radians)
        const time = 5; // fixed time in seconds
        // ω = θ / t
        calculatedResult = angularDisplacement / time;
        unit = "rad/s"; // Radians per second
      }
    }

    // Area & Volume Calculations
    else if (category === "areaVolume") {
      if (formula === "Surface Area of Sphere") {
        const radius = numValue; // User input is radius
        // A = 4 * π * r²
        calculatedResult = 4 * constants.pi * Math.pow(radius, 2);
        unit = "m²"; // Square meters
      } else if (formula === "Volume of Cylinder") {
        const radius = numValue; // User input is radius
        const height = 10; // fixed height in meters
        // V = π * r² * h
        calculatedResult = constants.pi * Math.pow(radius, 2) * height;
        unit = "m³"; // Cubic meters
      }
    }

    // Format result to 2 decimal points and append the unit
    if (calculatedResult !== null) {
      setResult(`${calculatedResult.toFixed(2)} ${unit}`);
    } else {
      setError("Calculation not supported.");
      setResult(null);
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={physicsImage} alt="Physics" width={50} />
        <h1 className="global-gradient-heading">Physics Formulae Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex flex-row justify-content-evenly gap-5">
        {/* Select Category */}
        <label className="form-label">
          Select Category
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setFormula("");
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
        {/* Select Formula */}
        <label className="form-label">
          Select Formula
          <select
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className="form-select rounded-5 mt-2"
          >
            <option value="" className="text-info">
              Select Formula
            </option>
            {units[category].map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
        {/* Value */}
        <label className="form-label" id="value">
          Value {valueTips[formula]}
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            id="value"
            className="form-control rounded-5 mt-2"
          />
        </label>
      </div>
      {/* Global Button */}
      <div>
        <button
          className="global-button rounded-5 mt-5"
          onClick={handleCalculation}
        >
          Calculate
        </button>
      </div>
      {/* Result container */}
      <div>
        {error && (
          <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>
        )}
        {result && (
          <div className="global-result-container global-animate-zoom-in mt-5">
            <h4 className="fw-bold">🎯 {result} 🎯</h4>
          </div>
        )}
      </div>
      {/* Accordion Component */}
      <Accordion data={physicsAccordionData} />
    </div>
  );
};

export default PhysicsCalculator;

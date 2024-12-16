import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import UnitAccordionData from "../../AccordionData/UnitAccordionData";
import rulerImage from "../../../assets/SidebarAssets/rulerImage.png";

const UnitConverter = () => {
  const [category, setCategory] = useState("length"); // Default category
  const [baseUnit, setBaseUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Unit Accordion Data
  const unitAccordionData = UnitAccordionData();

  // Unit categories and their corresponding units
  const units = {
    length: [
      "Meters",
      "Kilometers",
      "Centimeters",
      "Millimeters",
      "Inches",
      "Feet",
      "Yards",
      "Miles",
    ],
    weight: ["Grams", "Kilograms", "Metric Tons", "Ounces", "Pounds", "Stones"],
    volume: [
      "Milliliters",
      "Liters",
      "Cubic Meters",
      "Fluid Ounces",
      "Pints",
      "Gallons",
      "Cubic Feet",
    ],
    temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    speed: [
      "Meters per Second",
      "Kilometers per Hour",
      "Miles per Hour",
      "Feet per Second",
    ],
    time: ["Seconds", "Minutes", "Hours", "Days"],
    energy: ["Joules", "Kilojoules", "Calories", "Kilocalories"],
    pressure: ["Pascals", "Kilopascals", "Bar", "PSI"],
    fuelEconomy: ["Liters per 100 km", "Miles per Gallon"],
  };

  // Conversion factors for unit pairs
  const conversionFactors = {
    length: {
      Meters: {
        Kilometers: 0.001,
        Centimeters: 100,
        Millimeters: 1000,
        Inches: 39.37,
        Feet: 3.281,
        Yards: 1.094,
        Miles: 0.000621,
      },
      Kilometers: {
        Meters: 1000,
        Centimeters: 100000,
        Millimeters: 1000000,
        Inches: 39370.1,
        Feet: 3280.84,
        Yards: 1093.61,
        Miles: 0.621371,
      },
      Centimeters: {
        Meters: 0.01,
        Kilometers: 0.00001,
        Millimeters: 10,
        Inches: 0.393701,
        Feet: 0.0328084,
        Yards: 0.0109361,
        Miles: 6.2137e-6,
      },
      Millimeters: {
        Meters: 0.001,
        Kilometers: 1e-6,
        Centimeters: 0.1,
        Inches: 0.0393701,
        Feet: 0.00328084,
        Yards: 0.00109361,
        Miles: 6.2137e-7,
      },
      Inches: {
        Meters: 0.0254,
        Kilometers: 2.54e-5,
        Centimeters: 2.54,
        Millimeters: 25.4,
        Feet: 0.0833333,
        Yards: 0.0277778,
        Miles: 1.5783e-5,
      },
      Feet: {
        Meters: 0.3048,
        Kilometers: 0.0003048,
        Centimeters: 30.48,
        Millimeters: 304.8,
        Inches: 12,
        Yards: 0.333333,
        Miles: 0.000189394,
      },
      Yards: {
        Meters: 0.9144,
        Kilometers: 0.0009144,
        Centimeters: 91.44,
        Millimeters: 914.4,
        Inches: 36,
        Feet: 3,
        Miles: 0.000568182,
      },
      Miles: {
        Meters: 1609.34,
        Kilometers: 1.60934,
        Centimeters: 160934,
        Millimeters: 1609340,
        Inches: 63360,
        Feet: 5280,
        Yards: 1760,
      },
    },
    weight: {
      Grams: {
        Kilograms: 0.001,
        Ounces: 0.035274,
        Pounds: 0.00220462,
        Stones: 0.000157473,
      },
      Kilograms: {
        Grams: 1000,
        Ounces: 35.274,
        Pounds: 2.20462,
        Stones: 0.157473,
      },
      Ounces: {
        Grams: 28.3495,
        Kilograms: 0.0283495,
        Pounds: 0.0625,
        Stones: 0.00446429,
      },
      Pounds: {
        Grams: 453.592,
        Kilograms: 0.453592,
        Ounces: 16,
        Stones: 0.0714286,
      },
      Stones: {
        Grams: 6350.29,
        Kilograms: 6.35029,
        Ounces: 224,
        Pounds: 14,
      },
    },
    volume: {
      Milliliters: {
        Liters: 0.001,
        Gallons: 0.000264172,
        FluidOunces: 0.033814,
        Pints: 0.00211338,
      },
      Liters: {
        Milliliters: 1000,
        Gallons: 0.264172,
        FluidOunces: 33.814,
        Pints: 2.11338,
      },
      Gallons: {
        Milliliters: 3785.41,
        Liters: 3.78541,
        FluidOunces: 128,
        Pints: 8,
      },
      FluidOunces: {
        Milliliters: 29.5735,
        Liters: 0.0295735,
        Gallons: 0.0078125,
        Pints: 0.0625,
      },
      Pints: {
        Milliliters: 473.176,
        Liters: 0.473176,
        Gallons: 0.125,
        FluidOunces: 16,
      },
    },
    temperature: {
      Celsius: (value, target) =>
        target === "Fahrenheit" ? value * 1.8 + 32 : value + 273.15,
      Fahrenheit: (value, target) =>
        target === "Celsius" ? (value - 32) / 1.8 : (value - 32) / 1.8 + 273.15,
      Kelvin: (value, target) =>
        target === "Celsius" ? value - 273.15 : (value - 273.15) * 1.8 + 32,
    },
    speed: {
      MetersPerSecond: {
        KilometersPerHour: 3.6,
        MilesPerHour: 2.23694,
        FeetPerSecond: 3.28084,
      },
      KilometersPerHour: {
        MetersPerSecond: 0.277778,
        MilesPerHour: 0.621371,
        FeetPerSecond: 0.911344,
      },
      MilesPerHour: {
        MetersPerSecond: 0.44704,
        KilometersPerHour: 1.60934,
        FeetPerSecond: 1.46667,
      },
      FeetPerSecond: {
        MetersPerSecond: 0.3048,
        KilometersPerHour: 1.09728,
        MilesPerHour: 0.681818,
      },
    },
    time: {
      Seconds: {
        Minutes: 1 / 60,
        Hours: 1 / 3600,
        Days: 1 / 86400,
      },
      Minutes: {
        Seconds: 60,
        Hours: 1 / 60,
        Days: 1 / 1440,
      },
      Hours: {
        Seconds: 3600,
        Minutes: 60,
        Days: 1 / 24,
      },
      Days: {
        Seconds: 86400,
        Minutes: 1440,
        Hours: 24,
      },
    },
    energy: {
      Joules: {
        Kilojoules: 0.001,
        Calories: 0.239006,
        Kilocalories: 0.000239006,
      },
      Kilojoules: {
        Joules: 1000,
        Calories: 239.006,
        Kilocalories: 0.239006,
      },
      Calories: {
        Joules: 4.184,
        Kilojoules: 0.004184,
        Kilocalories: 0.001,
      },
      Kilocalories: {
        Joules: 4184,
        Kilojoules: 4.184,
        Calories: 1000,
      },
    },
    pressure: {
      Pascals: {
        Kilopascals: 0.001,
        Bar: 0.00001,
        PSI: 0.000145038,
      },
      Kilopascals: {
        Pascals: 1000,
        Bar: 0.01,
        PSI: 0.145038,
      },
      Bar: {
        Pascals: 100000,
        Kilopascals: 100,
        PSI: 14.5038,
      },
      PSI: {
        Pascals: 6894.76,
        Kilopascals: 0.06895,
        Bar: 0.06895,
      },
    },
    fuelEconomy: {
      LitersPer100Km: {
        MilesPerGallon: 235.214583,
      },
      MilesPerGallon: {
        LitersPer100Km: 235.214583,
      },
    },
  };

  const handleConversion = () => {
    if (!value || !baseUnit || !targetUnit) {
      Swal.fire({
        title: "Error!",
        text: "Please choose/fill all the valid fields",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });

      setResult(null);
      return;
    }

    if (baseUnit === targetUnit) {
      // No conversion needed when base and target units are the same
      setError("");
      setResult(`${parseFloat(value).toFixed(2)} ${targetUnit}`);
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

    // Check for direct conversions using factors object
    if (factors && factors[baseUnit] && factors[baseUnit][targetUnit] != null) {
      setResult(
        `${(numValue * factors[baseUnit][targetUnit]).toFixed(2)} ${targetUnit}`
      );
    } else if (typeof factors[baseUnit] === "function") {
      // Handle special cases like temperature, which require custom formulas
      const convertedValue = factors[baseUnit](numValue, targetUnit);
      setResult(`${convertedValue.toFixed(2)} ${targetUnit}`);
    } else {
      setError("Conversion not supported ☹️");
      setResult(null);
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={rulerImage} alt="Unit" width={50} />
        <h1 className="global-gradient-heading">Unit Converter</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex justify-content-center align-items-center flex-column gap-5 ">
        {/* Select Category */}
        <div className="d-flex flex-row">
          <label className="form-label">
            Select Category:
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
          <label className="form-label">
            {/* Base unit */}
            Base Unit:
            <select
              value={baseUnit}
              onChange={(e) => setBaseUnit(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="" className="text-info">
                Select Unit
              </option>
              {units[category].map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
          {/* Target Unit */}
          <label className="form-label">
            Target Unit:
            <select
              value={targetUnit}
              onChange={(e) => setTargetUnit(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="" className="text-info">
                Select Unit
              </option>
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
          {/* Value */}
          <label className="form-label" id="value">
            Value:
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
              className="form-control rounded-5 mt-2"
              id="value"
            />
          </label>
          {/* Global Button */}
          <div style={{ marginBottom: "6px" }}>
            <button
              className="global-button rounded-5"
              onClick={handleConversion}
            >
              Convert Unit(s)
            </button>
          </div>
        </div>

        {/* Result container */}
        <div>
          {error && (
            <h4 className="error fw-bold global-animate-zoom-in">{error}</h4>
          )}
          {result !== null && (
            <div className="global-result-container global-animate-zoom-in">
              <h4 className="fw-bold">🎯 {result} 🎯</h4>
            </div>
          )}
        </div>
      </div>

      {/* Accordion Component */}
      <Accordion data={unitAccordionData} />
    </div>
  );
};

export default UnitConverter;

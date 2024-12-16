import { useState } from "react";
import Swal from "sweetalert2";
import Accordion from "../../Accordion/Accordion";
import cssUnitsImage from "../../../assets/SidebarAssets/cssUnitsImage.png";
import cssUnitsAccordionData from "../../AccordionData/cssUnitsAccordionData.jsx";

const CSSUnits = () => {
  const [value, setValue] = useState(""); // Input value
  const [unitFrom, setUnitFrom] = useState("px"); // Unit to convert from
  const [unitTo, setUnitTo] = useState("em"); // Unit to convert to
  const [result, setResult] = useState(""); // Result after conversion

  // Function to calculate unit conversion
  const convertUnits = () => {
    if (!value || isNaN(value)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid number for conversion",
        icon: "error",
        confirmButtonText: "Ok, I'll fix it 🙂",
      });
      setResult("");
      return;
    }

    let conversionResult;

    // Conversion logic for px, em, rem, vh, vw, etc.
    switch (unitFrom) {
      case "px":
        if (unitTo === "em") {
          // Assuming base font size of 16px for em conversion
          conversionResult = parseFloat(value) / 16;
        } else if (unitTo === "rem") {
          // Assuming base font size of 16px for rem conversion
          conversionResult = parseFloat(value) / 16;
        } else if (unitTo === "vw") {
          // Assuming 1vw = 1% of the viewport width
          conversionResult = (parseFloat(value) / window.innerWidth) * 100;
        } else if (unitTo === "vh") {
          // Assuming 1vh = 1% of the viewport height
          conversionResult = (parseFloat(value) / window.innerHeight) * 100;
        }
        break;

      case "em":
        if (unitTo === "px") {
          // Assuming base font size of 16px for em to px conversion
          conversionResult = parseFloat(value) * 16;
        } else if (unitTo === "rem") {
          // Convert em to rem
          conversionResult = parseFloat(value);
        }
        break;

      case "rem":
        if (unitTo === "px") {
          // Assuming base font size of 16px for rem to px conversion
          conversionResult = parseFloat(value) * 16;
        } else if (unitTo === "em") {
          // Convert rem to em
          conversionResult = parseFloat(value);
        }
        break;

      case "vw":
        if (unitTo === "px") {
          // Convert viewport width (vw) to px
          conversionResult = (parseFloat(value) / 100) * window.innerWidth;
        }
        break;

      case "vh":
        if (unitTo === "px") {
          // Convert viewport height (vh) to px
          conversionResult = (parseFloat(value) / 100) * window.innerHeight;
        }
        break;

      case "s":
        if (unitTo === "ms") {
          // Convert seconds to milliseconds
          conversionResult = parseFloat(value) * 1000;
        }
        break;

      case "ms":
        if (unitTo === "s") {
          // Convert milliseconds to seconds
          conversionResult = parseFloat(value) / 1000;
        }
        break;

      default:
        conversionResult = "Invalid conversion";
        break;
    }

    // Set the result after conversion
    setResult(conversionResult.toFixed(2));
  };

  // Helper function to handle unit changes
  const handleUnitFromChange = (e) => {
    setUnitFrom(e.target.value);
    setResult("");
  };

  const handleUnitToChange = (e) => {
    setUnitTo(e.target.value);
    setResult("");
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={cssUnitsImage} alt="CSS Units" width={50} />
        <h1 className="global-gradient-heading">CSS Units Converter</h1>
      </div>
      <hr />

      {/* Calculation Area */}
      <div className="d-flex flex-row justify-content-evenly gap-5">
        <label className="form-label" id="valueInput">
          Enter Value:
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value to convert"
            className="form-control rounded-5 mt-2"
          />
        </label>

        {/* Unit From */}
        <label className="form-label" id="unitFrom">
          Convert From:
          <select
            value={unitFrom}
            onChange={handleUnitFromChange}
            className="form-select rounded-5 mt-2"
          >
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
            <option value="vw">vw</option>
            <option value="vh">vh</option>
            <option value="s">s (seconds)</option>
            <option value="ms">ms (milliseconds)</option>
          </select>
        </label>

        <label className="form-label" id="unitTo">
          Convert To:
          <select
            value={unitTo}
            onChange={handleUnitToChange}
            className="form-select rounded-5 mt-2"
          >
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
            <option value="vw">vw</option>
            <option value="vh">vh</option>
            <option value="s">s (seconds)</option>
            <option value="ms">ms (milliseconds)</option>
          </select>
        </label>
      </div>

      {/* Global Button */}
      <div>
        <button className="global-button rounded-5 mt-5" onClick={convertUnits}>
          Calculate
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="global-result-container global-animate-zoom-in mt-5">
          <h4 className="fw-bold">
            🎯 {value} {unitFrom} = {result} {unitTo} 🎯
          </h4>
        </div>
      )}

      {/* Accordion for Help Section */}
      <Accordion data={cssUnitsAccordionData()} />
    </div>
  );
};

export default CSSUnits;

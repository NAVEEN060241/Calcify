import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import BmrAccordionData from "../../AccordionData/BmrAccordionData.jsx";
import bmrImage from "../../../assets/SidebarAssets/bmrImage.png";

const BMRCalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmr, setBmr] = useState(null);
  const [message, setMessage] = useState("");

  // BMR Accordion Data
  const bmrAccordionData = BmrAccordionData();

  const calculateBMR = () => {
    if (age && weight && height && gender) {
      let result = 0;

      if (gender === "male") {
        result = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else if (gender === "female") {
        result = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
      }

      // Round BMR value to two decimal places
      const roundedBMR = result.toFixed(2);
      setBmr(roundedBMR);

      // Define a simple message based on BMR result
      if (result < 1500) {
        setMessage(
          "Your BMR is on the lower side. It may indicate a slower metabolism, and you might need to focus on building muscle mass or increasing physical activity."
        );
      } else if (result >= 1500 && result <= 2000) {
        setMessage(
          "Your BMR is in the average range. This is a healthy metabolism, and you can maintain your weight with a balanced diet and regular exercise."
        );
      } else {
        setMessage(
          "Your BMR is on the higher side. You may have a fast metabolism, which can make it easier for you to burn calories. You might need to ensure you’re eating enough to maintain your weight."
        );
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all the fields",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={bmrImage} alt="BMR" width={50} />
        <h1 className="global-gradient-heading">BMR Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="form-container d-flex justify-content-center gap-5">
        {/* Gender & Age Container */}
        <div className="d-flex flex-column gap-5">
          {/* Gender */}
          <label className="form-label" id="bmr-gender">
            Gender
            <select
              className="form-select rounded-5 mt-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" className="text-info">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
           {/* Weight */}
           <label className="form-label" id="bmr-weight">
            Weight <span className="text-secondary">(kg)</span>
            <input
              type="number"
              value={weight}
              className="form-control rounded-5 mt-2"
              id="bmr-weight"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              min="0"
            />
          </label>
         
        </div>
        {/* Weight & Height Container */}
        <div className="d-flex flex-column gap-5">
           {/* Age */}
           <label className="form-label" id="bmr-age">
            Age
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              min="0"
              className="form-control rounded-5 mt-2"
              id="bmr-age"
            />
          </label>
           
          {/* Height */}
          <label className="form-label" id="bmr-height">
            Height <span className="text-secondary">(cm)</span>
            <input
              type="number"
              value={height}
              className="form-control rounded-5 mt-2"
              id="bmr-height"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              min="0"
            />
          </label>
        </div>
      </div>
      {/* Global Button */}
      <div className="mt-5">
        <button className="global-button rounded-5 my-3" onClick={calculateBMR}>
          Calculate BMR
        </button>
      </div>

      {/* Result container */}
      {bmr && (
        <div className="global-result-container global-animate-zoom-in mt-5">
          <h3>🎯 Your Basal Metabolic Rate (BMR): {bmr} kcal/day 🎯</h3>
          <p>{message}</p>
        </div>
      )}

      {/* Accordion Component */}
      <Accordion data={bmrAccordionData} />
    </div>
  );
};

export default BMRCalculator;

import { useState } from "react";
import Swal from "sweetalert2";
import Accordion from "../../Accordion/Accordion";
import parse from "html-react-parser";
import BmiAccordionData from "../../AccordionData/BmiAccordionData.jsx";
import bmiImage from "../../../assets/SidebarAssets/bmiImage.png";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  // BMI Accordion Data
  const bmiAccordionData = BmiAccordionData();

  const calculateBMI = () => {
    if (weight && height) {
      // Convert height to meters
      const heightInMeters = height / 100;
      const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiResult);

      // Define a simple message based on BMI result
      if (bmiResult < 18.5) {
        setMessage(
          "Your BMI indicates that you are <strong>underweight</strong>. It’s important to focus on a balanced diet and possibly increase calorie intake to gain weight in a healthy manner."
        );
      } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
        setMessage(
          "You have a healthy weight! Keep up with a balanced diet and regular exercise to maintain your well-being."
        );
      } else if (bmiResult >= 25 && bmiResult < 29.9) {
        setMessage(
          "Your BMI indicates that you are overweight. Consider focusing on a balanced diet and increasing physical activity to achieve a healthy weight."
        );
      } else {
        setMessage(
          "Your BMI falls in the obese category. It may be beneficial to consult with a healthcare provider or nutritionist to create a weight loss plan that works for you."
        );
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill out both weight and height",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
    }
  };

  return (
    <>
      <div className="container global-animate text-center">
        {/* Component Title Container */}
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img src={bmiImage} alt="BMI" width={50} />
          <h1 className="global-gradient-heading">BMI Calculator</h1>
        </div>
        <hr />
        {/* Calculation Area */}
        <div className="d-flex justify-content-center align-items-center flex-column gap-5">
          {/* Weight */}
          <label className="form-label" id="bmi-weight">
            Weight <span className="text-secondary">(kg)</span>
            <input
              type="number"
              value={weight}
              className="form-control rounded-5 mt-2"
              id="bmi-weight"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              min="0"
            />
          </label>
          {/* Height */}
          <label className="form-label" id="bmi-height">
            Height <span className="text-secondary">(cm)</span>
            <input
              type="number"
              value={height}
              className="form-control rounded-5 mt-2"
              id="bmi-height"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              min="0"
            />
          </label>
          {/* Global Button */}
          <button
            className="global-button rounded-5 mt-3 mb-5 "
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
          {/* Result container */}
          {bmi && (
            <>
              <div className="global-result-container global-animate-zoom-in">
                <h3>🎯 Your BMI: {bmi} 🎯</h3>
                <p>{parse(message)}</p>
              </div>
            </>
          )}
        </div>

        {/* Accordion Component */}
        <Accordion data={bmiAccordionData} />
      </div>
    </>
  );
};

export default BMICalculator;

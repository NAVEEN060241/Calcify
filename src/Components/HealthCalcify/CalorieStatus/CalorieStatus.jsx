import { useState } from "react";
import Swal from "sweetalert2";
import Accordion from "../../Accordion/Accordion";
import CalorieAccordionData from "../../AccordionData/CalorieAccordionData";
import calorieImage from "../../../assets/SidebarAssets/calorieImage.png";

const CalorieStatus = () => {
  const [bmr, setBmr] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState(null);
  const [message, setMessage] = useState("");

  // Calorie Accordion Data
  const calorieAccordionData = CalorieAccordionData();

  const calculateCalories = () => {
    if (bmr && activityLevel) {
      let tdee = 0;

      switch (activityLevel) {
        case "sedentary":
          tdee = bmr * 1.2;
          break;
        case "light":
          tdee = bmr * 1.375;
          break;
        case "moderate":
          tdee = bmr * 1.55;
          break;
        case "active":
          tdee = bmr * 1.725;
          break;
        case "super":
          tdee = bmr * 1.9;
          break;
        default:
          break;
      }

      // Round TDEE value to two decimal places
      const roundedTDEE = tdee.toFixed(2);

      // Setting the result and the message
      setCalories(roundedTDEE);

      // Define a simple message based on TDEE result
      if (tdee < 2000) {
        setMessage(
          "You may need fewer calories to maintain your current weight. Consider consulting a nutritionist if you want to lose or gain weight in a healthy manner."
        );
      } else if (tdee >= 2000 && tdee <= 2500) {
        setMessage(
          "This is a typical amount of calories for someone with a moderate activity level. You can maintain your weight with this intake."
        );
      } else {
        setMessage(
          "You may need more calories due to your higher activity level. If you’re aiming to build muscle or gain weight, you might need even more."
        );
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter both BMR and activity level",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={calorieImage} alt="Calorie" width={50} className="" />
        <h1 className="global-gradient-heading">Calorie Status</h1>
      </div>
      <hr />

      {/* Calculation Area */}
      <div className="d-flex justify-content-center align-items-center flex-column gap-5">
        {/* Activity level */}
        <label className="form-label" id="bmi-height">
          Activity Level
          <select
            className="form-select rounded-5 mt-2"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="" className="text-info">
              Select Activity Level
            </option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">
              Lightly Active (light exercise/sports 1-3 days/week)
            </option>
            <option value="moderate">
              Moderately Active (moderate exercise/sports 3-5 days/week)
            </option>
            <option value="active">
              Very Active (hard exercise/sports 6-7 days/week)
            </option>
            <option value="super">
              Super Active (very hard exercise, physical job, or training twice
              a day)
            </option>
          </select>
        </label>

        {/* BMR */}
        <label className="form-label" id="calorieBmr">
          BMR <span className="text-secondary">(kcal/day)</span>
          <input
            type="number"
            value={bmr}
            onChange={(e) => setBmr(e.target.value)}
            placeholder="Enter your BMR"
            min="0"
            className="form-control rounded-5 mt-2"
            id="calorieBmr"
          />
        </label>

        {/* Global Button */}
        <button
          className="btn btn-secondary global-button rounded-5 mt-3 mb-5"
          onClick={calculateCalories}
        >
          Calorie Status
        </button>

        {/* Result container */}
        {calories && (
          <div className="global-result-container global-animate-zoom-in mt-5">
            <h3>
              🎯 Your Total Daily Energy Expenditure (TDEE): {calories} kcal/day
              🎯
            </h3>
            <p>{message}</p>
          </div>
        )}
      </div>

      {/* Accordion Component */}
      <Accordion data={calorieAccordionData} />
    </div>
  );
};

export default CalorieStatus;

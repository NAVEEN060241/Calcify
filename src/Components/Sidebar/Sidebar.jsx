import "./Sidebar.css";
import { useState, useEffect } from "react";

/* -------------------------------- */
//Sidebar Icons/Images
import calcifyIcon from "../../assets/SidebarAssets/calcfavicon.png";
import bmiImage from "../../assets/SidebarAssets/bmiImage.png";
import bmrImage from "../../assets/SidebarAssets/bmrImage.png";
import calorieImage from "../../assets/SidebarAssets/calorieImage.png";
import currencyImage from "../../assets/SidebarAssets/currencyImage.png";
import loanImage from "../../assets/SidebarAssets/loanImage.png";
import savingsImage from "../../assets/SidebarAssets/savingsImage.png";
import rulerImage from "../../assets/SidebarAssets/rulerImage.png";
import cssUnitsImage from "../../assets/SidebarAssets/cssUnitsImage.png";
import physicsImage from "../../assets/SidebarAssets/physicsImage.png";
import dateImage from "../../assets/SidebarAssets/dateImage.png";
import fuelImage from "../../assets/SidebarAssets/fuelImage.png";
import cookingImage from "../../assets/SidebarAssets/cookingImage.png";
import feedbackImage from "../../assets/SidebarAssets/feedbackImage.png";
/* -------------------------------- */

//Importing Required Components
import BMICalculator from "../HealthCalcify/BMI/BmiCalc.jsx";
import Introduction from "../Introduction/Introduction.jsx";
import BMRCalculator from "../HealthCalcify/BMR/BmrCalc.jsx";
import CalorieStatus from "../HealthCalcify/CalorieStatus/CalorieStatus.jsx";
import CurrencyConverter from "../FinancialCalcify/CurrencyConverter/Currency.jsx";
import LoanEmi from "../FinancialCalcify/LoanEmi/LoanEmi.jsx";
import Savings from "../FinancialCalcify/Savings/Savings.jsx";
import UnitConverter from "../AcademicCalcify/UnitConverter/UnitConverter.jsx";
import CSS from "../AcademicCalcify/CSSUnits/CSSUnits.jsx";
import PhysicsCalculator from "../AcademicCalcify/PhysicsCalculator/PhysicsCalculator.jsx";
import DateCalculator from "../DailyCalcify/DateCalculator/DateCalculator.jsx";
import CookingMeasurement from "../DailyCalcify/CookingMeasurement/CookingMeasurement.jsx";
import FuelCost from "../DailyCalcify/FuelCost/FuelCost.jsx";
import Feedback from "../Feedback/Feedback.jsx";

export default function Sidebar() {
  //Using UseState to toggle between various components
  const [activeComponent, setActiveComponent] = useState("CALCIFY");

  //Changing the url to display the respective component
  useEffect(() => {
    const storedComponent = window.location.hash.replace("#", "");
    if (storedComponent) {
      setActiveComponent(storedComponent.toUpperCase());
    }
  }, []);

  //To open in new tab with ctrl click
  useEffect(() => {
    const currentHash = window.location.hash.slice(1).toUpperCase();
    const componentKey = currentHash || "CALCIFY"; // Default to "CALCIFY" if no hash
    setActiveComponent(componentKey);
    document.title = `Calcify - ${componentKey}`; // Set the title on load
  }, []);

  //To open in new tab with ctrl click and displaying the compoent in both current and new tab
  const handleNavigation = (componentKey, event) => {
    if (event.ctrlKey || event.metaKey) {
      // Open in a new tab without affecting the current page
      event.preventDefault(); // Prevent the default anchor behavior
      document.title = `Calcify - ${componentKey}`;
      const newTabURL = `${
        window.location.origin
      }/#${componentKey.toLowerCase()}`;
      window.open(newTabURL, "_blank");
    } else {
      // Navigate within the same page
      setActiveComponent(componentKey);
      document.title = `Calcify - ${componentKey}`;
      window.location.hash = `#${componentKey.toLowerCase()}`;
    }
  };

  return (
    <>
      {/* Sidebar Container */}
      <div className="sidebar sidebar-narrow-unfoldable sidebar-dark">
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <a
            href="#"
            className="nav-link d-flex align-items-center gap-3 flex"
            onClick={(event) => handleNavigation("CALCIFY", event)}
          >
            <img src={calcifyIcon} alt="Calcify" className="ms-3" width="32" />
            <span className="fs-3">Calcify</span>
          </a>
        </div>
        {/* Sidebar Listed Items */}
        <ul className="sidebar-nav">
          {/* <!-- Health Calcify --> */}
          <span className="mt-2"></span>
          {/* Nav Title */}
          <li className="nav-title">Health Calcify</li>
          {/* BMI */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#bmi"
              onClick={(event) => handleNavigation("BMI", event)}
            >
              <img src={bmiImage} alt="BMI" width={32} />
              &nbsp;&nbsp;&nbsp; BMI Calculator
            </a>
          </li>
          {/* BMR */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#bmr"
              onClick={(event) => handleNavigation("BMR", event)}
            >
              <img src={bmrImage} alt="BMR" width={32} />
              &nbsp;&nbsp;&nbsp; BMR Calculator
            </a>
          </li>
          {/* Calorie */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#calorie"
              onClick={(event) => handleNavigation("CALORIE", event)}
            >
              <img src={calorieImage} alt="CalorieStatus" width={32} />
              &nbsp;&nbsp;&nbsp; Calorie Status
            </a>
          </li>
          <hr />

          {/* <!-- Financial Calcify --> */}

          {/* Nav Title */}
          <li className="nav-title">Financial Calcify</li>
          {/* Currency */}
          <li className="nav-item mb-2 ">
            <a
              className="nav-link"
              href="#currency"
              onClick={(event) => handleNavigation("CURRENCY", event)}
            >
              <img src={currencyImage} alt="Currency" width={32} />
              &nbsp;&nbsp;&nbsp; Currency Converter
            </a>
          </li>
          {/* LOAN EMI */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#"
              onClick={(event) => handleNavigation("EMI", event)}
            >
              <img src={loanImage} alt="LoanEMI" width={32} />
              &nbsp;&nbsp;&nbsp; Loan EMI Calculator
            </a>
          </li>

          {/* Savings */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#savings"
              onClick={(event) => handleNavigation("SAVINGS", event)}
            >
              <img src={savingsImage} alt="Savings" width={32} />
              &nbsp;&nbsp;&nbsp; Savings Calculator
            </a>
          </li>
          <hr />
          {/* <!-- Academic Calcify --> */}
          {/* Nav Title */}
          <li className="nav-title">Academic Calcify</li>
          {/* Unit */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#unit"
              onClick={(event) => handleNavigation("UNIT", event)}
            >
              <img src={rulerImage} alt="Unit" width={30} />
              &nbsp;&nbsp;&nbsp; Unit Converter
            </a>
          </li>
          {/* CSS */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#css"
              onClick={(event) => handleNavigation("CSS", event)}
            >
              <img src={cssUnitsImage} alt="CSS" width={32} />
              &nbsp;&nbsp;&nbsp; CSS Calculator
            </a>
          </li>
          {/* Physics */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#physics"
              onClick={(event) => handleNavigation("PHYSICS", event)}
            >
              <img src={physicsImage} alt="Physics" width={32} />
              &nbsp;&nbsp;&nbsp; Physics Calculator
            </a>
          </li>

          <hr />
          {/* <!-- Daily Life Calcify --> */}
          {/* Nav Title */}
          <li className="nav-title">Daily Life Calcify</li>
          {/* Date */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#date"
              onClick={(event) => handleNavigation("DATE", event)}
            >
              <img src={dateImage} alt="Date" width={30} />
              &nbsp;&nbsp;&nbsp; Date Calculator
            </a>
          </li>
          {/* Fuel */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#fuel"
              onClick={(event) => handleNavigation("FUEL", event)}
            >
              <img src={fuelImage} alt="FuelCost" width={32} />
              &nbsp;&nbsp;&nbsp; Fuel Cost Calculator
            </a>
          </li>
          {/* Cooking */}
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#cooking"
              onClick={(event) => handleNavigation("COOKING", event)}
            >
              <img src={cookingImage} alt="Cooking" width={32} />
              &nbsp;&nbsp;&nbsp; Cooking Calculator
            </a>
          </li>
          <hr />
          {/* Feedback */}
          <li className="nav-title">Feedback</li>
          <li className="nav-item mb-2">
            <a
              className="nav-link"
              href="#feedback"
              onClick={(event) => handleNavigation("FEEDBACK", event)}
            >
              <img src={feedbackImage} alt="Date" width={32} />
              &nbsp;&nbsp;&nbsp; Feedback
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content p-4 ms-5">
        {/* Health Calcify */}
        {activeComponent === "CALCIFY" && <Introduction />}
        {activeComponent === "BMI" && <BMICalculator />}
        {activeComponent === "BMR" && <BMRCalculator />}
        {activeComponent === "CALORIE" && <CalorieStatus />}
        {/* Financial Calcify */}
        {activeComponent === "CURRENCY" && <CurrencyConverter />}
        {activeComponent === "EMI" && <LoanEmi />}
        {activeComponent === "SAVINGS" && <Savings />}
        {/* Academic Calcify */}
        {activeComponent === "UNIT" && <UnitConverter />}
        {activeComponent === "CSS" && <CSS />}
        {activeComponent === "PHYSICS" && <PhysicsCalculator />}
        {activeComponent === "DATE" && <DateCalculator />}
        {/* Daily Life Calcify */}
        {activeComponent === "COOKING" && <CookingMeasurement />}
        {activeComponent === "FUEL" && <FuelCost />}
        {/* Feedback */}
        {activeComponent === "FEEDBACK" && <Feedback />}
      </div>
    </>
  );
}

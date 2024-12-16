import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import SavingsAccordionData from "../../AccordionData/SavingsAccordionData";
import savingsImage from "../../../assets/SidebarAssets/savingsImage.png";
const SavingsCalculator = () => {
  const [initialSavings, setInitialSavings] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [durationType, setDurationType] = useState("years");
  const [futureValue, setFutureValue] = useState(null);
  const [error, setError] = useState("");

  // Savings Accordion Data
  const savingsAccordionData = SavingsAccordionData();

  const calculateSavings = () => {
    if (initialSavings && monthlySavings && annualInterestRate && duration) {
      const P = parseFloat(initialSavings);
      const PMT = parseFloat(monthlySavings);
      const r = parseFloat(annualInterestRate) / 12 / 100;
      const n =
        durationType === "years" ? parseInt(duration) * 12 : parseInt(duration);

      // Future Value Calculation
      const FV = P * Math.pow(1 + r, n) + (PMT * (Math.pow(1 + r, n) - 1)) / r;

      setFutureValue(FV.toFixed(2));
      setError("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill out all the valid fields",
        icon: "error",
        confirmButtonText: "Ok I'll do it 🙂",
      });
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={savingsImage} alt="BMI" width={50} />
        <h1 className="global-gradient-heading">Savings Growth Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex flex-wrap justify-content-center gap-5">
        {/* Initial, Monthly & Interest Rate Container */}
        <div className="d-flex flex-row flex-grow-1 justify-content-center gap-5">
          {/* Initial Savings */}
          <label className="form-label" id="initialSavings">
            Initial Savings <span className="text-secondary">(₹)</span>:
            <input
              type="number"
              value={initialSavings}
              onChange={(e) => setInitialSavings(e.target.value)}
              placeholder="Enter initial savings"
              min="0"
              id="initialSavings"
              className="form-control rounded-5 mt-2"
            />
          </label>
          {/* Monthly Savings */}
          <label className="form-label" id="monthlySavings">
            Monthly Savings <span className="text-secondary">(₹)</span>
            <input
              type="number"
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(e.target.value)}
              placeholder="Enter monthly savings"
              min="0"
              id="monthlySavings"
              className="form-control rounded-5 mt-2"
            />
          </label>
          {/* Annual Interest Rate */}
          <label className="form-label" id="annualInterest">
            Annual Interest Rate <span className="text-secondary">(%)</span>
            <input
              type="number"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              placeholder="Enter annual interest rate"
              min="0"
              step="0.01"
              id="annualInterest"
              className="form-control rounded-5 mt-2 savingsAnnualInterest text-center fw-bold"
            />
          </label>
        </div>

        {/* Year/Month & Duration */}
        <div className="d-flex flex-row flex-grow-1 justify-content-center gap-5">
          {/* Year/Month */}
          <label className="form-label">
            Select
            <select
              value={durationType}
              onChange={(e) => setDurationType(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </label>
          {/* Duration */}
          <label className="form-label" id="duration">
            Duration
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder={`Enter duration in ${durationType}`}
              min="1"
              id="duration"
              className="form-control rounded-5 mt-2"
            />
          </label>
        </div>
      </div>
      {/* Global Button */}
      <div>
        <button
          className="btn btn-secondary global-button rounded-5 mt-5 mb-3"
          onClick={calculateSavings}
        >
          Calculate Savings
        </button>
      </div>

      {error && (
        <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>
      )}

      {/* Result container */}
      {futureValue && (
        <div className="global-result-container global-animate mt-5">
          <h3>🎯 Future Value of Savings: ₹{futureValue} 🎯</h3>
          <p>
            Based on an initial savings of ₹{initialSavings}, monthly
            contributions of ₹{monthlySavings}, an annual interest rate of
            {annualInterestRate}%, and a duration of {duration} {durationType}.
          </p>
        </div>
      )}
      {/* Accordion Component */}
      <Accordion data={savingsAccordionData} />
    </div>
  );
};

export default SavingsCalculator;

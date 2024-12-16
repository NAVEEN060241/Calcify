import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import LoanEmiAccordionData from "../../AccordionData/LoanEmiAccordionData";
import loanImage from "../../../assets/SidebarAssets/loanImage.png";

const LoanEmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [tenureType, setTenureType] = useState("years"); // 'years' or 'months'
  const [emi, setEMI] = useState(null);
  const [error, setError] = useState("");

  // Loan EMI Accordion Data
  const loanEmiAccordionData = LoanEmiAccordionData();

  const calculateEMI = () => {
    if (principal && annualInterestRate && loanTenure) {
      const P = parseFloat(principal);
      const r = parseFloat(annualInterestRate) / 12 / 100; // Monthly interest rate
      const n =
        tenureType === "years"
          ? parseInt(loanTenure) * 12
          : parseInt(loanTenure); // Convert years to months if needed

      const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      setEMI(EMI.toFixed(2));
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
        <img src={loanImage} alt="Loan EMI" width={50} />
        <h1 className="global-gradient-heading">Loan EMI Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex justify-content-center gap-5">
        {/* Loan Amt & Annual Interest Rate */}
        <div className="d-flex flex-column gap-5">
          {/* Loan Amt */}
          <label className="form-label" id="loanAmt">
            Loan Amount <span className="text-secondary">(₹)</span>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Enter loan amount"
              min="0"
              id="loanAmt"
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
              className="form-control rounded-5 mt-2"
            />
          </label>
        </div>

        {/* year/month & Loan Tenure */}
        <div className="d-flex flex-column gap-5">
          {/* Year/Month */}
          <label className="form-label">
            Select year / month
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value)}
              className="form-select rounded-5 mt-2"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </label>
          {/* Loan Tenure */}
          <label className="form-label" id="loanTenure">
            Loan Tenure
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              placeholder={`Enter tenure in ${tenureType}`}
              min="1"
              id="loanTenure"
              className="form-control rounded-5 mt-2"
            />
          </label>
        </div>
      </div>
      <div>
        {/* Global Button */}
        <button className="global-button rounded-5 my-5" onClick={calculateEMI}>
          Calculate EMI
        </button>
      </div>
      {error && (
        <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>
      )}

      {/* Result container */}
      {emi && (
        <div className="global-result-container global-animate mt-5">
          <h3>🎯 Equated Monthly Installment (EMI): ₹{emi} 🎯</h3>
          <p>
            Based on a loan amount of ₹{principal}, an annual interest rate of{" "}
            {annualInterestRate}%, and a loan tenure of {loanTenure}{" "}
            {tenureType}.
          </p>
        </div>
      )}

      {/* Accordion Component */}
      <Accordion data={loanEmiAccordionData} />
    </div>
  );
};

export default LoanEmiCalculator;

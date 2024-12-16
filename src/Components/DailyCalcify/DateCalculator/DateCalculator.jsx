import { useState } from "react";
import DateAccordionData from "../../AccordionData/DateAccordionData";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import dateImage from "../../../assets/SidebarAssets/dateImage.png";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("difference");
  const [error, setError] = useState("");

  // Date Accordion Data
  const dateAccordionData = DateAccordionData();

  // Helper function to format the date as dd-MMM-yyyy
  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate().toString().padStart(2, "0"); // Ensures 2 digits for day
    const month = months[date.getMonth()]; // Get the month's name
    const year = date.getFullYear(); // Get the full year
    return `${day}-${month}-${year}`;
  };

  const handleCalculation = () => {
    setError("");
    setResult(null);

    if (operation === "difference") {
      if (!startDate || !endDate) {
        Swal.fire({
          title: "Error!",
          text: "Please enter both start and end dates.",
          icon: "error",
          confirmButtonText: "Ok I'll do it 🙂",
        });
        return;
      }

      // Parsing the dates to Date objects
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Checking if both dates are valid
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        Swal.fire({
          title: "Error!",
          text: "Please enter valid dates.",
          icon: "error",
          confirmButtonText: "Ok I'll do it 🙂",
        });
        return;
      }

      // Calculate the difference in days
      const diffTime = Math.abs(end - start);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      setResult(`The difference is ${diffDays} days.`);
    } else if (operation === "addSubtract") {
      if (!startDate || !days) {
        Swal.fire({
          title: "Error!",
          text: "Please enter both start date and number of days.",
          icon: "error",
          confirmButtonText: "Ok I'll do it 🙂",
        });
        setError();
        return;
      }

      // Parsing the start date
      const start = new Date(startDate);
      const numDays = parseInt(days, 10);

      // Checking if the date is valid
      if (isNaN(start.getTime()) || isNaN(numDays)) {
        Swal.fire({
          title: "Error!",
          text: "Please enter valid date and number of days.",
          icon: "error",
          confirmButtonText: "Ok I'll do it 🙂",
        });
        return;
      }

      // Add or subtract days based on the sign of the number
      start.setDate(start.getDate() + numDays);

      setResult(`The new date is: ${formatDate(start)}`);
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <img src={dateImage} alt="Date" width={45} />
        <h1 className="global-gradient-heading">Date Calculator</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex flex-row justify-content-evenly gap-5">
        {/* Operation */}
        <label className="form-label">
          Operation
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="form-select rounded-5 mt-2"
          >
            <option value="difference">Days Difference</option>
            <option value="addSubtract">Add / Subtract Days</option>
          </select>
        </label>
        {/* Start Date Input for difference*/}
        <label className="form-label">
          Start Date (DD-MM-YYYY)
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control rounded-5 mt-2"
          />
        </label>

        {/* End Date Input for difference */}
        {operation === "difference" && (
          <label className="form-label">
            End Date (DD-MM-YYYY)
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control rounded-5 mt-2"
            />
          </label>
        )}

        {/* Days Input for add/subtract operation */}
        {operation === "addSubtract" && (
          <label>
            Number of Days (+ or -):
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Enter number of days"
              className="form-control rounded-5 mt-2"
            />
          </label>
        )}
      </div>

      {/* Global Button */}
      <div>
        <button
          className="global-button rounded-5 mt-5 mb-3"
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
            <h3>🎯 {result} 🎯</h3>
          </div>
        )}
      </div>
      {/* Accordion Component */}
      <Accordion data={dateAccordionData} />
    </div>
  );
};

export default DateCalculator;

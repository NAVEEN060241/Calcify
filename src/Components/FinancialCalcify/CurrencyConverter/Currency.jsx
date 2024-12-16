import { useState, useEffect } from "react";
import Accordion from "../../Accordion/Accordion";
import Swal from "sweetalert2";
import CurrencyAccordionData from "../../AccordionData/CurrencyAccordionData";
import currencyImage from "../../../assets/SidebarAssets/currencyImage.png";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState("");

  // Currency Accordion Data
  const currencyAccordionData = CurrencyAccordionData();
  // Fetch exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/3fcbb692ebdfc42ac4c58d9a/latest/${baseCurrency}`
        );
        const data = await response.json();

        if (data.result === "success") {
          setExchangeRates(data.conversion_rates);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch exchange rates.",
            icon: "error",
            confirmButtonText: "Ok 🙂",
          });
        }
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while fetching exchange rates.",
          icon: "error",
          confirmButtonText: "Ok 🙂",
        }),
          err.text;
      }
      setError("");
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  // Convert the currency based on the selected currencies
  const convertCurrency = () => {
    if (amount && exchangeRates[targetCurrency]) {
      const result = (amount * exchangeRates[targetCurrency]).toFixed(2);
      setConvertedAmount(result);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid input or exchange rate not available.",
        icon: "error",
        confirmButtonText: "Ok 🙂",
      });
    }
  };

  return (
    <div className="container global-animate text-center">
      {/* Component Title Container */}
      <div className="d-flex justify-content-center align-items-center gap-4 ">
        <img src={currencyImage} alt="Currency" width={50} />
        <h1 className="global-gradient-heading">Currency Converter</h1>
      </div>
      <hr />
      {/* Calculation Area */}
      <div className="d-flex flex-column justify-content-center align-items-center gap-5">
        {/* Base & Target Currency Container */}
        <div className="d-flex flex-row gap-5 mb-4">
          {/* Base Currency */}
          <label className="form-label">
            Base Currency
            <select
              className="form-select rounded-5 mt-2"
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
            >
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="GBP">British Pound (GBP)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
            </select>
          </label>
          {/* Target Currency */}
          <label className="form-label">
            Target Currency
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="form-select rounded-5 mt-2 text-center"
              defaultValue="INR"
            >
              <option value="INR">Indian Rupee (INR)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">British Pound Sterling (GBP)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="USD">United States Dollar (USD)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
            </select>
          </label>
        </div>
        {/* Amount & Button Container */}
        <div className="d-flex flex-row gap-5 align-items-end ">
          {/* Amount */}
          <label className="form-label" id="amount">
            Amount
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              min="0"
              id="amount"
              className="form-control rounded-5 mt-2"
            />
          </label>
          {/* Global Button */}
          <div style={{ marginBottom: "6px" }}>
            <button
              className="global-button rounded-5 mt-auto"
              onClick={convertCurrency}
            >
              Convert
            </button>
          </div>
        </div>

        {/* Result container */}
        <div className="d-flex flex-row justify-content-center">
          {error &&
             <h4 className="error global-animate-zoom-in fw-bold">{error}</h4>}
          {convertedAmount && (
            <div className="global-result-container global-animate-zoom-in mt-4">
              <h3>
                🎯 {amount} {baseCurrency} = {convertedAmount} {targetCurrency}{" "}
                🎯
              </h3>
            </div>
          )}
        </div>
      </div>
      {/* Accordion Component */}
      <Accordion data={currencyAccordionData} />
    </div>
  );
};

export default CurrencyConverter;

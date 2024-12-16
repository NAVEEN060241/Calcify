const UnitConverterAccordionData = () => {
  const UnitTable = () =>
    `<table class="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
        <thead class="table-primary">
          <tr>
            <th>Category</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Length</td>
            <td>Kilometers to Miles, Meters to Feet</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>Kilograms to Pounds, Grams to Ounces</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>Liters to Gallons, Milliliters to Ounces</td>
          </tr>
          <tr>
            <td>Temperature</td>
            <td>Celsius to Fahrenheit, Kelvin to Celsius</td>
          </tr>
        </tbody>
      </table>`;

  const unitConverterAccordionData = [
    {
      header: "🔢 Understanding Unit Conversion",
      body: `A unit converter helps translate one unit of measurement to another seamlessly. Whether it’s converting <span className="text-info">kilometers to miles</span> or <span className="text-info">grams to ounces</span>, it simplifies complex calculations. 
      <br />
      <br />
      <span className="text-info">Formula:</span> Unit Conversion uses a multiplier or a ratio. For example: 
      <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">value_in_miles = value_in_km * 0.621371</code>`,
    },
    {
      header: "⚙️ How Does It Work?",
      body: `Unit conversion calculators use <span className="text-info">pre-defined constants</span> and mathematical operations to perform conversions. Here's the process:
      <ul class="m-4">
        <li>Choose the type of conversion: Length, Weight, Volume, etc.</li>
        <li>Input the value and select the units.</li>
        <li>The tool multiplies or divides by a constant to give the result.</li>
      </ul>
      Example: To convert <span className="text-info">10 kg to pounds</span>, multiply by 2.20462. Output: <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">10 kg = 22.0462 lbs</code>`,
    },
    {
      header: "📏 Common Conversion Categories",
      body: `Unit converters are versatile and cover a variety of categories: <br /> ${UnitTable()}`,
    },
    {
      header: "🔍 Why Accuracy Matters",
      body: `Small inaccuracies in unit conversions can lead to significant issues:
      <ul class="m-4">
        <li><span className="text-info">Scientific Experiments:</span> Precision is crucial for reproducibility.</li>
        <li><span className="text-info">Medicine:</span> Dosing errors due to wrong conversions can have serious consequences.</li>
        <li><span className="text-info">Construction:</span> Incorrect length or volume conversions may lead to structural issues.</li>
      </ul>
      Always double-check critical conversions!`,
    },
    {
      header: "🌐 Tips for Efficient Use",
      body: `To get the most out of a unit converter:
      <ul class="m-4">
        <li><span className="text-info">Know the Units:</span> Familiarize yourself with standard units in your field.</li>
        <li><span className="text-info">Use Verified Sources:</span> Tools that rely on up-to-date and accurate constants ensure reliability.</li>
      </ul>
      By following these tips, you can ensure accuracy and efficiency in your conversions.`,
    },
  ];

  return unitConverterAccordionData;
};

export default UnitConverterAccordionData;

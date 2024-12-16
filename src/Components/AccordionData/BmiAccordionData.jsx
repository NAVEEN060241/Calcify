const BmiAccordionData = () => {
  const BMITable = () => `
  <table class="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
    <thead>
      <tr class="table-primary">
        <th scope="col">Classification</th>
        <th scope="col">BMI Range (kg/m²)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Severe Thinness</td><td>&lt; 16</td></tr>
      <tr><td>Moderate Thinness</td><td>16 - 17</td></tr>
      <tr><td>Mild Thinness</td><td>17 - 18.5</td></tr>
      <tr><td>Normal</td><td>18.5 - 25</td></tr>
      <tr><td>Overweight</td><td>25 - 30</td></tr>
      <tr><td>Obese Class I</td><td>30 - 35</td></tr>
      <tr><td>Obese Class II</td><td>35 - 40</td></tr>
      <tr><td>Obese Class III</td><td>&gt; 40</td></tr>
    </tbody>
  </table>
`;
  const bmiAccordionData = [
    {
      header: "🎯 Purpose",
      body: `The purpose of a BMI Calculator is to provide a simple and quick way to assess an individual’s body weight in relation to their height. It calculates the <span className='text-info'>Body Mass Index (BMI)</span>, a widely used metric that helps categorize individuals into weight categories such as underweight, healthy weight, overweight, or obese...`,
    },
    {
      header: "🧮 BMI Formula",
      body: `The formula <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">BMI = weight / (height * height)</code> is applied using the height in meters. ${BMITable()}`,
    },
    {
      header: "✏️ Input Data & Convert Height",
      body: `The user enters their weight <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">(in kilograms)</code> and height <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">(in centimeters)</code>. The height is converted from centimeters to meters for accurate calculation.`,
    },
    {
      header: "🏷️ Result Categorization",
      body: `<p>Based on the calculated BMI, the user is categorized into one of four groups: </p><ul className="text-info"><li>Underweight</li><li>Healthy weight</li><li>Overweight</li><li>Obese</li></ul>`,
    },
    {
      header: "💬 Personalized Message",
      body: `A tailored message is displayed, providing health tips relevant to the user's BMI category.`,
    },
  ];

  return bmiAccordionData;
};

export default BmiAccordionData;

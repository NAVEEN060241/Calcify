const BmrAccordionData = () => {
  const BMRTable = () =>
    `  <table class="table table-dark table-hover table-responsive border border-secondary w-75 ms-4 mt-4 text-center">
        <thead>
          <tr class="table-primary">
            <th>Activity Level</th>
            <th>Description</th>
            <th>Multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sedentary</td>
            <td>Little or no exercise</td>
            <td>1.2</td>
          </tr>
          <tr>
            <td>Lightly Active</td>
            <td>Light exercise/sports 1-3 days/week</td>
            <td>1.375</td>
          </tr>
          <tr>
            <td>Moderately Active</td>
            <td>Moderate exercise/sports 3-5 days/week</td>
            <td>1.55</td>
          </tr>
          <tr>
            <td>Very Active</td>
            <td>Hard exercise/sports 6-7 days/week</td>
            <td>1.725</td>
          </tr>
          <tr>
            <td>Extra Active</td>
            <td>Very hard exercise or physical job</td>
            <td>1.9</td>
          </tr>
        </tbody>
      </table>`;
  const bmrAccordionData = [
    {
      header: "🔥 What is BMR?",
      body: `The <span className="text-info">Basal Metabolic Rate (BMR)</span> is the number of calories your body needs to perform essential functions like breathing, circulating blood, and maintaining organ functions while at rest. It's like the engine idling power of your body! Knowing your BMR can help you better understand your body's energy needs.`,
    },
    {
      header: "📋 BMR Formula",
      body: `The calculation depends on factors like age, gender, height, and weight. <br /> One commonly used formula is the <code>Harris-Benedict Equation</code> <br /> 
      <ul class="m-4">
        <li class="mb-4"><b>For Men:</b> <code>BMR = 88.36 + (13.4 × weight in kg) + (4.8 × height in cm) − (5.7 × age in years)</code></li>
        <li><b>For Women:</b> <code>BMR = 447.6 + (9.2 × weight in kg) + (3.1 × height in cm) − (4.3 × age in years)</code></li>
      </ul>
      This formula gives you a baseline of how many calories you burn at rest.`,
    },
    {
      header: "🍎 Why Should You Know Your BMR?",
      body: `Understanding your BMR helps in creating a personalized nutrition and fitness plan. For example, if you want to lose, maintain, or gain weight, you can calculate the total calories you need based on your activity level. Combine this with your fitness goals for an optimal health plan!`,
    },
    {
      header: "⚡ Adjusting for Activity Levels",
      body: `Your BMR is just the starting point. To calculate your <span className='text-info'>Total Daily Energy Expenditure (TDEE)</span>, multiply your BMR by an activity factor:<br /> ${BMRTable()}`,
    },
    {
      header: "💡 Tips to Improve Your BMR",
      body: `<p>While BMR is largely determined by genetics, you can boost it with healthy lifestyle choices:</p>
      <ul>
        <li><span className="text-info">Build muscle mass:</span> Muscles burn more calories than fat, even at rest.</li>
        <li><span className="text-info">Stay active:</span> Regular movement throughout the day increases calorie burn.</li>
        <li><span className="text-info">Eat enough protein:</span> Protein helps maintain muscle mass and increases the thermic effect of food (calories burned during digestion).</li>
        <li><span className="text-info">Sleep well:</span> Quality sleep is essential for a healthy metabolism.</li>
      </ul>`,
    },
  ];

  return bmrAccordionData;
};

export default BmrAccordionData;

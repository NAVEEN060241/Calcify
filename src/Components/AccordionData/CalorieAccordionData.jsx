const CalorieAccordionData = () => {
  const CalorieTable =
    () => ` <table class="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
        <thead>
          <tr class="table-primary">
            <th>Macronutrient</th>
            <th>Calories per Gram</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbohydrates</td>
            <td>4 Calories</td>
          </tr>
          <tr>
            <td>Proteins</td>
            <td>4 Calories</td>
          </tr>
          <tr>
            <td>Fats</td>
            <td>9 Calories</td>
          </tr>
          <tr>
            <td>Alcohol</td>
            <td>7 Calories</td>
          </tr>
        </tbody>
      </table>
      By knowing the composition of your meals, you can easily calculate your total calorie intake based on these values.`;
  const calorieAccordionData = [
    {
      header: "💪 What Are Calories?",
      body: `Calories are <span className="text-info">units of energy</span> that measure how much energy food provides to your body. Everything you eat or drink contains calories, which are used to fuel activities like walking, thinking, and even sleeping! Understanding calories is key to balancing your energy intake and expenditure.`,
    },
    {
      header: "⚙️ How Are Calories Calculated?",
      body: `Calories in food are measured using a formula that accounts for macronutrients:<br />
     ${CalorieTable()} 
     `,
    },
    {
      header: "💫 Why Are Calories Important?",
      body: `Calories provide the energy your body needs to function. The right balance of calories ensures you can maintain a healthy weight and support your lifestyle. For example:<br />
      <ul class="m-4  ">
        <li>If you consume <span className="text-info">more</span> calories than you burn, you <span className="text-info">gain weight.</span></li>
        <li>If you consume <span className="text-info">fewer</span> calories than you burn, you <span className="text-info">lose weight.</span></li>
        <li>If you consume <span className="text-info">the same</span> amount you burn, your weight <span className="text-info">remains stable.</span></li>
      </ul>
      Understanding this balance is crucial for achieving fitness and health goals.`,
    },
    {
      header: "🔥 How Many Calories Do You Need?",
      body: `<p>Calorie needs vary based on age, gender, weight, height, and activity level. A general formula to estimate your daily calorie requirement is:</p>
      <code>Total Calories = BMR × Activity Factor</code><br />
      <div class="mt-4">
        <b>Activity Factor Examples:</b>
        <ul class="m-3">
          <li>Sedentary: <code>1.2</code></li>
          <li>Moderately Active: <code>1.55</code></li>
          <li>Very Active: <code>1.9</code></li>
        </ul>
      </div>
      Tools like calorie calculators can help personalize these numbers for you!`,
    },
    {
      header: "🌟 Tips to Manage Calorie Intake",
      body: `<p>Here are some practical tips to manage your calorie intake effectively:</p>
      <ul>
        <li>Choose nutrient-dense foods like vegetables, fruits, and lean proteins.</li>
        <li>Track your calorie intake using apps or journals to stay on target.</li>
        <li>Practice portion control to avoid overeating.</li>
        <li>Be mindful of empty calories in sugary drinks and snacks.</li>
        <li>Stay hydrated, as thirst is sometimes mistaken for hunger.</li>
      </ul>
      Small changes in daily habits can have a big impact over time!`,
    },
  ];

  return calorieAccordionData;
};

export default CalorieAccordionData;

const FuelCostAccordionData = () => {
  const fuelCostAccordionData = [
    {
      header: "⛽ How Fuel Cost Affects Your Daily Expenses",
      body: `Fuel costs have a direct impact on your <span className="text-info">daily commute and travel expenses.</span> With fluctuating fuel prices, even short trips can add up. By calculating fuel consumption, you can make smarter decisions about your vehicle usage, plan trips better, and even explore eco-friendly alternatives that save you money and reduce your carbon footprint.`,
    },
    {
      header: "🔍 How Fuel Cost Calculator Works",
      body: `The fuel cost calculator uses a simple yet powerful formula to estimate how much you'll spend on fuel for a trip. Here's how it works behind the scenes:
      <ol class="m-4">
        <li class="mb-4"><p>First, it calculates the fuel efficiency of your vehicle using: </p>
          <code>Fuel Efficiency = Distance Driven ÷ Fuel Consumed</code>
        </li>
        <li><p>Next, it multiplies the total distance of your trip by the fuel price, and then divides by the fuel efficiency:</p> 
          <code>Fuel Cost = Distance ÷ Fuel Efficiency × Fuel Price</code>
        </li>
      </ol>
      With this formula, the calculator accurately predicts the total cost of fuel for any journey, helping you plan better and save money.`,
    }
    ,
    
    {
      header: "💡 Fuel Efficiency: The Key to Savings",
      body: `The efficiency of your vehicle plays a major role in how much you spend on fuel. The formula for calculating fuel efficiency is: <br /><br />
      <code>Fuel Efficiency = Distance Driven ÷ Fuel Consumed</code> <br /><br />A more fuel-efficient vehicle means fewer stops at the pump and lower travel costs over time! Understanding your vehicle’s fuel consumption can save you a lot on long drives.`,
    },
    {
      header: "📊 Understanding Fuel Cost Formula",
      body: `To calculate the total fuel cost for a trip, the formula is:
      <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">Fuel Cost = Distance ÷ Fuel Efficiency × Fuel Price</code>
      <ul class="m-4">
        <li><span className="text-info">Distance</span>: Total kilometers or miles to be traveled.</li>
        <li><span className="text-info">Fuel Efficiency</span>: How many kilometers or miles your vehicle travels per liter/gallon of fuel.</li>
        <li><span className="text-info">Fuel Price</span>: The cost per liter/gallon of fuel.</li>
      </ul>
      Knowing how to use this formula will help you estimate the total cost of any trip before you even leave home!`,
    },
    {
      header: "💰 Tips for Reducing Fuel Costs",
      body: `Reducing fuel costs is possible with small changes to your driving habits:
      <ul class="m-4">
        <li>Drive at moderate speeds; avoid rapid acceleration and harsh braking.</li>
        <li>Regularly maintain your vehicle (check tire pressure, engine health, etc.).</li>
        <li>Use air conditioning wisely and avoid carrying unnecessary weight in your vehicle.</li>
        <li>Plan your routes to avoid congested traffic and detours.</li>
      </ul>
      Making these adjustments could lead to significant savings over time!`,
    },
  ];

  return fuelCostAccordionData;
};

export default FuelCostAccordionData;

const CookingAccordionData = () => {
  const SavingsTable = () =>
    `
      <table className="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
        <thead className="table-primary">
          <tr>
            <th>Measurement</th>
            <th>Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 cup</td>
            <td>240 ml</td>
          </tr>
          <tr>
            <td>1 tablespoon</td>
            <td>15 ml</td>
          </tr>
          <tr>
            <td>1 ounce</td>
            <td>28.35 grams</td>
          </tr>
          <tr>
            <td>1 gram</td>
            <td>0.035 ounces</td>
          </tr>
        </tbody>
      </table>`;
  const cookingAccordionData = [
    {
      header: "🔍 How Cooking Calculator Handles Unit Conversions",
      body: `The cooking calculator simplifies the process of converting units for ingredients, ensuring you can easily scale recipes without any hassle. Here's how it works:
      <ul class="m-4">
        <li class="mb-4">The calculator first determines the unit categories you're working with, <span className="text-info">such as volume (Cups, Milliliters, Tablespoons) or weight (Grams, Kilograms, Ounces).</span> For example, if your recipe requires 2 cups of flour, but you only have a scale that measures in grams, the calculator converts the 2 cups into grams for you.</li>
        <li class="mb-4">It then applies the relevant conversion factor based on the unit pair. Let's say you want to convert from cups to milliliters. The conversion factor for <span className="text-info">1 cup to milliliters is 240.</span> So, the calculator multiplies the number of cups by 240 to get the result. <br />
          <div class="mt-3"><code>Converted Quantity = Original Quantity × Conversion Factor</code></div>
        </li>
        <li class="mb-4">If you're working with weight units, <span className="text-info">like grams to ounces,</span>  the conversion factor would be 0.0353 for grams to ounces.The formula is similar: <br />
          <div class="mt-3"><code>Converted Weight = Original Weight × Conversion Factor</code></div>
        </li>
      </ul>
      With this approach, the calculator ensures accuracy and convenience, allowing you to scale recipes and switch between different measurement systems effortlessly!`,
    },
    {
      header: "🔢 Cooking Conversions: Quick Reference",
      body: `Cooking often involves measurements like cups, tablespoons, grams, and ounces. Here are some quick conversions to help you out:<br />
      ${SavingsTable()}`,
    },
    {
      header: "🔥 How Different Cooking Temperatures Affect Food",
      body: `Cooking temperatures have a huge impact on the texture, flavor, and nutritional content of your food. For example:
      <ul class="m-4">
        <li><span className="text-info">At low temperatures (around 90-150°C),</span> slow cooking allows the breakdown of collagen in meat, making it tender.</li>
        <li><span className="text-info">At medium temperatures (around 150-200°C),</span> roasting or grilling enhances flavor through caramelization and Maillard reactions.</li>
        <li><span className="text-info">High temperatures (above 200°C)</span> produce searing or frying effects, creating a crispy texture and locking in juices.</li>
      </ul>
      By controlling temperature, you can master various cooking techniques for the best results.`,
    },

    {
      header: "💡 Food Pairing: The Art of Balancing Flavors",
      body: `Successful cooking isn't just about following a recipe, it's about balancing flavors. Pairing ingredients with complementary tastes creates harmony. Here are some basic flavor pairings:
      <ul class="m-4">
        <li><span className="text-info">Sweet & Savory:</span> Think bacon with maple syrup.</li>
        <li><span className="text-info">Spicy & Sweet:</span> Try chili with chocolate.</li>
        <li><span className="text-info">Sour & Salty:</span> Consider lime with salted fish.</li>
      </ul>
      Experiment with flavors to create new and exciting dishes!`,
    },
    {
      header: "🍽️ Cooking Times and Techniques for Different Foods",
      body: `Different foods require different cooking times and techniques. For example:
      <ul class="m-4">
        <li><span className="text-info">Vegetables:</span> Steamed or boiled for 5-10 minutes.</li>
        <li><span className="text-info">Meats:</span> Roasted for 20-45 minutes depending on thickness.</li>
        <li><span className="text-info">Fish:</span> Typically takes 10-15 minutes depending on size and thickness.</li>
      </ul>
      Adjusting cooking times based on ingredients will help you avoid overcooking or undercooking and ensure delicious meals every time!`,
    },
  ];

  return cookingAccordionData;
};

export default CookingAccordionData;

const SavingsAccordionData = () => {
  const SavingsTable = () => `
    <table class="table table-dark table-hover table-responsive border border-secondary w-75 ms-4 mt-4 text-center">
      <thead class="table-primary">
        <tr>
          <th>Plan</th>
          <th>Risk Level</th>
          <th>Returns</th>
          <th>Best For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fixed Deposit (FD)</td>
          <td>Low</td>
          <td>Moderate</td>
          <td>Short to Medium-term savings</td>
        </tr>
        <tr>
          <td>Stocks</td>
          <td>High</td>
          <td>Potentially High</td>
          <td>Long-term growth</td>
        </tr>
        <tr>
          <td>Mutual Funds</td>
          <td>Medium</td>
          <td>Varies</td>
          <td>Diversified investment for long-term</td>
        </tr>
        <tr>
          <td>Savings Account</td>
          <td>Low</td>
          <td>Low</td>
          <td>Emergency fund, low-risk savings</td>
        </tr>
      </tbody>
    </table>
  `;
  const savingsAccordionData = [
    {
      header: "🔄 How Does the Savings Calculator Work?",
      body: `The savings calculator helps you estimate how much your savings will grow over time by considering several key factors:
      <ul class="m-4">
        <li><span className="text-info">Initial Deposit:</span> The amount you start with. It's your starting point for the calculation.</li>
        <li><span className="text-info">Monthly Contributions:</span> The money you add regularly to your savings. This can be weekly, monthly, or annually.</li>
        <li><span className="text-info">Interest Rate:</span> The percentage at which your savings grow over time. This can be annual, compounded interest.</li>
        <li><span className="text-info">Time Period:</span> The duration for which you're saving. Longer periods give your money more time to grow.</li>
      </ul>
      Here's the formula used in the savings calculator:
      <code class="bg-dark px-3 py-2 rounded-5 border border-secondary">Future Value = P(1 + r/n)^(nt) + (PMT × ((1 + r/n)^(nt) - 1) / (r/n))</code> <br />
      Where:
      <ul class="m-4">
        <li><span className="text-info">P - </span> Principal (initial deposit)</li>
        <li><span className="text-info">r - </span> Annual interest rate (decimal)</li>
        <li><span className="text-info">n - </span> Number of times interest is compounded per year</li>
        <li><span className="text-info">t - </span> Number of years</li>
        <li><span className="text-info">PMT - </span> Monthly contribution (if any)</li>
      </ul>
      The formula calculates how your initial deposit and monthly contributions grow over time with compound interest. By entering your values in the calculator, you can easily visualize the potential growth of your savings!`,
    },
    {
      header: "🎯 Importance of Saving Money",
      body: `Saving money is crucial for achieving financial freedom and security. Here’s why:
      <ul class="m-4">
        <li><span className="text-info">Emergency Fund:</span> Savings provide a safety net in case of unexpected expenses like medical bills or job loss.</li>
        <li><span className="text-info">Goal Achievement:</span> Whether it’s buying a home, traveling, or funding education, savings help you reach your goals faster.</li>
        <li><span className="text-info">Peace of Mind:</span> Knowing you have savings can reduce stress about your financial future.</li>
      </ul>
      Setting aside a portion of your income regularly can help you avoid financial setbacks and achieve your aspirations.`,
    },
    {
      header: "💡 How Much Should You Save?",
      body: `A good rule of thumb is to save at least 20% of your income each month. However, the amount you should save depends on your financial goals, lifestyle, and current expenses. Here’s a general guideline:
      <ul class="m-4">
        <li><span className="text-info">Emergency Fund:</span> Aim for 3-6 months of living expenses in a high-interest savings account.</li>
        <li><span className="text-info">Short-Term Goals:</span> Set aside funds for goals like vacations or gadgets.</li>
        <li><span className="text-info">Retirement:</span> Start contributing to retirement accounts as early as possible to take advantage of compound interest.</li>
      </ul>
      Adjust these percentages based on your unique financial situation, but consistency is key to building wealth over time.`,
    },
    {
      header: "📊 Savings Plans & Investment Options",
      body: `There are different savings and investment plans to help you grow your money. Here's a breakdown of some common options:
      ${SavingsTable()}
      Depending on your risk tolerance, you can choose a combination of these to balance safety and growth in your savings.`,
    },
    {
      header: "🚀 Tips to Boost Your Savings",
      body: `Here are a few strategies to help increase your savings over time:
      <ul class="m-4">
        <li><span className="text-info">Automate Your Savings:</span> Set up automatic transfers to your savings account each month.</li>
        <li><span className="text-info">Track Your Spending:</span> Monitor where your money goes and cut unnecessary expenses.</li>
        <li><span className="text-info">Use Cash-back and Rewards:</span> Take advantage of rewards programs and cashback offers on purchases to save more.</li>
        <li><span className="text-info">Pay Yourself First:</span> Treat savings as a non-negotiable expense, just like bills or rent.</li>
      </ul>
      Small habits like these can lead to substantial savings over time, helping you build wealth steadily.`,
    },
  ];

  return savingsAccordionData;
};

export default SavingsAccordionData;

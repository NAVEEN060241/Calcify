const CurrencyAccordionData = () => {
  const currencyAccordionData = [
    {
      header: "🌐 Behind the Scenes: How Exchange Rate APIs Work",
      body: `<p>Exchange rate APIs make it easier to access real-time currency conversion data. But have you ever wondered how they work? Here’s a quick breakdown:</p>

<ul> <li><span className="text-info">Data Collection:</span> APIs pull live exchange rate data from central banks, forex markets, and financial institutions.</li> <li><span className="text-info">Real-Time Updates:</span> Exchange rates are updated frequently, sometimes every few seconds, to reflect global market changes.</li> <li><span className="text-info">Standardized Access:</span> APIs use formats like <code>JSON</code> or <code>XML</code> to provide easy integration with apps and websites.</li> <li><span className="text-info">Custom Requests:</span> Users can request specific data, like historical rates or currency trends, for analysis or forecasting.</li> </ul> Understanding this can help developers and businesses optimize how they use currency conversion services effectively!`,
    },
    {
      header: "📈 What Influences Exchange Rates?",
      body: `Exchange rates aren't random; they're driven by several key factors:<br />
      <ul>
        <li><span className="text-info">Trade Balance:</span > Countries exporting more than they import tend to have stronger currencies.</li>
        <li><span className="text-info">Inflation:</span > Lower inflation usually strengthens a currency's value.</li>
        <li><span className="text-info">Interest Rates:</span > Higher interest rates attract foreign investments, boosting currency demand.</li>
        <li><span className="text-info">Global Events:</span > Political stability or crises can cause sudden changes in currency value.</li>
      </ul>
      These factors make exchange rates dynamic and often unpredictable.`,
    },
    {
      header: "🔄 How Does Currency Conversion Work?",
      body: `Currency conversion involves exchanging one currency for another at a specific <span className='text-info'>exchange rate</span>. For example:
      <code>1 USD = 75 INR</code><br />
      This means you would get ₹75 for every $1. Exchange rates are dynamic and can change daily based on global economic events, trade, and market demand.`,
    },
    {
      header: "💡 How to Choose the Right Time for Conversion?",
      body: `Timing is important when converting currencies. Here are some tips:<br />
      <ul>
        <li>Monitor exchange rates regularly to identify trends.</li>
        <li>Avoid converting during peak volatility, such as before major economic announcements.</li>
        <li>Use reliable apps or platforms that provide real-time exchange rates and alerts.</li>
      </ul>
      Being informed can save you money, especially during large transactions.`,
    },
    {
      header: "🛠️ Tips to Manage Currency Effectively",
      body: `<p>Managing currency wisely is crucial, especially when traveling or trading internationally:</p>
      <ul>
        <li>Use multi-currency wallets or international credit cards to avoid extra charges.</li>
        <li>Convert only what you need to minimize losses from fluctuating rates.</li>
        <li>Keep an eye on currency trends if you regularly deal with foreign transactions.</li>
        <li>Understand hidden fees charged by banks or exchange agencies.</li>
      </ul>
      By being proactive, you can make the most out of your money across borders!`,
    },
  ];

  return currencyAccordionData;
};

export default CurrencyAccordionData;

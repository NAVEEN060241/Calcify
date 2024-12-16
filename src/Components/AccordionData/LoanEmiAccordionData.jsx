const LoanEMIAccordionData = () => {
  const loanEMIAccordionData = [
    {
      header: "💸 What is EMI and Why is it Important?",
      body: `EMI, or Equated Monthly Installment, is the fixed amount you pay every month to repay a loan. It combines both the principal and interest, ensuring that your repayment is structured and predictable.
      <ul class="m-4">
        <li><span className="text-info">Simplifies budgeting:</span> Knowing your monthly outflow helps plan other expenses.</li>
        <li><span className="text-info">Fixed tenure:</span> Your loan gets repaid in a predetermined time frame, avoiding uncertainties.</li>
        <li><span className="text-info">Accessible loans:</span> Lenders assess EMI affordability to make credit more accessible.</li>
      </ul>
      Whether it’s a home loan, car loan, or personal loan, EMIs ensure that borrowing stays manageable!`,
    },
    {
      header: "📊 How is EMI Calculated?",
      body: `EMI calculations might seem complex, but they are based on a simple formula:
      <code>EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]</code>
      <ul class="m-4">
        <li><span className="text-info">P -</span> Loan principal amount.</li>
        <li><span className="text-info">R -</span> Monthly interest rate (annual interest rate divided by 12).</li>
        <li><span className="text-info">N -</span> Loan tenure in months.</li>
      </ul>
      Don’t worry about manual calculations—modern calculators or APIs handle this math for you in seconds!`,
    },
    {
      header: "📈 Factors That Impact Your EMI",
      body: `The EMI amount isn’t set in stone. Here’s what can influence it:
      <ul class="m-4">
        <li><span className="text-info">Loan Amount:</span> Higher the principal, higher the EMI.</li>
        <li><span className="text-info">Interest Rate:</span> Even a slight rate increase can significantly impact long tenures.</li>
        <li><span className="text-info">Loan Tenure:</span> Longer tenure reduces EMI but increases total interest paid.</li>
      </ul>
      Want a lower EMI? Compare interest rates and adjust the tenure smartly for a better deal!`,
    },
    {
      header: "📉 Prepayment and EMI Reduction",
      body: `Prepayment is a powerful tool to reduce your loan burden. Here's how it helps:
      <ul class="m-4">
        <li><span className="text-info">Lower Interest Outgo:</span> Paying off part of the principal early means less interest over time.</li>
        <li><span className="text-info">EMI Adjustment:</span> Reduce the EMI amount or shorten the loan tenure after prepayment.</li>
        <li><span className="text-info">Flexibility:</span> Many loans allow partial prepayments without penalties—check with your lender!</li>
      </ul>
      Proactively managing prepayments can save you a significant amount over the loan's tenure.`,
    },
    {
      header: "🔎 Choosing the Right Loan with EMI Insights",
      body: `Understanding EMIs can guide you toward smarter borrowing decisions. Here are some tips:
      <ul class="m-4">
        <li><span className="text-info">Compare Lenders:</span> Choose one offering the lowest effective interest rate.</li>
        <li><span className="text-info">Plan Affordability:</span> Ensure your EMI doesn’t exceed 30-40% of your monthly income.</li>
        <li><span className="text-info">Use EMI Calculators:</span> Test different scenarios to find a balance between EMI and tenure.</li>
      </ul>
      Being informed about EMIs not only prevents financial strain but also boosts your confidence as a borrower.`,
    },
  ];

  return loanEMIAccordionData;
};

export default LoanEMIAccordionData;

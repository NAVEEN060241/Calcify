const DateAccordionData = () => {
  const DateTable = () =>
    ` <table class="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
        <thead class="table-primary">
          <tr>
            <th>Unit</th>
            <th>Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Days</td>
            <td>Milliseconds ÷ (1000 × 60 × 60 × 24)</td>
          </tr>
          <tr>
            <td>Months</td>
            <td>Approx. Days ÷ 30</td>
          </tr>
          <tr>
            <td>Years</td>
            <td>Approx. Days ÷ 365</td>
          </tr>
        </tbody>
      </table>`;
  const dateAccordionData = [
    {
      header: "🕰️ Did You Know? The Secret Behind Leap Seconds!",
      body: `Ever wondered why we sometimes have an extra second in the year? This is known as a <span className="text-info">"leap second"</span>—a time adjustment made to account for Earth's irregular rotation. Since the 1970s, leap seconds have been added (or subtracted) to keep atomic time synchronized with astronomical time. A date calculator can help you track these adjustments in the modern era, ensuring your calculations are precise and up-to-date!`,
    },

    {
      header: "🔄 Date Calculations Simplified",
      body: `A date calculator performs tasks like:
      <ul class="m-4">
        <li>Finding the difference between two dates in days, months, or years.</li>
        <li>Adding or subtracting specific durations (e.g., days or weeks) to/from a date.</li>
      </ul>
      <span className="text-info">Formula:</span> The core of date calculations is based on <span className="text-info">epoch time</span>, which counts the seconds since January 1, 1970. <br />
      <p class="mt-4">Example: <code class="bg-dark px-3 py-1 rounded-5 border border-secondary">new Date().getTime()</code> retrieves the current epoch time.</p>`,
    },
    {
      header: "⏳ Understanding Date Differences",
      body: `<p>The difference between two dates can be calculated by:
      <code>Difference = Date2 - Date1</code>
      </p>
      ${DateTable()}
     `,
    },
    {
      header: "🗓️ Leap Years Explained",
      body: `Leap years add an extra day to February to synchronize the calendar with Earth's orbit around the Sun.
      <br />
      <span className="text-info">Leap Year Rule:</span>
      <ul class="m-4">
        <li>A year is a leap year if it is divisible by 4.</li>
        <li>However, if it’s divisible by 100, it must also be divisible by 400.</li>
      </ul>
      Example: 2000 is a leap year, but 1900 is not.`,
    },
    {
      header: "🌟 Practical Uses of Date Calculators",
      body: `Date calculators are handy for:
      <ul class="m-4">
        <li>Planning project deadlines and schedules.</li>
        <li>Tracking the time until important events (e.g., birthdays or holidays).</li>
      </ul>
      They make handling dates easier, especially for recurring or long-term planning.`,
    },
  ];

  return dateAccordionData;
};

export default DateAccordionData;

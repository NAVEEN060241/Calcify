const CSSUnitsAccordionData = () => {
  const cssUnitsAccordionData = [
    {
      header: "📏 What are CSS Units?",
      body: `CSS units are used to define the size of elements on a web page. They determine the dimensions, spacing, and positioning of elements, and are crucial for responsive web design.
      <ul class="m-4">
        <li><span className="text-info">Relative units:</span> Units like <code>em</code>, <code>rem</code>, <code>vh</code>, and <code>vw</code> are relative to the parent or the viewport size.</li>
        <li><span className="text-info">Absolute units:</span> Units like <code>px</code>, <code>cm</code>, <code>in</code>, and <code>mm</code> are fixed and not affected by the screen size or container.</li>
      </ul>
      Understanding CSS units allows for more control and flexibility in web design.`,
    },
    {
      header: "🔢 What is the Difference Between px, em, and rem?",
      body: `The most commonly used units in CSS are:
      <ul class="m-4">
        <li><span className="text-info">px (Pixels):</span> A fixed unit. 1px equals 1 dot on the screen (depending on resolution). Often used for precise control over layout.</li>
        <li><span className="text-info">em:</span> A relative unit that depends on the font size of the parent element. 1em is equal to the current font size of the element. It's commonly used for typography and layout.</li>
        <li><span className="text-info">rem (Root em):</span> Similar to <code>em</code>, but relative to the font size of the root element (<code>html</code> tag). It's more predictable than <code>em</code> because it doesn’t cascade.</li>
      </ul>
      Understanding how each unit scales helps in building flexible and scalable web pages.`,
    },
    {
      header: "📐 What are Viewport Units (vw, vh)?",
      body: `Viewport units are based on the size of the browser window. These units allow for responsive design that adjusts based on the user's screen.
      <ul class="m-4">
        <li><span className="text-info">vw (Viewport Width):</span> 1vw equals 1% of the viewport's width. It helps in designing fluid layouts.</li>
        <li><span className="text-info">vh (Viewport Height):</span> 1vh equals 1% of the viewport's height. Great for full-screen elements or responsive typography.</li>
      </ul>
      Viewport units make your designs more dynamic and adaptable to different screen sizes.`,
    },
    {
      header: "🕰️ When to use Time Units (s, ms) in CSS?",
      body: `CSS also supports time-based units for animations and transitions:
      <ul class="m-4">
        <li><span className="text-info">s (Seconds):</span> Represents time in seconds. Often used for animation durations.</li>
        <li><span className="text-info">ms (Milliseconds):</span> Represents time in milliseconds. Used when more precise timing is needed, especially for short animations.</li>
      </ul>
      Using these units helps in creating smooth transitions and precise animations.`,
    },
    {
      header: "🔄 How to Convert CSS Units?",
      body: `Converting between different CSS units is essential for adjusting layouts and improving responsiveness:
      <ul class="m-4">
        <li><span className="text-info">px to em/rem:</span> Typically based on a base font size (usually 16px). For example, <code>16px = 1em</code>.</li>
        <li><span className="text-info">em/rem to px:</span> Multiply by the base font size (e.g., <code>2em = 32px</code> if base font size is 16px).</li>
        <li><span className="text-info">vw/vh to px:</span> Use the viewport dimensions to convert, for instance, <code>10vw = 10% of viewport width</code>.</li>
      </ul>
      You can use online converters or manually apply the math to achieve the desired units.`,
    },
  ];

  return cssUnitsAccordionData;
};

export default CSSUnitsAccordionData;

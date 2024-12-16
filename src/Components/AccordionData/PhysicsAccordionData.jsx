const PhysicsAccordionData = () => {
  const PhysicsTable = () =>
    `<table class="table table-dark table-hover table-responsive border border-secondary w-50 ms-4 mt-4 text-center">
        <thead class="table-primary">
          <tr>
            <th>Category</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Force</td>
            <td>Force = Mass × Acceleration</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>Kinetic Energy = (1/2)mv²</td>
          </tr>
          <tr>
            <td>Motion</td>
            <td>Angular Velocity = θ / t</td>
          </tr>
          <tr>
            <td>Area & Volume</td>
            <td>Surface Area of Sphere = 4πr²</td>
          </tr>
        </tbody>
      </table>`;
  const physicsAccordionData = [
    {
      header: "⚡ How Physics Calculations Simplify Complex Problems",
      body: `Physics calculators are designed to solve complex equations in a fraction of the time. They help users calculate various physical quantities, such as <span className="text-info">force, energy, velocity</span>, and more, based on well-established formulas. 
      <br />
      Example: For calculating force, the calculator applies Newton's second law: 
      <code>F = m × a</code>, where:
      <ul class="m-4">
        <li><span className="text-info">F</span> is the force (in Newtons).</li>
        <li><span className="text-info">m</span> is the mass (in kilograms).</li>
        <li><span className="text-info">a</span> is the acceleration (in m/s²).</li>
      </ul>`,
    },
    {
      header: "📜 Physics Formulas & Units in Action",
      body: `In this physics calculator supports a variety of formulas across different domains:
      <br />
      ${PhysicsTable()}
      `,
    },
    {
      header: "🧩 Exploring Area & Volume Calculations",
      body: `Our calculator can determine surface areas and volumes for common 3D shapes:
      <ul class="m-4">
        <li class="mb-3"><span className="text-info">Surface Area of Sphere:</span> <code>A = 4πr²</code>, where <span className="text-info">r</span> is the radius.</li>
        <li><span className="text-info">Volume of Cylinder:</span> <code>V = πr²h</code>, where <span className="text-info">r</span> is the radius and <span className="text-info">h</span> is the height.</li>
      </ul>
      These calculations are vital in fields such as architecture, manufacturing, and physics research.`,
    },
    {
      header: "🌌 Real-World Applications",
      body: `Physics calculators are used in various fields to solve real-world problems:
      <ul class="m-4">
        <li><span className="text-info">Engineering:</span> Calculating stresses, forces, and moments in structures.</li>
        <li><span className="text-info">Astronomy:</span> Determining orbital speeds and gravitational forces.</li>
        <li><span className="text-info">Everyday Life:</span> Estimating energy consumption or calculating distances while driving.</li>
      </ul>
      These tools are indispensable for professionals and students alike.`,
    },
    
    {
      header: "🚀 Tips for Effective Use",
      body: `To make the most of a physics calculator:
      <ul class="m-4">
        <li><span className="text-info">Understand the Basics:</span> Familiarize yourself with the physical quantities and units involved.</li>
        <li><span className="text-info">Check Inputs:</span> Ensure values are entered in the correct units (e.g., kilograms, meters, seconds).</li>
        <li><span className="text-info">Use Precision:</span> Input values with appropriate precision for accurate results.</li>
      </ul>
      These tips help ensure accurate and reliable computations.`,
    },
  ];

  return physicsAccordionData;
};

export default PhysicsAccordionData;

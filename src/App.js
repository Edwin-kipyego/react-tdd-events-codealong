import { useState } from "react";

function App() {
  // Track whether the pepperoni checkbox is checked
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  // Toggle the pepperoni state when the checkbox is clicked
  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      {/* Checkbox for adding pepperoni */}
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        {/* Default topping is Cheese */}
        <li>Cheese</li>
        {/* Add Pepperoni if checked */}
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;



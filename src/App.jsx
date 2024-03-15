import { useState } from "react";

import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";

//APP code below

function App() {
  const [counter, setCounter] = useState(0);
  const [options, setOptions] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleLogOptions = (optionName) => {
    
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    if (counter === 0) return;

    setCounter(counter - 1);
  };

  const optionsTotal = options.good + options.bad + options.neutral;

  return (
    <div>
      <button onClick={handleIncrementCounter}>Counter: {counter}</button>
      <button onClick={handleDecrementCounter}>-</button>
      <Description />
      <Feedback options={options} total={optionsTotal} />
      <Options handleLogOptions={handleLogOptions} />
    </div>
  );
}

export default App;
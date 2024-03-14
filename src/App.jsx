import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import { useState } from "react";

//APP code below

function App () {
  const [counter, setCounter] = useState(0);
  const [options, setOptions] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleLogOptions = (optionName) => {
    console.log("optionName: ", optionName);
    setOptions({...options, [optionName]: options[optionName] + 1 });
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleIncrementCounter}> Counter: {counter}</button>
      <Description />
      <Options handleLogOptions={handleLogOptions} />
      <Feedback options={options} />
    </div>
  );
}

export default App;

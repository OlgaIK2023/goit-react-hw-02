import { useEffect, useState } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

//APP code below

const initialOptions = { good: 0, bad: 0, neutral: 0 };

function App() {
  const [options, setOptions] = useState(() => {
    const stringifiedOptions = localStorage.getItem("optionsValues");
    const parsedOptions = JSON.parse(stringifiedOptions) ?? initialOptions;
    return parsedOptions;
  });

  // const [options, setOptions] = useState({ good: 0, bad: 0, neutral: 0 });

  const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);

  const handleLogOptions = (optionName) => {
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
    setIsVisibleFeedback(true);
  };

  

  const handleReset = () => {
    setOptions(initialOptions);
    setIsVisibleFeedback(false);
  };

  

  const optionsTotal = options.good + options.bad + options.neutral;

  const positivePercentageCalculated = Math.round(((options.good + options.neutral) / optionsTotal) * 100);

  useEffect(() => {
    localStorage.setItem("optionsValues", JSON.stringify(options));
  }, [options]);

  return (
    <div>
      <Description />
      <Options
        handleLogOptions={handleLogOptions}
        total={optionsTotal}
        handleReset={handleReset}
        
      />

{(optionsTotal === 0 && !isVisibleFeedback) && <Notification />}
      {optionsTotal > 0 && isVisibleFeedback && (
        <Feedback options={options} total={optionsTotal} positivePercentage={positivePercentageCalculated} />
      )}

      
    </div>
  );
}

export default App;

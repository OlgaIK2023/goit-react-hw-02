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

  // const onToggleFeedbackVisibility = () => {
  //  setIsVisibleFeedback(!isVisibleFeedback);
  //  };
  //  // Встановлюємо стан isVisibleFeedback в true

  const handleReset = () => {
    setOptions(initialOptions);
    setIsVisibleFeedback(false);
  };

  // const onToggleFeedbackVisibility = () => {
  //   setIsVisibleFeedback(!isVisibleFeedback);
  // };

  const optionsTotal = options.good + options.bad + options.neutral;

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

      {(optionsTotal === 0) && <Notification />}
      {optionsTotal > 0 && isVisibleFeedback && (
        <Feedback options={options} total={optionsTotal} />
      )}

      {/* <Feedback options={options} total={optionsTotal} /> */}

      {/* <button onClick={onToggleFeedbackVisibility}>
        {isVisibleFeedback ? "Hide" : "Show"} mini-bar
      </button> */}
    </div>
  );
}

export default App;

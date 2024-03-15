import { useState } from "react";
import { useEffect } from "react";

import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

//APP code below

function App() {
  const [options, setOptions] = useState({ good: 0, bad: 0, neutral: 0 });
  const [isVisibleFeedback, setVisibleFeedback] = useState(false);

  const handleLogOptions = (optionName) => {
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
  };

  // const handleLogFirstOption = () => {
  //   setIsVisibleFeedback(true); // Встановлюємо стан isVisibleFeedback в true
  // };

  const optionsTotal = options.good + options.bad + options.neutral;

  return (
    <div>
      <Description />
      <Options handleLogOptions={handleLogOptions} />
      <Notification />

      
      {isVisibleFeedback && (
        <>
          <Feedback options={options} total={optionsTotal} />
        </>
      )}
    </div>
  );
}

export default App;

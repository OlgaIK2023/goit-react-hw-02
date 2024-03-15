import { useState } from "react";

import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";

//APP code below

function App() {
  
  const [options, setOptions] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleLogOptions = (optionName) => {
    
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
  };

  

  const optionsTotal = options.good + options.bad + options.neutral;

  return (
    <div>
      
      <Description />
     
      <Options handleLogOptions={handleLogOptions} />
      <Feedback options={options} total={optionsTotal} />
    </div>
  );
}

export default App;
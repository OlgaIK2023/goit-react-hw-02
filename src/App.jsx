import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import { useState } from "react";




//APP code below

const App = () => {

  const initialFeedback = {good: 0, bad: 0, neutral: 0}

const handleLogOptions = (optionName) => {
  console.log("optionName: ", optionName);

};


const [counter, setCounter]=useState(0);

const handleIncrementCounter = () => {
  setCounter (counter +1);
  
}


  return (
    <div>
      <button onClick = {handleIncrementCounter}> Counter: {counter}</button>
      <Description />
      <Options handleLogOptions = {handleLogOptions}/>
      <Feedback options = {initialFeedback}/>

      
    </div>
  );
};

export default App;

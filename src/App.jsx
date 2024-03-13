import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";




//APP code below

const App = () => {

  const initialFeedback = {good: 0, bad: 0, neutral: 0}

const handleLogOptions = (optionName) => {
  console.log("optionName: ", optionName);

};

  return (
    <>
      <Description />
      <Options handleLogOptions = {handleLogOptions}/>
      <Feedback options = {initialFeedback}/>

      
    </>
  );
};

export default App;

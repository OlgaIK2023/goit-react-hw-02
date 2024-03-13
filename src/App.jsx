import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";




//APP code below

const App = () => {

const handleLogOptions = (optionName) => {
  console.log("optionName: ", optionName);

};

  return (
    <>
      <Description />
      <Options handleLogOptions = {handleLogOptions}/>
      <Feedback />

      
    </>
  );
};

export default App;

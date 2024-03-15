import { useEffect } from "react";
import "./Options.module.css";

// import clsx from "clsx"



const options = ({handleLogOptions, handleReset,
  onToggleFeedbackVisibility, total}) => {



    useEffect(() => {
      const onKeyDown = (event) => {
        if (event.code === "Escape") {
          onToggleFeedbackVisibility();
        }
      };
  
      window.addEventListener("keydown", onKeyDown);
  
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [onToggleFeedbackVisibility]);



  return (
    <div>
      <button onClick = {() => handleLogOptions("good")}>Good</button>
      <button onClick = {() => handleLogOptions("neutral")}>Neutral</button>
      <button onClick = {() => handleLogOptions("bad")}>Bad</button>
      {total !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default options;

import "./Options.module.css";
// import clsx from "clsx"



const options = ({handleLogOptions}) => {
  return (
    <div>
      <button onClick = {() => handleLogOptions("good")}>Good</button>
      <button onClick = {() => handleLogOptions("neutral")}>Neutral</button>
      <button onClick = {() => handleLogOptions("bad")}>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default options;

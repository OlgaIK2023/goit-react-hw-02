import "./Options.module.css";
// import clsx from "clsx"



const options = ({handleLogOptions}) => {
  return (
    <div>
      <button onClick = {() => handleLogOptions("Good")}>Good</button>
      <button onClick = {() => handleLogOptions("Neutral")}>Neutral</button>
      <button onClick = {() => handleLogOptions("Bad")}>Bad</button>
      <button>Reset</button>
    </div>
  )
}

export default options;

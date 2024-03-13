// import clsx from "clsx";
// import css from "./Profile.module.css";

const Feedback = ({options}) => {
  return (
    <ul>
      <li>Good: {options.good}</li>
      <li>Neutral: {options.neutral}</li>
      <li>Bad: {options.bad}</li>
      <li>Total: </li>
      <li>Positive: </li>
    </ul>
  );
};

export default Feedback;

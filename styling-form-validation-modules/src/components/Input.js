import classes from "./FormUserInput.module.css";

function Input({ config, className }) {
  return (
    <input {...config} className={`${classes.formInput} ${className}`}></input>
  );
}

export default Input;

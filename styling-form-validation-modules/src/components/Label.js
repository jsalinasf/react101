import classes from "./FormUserInput.module.css";

function Label({ config, className, children }) {
  return (
    <label {...config} className={`${classes.formLabel} ${className}`}>
      {children}
    </label>
  );
}

export default Label;

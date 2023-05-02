function Label({ config, className, children }) {
  return (
    <label {...config} className={`form-label ${className}`}>
      {children}
    </label>
  );
}

export default Label;

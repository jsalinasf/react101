function Label({ config, className, children }) {
  return (
    <label {...config} className={className}>
      {children}
    </label>
  );
}

export default Label;

function Button({ config, className, children }) {
  return (
    <button {...config} className={className}>
      {children}
    </button>
  );
}

export default Button;

import React from "react";

function Button({ children, handleClick }) {
  return (
    <button className="button-restart" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

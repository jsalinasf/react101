import React from "react";

function Banner({ className, message }) {
  return (
    <div className={`${className} banner`}>
      <p>{message}</p>
    </div>
  );
}

export default Banner;

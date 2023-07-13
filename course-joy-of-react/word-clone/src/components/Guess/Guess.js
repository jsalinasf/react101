import React from "react";

function Guess({ guess }) {
  if (typeof guess !== "object") {
    console.log("Not object");
    guess = {
      id: Math.random(1),
      value: "C",
    };
  }
  return (
    <p className="guess">
      <span className="cell">{guess.value}</span>
    </p>
  );
}

export default Guess;

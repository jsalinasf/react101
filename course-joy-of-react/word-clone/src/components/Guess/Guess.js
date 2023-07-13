import React from "react";

function Guess({ guess }) {
  if (typeof guess !== "object") {
    return <></>;
  }

  return (
    <p className="guess">
      {[...guess.value].map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

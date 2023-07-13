import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess ? (
        [...guess.value].map((letter, index) => (
          <span className="cell" key={index}>
            {letter}
          </span>
        ))
      ) : (
        <>
          <span className="cell"> </span>
          <span className="cell"> </span>
          <span className="cell"> </span>
          <span className="cell"> </span>
          <span className="cell"> </span>
        </>
      )}
    </p>
  );
}

export default Guess;

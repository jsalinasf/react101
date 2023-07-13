import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map(
        (element) =>
          !!guesses[element] && (
            <Guess key={Math.random(2)} guess={guesses[element]} />
          )
      )}
    </>
  );
}

export default GuessResults;

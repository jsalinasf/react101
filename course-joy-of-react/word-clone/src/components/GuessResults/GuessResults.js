import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map(
        (index) =>
          !!guesses[index] && (
            <Guess key={guesses[index].id} guess={guesses[index]} />
          )
      )}
    </>
  );
}

export default GuessResults;

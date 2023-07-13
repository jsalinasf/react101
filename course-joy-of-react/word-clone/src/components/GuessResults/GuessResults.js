import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  // console.log(utils.range(0, NUM_OF_GUESSES_ALLOWED));
  let myArray = range(NUM_OF_GUESSES_ALLOWED);
  myArray.map((element) => {
    console.log(element);
  });
  return (
    <>
      {range(NUM_OF_GUESSES_ALLOWED).map((element) => (
        <Guess />
      ))}
    </>
  );
}

export default GuessResults;

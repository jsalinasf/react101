import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import InputGuess from "../InputGuess/InputGuess";
import GuessesList from "../GuessesList/GuessesList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(attempt) {
    const newAttempt = {
      id: crypto.randomUUID(),
      attempt: attempt,
    };
    const nextGuesses = [...guesses, newAttempt];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessesList guesses={guesses} />
      <InputGuess addGuess={addGuess} />
    </>
  );
}

export default Game;

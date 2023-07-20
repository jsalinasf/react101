import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const [modal, setModal] = React.useState("");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = tentativeGuess;

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    const nextAttempt = attempts + 1;
    setAttempts(nextAttempt);

    if (nextAttempt === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
      setModal("sad");
    }

    if (tentativeGuess === answer) {
      setIsGameOver(true);
      setModal("happy");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={isGameOver} />
      {isGameOver ? (
        <Banner className={modal} answer={answer} attempts={attempts} />
      ) : undefined}
    </>
  );
}

export default Game;

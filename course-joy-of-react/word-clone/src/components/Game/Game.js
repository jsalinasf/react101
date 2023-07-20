import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(true);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = tentativeGuess;

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {isGameOver ? (
        <Banner className={"happy"} answer={answer} attempts={3} />
      ) : undefined}
    </>
  );
}

export default Game;

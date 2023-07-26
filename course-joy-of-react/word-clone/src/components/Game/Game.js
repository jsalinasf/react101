import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import KeyBoard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [modal, setModal] = React.useState("");
  const [letters, setLetters] = React.useState({});

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = tentativeGuess;

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
      setModal("sad");
    }

    if (tentativeGuess.toUpperCase() === answer) {
      setIsGameOver(true);
      setModal("happy");
    }

    const result = checkGuess(tentativeGuess, answer);

    let nextLetters = {};

    result.forEach((element) => {
      if (result) {
        console.log(result, element);
        nextLetters[element.letter] = element.status;
      }
    });

    console.log(nextLetters);
    console.log(letters);

    const nextNextLetters = { ...letters, ...nextLetters };
    setLetters(nextNextLetters);

    // console.log(letters);
    // setLetters({
    //   A: "correct",
    //   B: "misplaced",
    //   C: "incorrect",
    //   Q: "incorrect",
    //   R: "correct",
    //   P: "misplaced",
    // });
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={isGameOver} />
      <KeyBoard letters={letters} />
      {isGameOver && (
        <Banner className={modal} answer={answer} attempts={guesses.length} />
      )}
    </>
  );
}

export default Game;

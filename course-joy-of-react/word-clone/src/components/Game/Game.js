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

  function updateKeyboard(tentativeGuess) {
    const result = checkGuess(tentativeGuess, answer);
    let nextLetters = {};
    result.forEach((element) => {
      if (result) {
        // check if the letter was already marked as "correct" on the keyboard
        // if so, dont do anything
        // otherwise, add this letter to the "letters" object so it can be painted on the GUI
        if (!(letters[element.letter] === "correct")) {
          nextLetters[element.letter] = element.status;
        }
      }
    });
    setLetters({ ...letters, ...nextLetters });
  }

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = tentativeGuess;

    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    updateKeyboard(tentativeGuess);

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
      setModal("sad");
    }

    if (tentativeGuess.toUpperCase() === answer) {
      setIsGameOver(true);
      setModal("happy");
    }
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

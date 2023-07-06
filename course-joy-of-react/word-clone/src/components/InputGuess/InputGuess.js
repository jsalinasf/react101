import React from "react";

function InputGuess() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guessInput">Enter Guess (5 letter word):</label>
      <input
        type="text"
        id="guessInput"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      ></input>
    </form>
  );
}

export default InputGuess;

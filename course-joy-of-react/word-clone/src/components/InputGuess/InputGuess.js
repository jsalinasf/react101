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
        pattern="\w{5}"
        title="5 letter word only"
      ></input>
    </form>
  );
}

export default InputGuess;

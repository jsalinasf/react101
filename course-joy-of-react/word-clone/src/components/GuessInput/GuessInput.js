import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess (5 letter word):</label>
      <input
        type="text"
        id="guess-input"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
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

export default GuessInput;

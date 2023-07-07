import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p className={guess} key={guess.id}>
            {guess.guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;

import React from "react";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p className={guess} key={guess.id}>
            {guess.attempt}
          </p>
        );
      })}
    </div>
  );
}

export default GuessesList;

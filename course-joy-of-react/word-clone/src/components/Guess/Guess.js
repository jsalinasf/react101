import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const validation = checkGuess(value, answer);

  function chooseClass(index) {
    const returnValue = validation[index].status;
    switch (returnValue) {
      case "correct":
        return "cell correct";
      case "misplaced":
        return "cell misplaced";
      default:
        return "cell";
    }
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={value ? chooseClass(num) : "cell"}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

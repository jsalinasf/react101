import React from "react";

function Banner({ className, answer, attempts }) {
  return (
    <div className={`${className} banner`}>
      {className === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{attempts} guesses</strong>
        </p>
      ) : (
        <p>
          Sorry the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;

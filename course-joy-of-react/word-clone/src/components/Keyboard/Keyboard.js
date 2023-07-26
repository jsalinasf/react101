import React from "react";

function Keyboard({ letters }) {
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-line">
        <div className={`keyboard-cell ${letters["Q"]}`}>Q</div>
        <div className={`keyboard-cell ${letters["W"]}`}>W</div>
        <div className={`keyboard-cell ${letters["E"]}`}>E</div>
        <div className={`keyboard-cell ${letters["R"]}`}>R</div>
        <div className={`keyboard-cell ${letters["T"]}`}>T</div>
        <div className={`keyboard-cell ${letters["Y"]}`}>Y</div>
        <div className={`keyboard-cell ${letters["U"]}`}>U</div>
        <div className={`keyboard-cell ${letters["I"]}`}>I</div>
        <div className={`keyboard-cell ${letters["O"]}`}>O</div>
        <div className={`keyboard-cell ${letters["P"]}`}>P</div>
      </div>
      <div className="keyboard-line">
        <div className={`keyboard-cell ${letters["A"]}`}>A</div>
        <div className={`keyboard-cell ${letters["S"]}`}>S</div>
        <div className={`keyboard-cell ${letters["D"]}`}>D</div>
        <div className={`keyboard-cell ${letters["F"]}`}>F</div>
        <div className={`keyboard-cell ${letters["G"]}`}>G</div>
        <div className={`keyboard-cell ${letters["H"]}`}>H</div>
        <div className={`keyboard-cell ${letters["J"]}`}>J</div>
        <div className={`keyboard-cell ${letters["K"]}`}>K</div>
        <div className={`keyboard-cell ${letters["L"]}`}>L</div>
      </div>
      <div className="keyboard-line">
        <div className={`keyboard-cell ${letters["Z"]}`}>Z</div>
        <div className={`keyboard-cell ${letters["X"]}`}>X</div>
        <div className={`keyboard-cell ${letters["C"]}`}>C</div>
        <div className={`keyboard-cell ${letters["V"]}`}>V</div>
        <div className={`keyboard-cell ${letters["B"]}`}>B</div>
        <div className={`keyboard-cell ${letters["N"]}`}>N</div>
        <div className={`keyboard-cell ${letters["M"]}`}>M</div>
      </div>
    </div>
  );
}

export default Keyboard;

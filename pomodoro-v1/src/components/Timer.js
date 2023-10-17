import React from "react";

export default function Timer() {
  return (
    <div className="timer">
      <header>
        <h1>Pomodoro App</h1>
      </header>
      <main>
        <div className="hours">00</div>
        <div className="separator">:</div>
        <div className="minutes">00</div>
      </main>
      <footer>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </footer>
    </div>
  );
}

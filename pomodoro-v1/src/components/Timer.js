import React from "react";

export default function Timer() {
  return (
    <div className="timer">
      <header>
        <h1>Pomodoro App</h1>
      </header>
      <main>
        <div className="timer-chracters">10</div>
        <div className="timer-chracters">:</div>
        <div className="timer-chracters">00</div>
      </main>
      <footer>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </footer>
    </div>
  );
}

import React from "react";

const INITIALMINUTES = 1;
const INITIALSECONDS = 5;
const INITIALMESSAGE = "Pomodoro App";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [message, setMessage] = React.useState(INITIALMESSAGE);
  const [secondsLeft, setSecondsLeft] = React.useState(
    INITIALMINUTES * 60 + INITIALSECONDS
  );

  React.useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setSecondsLeft((currentInterval) => currentInterval - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning]);

  function handleClickStart() {
    setMessage("Time to focus...");
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickStop() {
    setMessage(INITIALMESSAGE);
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickReset() {
    setMessage(INITIALMESSAGE);
    setSecondsLeft(INITIALMINUTES * 60 + INITIALSECONDS);
    setIsTimerRunning(!isTimerRunning);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = Math.floor(secondsLeft % 60);

  return (
    <div className="timer">
      <header>
        <h1>{message}</h1>
      </header>
      <main className="timer-characters">
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </main>
      <footer>
        <button onClick={handleClickStart} disabled={isTimerRunning}>
          Start
        </button>
        <button onClick={handleClickStop} disabled={!isTimerRunning}>
          Pause
        </button>
        <button onClick={handleClickReset} disabled={isTimerRunning}>
          Reset
        </button>
      </footer>
    </div>
  );
}

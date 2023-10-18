import React from "react";
import { MINUTES } from "./initialValues";
import { SECONDS } from "./initialValues";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [minutes, setMinutes] = React.useState(MINUTES);
  const [seconds, setSeconds] = React.useState(SECONDS);

  React.useEffect(() => {
    if (isTimerRunning) {
      const timeoutId = setTimeout(() => {
        let nextSeconds = Number(seconds) - 1;
        if (Number(nextSeconds) < 0) {
          nextSeconds = "59";
        }
        if (nextSeconds.toString().length === 1) {
          nextSeconds = nextSeconds.toString().padStart(2, 0);
        }
        setSeconds(nextSeconds);
      }, 1000);
      return () => {
        window.clearInterval(timeoutId);
      };
    }
  }, [isTimerRunning, seconds]);

  function handleClickStart() {
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickStop() {
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickReset() {
    setMinutes(MINUTES);
    setSeconds(SECONDS);
  }

  return (
    <div className="timer">
      <header>
        <h1>Pomodoro App</h1>
      </header>
      <main>
        <span className="timer-characters">{minutes}</span>
        <span className="timer-characters">:</span>
        <span className="timer-characters">{seconds}</span>
      </main>
      <footer>
        <button onClick={handleClickStart} disabled={isTimerRunning}>
          Start
        </button>
        <button onClick={handleClickStop} disabled={!isTimerRunning}>
          Stop
        </button>
        <button onClick={handleClickReset} disabled={isTimerRunning}>
          Reset
        </button>
      </footer>
    </div>
  );
}

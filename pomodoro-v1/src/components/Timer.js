import React from "react";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [minutes, setMinutes] = React.useState(10);
  const [seconds, setSeconds] = React.useState(60);

  React.useEffect(() => {
    if (isTimerRunning) {
      const timeoutId = setTimeout(() => {
        setSeconds((currentSeconds) => currentSeconds - 1);
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
        <button disabled={isTimerRunning}>Reset</button>
      </footer>
    </div>
  );
}

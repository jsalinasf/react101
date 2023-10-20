import React from "react";

const INITIALMINUTES = 0;
const INITIALSECONDS = 5;
const INITIALMESSAGE = "Pomodoro App";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [minutes, setMinutes] = React.useState(INITIALMINUTES);
  const [seconds, setSeconds] = React.useState(INITIALSECONDS);
  const [message, setMessage] = React.useState(INITIALMESSAGE);

  React.useEffect(() => {
    function isTimeUp() {
      // check if time is up
      if (minutes === 0 && seconds === 0) {
        setIsTimerRunning(false);
        setMessage("Time is Up!");
      }
    }

    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setSeconds((currentSeconds) => {
          if (currentSeconds === 0) {
            // one minute has elapsed
            // minutes need to be decreased
            setMinutes((currentMinutes) => currentMinutes - 1);
            // seconds need to be reset
            return 59;
          } else {
            // decrease seconds
            return currentSeconds - 1;
          }
        });
      }, 1000);
      isTimeUp();
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning, minutes, seconds]);

  function handleClickStart() {
    setMessage("Time to focus...");
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickStop() {
    setMessage("Time is Up!");
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickReset() {
    setMinutes(INITIALMINUTES);
    setSeconds(INITIALSECONDS);
    setMessage(INITIALMESSAGE);
  }

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

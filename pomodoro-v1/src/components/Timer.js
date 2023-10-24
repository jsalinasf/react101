import React from "react";

const INITIALMINUTES = 1;
const INITIALSECONDS = 5;
const INITIALMESSAGE = "Pomodoro App";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [message, setMessage] = React.useState(INITIALMESSAGE);
  // using secondsLeft as a second interval backward counter
  // so I got rid of minutes and seconds state variables
  // thank to this, my useEffect got cleaner and it is controlled by 'isTimerRunnig' only
  // Josh's suggestion (via Discord) 👆
  const [secondsLeft, setSecondsLeft] = React.useState(
    INITIALMINUTES * 60 + INITIALSECONDS
  );

  React.useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        setSecondsLeft((currentInterval) => {
          // checking if time is up
          if (currentInterval === 1) {
            // true - time is up!
            // reset App settings, toggle isTimerRunning and return zero for secondsLeft
            setMessage(INITIALMESSAGE);
            setIsTimerRunning(!isTimerRunning);
            return 0;
          } else {
            // false - decrease secondsLeft
            return currentInterval - 1;
          }
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning]);

  function handleClickStart() {
    setMessage("Time to focus...");
    // checking if secondsLeft need to be reseted or not
    if (secondsLeft <= 0) {
      setSecondsLeft(INITIALMINUTES * 60 + INITIALSECONDS);
    }
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickStop() {
    setMessage(INITIALMESSAGE);
    setIsTimerRunning(!isTimerRunning);
  }

  function handleClickReset() {
    setMessage(INITIALMESSAGE);
    setSecondsLeft(INITIALMINUTES * 60 + INITIALSECONDS);
  }

  // using secondsLeft counter, I will calculate the 'minutes' to display
  const minutes = Math.floor(secondsLeft / 60);
  // using secondsLeft counter, I will calculate the 'seconds' to display
  const seconds = secondsLeft % 60;

  return (
    <div className="timer">
      <header>
        <h1>{message}</h1>
      </header>
      <main className="timer-characters">
        {/* minutes will always be displayed using 2-digit format */}
        <span>{minutes < 10 ? "0" + minutes : minutes}</span>
        <span>:</span>
        {/* seconds will always be displayed using 2-digit format */}
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

import React from "react";

const MINUTES = "01";
const SECONDS = "10";

export default function Timer() {
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [minutes, setMinutes] = React.useState(MINUTES);
  const [seconds, setSeconds] = React.useState(SECONDS);

  // TODO: check timer with actual timer. It seems to lag behind.

  React.useEffect(() => {
    function handleTick() {
      if (minutes === "00" && seconds === "00") {
        console.log("Time is Up!");
        setIsTimerRunning(false);
        return;
      }

      // one second has passed, the clock has "ticked"
      let nextSeconds = Number(seconds) - 1;

      // if seconds reach -1, seconds need to be reseted to 59 - a new minute
      if (nextSeconds === -1) {
        nextSeconds = 59;
        // Minutes are updated since a whole minute has passed
        let nextMinutes = Number(minutes) - 1;
        // format minutes to always show 2-digit format
        if (nextMinutes.toString().length === 1) {
          nextMinutes = nextMinutes.toString().padStart(2, 0);
        }
        setMinutes(nextMinutes);
      }
      // format seconds to always show 2-digit format
      if (nextSeconds.toString().length === 1) {
        nextSeconds = nextSeconds.toString().padStart(2, 0);
      }
      setSeconds(nextSeconds);
    }
    // it manages a second tick
    if (isTimerRunning) {
      const timeoutId = setTimeout(() => {
        handleTick();
      }, 1000);
      return () => {
        window.clearInterval(timeoutId);
      };
    }
  }, [isTimerRunning, minutes, seconds]);

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
          Pause
        </button>
        <button onClick={handleClickReset} disabled={isTimerRunning}>
          Reset
        </button>
      </footer>
    </div>
  );
}

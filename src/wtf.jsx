import * as React from "react";
import { formatTime } from "./utils";

export default function Stopwatch() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  let id = null;

  const handleClick = () => {
    if (running === false) {
      id = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setRunning(true);
    } else {
      window.clearInterval(id);
      id = null;
      setRunning(false);
    }
  };

  return (
    <main>
      <h1>{formatTime(seconds)}</h1>
      <button
        style={{ background: running === true ? "var(--red)" : "var(--green)" }}
        onClick={handleClick}
      >
        {running === true ? "Stop" : "Start"}
      </button>
    </main>
  );
}

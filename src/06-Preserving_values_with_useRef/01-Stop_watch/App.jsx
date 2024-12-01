import "./App.css";
import * as React from "react";
import { formatTime } from "./utils";

export default function Stopwatch() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [id, setId] = React.useState(null);

  const handleClick = () => {
    if (running === false) {
      const id = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setId(id);
      setRunning(true);
    } else {
      window.clearInterval(id);
      setId(null);
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

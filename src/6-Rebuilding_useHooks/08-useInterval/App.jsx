import "./App.css";
import * as React from "react";
import useInterval from "./useInterval";

const colors = ["green", "blue", "purple", "red", "pink", "beige", "yellow"];

export default function App() {
  const [running, setIsRunning] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  const clear = useInterval(() => {
    setIndex(index + 1);
  }, 1000);

  const handleStop = () => {
    clear();
    setIsRunning(false);
  };

  const color = colors[index % colors.length];
  return (
    <section>
      <h1>useInterval</h1>
      <button disabled={!running} className="link" onClick={handleStop}>
        {running ? "Stop" : "Stopped"}
      </button>
      <div style={{ backgroundColor: `var(--${color})` }} />
    </section>
  );
}

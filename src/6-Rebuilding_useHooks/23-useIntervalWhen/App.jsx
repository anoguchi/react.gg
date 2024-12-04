import "./App.css";
import * as React from "react";
import useIntervalWhen from "./useIntervalWhen";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [when, setWhen] = React.useState(false);

  useIntervalWhen(
    () => {
      setCount((c) => c + 0.1);
    },
    { ms: 100, when, startImmediately: true }
  );

  return (
    <section>
      <h1>useIntervalWhen</h1>
      <button title="Click to toggle the timer" onClick={() => setWhen(!when)}>
        {count.toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
        <span className="btn link">{when ? "stop" : "start"}</span>
      </button>
    </section>
  );
}

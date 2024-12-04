import "./App.css";
import * as React from "react";
import useCountdown from "./useCountdown";

export default function App() {
  const [endTime, setEndTime] = React.useState(new Date(Date.now() + 10000));
  const [complete, setComplete] = React.useState(false);

  const count = useCountdown(endTime, {
    interval: 1000,
    onTick: () => console.log("tick"),
    onComplete: (time) => setComplete(true),
  });

  const handleClick = (time) => {
    if (complete === true) return;
    const nextTime = endTime.getTime() + time;
    setEndTime(new Date(nextTime));
  };

  return (
    <section>
      <header>
        <h1>useCountdown</h1>
      </header>
      <span className="countdown">{count}</span>
      {complete === false && (
        <div className="button-row">
          <button onClick={() => handleClick(5000)}>+5s</button>
          <button onClick={() => handleClick(10000)}>+10s</button>
          <button onClick={() => handleClick(15000)}>+15s</button>
        </div>
      )}
    </section>
  );
}

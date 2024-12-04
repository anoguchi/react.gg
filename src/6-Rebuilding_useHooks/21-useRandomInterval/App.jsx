import "./App.css";
import * as React from "react";
import useRandomInterval from "./useRandomInterval";
import HeartsDemo from "./Heart";

export default function App() {
  const demo = React.useRef(new HeartsDemo());
  const clear = useRandomInterval(
    () => {
      demo.current.addHeart();
    },
    { minDelay: 50, maxDelay: 3000 }
  );

  React.useEffect(() => {
    demo.current.loop();
  }, []);

  return (
    <section>
      <h1>useRandomInterval</h1>
      <button className="link" onClick={clear}>
        Stop
      </button>
    </section>
  );
}

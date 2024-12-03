import "./App.css";
import * as React from "react";
import useVisibilityChange from "./useVisibilityChange";

export default function App() {
  const documentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = React.useState(0);

  React.useEffect(() => {
    if (documentVisible === false) {
      setTabAwayCount((c) => c + 1);
    }
  }, [documentVisible]);

  return (
    <section>
      <h1>useVisibilityChange</h1>
      <div>Tab Away Count: {tabAwayCount}</div>
    </section>
  );
}

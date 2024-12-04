import "./App.css";
import * as React from "react";
import useLongPress from "./useLongPress";
import { closeIcon } from "./icons";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const attrs = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      onStart: (event) => console.log("Press started"),
      onFinish: (event) => console.log("Press finished"),
      onCancel: (event) => console.log("Press cancelled"),
      threshold: 500,
    }
  );

  return (
    <section>
      <h1>useLongPress</h1>

      <button {...attrs} className="primary">
        Press Me
      </button>

      {isOpen && (
        <dialog>
          <button onClick={() => setIsOpen(false)}>{closeIcon}</button>
          <h2>Modal</h2>
          <p>This is a modal triggered by a long press.</p>
        </dialog>
      )}
    </section>
  );
}

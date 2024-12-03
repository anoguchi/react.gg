import "./App.css";
import * as React from "react";
import useEventListener from "./useEventListener";
import { closeIcon } from "./icons";

export default function App() {
  const ref = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEventListener(document, "mousedown", handleClick);

  return (
    <section>
      <h1>useEventListener</h1>
      <div style={{ minHeight: "200vh" }}>
        <button className="link" onClick={() => setIsOpen(true)}>
          Click me
        </button>
      </div>
      {isOpen && (
        <dialog ref={ref}>
          <button onClick={() => setIsOpen(false)}>{closeIcon}</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </section>
  );
}

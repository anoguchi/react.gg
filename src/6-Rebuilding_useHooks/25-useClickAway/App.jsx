import "./App.css";
import * as React from "react";
import useClickAway from "./useClickAway";
import { closeIcon } from "./icons";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <section>
        <h1>useClickAway</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
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
    </>
  );
}

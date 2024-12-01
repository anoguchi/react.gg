import "./App.css";
import * as React from "react";
import { closeIcon } from "./icons";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (isOpen === true) {
      const handleEvent = (e) => {
        const element = ref.current;
        if (element && !element.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleEvent);

      return () => {
        document.removeEventListener("pointerdown", handleEvent);
      };
    }
  }, [isOpen]);

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={ref}>
          <button onClick={handleCloseModal}>{closeIcon}</button>
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

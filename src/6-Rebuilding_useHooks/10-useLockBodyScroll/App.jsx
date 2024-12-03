import "./App.css";
import * as React from "react";
import useLockBodyScroll from "./useLockBodyScroll";
import { closeIcon } from "./icons";
import DemoContent from "./DemoContent";

function Modal({ handleClose }) {
  useLockBodyScroll();

  return (
    <>
      <dialog>
        <header>
          <button onClick={handleClose}>{closeIcon}</button>
          <h2>Modal</h2>
        </header>
        <section>
          <DemoContent />
        </section>
      </dialog>
      <div className="overlay" />
    </>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
      <main>
        <header>
          <h1>useLockBodyScroll</h1>
        </header>
        {["red", "blue", "green", "pink", "purple", "yellow"].map((color) => {
          return (
            <section
              key={color}
              style={{
                backgroundColor: `var(--${color})`,
                width: "100%",
                height: "50vh",
              }}
            />
          );
        })}
        <button className="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      </main>
    </>
  );
}

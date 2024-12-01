import * as React from "react";
import Toolbar from "./Toolbar";

export default function App() {
  const white = React.useRef(null);
  const black = React.useRef(null);
  const yellow = React.useRef(null);

  const handleClick = (type) => {
    let ref = null;

    if (type === "white") ref = white;
    if (type === "yellow") ref = yellow;
    if (type === "black") ref = black;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div>
      <Toolbar handleClick={handleClick} />
      <div ref={white} className="white" />
      <div ref={yellow} className="yellow" />
      <div ref={black} className="black" />
    </div>
  );
}

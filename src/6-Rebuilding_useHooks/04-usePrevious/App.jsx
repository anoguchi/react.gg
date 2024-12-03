import "./App.css";
import * as React from "react";
import usePrevious from "./usePrevious";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function App() {
  const [color, setColor] = React.useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  return (
    <section>
      <h1>usePrevious</h1>
      <button className="link" onClick={handleClick}>
        Next
      </button>
      <article>
        <figure>
          <p style={{ background: `var(--${previousColor})` }} />
          <figcaption>Previous: {previousColor}</figcaption>
        </figure>
        <figure>
          <p style={{ background: `var(--${color})` }} />
          <figcaption>Current: {color}</figcaption>
        </figure>
      </article>
    </section>
  );
}

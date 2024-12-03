import "./App.css";
import * as React from "react";

export default function ReactRuler() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(null);

  React.useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.borderBoxSize[0].inlineSize);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      <h1>React Ruler</h1>
      <p>(Resize the ruler)</p>
      <article ref={ref}>
        <label>width: {Math.floor(width)}</label>
      </article>
    </section>
  );
}

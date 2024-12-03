import "./App.css";
import * as React from "react";
import useDocumentTitle from "./useDocumentTitle";

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  useDocumentTitle(`Clicked ${count} times.`);

  return (
    <section>
      <h1>useDocumentTitle</h1>
      <button className="primary" onClick={handleClick}>
        Increment Count: {count}
      </button>

      <p>
        You won't be able to see the changes if you're in a sandbox environment.
        Instead, you'll want to open up the app{" "}
        <a
          className="link"
          href="https://codesandbox.io/s/usedocumenttitle-challenge-qqt4zt?file=/src/useDocumentTitle.js"
          target="_blank"
          rel="noreferrer"
        >
          in a new tab and paste your code into it.
        </a>
        .
      </p>
    </section>
  );
}

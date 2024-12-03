import "./App.css";
import * as React from "react";
import useFavicon from "./useFavicon";

const faviconMap = {
  uidotdev: "https://ui.dev/favicon/favicon-32x32.png",
  bytes: "https://bytes.dev/favicon/favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

export default function App() {
  const [id, setId] = React.useState("uidotdev");

  useFavicon(faviconMap[id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <button
        title="Set the favicon to uidotdev's logo"
        className={`link ${id === "uidotdev" && "active"}`}
        onClick={() => setId("uidotdev")}
      >
        ui.dev
      </button>
      <button
        title="Set the favicon to Bytes' logo"
        className={`link ${id === "bytes" && "active"}`}
        onClick={() => setId("bytes")}
      >
        bytes
      </button>
      <button
        title="Set the favicon to React Newsletter's logo"
        className={`link ${id === "react_newsletter" && "active"}`}
        onClick={() => setId("react_newsletter")}
      >
        react newsletter
      </button>

      <p>
        You won't be able to see the changes if you're in a sandbox environment.
        Instead, you'll want to open up the app{" "}
        <a
          className="link"
          href="https://codesandbox.io/s/usefavicon-challenge-5z9yxg?file=/src/useFavicon.js"
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

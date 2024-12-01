import "./App.css";
import * as React from "react";
import Diagram from "./Diagram";
import ReactLogo from "./ReactLogo";

export default function App() {
  const [active, setActive] = React.useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <div className={`diagram ${active ? "react-approach" : "trad-approach"}`}>
        <Diagram />
        <div className="toggle-diagram">
          <input
            id="toggle"
            className="toggle-input"
            type="checkbox"
            checked={active}
            onChange={handleToggle}
          />
          <label htmlFor="toggle" className="toggle-label">
            <div
              className="toggle-options"
              data-checked="React"
              data-unchecked="Traditional"
            >
              <div className="toggle-switch">
                <span className="toggle-marker">
                  <ReactLogo />
                </span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

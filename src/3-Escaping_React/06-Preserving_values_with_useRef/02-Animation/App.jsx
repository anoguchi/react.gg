import "./App.css";
import * as React from "react";
import Diagram from "./Diagram";
import ReactLogo from "./ReactLogo";

export default function App() {
  const [active, setActive] = React.useState(false);
  const node = React.useRef(null);
  const animating = React.useRef(false);

  React.useEffect(() => {
    const checkAnimations = async () => {
      animating.current = true;
      const animations = node.current.getAnimations({ subtree: true });
      const promises = animations.map((animation) => animation.finished);
      await Promise.all(promises);
      animating.current = false;
    };

    checkAnimations();
  });

  const handleToggle = () => {
    if (animating.current === false) {
      setActive(!active);
    }
  };

  return (
    <div className="container">
      <div
        ref={node}
        className={`diagram ${active ? "react-approach" : "trad-approach"}`}
      >
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

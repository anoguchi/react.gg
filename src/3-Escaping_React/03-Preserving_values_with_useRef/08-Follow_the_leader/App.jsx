import "./App.css";
import * as React from "react";

export default function FollowTheLeader() {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState([0, 0]);

  const handleClick = ({ clientX, clientY }) => {
    const { width, height } = ref.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      <div
        className="box"
        ref={ref}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}

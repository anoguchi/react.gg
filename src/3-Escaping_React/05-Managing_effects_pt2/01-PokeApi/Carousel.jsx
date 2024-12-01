import * as React from "react";

export default function Carousel({ children, onNext, onPrevious }) {
  const [direction, setDirection] = React.useState("forward");

  // We need to use handlePrev and handleNext inside of our effect so we must include them in our deps array. The problem is, unless we use useCallback, their references will be different on ever render which will re-run the effect. useCallback allows us to tell React that we don't want that to happen and React should treat these as always being referentially equal (the same). We'll learn all about useCallback later in the course.
  const handlePrev = React.useCallback(() => {
    setDirection("backward");
    onPrevious();
  }, [onPrevious]);

  const handleNext = React.useCallback(() => {
    setDirection("forward");
    onNext();
  }, [onNext]);

  React.useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "ArrowRight") {
        handleNext();
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handlePrev, handleNext]);

  return (
    <div className="container">
      <div style={{ "--deg": direction === "forward" ? "180deg" : "-180deg" }}>
        {children}
        <div className="button-group">
          <button name="previous" onClick={handlePrev}>
            ←
          </button>
          <button name="next" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

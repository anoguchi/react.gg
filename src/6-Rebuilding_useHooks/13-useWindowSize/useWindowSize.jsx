import * as React from "react";

export default function useWindowSize() {
  const [size, setSize] = React.useState({
    width: null,
    height: null,
  });

  React.useLayoutEffect(() => {
    const handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
}

import * as React from "react";

export default function useToggle(initialValue = true) {
  const [on, setOn] = React.useState(() => {
    if (typeof initialValue === "boolean") {
      return initialValue;
    }

    return Boolean(initialValue);
  });

  const handleToggle = React.useCallback((value) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }

    return setOn((v) => !v);
  }, []);

  return [on, handleToggle];
}

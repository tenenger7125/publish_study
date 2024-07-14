// src/hooks/useCount.jsx
import { useCallback, useState } from "react";
var useCount = (initCount) => {
  const [count, setCount] = useState(initCount);
  const increase = useCallback(() => setCount((prev) => prev + 1), []);
  return {
    count,
    increase
  };
};
var useCount_default = useCount;
export {
  useCount_default as useCount
};

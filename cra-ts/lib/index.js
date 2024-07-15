// src/hooks/useCount.tsx
import { useCallback, useState } from "react";
var useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  return {
    count,
    increment: useCallback(() => setCount((prev) => prev + 1), []),
    decrement: useCallback(() => setCount((prev) => prev - 1), []),
    reset: useCallback(() => setCount(initialCount), [initialCount])
  };
};
var useCount_default = useCount;

// src/hooks/useMap.tsx
import { useState as useState2 } from "react";
var useMap = () => {
  const [map, setMap] = useState2(/* @__PURE__ */ new Map());
  const setItem = (key, value) => setMap((prev) => prev.set(key, value));
  return { map, setItem };
};
var useMap_default = useMap;
export {
  useCount_default as useCount,
  useMap_default as useMap
};

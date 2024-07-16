import { useCallback, useState } from "react";

const useCount = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount);

  return {
    count,
    increment: useCallback(() => setCount(prev => prev + 1), []),
    decrement: useCallback(() => setCount(prev => prev - 1), []),
    reset: useCallback(() => setCount(initialCount), [initialCount]),
  }
};

export default useCount;
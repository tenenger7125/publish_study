import { useCallback, useState } from "react";

const useCount = (initCount) => {
  const [count, setCount] = useState(initCount);

  const increase = useCallback(() => setCount(prev => prev + 1), []);

  return {
    count,
    increase
  }
};

export default useCount;
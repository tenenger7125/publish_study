import { useState } from "react";

const useMap = () => {
  const [map, setMap] = useState(new Map<string, string>());

  const setItem = (key: string, value: string) => setMap(prev => prev.set(key, value))

  return {map, setItem}
};

export default useMap;
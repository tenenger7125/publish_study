import { useCallback, useState } from "react";

const useMap = () => {
  const [map, setMap] = useState(new Map<string, string>());

  const set = useCallback((key: string, value: string) => {
    setMap(prev => {
      const copied = new Map(prev);      
      copied.set(key, value);

      return copied;
    })
  }, [])

  return {
    map,
    set
  }
};

export default useMap;
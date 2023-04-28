import { useState, useEffect } from "react";

import useMounted from "./useMounted";

// There are hook libraries for debounce, I just wanted to show how I would implement that myself
const useDebouncedValue = (value: string, debounceTime: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const isMounted = useMounted();

  useEffect(() => {
    // skip initial side effect
    if (!isMounted) return;

    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => clearTimeout(timeout);
  }, [value, debounceTime, isMounted]);

  return debouncedValue;
};

export default useDebouncedValue;

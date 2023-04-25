import { useRef, useEffect } from "react";

const useMounted = () => {
  const mountedRef = useRef(false);

  // will set to true upon mounting
  useEffect(() => {
    mountedRef.current = true;
  }, []);

  return mountedRef.current;
};

export default useMounted;

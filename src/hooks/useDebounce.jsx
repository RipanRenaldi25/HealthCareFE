import { useEffect, useState } from "react";

export const useDebounce = (query = "", delayInMs = 500) => {
  const [value, setValue] = useState(query || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(query);
    }, delayInMs);
    return () => clearTimeout(timeout);
  }, [query]);

  return value;
};

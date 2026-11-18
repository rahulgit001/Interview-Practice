import { useCallback, useEffect, useRef, useState } from "react";

export default function useLocalStorage(
  key,
  initialValue,
  normalize = (value) => value,
  fallbackKey,
) {
  const dirty = useRef(false);
  const [snapshot, setSnapshot] = useState(() => {
    try {
      const currentValue = window.localStorage.getItem(key);
      const saved = currentValue ?? (fallbackKey ? window.localStorage.getItem(fallbackKey) : null);
      return {
        value: saved === null ? initialValue : normalize(JSON.parse(saved)),
        error: "",
      };
    } catch (error) {
      console.error(`Could not load "${key}" from localStorage.`, error);
      return {
        value: initialValue,
        error: "Saved data could not be read. Changes will be saved after your next update.",
      };
    }
  });

  const setValue = useCallback((nextValue) => {
    dirty.current = true;
    setSnapshot((current) => ({
      ...current,
      value: typeof nextValue === "function" ? nextValue(current.value) : nextValue,
    }));
  }, []);

  useEffect(() => {
    if (snapshot.error && !dirty.current) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(snapshot.value));
      if (snapshot.error) {
        setSnapshot((current) => ({ ...current, error: "" }));
      }
    } catch (error) {
      console.error(`Could not save "${key}" to localStorage.`, error);
      setSnapshot((current) => ({
        ...current,
        error: "Changes are available for this session but could not be saved in this browser.",
      }));
    }
  }, [key, snapshot.error, snapshot.value]);

  return [snapshot.value, setValue, snapshot.error];
}

import { useCallback, useEffect, useState } from "react";
import { usePractice } from "../context/PracticeContext.jsx";

function getSystemTheme() {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function useTheme() {
  const { state, dispatch } = usePractice();
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const theme = state.theme ?? systemTheme;

  useEffect(() => {
    const preference = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!preference) return undefined;

    const updateSystemTheme = (event) => setSystemTheme(event.matches ? "dark" : "light");
    preference.addEventListener("change", updateSystemTheme);
    return () => preference.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    dispatch({ type: "SET_THEME", theme: theme === "dark" ? "light" : "dark" });
  }, [dispatch, theme]);

  return { theme, toggleTheme };
}

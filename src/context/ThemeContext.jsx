import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const THEME_KEY = "urbanvest:theme";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") setTheme(stored);
    } catch (err) {
      setTheme("dark");
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (loaded) {
      localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme, loaded]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme precisa estar dentro de um ThemeProvider");
  return ctx;
}

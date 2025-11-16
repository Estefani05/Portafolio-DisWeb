// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
const KEY = "theme";

const systemTheme = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getInitialTheme = (): "light" | "dark" => {
  const saved = (localStorage.getItem(KEY) as Theme | null) || "system";
  return saved === "system" ? systemTheme() : (saved as "light" | "dark");
};

const applyTheme = (t: "light" | "dark") =>
  document.documentElement.setAttribute("data-theme", t);

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    // guardamos preferencia (light/dark) y aplicamos
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
  }, [theme]);

  const next = theme === "light" ? "dark" : "light";
  const label = theme === "light" ? "Modo oscuro" : "Modo claro";

  return (
    <button
      onClick={() => setTheme(next)}
      className="px-3 py-2 rounded navbar-link"
      title={label}
      aria-label={label}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="w-9 h-9 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  // 1. Start with a neutral state (null or a default)
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 2. Only run client-side logic after mounting
  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(isDarkTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  // 3. Avoid rendering the icons until we know the actual state
  // to prevent a "flicker" of the wrong icon
  if (!mounted) {
    return <div className="h-10 w-10" />; // Empty placeholder with same dimensions
  }

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-foreground hover:bg-divider"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
    >
      {isDark ? (
        <MoonIcon />
      ) : (
        <SunIcon />
      )}
    </button>
  );
}

// Clean up your SVGs into small sub-components for readability
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
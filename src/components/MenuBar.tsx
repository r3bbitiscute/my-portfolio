"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function MenuBar() {
  const pathName = usePathname();

  // Theme for the website
  const [theme, setTheme] = useState<
    "light" | "dark" | "game-light" | "game-dark"
  >();

  // Sun icon (light mode)
  const SunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={24}
      height={24}>
      {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
      <path
        fill="var(--text)"
        d="M210.2 53.9C217.6 50.8 226 51.7 232.7 56.1L320.5 114.3L408.3 56.1C415 51.7 423.4 50.9 430.8 53.9C438.2 56.9 443.4 63.5 445 71.3L465.9 174.5L569.1 195.4C576.9 197 583.5 202.4 586.5 209.7C589.5 217 588.7 225.5 584.3 232.2L526.1 320L584.3 407.8C588.7 414.5 589.5 422.9 586.5 430.3C583.5 437.7 576.9 443.1 569.1 444.6L465.8 465.4L445 568.7C443.4 576.5 438 583.1 430.7 586.1C423.4 589.1 414.9 588.3 408.2 583.9L320.4 525.7L232.6 583.9C225.9 588.3 217.5 589.1 210.1 586.1C202.7 583.1 197.3 576.5 195.8 568.7L175 465.4L71.7 444.5C63.9 442.9 57.3 437.5 54.3 430.2C51.3 422.9 52.1 414.4 56.5 407.7L114.7 320L56.5 232.2C52.1 225.5 51.3 217.1 54.3 209.7C57.3 202.3 63.9 196.9 71.7 195.4L175 174.6L195.9 71.3C197.5 63.5 202.9 56.9 210.2 53.9zM239.6 320C239.6 275.6 275.6 239.6 320 239.6C364.4 239.6 400.4 275.6 400.4 320C400.4 364.4 364.4 400.4 320 400.4C275.6 400.4 239.6 364.4 239.6 320zM448.4 320C448.4 249.1 390.9 191.6 320 191.6C249.1 191.6 191.6 249.1 191.6 320C191.6 390.9 249.1 448.4 320 448.4C390.9 448.4 448.4 390.9 448.4 320z"
      />
    </svg>
  );

  // Moon icon (dark mode)
  const MoonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={24}
      height={24}>
      {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
      <path
        fill="var(--text)"
        d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"
      />
    </svg>
  );

  // Menu Bar List Item
  const menuItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
  ];

  useEffect(() => {
    // Retrieve the theme value from layout.tsx
    const currentTheme = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark";
    setTheme(currentTheme);
  }, []);

  /**
   * Toggle the theme of the page
   */
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    runThemeTransition(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    });
  };

  /**
   * Run a tiny cross-fade when changing theme.
   * Ensures the class is applied BEFORE we flip the data-theme.
   */
  function runThemeTransition(applyTheme: () => void) {
    const root = document.documentElement;
    const DURATION = 250;

    // Add the class to enable transitions
    root.classList.add("theme-transition");

    // Force a layout so the class "sticks" before we change colors
    // (this avoids the no-animation flash)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    root.offsetHeight;

    // Apply the theme change
    applyTheme();

    // Remove the class after transitions finish (use a timer that matches CSS)
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, DURATION);
  }

  return (
    <div className="menu-background">
      <h1 className="menu-title">CHONG KHAI XUEN</h1>
      <div className="menu-list-container">
        {/* Menu Bar */}
        <ul className="menu-list">
          {menuItems.map((page) => (
            <li
              key={page.id}
              className={
                pathName == page.id ? "menu-item active" : "menu-item"
              }></li>
          ))}
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-button menu-item">
              {theme === "dark" ? SunIcon : MoonIcon}
            </button>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          .menu-background {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--bg);
          }

          .menu-title {
            font-size: 40px;
            margin: 0px;
          }

          .menu-list {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0px;
          }

          .menu-item {
            cursor: pointer;
          }

          .menu-item h3 {
            position: relative;
            text-decoration: none;
            font-size: 16px;
          }

          .theme-button {
            background-color: var(--bg);
            color: var(--text);
            padding: 10px;
            border: 2px solid var(--accent);
            border-radius: 25px;
          }

          /* Style for chosen menu item*/
          .menu-item.active h3 {
            color: var(--text-2);
          }

          .menu-item.active h3::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            background: var(--text-2);
          }

          /* Animation for hovered menu item */
          .menu-item:hover h3::after {
            width: 100%;
          }

          .menu-item h3::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0%;
            height: 2px;
            background: var(--bg);
            transition: width 250ms ease;
          }
        `}
      </style>
    </div>
  );
}

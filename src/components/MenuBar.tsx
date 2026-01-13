"use client";

import { useState, useEffect } from "react";

export default function MenuBar() {
  /*
  --------------------
  MARK: State
  --------------------
  */
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("about");

  /*
  --------------------
  MARK: Theme
  --------------------
  */
  const [theme, setTheme] = useState<
    "light" | "dark" | "game-light" | "game-dark"
  >();

  // Sun icon (light mode)
  const SunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className="w-6 h-6"
    >
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
      className="w-6 h-6"
    >
      <path
        fill="var(--text)"
        d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z"
      />
    </svg>
  );

  // Get initial theme from <html data-theme="...">
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark"
      | null;

    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setTheme("light");
    }
  }, []);

  /*
  --------------------
  MARK: Theme transition
  --------------------
  */
  function runThemeTransition(applyTheme: () => void) {
    const root = document.documentElement;
    const DURATION = 250;

    root.classList.add("theme-transition");
    // force reflow
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    root.offsetHeight;

    applyTheme();

    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, DURATION);
  }

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    runThemeTransition(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    });
  };

  /*
  --------------------
  MARK: Menu
  --------------------
  */
  const menuItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Education & Career", id: "education" },
    { name: "Skills", id: "skills" },
  ];

  // MARK: Scroll spy (auto-detect active section on scroll)
  useEffect(() => {
    // get DOM elements for each section
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && visible.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
  --------------------
  MARK: Menu Animation
  --------------------
  */
  // Scroll animation
  useEffect(() => {
    let lastScroll = 0;

    function handleScroll() {
      const current = window.scrollY;

      if (current > lastScroll) {
        // scrolling down - hide the header
        document.querySelector("header")?.classList.add("hide-header");
      } else {
        // scrolling up - show the header
        document.querySelector("header")?.classList.remove("hide-header");
      }

      lastScroll = current;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-(--bg) px-[10vw] py-2">
      {/* Header Bar */}
      <div className="flex flex-1 justify-between items-center w-half">
        <h1 className="text-[clamp(1rem,3vw+0.5rem,4rem)] m-0">
          CHONG KHAI XUEN
        </h1>
        <div className="flex items-center lg:gap-[.5vw] gap-[4vw]">
          {/*
        --------------------
        MARK: Theme Toggle Button
        --------------------
        */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex bg-(--bg) text-(--text) p-2.5 border-solid border-(--text) border-2 rounded-3xl h-12.75 w-12.75 items-center justify-center cursor-pointer"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {theme === "dark" ? SunIcon : MoonIcon}
          </button>

          {/*
        --------------------
        MARK: Burger Menu
        --------------------
        */}
          <button
            className={`lg:opacity-0 lg:pointer-events-none opacity-100 flex flex-col items-center bg-transparent border-transparent transition-opacity duration-300 ${
              isOpen ? "open" : ""
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-0.75 w-6 bg-(--text) rounded-full transition-all duration-300 ease-in-out ${
                  i !== 2 ? "mb-1.25" : ""
                } ${isOpen && i === 0 ? "translate-y-2 -rotate-45" : ""} ${
                  isOpen && i === 1 ? "opacity-0" : ""
                } ${isOpen && i === 2 ? "-translate-y-2 rotate-45" : ""}`}
              />
            ))}
          </button>
        </div>
      </div>

      {/*
      --------------------
      MARK: Navigation List
      --------------------
      */}
      <ul
        className={`flex flex-col lg:flex-row list-none gap-6 lg:gap-[1.5vw] m-0 p-0 
        overflow-hidden transition-all duration-300 ease-in-out w-auto
        ${
          isOpen
            ? "max-h-80 mt-4 opacity-100"
            : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100"
        }`}
      >
        {menuItems.map((page) => (
          <li
            key={page.id}
            className={`group relative flex lg:justify-center justify-start items-center cursor-pointer `}
            onClick={() => {
              const section = document.getElementById(page.id);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              setIsOpen(false); // close burger menu on mobile
            }}
          >
            <h3
              className={`flex justify-center items-center no-underline text-4 m-0 relative ${
                activeId === page.id ? "text-(--text-sec)" : ""
              }`}
            >
              {page.name}
            </h3>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-(--text-sec) transition-all duration-250 ease ${
                activeId === page.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

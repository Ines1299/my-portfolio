import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import type { ThemeName } from "../themes/themes";
import AnimatedName from "./AnimatedName";

const themeOrder: ThemeName[] = ["design", "coding", "crochet"];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs no-underline transition-colors sm:text-sm ${
    isActive
      ? "text-(--color-primary)"
      : "text-black hover:text-(--color-primary)"
  }`;

function Nav() {
  const { theme, setTheme } = useTheme();

  function cycleTheme() {
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  }

  return (
    <>
      <nav className=" relative z-30 grid min-h-24 grid-cols-3 grid-rows-2 items-center bg-white px-4 py-3 sm:px-8 lg:h-20 lg:min-h-0 lg:grid-rows-1 lg:px-12 lg:py-0">
        <div className=" col-span-3 row-start-2 flex w-full items-center justify-between px-2 sm:px-6 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:justify-start lg:gap-6 lg:px-0 ">
          <NavLink to="/#projects" end className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Animated name */}
        <Link
          to="/"
          className="col-start-2 row-start-1 justify-self-center  whitespace-nowrap no-underline lg:fixed lg:left-1/2 lg:top-10 lg:z-50
    lg:-translate-x-1/2 lg:-translate-y-1/2"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          <AnimatedName small />
        </Link>

        <button
          type="button"
          onClick={cycleTheme}
          className="col-start-3 row-start-1 justify-self-end whitespace-nowrap border border-(--color-primary) bg-(--color-light-grey) px-2 py-1 text-xs text-(--color-primary) transition-colors hover:bg(--color-primary) hover:text-white sm:px-4 sm:py-2 sm:text-sm"
          aria-label={`Current theme: ${theme}. Click to switch themes.`}
        >
          Theme
        </button>
      </nav>
    </>
  );
}

export default Nav;

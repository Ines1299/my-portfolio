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
      {/* Main navigation */}
      <nav className=" relative z-30 grid h-20 grid-cols-3 items-center bg-white px-5 sm:px-8 lg:px-12">
        <div className=" flex items-center gap-3 sm:gap-6 ">
          <NavLink to="/" end className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        <div />

        <button
          type="button"
          onClick={cycleTheme}
          className="justify-self-end border border-(--color-primary) bg-(--color-light-grey) px-3 py-1 text-xs text-(--color-primary) transition-colors hoover:bg(--color-primary) hoover:text-white sm:px-4 sm:py-2 sm:text-sm"
          aria-label={`Current theme: ${theme}. Click to switch themes.`}
        >
          Theme
        </button>
      </nav>

      <Link
        to="/"
        className="fixed left-1/2 top-10 z-50 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap no-underline "
        style={{
          color: "var(--color-primary)",
          fontFamily: "var(--font-heading)",
        }}
      >
        <AnimatedName small />
      </Link>
    </>
  );
}

export default Nav;

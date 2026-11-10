import { Link, NavLink } from "react-router-dom";
import AnimatedName from "./AnimatedName";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs no-underline transition-colors sm:text-sm ${
    isActive
      ? "text-(--color-primary)"
      : "text-(--color-text) hover:text-(--color-primary)"
  }`;

function Nav() {
  return (
    <header className="relative">
      <nav className=" relative z-30 grid min-h-24 grid-cols-3 grid-rows-2 items-center bg-(--color-background) px-4 py-3 sm:px-8 lg:h-20 lg:min-h-0 lg:grid-rows-1 lg:px-12 lg:py-0">
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

        <div className="col-start-3 row-start-1 justify-self-end">
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Animated name */}
      <Link
        to="/"
        className="fixed left-1/2 top-5 z-50 -translate-x-1/2 whitespace-nowrap no-underline lg:top-10 lg:-translate-y-1/2"
        style={{
          color: "var(--color-primary)",
          fontFamily: "var(--font-heading)",
        }}
      >
        <AnimatedName small />
      </Link>
    </header>
  );
}

export default Nav;

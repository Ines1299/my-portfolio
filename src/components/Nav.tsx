import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="border-b border-black py-4">
      <div className="container flex items-center gap-8 ">
        <Link
          to="/"
          className="font-bold text-xl text-pink-500 no-underline"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Inês Mota
        </Link>
        <Link
          to="/"
          className="text-black text-sm no-underline hover:text-pink-500 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-black text-sm no-underline hover:text-pink-500 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-black text-sm no-underline hover:text-pink-500 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

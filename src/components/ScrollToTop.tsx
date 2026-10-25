import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let timeout: ReturnType<typeof setTimeout>;
    let attempts = 0;
    let cancelled = false;

    function scrollToSection() {
      if (cancelled) return;

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
        return;
      }

      if (attempts++ < 30) {
        timeout = setTimeout(scrollToSection, 100);
      }
    }

    scrollToSection();

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [pathname, hash, key]);

  return null;
}

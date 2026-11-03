import { SocialIcon } from "react-social-icons";
import { useTheme } from "../contexts/ThemeContext";

import Contact from "./ContactForm";

function Footer() {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

  const socialBg = "#111111";
  const socialFg = isCoding ? "#00FF40" : "#FFFFFF";

  return (
    <footer
      className={`w-full px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-28 ${
        isCoding ? "bg-(--color-primary) text-black" : "bg-[#FFB6D2] text-black"
      }`}
    >
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 ">
        {/*LEFT*/}
        <div className="flex flex-col justify-between">
          <div>
            <h2
              className="mb-6 text-5xl font-light leading-[0.95]  sm:mb-8 sm:text-7xl lg:text-8xl  "
              style={{
                fontFamily: "var(--font-heading) ",
                color: isCoding ? "#000000" : "var(--color-primary)",
              }}
            >
              Get in <br /> Touch!
            </h2>

            <p className="mb-8 max-w-sm text-base leading-relaxed sm:mb-12">
              Open for freelance work, creative and tech positions, or for just
              a chat!
            </p>

            <h3
              className="text-2xl mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                color: isCoding ? "#000000" : "var(--color-primary)",
              }}
            >
              Follow me:
            </h3>

            <div className="flex gap-4">
              <SocialIcon
                url="https://www.instagram.com/i.nesart/"
                bgColor={socialBg}
                fgColor={socialFg}
                style={{ height: 44, width: 44 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/ines-mota-c"
                bgColor={socialBg}
                fgColor={socialFg}
                style={{ height: 44, width: 44 }}
              />
              <SocialIcon
                url="https://github.com/Ines1299"
                bgColor={socialBg}
                fgColor={socialFg}
                style={{ height: 44, width: 44 }}
              />
            </div>
          </div>

          {/* Copyright on desktop */}
          <p className="text-xs text-black/70 mt-16 hidden md:block">
            © Inês Mota {new Date().getFullYear()}
          </p>
        </div>

        {/*Right*/}
        <div className="flex min-w-0 items-center">
          <Contact />
        </div>
        {/* Copyright on mobile */}
        <p className="mt-2 text-xs text-black/70 md:hidden">
          © Inês Mota {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

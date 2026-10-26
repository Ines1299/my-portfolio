import { SocialIcon } from "react-social-icons";

import Contact from "./ContactForm";

function Footer() {
  return (
    <footer className="w-full bg-[#FFB6D2] px-5 py-14 text-black sm:px-10 sm:py-20 lg:px-16 lg:py-28 ">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 ">
        {/*LEFT*/}
        <div className="flex flex-col justify-between">
          <div>
            <h2
              className="mb-6 text-5xl font-light leading-[0.95]  sm:mb-8 sm:text-7xl lg:text-8xl  "
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get in <br /> Touch!
            </h2>

            <p className="mb-8 max-w-sm text-base leading-relaxed sm:mb-12">
              Open for freelance work, creative and tech positions, or for just
              a chat!
            </p>

            <h3
              className="text-2xl mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Follow me:
            </h3>

            <div className="flex gap-4">
              <SocialIcon
                url="https://www.instagram.com/i.nesart/"
                bgColor="#111111"
                fgColor="#FFFFFF"
                style={{ height: 44, width: 44 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/ines-mota-c"
                bgColor="#111111"
                fgColor="#FFFFFF"
                style={{ height: 44, width: 44 }}
              />
              <SocialIcon
                url="https://github.com/Ines1299"
                bgColor="#111111"
                fgColor="#FFFFFF"
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

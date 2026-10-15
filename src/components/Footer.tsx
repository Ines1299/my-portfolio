import { SocialIcon } from "react-social-icons";

import Contact from "./ContactForm";

function Footer() {
  return (
    <footer className="w-full bg-[#FFB6D2] px-6 py-20 text-black sm:px-10 lg:px-16 lg:py-28 ">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24 ">
        {/*LEFT*/}
        <div className="flex flex-col justify-between">
          <div>
            <h2
              className="text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-heading" }}
            >
              Get in <br /> Touch!
            </h2>

            <p className="max-w-sm text-base leading-relaxed mb-12">
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
                url="https://linkedin.com"
                bgColor="#111111"
                fgColor="#FFFFFF"
                style={{ height: 44, width: 44 }}
              />
              <SocialIcon
                url="https://github.com"
                bgColor="#111111"
                fgColor="#FFFFFF"
                style={{ height: 44, width: 44 }}
              />
            </div>
          </div>

          <p className="text-xs text-black/70 mt-16">
            {" "}
            © Inês Mota {new Date().getFullYear()}
          </p>
        </div>

        {/*Right*/}
        <div className="flex items-center">
          <Contact />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

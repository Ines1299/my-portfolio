import { SocialIcon } from "react-social-icons";
import Contact from "./ContactForm";

function Footer() {
  return (
    <footer className="border-t border-black px-8 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 ">
        {/*LEFT*/}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-6xl md:text-7xl font-light leading-none mb-6 ">
              Get in <br /> Touch!
            </h2>

            <p className="max-w-xs text-sm mb-10">
              Open for freelance work, creative and tech positions, or for just
              a chat!{" "}
            </p>

            <h3 className="text-3xl mb-4">Follow me:</h3>

            <div className="flex gap-4">
              <SocialIcon url="https://www.instagram.com/i.nesart/" />
              <SocialIcon url="https://linkedin.com" />
              <SocialIcon url="https://github.com" />
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-12">© Inês Mota 2025</p>
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

import ServiceStar from "../components/ServiceStar";
import { useTheme } from "../contexts/ThemeContext";
import Terminal from "../components/Terminal";

import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const storageURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles";

const postcardURL = `${storageURL}/postcard1.png`;
const computerURL = `${storageURL}/computer.png`;

const services = [
  "Logo design",
  "Social Media",
  "Illustration",
  `Branding & Identity`,
  "Merchandise",
  "Posters",
  "Art DIrection",
  "Packaging",
  "Print Preparation",
];

const contactLinks = [
  {
    label: "inesmcadete@hotmail.com",
    href: "mailto:inesmcadete@hotmail.com",
    icon: FaEnvelope,
  },
  {
    label: "@i.nesart",
    href: "https://www.instagram.com/i.nesart/",
    icon: FaInstagram,
  },
  {
    label: "@inesmota45",
    href: "https://www.tiktok.com/@inesmota45",
    icon: FaTiktok,
  },
  {
    label: "@ines1299",
    href: "https://www.github.com/ines1299",
    icon: FaGithub,
  },
  {
    label: "Ines Mota",
    href: "https://www.linkedin.com/in/ines-mota-c",
    icon: FaLinkedin,
  },
];

function Contact() {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

  return (
    <div className="overflow-x-clip bg-(--color-background)">
      {isCoding /* CODING THEME */ ? (
        <>
          {/* Heading and computer */}
          <section className="mx-auto w-full max-w-300 px-5 pt-12 sm:px-8 lg:pt-16">
            <div className="relative">
              <h1
                className="relative z-10 text-[clamp(5rem,13vw,10rem)] leading-[0.8] text-(--color-primary) lg:absolute lg:left-0 lg:top-0"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let's
                <br />
                Connect
              </h1>

              {/* Retro computer */}
              <div className="relative mx-auto mt-6 w-full max-w-225 lg:mt-16 lg:ml-auto lg:mr-0">
                <img
                  src={computerURL}
                  alt="Retro computer with a green screen"
                  className="block h-auto w-full object-contain"
                />

                {/* Contact links on computer screen - desktop */}
                <div className="absolute left-[33%] top-[23%] hidden w-[38%] flex-col gap-2 lg:flex xl:gap-3 ">
                  {contactLinks.map((contact) => {
                    const Icon = contact.icon;

                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={
                          contact.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          contact.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group flex min-w-0 items-center gap-2 whitespace-nowrap text-black no-underline hover:underline  lg:text-[clamp(0.65rem,1vw,0.90rem)]"
                      >
                        <Icon
                          aria-hidden="true"
                          className="shrink-0 text-[0.9em] transition-transform duration-200 group-hover:scale-110"
                        />

                        <span className="min-w-0 wrap-break-word">
                          {contact.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact links on mobile and tablet */}
              <div className="mx-auto mt-6 w-full max-w-md lg:hidden">
                <Terminal
                  title="contact — terminal"
                  showCommands={false}
                  compact
                >
                  <div className="flex flex-col gap-5 sm:gap-6">
                    {contactLinks.map((contact) => {
                      const Icon = contact.icon;

                      return (
                        <a
                          key={contact.label}
                          href={contact.href}
                          target={
                            contact.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            contact.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="group flex min-w-0 items-center gap-3 text-sm leading-relaxed text-white no-underline hover:text-(--color-primary) sm:text-base"
                        >
                          <Icon
                            aria-hidden="true"
                            className="shrink-0 text-(--color-primary) transition-transform duration-200 group-hover:scale-110"
                          />

                          <span className="min-w-0 wrap-break-word">
                            {contact.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </Terminal>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="relative mx-auto mt-20 w-full max-w-180 px-5 pb-16 sm:mt-24 sm:px-8 sm:pb-28">
            <h2
              className="mb-10 text-center text-4xl text-(--color-primary) sm:mb-14 sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Services
            </h2>

            <div className="mx-auto grid w-full max-w-140 grid-cols-2 gap-3 pb-12 sm:grid-cols-3 sm:gap-3 sm:pb-20">
              {services.map((service) => (
                <ServiceStar key={service} label={service} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Contact heading and postcard */}
          <section className="mx-auto max-w-250 px-5 pt-12 sm:px-8 lg:pt-20">
            <div className="relative ">
              {/* Heading overlapping postcard */}
              <h1 className="relative z-10 mb-0 text-[clamp(3.5rem,12vw,6rem)] leading-none text-(--color-primary) lg:absolute lg:-top-12 lg:left-0 lg:mb-0 lg:whitespace-nowrap lg:text-[clamp(4rem,9vw,8rem)]">
                Let's
                <br />
                Connect
              </h1>

              {/* Postcard image */}
              <div className="relative mx-auto -mt-4 w-[calc(100%+2.5rem)] max-w-none -translate-x-5 sm:-mt-16 sm:w-full sm:max-w-212.5 sm:translate-x-0 lg:mt-0 lg:translate-x-30 lg:-translate-y-20">
                <img
                  src={postcardURL}
                  alt="Vintage postcard with illustrated rabbits"
                  className="block w-full h-auto"
                />
                {/* Contact links */}

                <div className="absolute left-[12%] top-[25%] flex w-[48%] flex-col gap-1 sm:top-[28%] sm:w-[40%] sm:gap-4 lg:top-[35%] lg:gap-5">
                  {contactLinks.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={
                          contact.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          contact.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group flex min-w-0 items-center gap-1 text-[clamp(0.75rem,3vw,1rem)] leading-relaxed text-(--color-secondary) no-underline hover:underline sm:gap-2 sm:text-[clamp(0.85rem,1.7vw,1.25rem)]"
                      >
                        <Icon
                          aria-hidden="true"
                          className="shrink-0 text-[0.9em] transition-transform duration-200 group-hover:scale-110"
                        />

                        <span className="min-w-0 group-hover:underline">
                          {contact.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Services section */}

          <section className="relative mt-12 mx-auto w-full max-w-180 px-5 pb-16 sm:px-8 sm:pb-28 lg:-mt-16">
            {/* Heading */}
            <h2
              className="mb-8 text-center text-4xl sm:mb-12 sm:text-5xl"
              style={{
                color: "var(--color-primary)",
              }}
            >
              Services
            </h2>

            {/* Services grid */}

            <div className="mx-auto grid w-full max-w-140 grid-cols-2 gap-3 pb-12 sm:grid-cols-3 sm:gap-3 sm:pb-20">
              {services.map((service) => (
                <ServiceStar key={service} label={service} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Contact;

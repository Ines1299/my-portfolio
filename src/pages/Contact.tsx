import ServiceStar from "../components/ServiceStar";
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const postcardURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles/postcard1.png";

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
  return (
    <div className="overflow-x-clip bg-white">
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
                      contact.href.startsWith("mailto:") ? undefined : "_blank"
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
    </div>
  );
}

export default Contact;

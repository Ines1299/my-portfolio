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
    <div className="bg-white">
      {/* Contact heading and postcard */}

      <section className="mx-auto max-w-250 px-6  sm:px-8 lg:pt-20">
        <div className="relative ">
          {/* Postcard container */}

          {/* Heading overlapping postcard */}
          <h1
            className="absolute -top-12 left-0 z-10 whitespace-nowrap text-[clamp(4rem,9vw,8rem)] leading-none text-(--color-primary)"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's
            <br />
            Connect
          </h1>

          {/* Postcard image */}
          <div className="relative mx-auto w-full max-w-212.5 translate-x-30 -translate-y-20">
            <img
              src={postcardURL}
              alt="Vintage postcard with illustrated rabbits"
              className="block w-full"
            />
            {/* Contact links */}

            <div className="absolute left-[12%] top-[35%] flex w-[40%] flex-col gap-1 sm:gap-4 lg:gap-5">
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
                    className="group flex items-center gap-2 text-[clamp(0.85rem,1.7vw,1.25rem)] leading-relaxed text-(--color-secondary) no-underline hover:underline"
                  >
                    <Icon
                      aria-hidden="true"
                      className="shrink-0 text-[0.9em] transition-transform duration-200 group-hover:scale-110"
                    />

                    <span className="group-hover:underline">
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

      <section className="relative -mt-16 mx-auto max-w-180 px-6 pb-28 sm:px-8 ">
        {/* Heading */}
        <h2
          className="mb-12 text-center text-5xl"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
          }}
        >
          Services
        </h2>

        {/* Services grid */}

        <div className="mx-auto grid max-w-140 grid-cols-3 gap-2 pb-20 sm:gap-3">
          {services.map((service) => (
            <ServiceStar key={service} label={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;

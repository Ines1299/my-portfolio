const postcardURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles/postcard1.png";

const services = [
  "Logo design",
  "Social Media",
  "Illustration",
  "Branding & Identity",
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
    icon: "",
  },
  { label: "@i.nesart", href: "https://www.instagram.com/i.nesart/", icon: "" },
  {
    label: "@inesmota45",
    href: "https://www.tiktok.com/@inesmota45",
    icon: "",
  },
  { label: "@ines1299", href: "https://github.com/ines1299", icon: "" },
  { label: "Ines Mota", href: "www.linkedin.com/in/ines-mota-c", icon: "" },
];

function Contact() {
  return (
    <div className="bg-white">
      {/* Contact heading and postcard */}

      <section className="mx-auto max-w-300 px-6 pb-10 pt-10 sm:px-8 lg:pt-20">
        <div className="relative mx-auto max-w-262.5">
          {/* Postcard container */}

          <div className="relative mx-auto w-full max-w-212.5">
            {/* Heading overlapping postcard */}
            <h1
              className="absolute -top-6 left-0 z-10 whitespace-nowrap text-[clamp(4rem,9vw,8rem)] leading-[0.85] text-(--color-primary)"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let's
              <br />
              Connect
            </h1>

            {/* Postcard image */}
            <img
              src={postcardURL}
              alt="Vintage postcard with illustrated rabbits"
              className="block w-full"
            />
            {/* Contact links */}

            <div className="absolute left-[12%] top-[30%] flex w-[48%] flex-col gap-3 sm:gap-4 lg:gap-5">
              {contactLinks.map((contact) => (
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
                  className="text-[clamp(0.85rem,1.7vw,1.25rem)] leading-relaxed text-(--color-secondary) no-underline hover:underline"
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}

      <section className="mx-auto max-w-180 px-6 pb-28 sm:px-8 ">
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
        <div className="mx-auto grid max-w-162.5 grid-cols-3 gap-3 sm:gap-5 pb-20">
          {services.map((service) => (
            <div
              key={service}
              className="relative flex aspect-square items-center justify-center "
            >
              {/* Star shape */}
              <div
                className="absolute inset-0 bg-(--color-secondary)"
                style={{
                  clipPath:
                    "polygon(50% 0%, 62% 35%, 100% 35%, 70% 58%, 82% 100%, 50% 75%, 18% 100%, 30% 58%, 0% 35%, 38% 35%)",
                }}
              />
              {/* Text outside clipping area */}
              <span className="relative z-10 w-[90%] text-center text-[10px] font-bold leading-tight text-black sm:text-sm">
                {service}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;

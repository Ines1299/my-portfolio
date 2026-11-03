import { useTheme } from "../contexts/ThemeContext";
import Terminal from "./Terminal";

interface CVItem {
  title: string;
  place?: string;
  date: string;
  description?: string;
}

interface Skill {
  label: string;
  value: string;
}

interface Language {
  lang: string;
  level: string;
}

const experience: CVItem[] = [
  {
    title: "Freelance Designer",
    place: "",
    date: "2020 – Present",
    description:
      "Ongoing practice spanning music, publishing and hospitality. Designed album and six single covers for indie band Sourface, produced a brochure for the Japan Report Card on Physical Activity, and designed a cocktail menu for The Oliver Conquest, London.",
  },
  {
    title: "Mentee",
    place: "Here I Am Studio Ltd, London",
    date: "2024 – Present",
    description:
      "Mentorship with a B Corp-certified inclusive systems design agency working at the intersection of ethics, technology and social impact. Deepened understanding of ethical considerations in design and AI.",
  },
  {
    title: "Exhibition Curator",
    place: "London College of Communication",
    date: "2024",
    description:
      "Curated two large-scale exhibitions managing artwork from 80+ students, designed promotional materials and operated event pop-up shops.",
  },
  {
    title: "Marketing Assistant",
    place: "Kitchen Makeup Ltd, Lisbon",
    date: "2023",
    description:
      "Created social media campaigns across Instagram and TikTok, developed promotional materials and managed weekly newsletters via MailChimp.",
  },
  {
    title: "Content Creator",
    place: "Spiral Galleries, London",
    date: "2023",
    description:
      "Curated and produced monthly social media content spotlighting emerging artists.",
  },
  {
    title: "Gallery Assistant",
    place: "Brick Lane Gallery, London",
    date: "2022",
    description:
      "Managed outreach and exhibition inquiries, assisted in curating and installing exhibitions.",
  },
];

const education: CVItem[] = [
  {
    title: "Software Development Bootcamp",
    place: "Northcoders, London",
    date: "2025–2026",
  },
  {
    title: "BA Illustration and Visual Media, First Class Honours",
    place: "University of the Arts London, London College of Communication",
    date: "2020–2024",
  },
  {
    title: "A-Levels + Screenprinting/Etching Specialisation",
    place: "Artistic School António Arroio, Lisbon",
    date: "2017–2020",
  },
];

const exhibitions: CVItem[] = [
  {
    title: "In the Making",
    place: "Copeland Gallery, London",
    date: "Feb 2024",
  },
  {
    title: "Final Degree Show",
    place: "London College of Communication",
    date: "June 2024",
  },
  {
    title: "New Blood Festival",
    place: "Protein Studios, London",
    date: "July 2024",
  },
];

const skills: Skill[] = [
  {
    label: "Design",
    value:
      "Adobe CC · Procreate · Figma · Blender · Screen printing · Etching · Risograph · Publication · Branding",
  },
  {
    label: "Development",
    value:
      "JavaScript · TypeScript · React · Node.js · Express · PostgreSQL · React Native · Swift · Jest · HTML · CSS · Tailwind",
  },
  {
    label: "Other",
    value:
      "Paired programming · Agile & SCRUM · Git · Content Creation · Curating",
  },
];

const languages: Language[] = [
  { lang: "English", level: "Fluent" },
  { lang: "Portuguese", level: "Native" },
  { lang: "Spanish", level: "Conversational" },
];

export default function CV() {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

  const headingStyle = {
    fontFamily: "var(--font-heading)",
    color: "var(--color-primary)",
    WebkitTextStroke: isCoding ? "0px" : "1px white",
    paintOrder: "stroke fill" as const,
  };

  const dividerColor = isCoding ? "border-white/30" : "border-black/30";

  const secondaryText = isCoding ? "text-white/70" : "text-black/60";

  const descriptionText = isCoding ? "text-white/80" : "text-black/80";

  const content = (
    <div
      className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20 ${
        isCoding
          ? "text-white"
          : "border-t border-black pt-10 sm:pt-16 text-black"
      }`}
    >
      {/* Left column */}
      <div className="flex min-w-0 flex-col gap-12 sm:gap-16">
        {/*Education*/}

        <section>
          <h2
            className="mb-8 text-2xl sm:mb-10 sm:text-3xl"
            style={headingStyle}
          >
            Education
          </h2>
          {education.map((item) => (
            <div
              key={item.title}
              className={`mb-6 flex items-start justify-between gap-4 border-b pb-6 last:mb-0 last:border-0 ${
                isCoding ? dividerColor : "border-black"
              }`}
            >
              <div className="min-w-0">
                <p className="font-bold text-sm">{item.title}</p>
                {item.place && (
                  <p className={`mt-1 text-xs ${secondaryText}`}>
                    {item.place}
                  </p>
                )}
              </div>

              <span className={`shrink-0 text-right text-xs ${secondaryText}`}>
                {item.date}
              </span>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section>
          <h2
            className="text-2xl mb-8 sm:mb-10 sm:text-3xl"
            style={headingStyle}
          >
            Experience
          </h2>

          {experience.map((item) => (
            <div
              key={item.title}
              className={`mb-6 flex items-start justify-between gap-4 border-b pb-6 last:mb-0 last:border-0 ${dividerColor}`}
            >
              <div className="min-w-0">
                <p className="font-bold text-sm">{item.title}</p>

                {item.place && (
                  <p className={`mt-1 text-xs ${secondaryText}`}>
                    {item.place}
                  </p>
                )}
                {item.description && (
                  <p
                    className={`mt-3 max-w-md text-xs leading-relaxed ${descriptionText}`}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              <span className={`shrink-0 text-right text-xs ${secondaryText}`}>
                {item.date}
              </span>
            </div>
          ))}
        </section>
      </div>

      {/* Right column */}
      <div className="flex min-w-0 flex-col gap-10 sm:gap-14">
        {/* Skills */}
        <section>
          <h2 className="text-2xl sm:text-3xl mb-8" style={headingStyle}>
            Skills
          </h2>

          {skills.map((skill) => (
            <div
              key={skill.label}
              className={`mb-4 border-b pb-4 last:border-b-0 ${
                isCoding ? dividerColor : "border-black"
              }`}
            >
              <p className="text-sm font-bold mb-2">{skill.label}</p>
              <p
                className="text-xs leading-relaxed"
                style={{
                  color: isCoding
                    ? "rgba(255,255,255,0.8)"
                    : "var(--color-grey)",
                }}
              >
                {skill.value}
              </p>
            </div>
          ))}
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl sm:text-3xl mb-8" style={headingStyle}>
            Languages
          </h2>

          {languages.map((item) => (
            <div
              key={item.lang}
              className={`mb-4 flex justify-between gap-4 border-b pb-4 last:mb-0 last:border-0 ${dividerColor}`}
            >
              <p className="min-w-0 text-sm font-bold">{item.lang}</p>
              <p className={`shrink-0 text-right text-xs ${secondaryText}`}>
                {item.level}
              </p>
            </div>
          ))}
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl sm:text-3xl mb-8" style={headingStyle}>
            Interests
          </h2>

          <p
            className="text-xs leading-relaxed"
            style={{
              color: isCoding ? "rgba(255,255,255,0.8)" : "var(--color-grey)",
            }}
          >
            Guitar (12+ years) · Crochet · Horror films · Electronic music ·
            History · Politics · Digital culture
          </p>
        </section>

        {/*Exhibitions*/}
        <section>
          <h2 className="mb-8 text-2xl sm:text-3xl">Exhibitions</h2>
          {exhibitions.map((item) => (
            <div
              key={item.title}
              className={`mb-4 flex items-start justify-between gap-4 border-b pb-4 last:mb-0 last:border-0 ${dividerColor}`}
            >
              <div className="min-w-0">
                <p className="font-bold text-sm">{item.title}</p>

                {item.place && (
                  <p
                    className="mt-1 text-xs"
                    style={{
                      color: isCoding
                        ? "rgba(255,255,255,0.7)"
                        : "var(--color-grey)",
                    }}
                  >
                    {item.place}
                  </p>
                )}
              </div>

              <span className={`shrink-0 text-right text-xs ${secondaryText}`}>
                {item.date}
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  if (isCoding) {
    return (
      <Terminal title="macmini — zsh — 120x30" showCommands={false} compact>
        {content}
      </Terminal>
    );
  }

  return content;
}

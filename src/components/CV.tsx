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

interface ContactItem {
  label: string;
  value: string;
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

const contact: ContactItem[] = [
  { label: "Email", value: "inesmcadete@hotmail.com" },
  { label: "Phone", value: "+44 7895 473 262" },
  { label: "GitHub", value: "github.com/Ines1299" },
  { label: "LinkedIn", value: "linkedin.com/in/ines-mota-c" },
];

export default function CV() {
  return (
    <div className="flex gap-16 items-start mt-5 ml-5 mr-5 mb-5">
      {/* Left column */}
      <div className="flex flex-col gap-16 w-2/3">
        {/*Education*/}

        <div>
          <h2 className="text-4xl font-bold mb-10">Education</h2>
          {education.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-start border-b border-black pb-8 mb-8 last:border-b-0"
            >
              <div>
                <p className="font-bold text-sm">{item.title}</p>
                {item.place && (
                  <p className="text-xs" style={{ color: "var(--color-grey)" }}>
                    {item.place}
                  </p>
                )}
              </div>
              <p
                className="text-xs shrink-0 ml-8"
                style={{ color: "var(--color-grey)" }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Experience</h2>
          {experience.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-start border-b border-black pb-8 mb-8 last:border-b-0"
            >
              <div className="max-w-lg">
                <p className="font-bold text-sm">{item.title}</p>
                {item.place && (
                  <p className="text-xs" style={{ color: "var(--color-grey)" }}>
                    {item.place}
                  </p>
                )}
                {item.description && (
                  <p className="text-xs leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}
              </div>
              <p
                className="text-xs shrink-0 ml-8"
                style={{ color: "var(--color-grey)" }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>

        {/*Exhibitions*/}
        <div>
          <h2 className="text-4xl font-bold mb-10">Exhibitions</h2>
          {exhibitions.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-start border-b border-black pb-8 mb-8 last:border-b-0"
            >
              <div>
                <p className="font-bold text-sm">{item.title}</p>
                {item.place && (
                  <p className="text-xs" style={{ color: "var(--color-grey)" }}>
                    {item.place}
                  </p>
                )}
              </div>
              <p
                className="text-xs shrink-0 ml-8"
                style={{ color: "var(--color-grey)" }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Right column */}
      <div className="w-1/3 flex flex-col gap-12 sticky top-8">
        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          {contact.map((item) => (
            <div
              key={item.label}
              className="flex justify-between border-b border-black pb-3 mb-3 last:border-b-0"
            >
              <p className="text-xs font-bold">{item.label}</p>
              <p className="text-xs" style={{ color: "var(--color-grey)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="border-b border-black pb-4 mb-4 last:border-b-0"
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1">
                {skill.label}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--color-grey)" }}
              >
                {skill.value}
              </p>
            </div>
          ))}
        </div>
        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Languages</h2>
          {languages.map((item) => (
            <div
              key={item.lang}
              className="flex justify-between border-b border-black pb-3 mb-3 last:border-b-0"
            >
              <p className="text-xs font-bold">{item.lang}</p>
              <p className="text-xs" style={{ color: "var(--color-grey)" }}>
                {item.level}
              </p>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Interests</h2>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--color-grey)" }}
          >
            Guitar (12+ years) · Crochet · Horror films · Electronic music ·
            History · Politics · Digital culture
          </p>
        </div>
      </div>
    </div>
  );
}

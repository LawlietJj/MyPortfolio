import { Link } from "react-router-dom";

import northhavenImage from "../components/Projects/northhaven.png";
import clearanceImage from "../components/Projects/clearance system.png";
import campusImage from "../components/Projects/campuusconnect.png";
import autoworldImage from "../components/Projects/auto.png";
import examImage from "../components/Projects/examparser.png";
import skyImage from "../components/Projects/skyimage.png";
import checklosImage from "../components/Projects/checklos.png";
import exoticImage from "../components/Projects/exotic.png";

const githubProfile = "https://github.com/LawlietJj";

const projects = [
  {
    title: "Campus Connect",
    category: "Enterprise",
    subtitle: "Student Management Platform",
    image: campusImage,
    technologies: ["Flutter", "ASP.NET Core", "MySQL"],
    description:
      "A university platform connecting students and administrators through announcements, safety alerts, attendance and academic services.",
    github: githubProfile,
  },

  {
    title: "AutoWorld",
    category: "Web",
    subtitle: "Automotive Marketplace",
    image: autoworldImage,
    technologies: ["PHP", "MySQL", "JavaScript"],
    description:
      "Modern vehicle marketplace with search, specifications and responsive user experience.",
    github: githubProfile,
  },

  {
    title: "Sky Inventory",
    category: "Enterprise",
    subtitle: "Inventory ERP",
    image: skyImage,
    technologies: ["Django", "Azure", "MySQL"],
    description:
      "Inventory and sales management platform with authentication, reporting and cloud deployment.",
    github: githubProfile,
  },

  {
    title: "North Haven",
    category: "Corporate",
    subtitle: "Business Website",
    image: northhavenImage,
    technologies: ["React", "Tailwind", "Framer Motion"],
    description:
      "Premium corporate website designed with a clean enterprise aesthetic.",
    github: githubProfile,
    live: "https://northhaven.com.ng/",
  },

  {
    title: "Exam Parser",
    category: "AI",
    subtitle: "OCR Platform",
    image: examImage,
    technologies: ["React", "PHP", "Gemini AI"],
    description:
      "AI-powered examination parser that converts scanned exams into structured digital content.",
    github: githubProfile,
  },

  {
    title: "Online Clearance",
    category: "University",
    subtitle: "Clearance System",
    image: clearanceImage,
    technologies: ["PHP", "MySQL", "Bootstrap"],
    description:
      "Digital clearance platform for universities with department approvals and workflow tracking.",
    github: githubProfile,
  },

  {
    title: "Checklos",
    category: "E-commerce",
    subtitle: "African Marketplace",
    image: checklosImage,
    technologies: ["TypeScript", "React", "AWS Cloud"],
    description:
      "An e-commerce platform connecting makers of African products with customers around the world.",
    github: githubProfile,
    live: "https://www.checklos.com/products",
  },

  {
    title: "Exotic Collections",
    category: "Retail",
    subtitle: "Kidswear POS & Inventory",
    image: exoticImage,
    technologies: ["MySQL", "React", "Java", "Express", "Node.js", "Hostinger"],
    description:
      "A point-of-sale and inventory system built for a children's clothing business.",
    github: githubProfile,
    live: "https://pos.exoticcollections.com.ng/login",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">

      {/* HEADER */}

      <section className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-sm text-white/40 transition hover:text-white"
        >
          ← Back Home
        </Link>

        <p className="mt-12 text-xs uppercase tracking-[0.35em] text-white/30 sm:mt-16 sm:text-sm">
          Portfolio
        </p>

        <h1 className="mt-5 text-5xl font-light leading-[0.95] sm:text-6xl lg:text-7xl">
          Selected
          <br />
          Projects
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8">
          A collection of software products, enterprise systems,
          AI-powered applications and digital experiences I've designed
          and built over the years.
        </p>

      </section>


      {/* PROJECT GRID */}

      <section className="mx-auto max-w-7xl px-3 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">

        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:gap-10">

          {projects.map((project) => (

            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.02]
                transition-all
                duration-300
                hover:border-white/20
                sm:rounded-[26px]
              "
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-48
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                    sm:h-60
                    lg:h-72
                  "
                />

              </div>


              {/* CONTENT */}

              <div className="p-5 sm:p-7 lg:p-8">

                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-white/30 sm:mb-4 sm:text-xs">
                  {project.category}
                </p>

                <h2 className="text-2xl font-light sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-1 text-sm text-white/45 sm:mt-2 sm:text-base">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55 sm:mt-6 sm:text-base sm:leading-8">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-3
                        py-1.5
                        text-[11px]
                        text-white/60
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* GITHUB */}

                <div className="mt-6 flex gap-6 sm:mt-9">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 transition hover:text-white"
                    >
                      Live Site ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10 md:flex-row lg:px-8">

          <p className="text-sm text-white/25">
            © 2026  James
          </p>

          <Link
            to="/#contact"
            className="text-sm text-white/40 transition hover:text-white"
          >
            Let's build something →
          </Link>

        </div>

      </footer>

    </main>
  );
}

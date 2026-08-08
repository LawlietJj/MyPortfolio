import { motion } from "framer-motion";

const leftTimeline = [
  {
    year: "2023",
    title: "B.Sc Software Engineering",
    company: "Graduate",
    description:
      "Completed a Bachelor's degree in Software Engineering, building a strong foundation in software architecture, algorithms, databases and modern software development.",
  },

  {
    year: "2025–2026",
    title: "Software Engineering Instructor",
    company: "University",
    description:
      "Delivered Software Engineering courses while mentoring students in programming, software design and real-world development practices.",
  },
];

const rightTimeline = [
  {
    year: "2024-2026",
    title: "Software Development Intern",
    company: "Aptech Computer Education",
    description:
      "Worked on real-world software projects while gaining practical experience in frontend, backend and database development.",
  },

  {
    year: "2025–Now",
    title: "Full Stack Developer",
    company: "Independent",

    description:
      "Building enterprise software and AI-powered digital experiences focused on scalability, performance and premium user experiences.",

    projects: [
      "Campus Connect",
      "Sky Inventory ERP",
      "AcePath",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1700px]">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 mt-4 text-sm uppercase tracking-[0.35em] text-white/35 sm:mb-5 sm:mt-8"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
          className="mx-auto mb-10 max-w-4xl text-center text-xl font-light leading-tight sm:mb-14 sm:text-2xl lg:mb-20 lg:text-3xl xl:text-4xl"
        >
          A journey through software engineering,
          education and product development.
        </motion.h2>

        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-28">

          {/* LEFT COLUMN */}

          <div className="relative">

            <div className="absolute left-7.5 top-8 bottom-8 w-px bg-white/10 sm:left-20.5 sm:top-10 sm:bottom-10"></div>
                        {leftTimeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .4 }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                className={`grid grid-cols-[56px_18px_1fr] gap-3 sm:grid-cols-[70px_24px_1fr] sm:gap-6 lg:gap-10 ${
                  index === 0 ? "mb-14 sm:mb-20" : ""
                }`}
              >

                {/* YEAR */}

                <div>

                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/35 sm:text-sm">
                    {item.year}
                  </p>

                </div>

                {/* TIMELINE */}

                <div className="relative flex justify-center">

                  <div
                    className={`
                      absolute
                      w-px
                      bg-white/10
                      left-1/2
                      -translate-x-1/2

                      ${
                        index === 0
                          ? "top-6 bottom-22.5"
                          : "top-22.5 bottom-6"
                      }
                    `}
                  />

                  <div
                    className="
                      relative
                      z-10
                      h-4
                      w-4
                      rounded-full
                      border
                      border-white/20
                      bg-black
                      flex
                      items-center
                      justify-center
                      sm:h-5
                      sm:w-5
                    "
                  >

                    <div className="h-1.5 w-1.5 rounded-full bg-white sm:h-2 sm:w-2"></div>

                  </div>

                </div>

                {/* CONTENT */}

                <div>

                  <h3 className="mb-2 text-2xl font-light sm:text-3xl xl:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mb-4 uppercase tracking-[0.28em] text-[11px] text-white/35 sm:mb-6 sm:text-xs">
                    {item.company}
                  </p>

                  <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* RIGHT COLUMN */}

          <div className="relative">

            <div className="absolute left-7.5 top-8 bottom-8 w-px bg-white/10 sm:left-20.5 sm:top-10 sm:bottom-10"></div>
                        {rightTimeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .4 }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                className={`grid grid-cols-[56px_18px_1fr] gap-3 sm:grid-cols-[70px_24px_1fr] sm:gap-6 lg:gap-10 ${
                  index === 0 ? "mb-14 sm:mb-20" : ""
                }`}
              >

                {/* YEAR */}

                <div>

                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/35 sm:text-sm">
                    {item.year}
                  </p>

                </div>

                {/* TIMELINE */}

                <div className="relative flex justify-center">

                  <div
                    className={`
                      absolute
                      w-px
                      bg-white/10
                      left-1/2
                      -translate-x-1/2

                      ${
                        index === 0
                          ? "top-6 bottom-22.5"
                          : "top-22.5 bottom-6"
                      }
                    `}
                  />

                  <div
                    className="
                      relative
                      z-10
                      h-5
                      w-5
                      rounded-full
                      border
                      border-white/20
                      bg-black
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div className="h-2 w-2 rounded-full bg-white"></div>

                  </div>

                </div>

                {/* CONTENT */}

                <div>

                  <h3 className="mb-2 text-2xl font-light sm:text-3xl xl:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mb-4 uppercase tracking-[0.28em] text-[11px] text-white/35 sm:mb-6 sm:text-xs">
                    {item.company}
                  </p>

                  <p className="mb-6 max-w-xl text-sm leading-7 text-white/55 sm:mb-8 sm:text-base">
                    {item.description}
                  </p>

                  {item.projects && (

                    <div>

                      <p className="mb-4 uppercase tracking-[0.32em] text-[10px] text-white/25 sm:mb-5 sm:text-[11px]">
                        Featured Projects
                      </p>

                      <div className="space-y-4">

                        {item.projects.map((project) => (

                          <div
                            key={project}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              cursor-default
                              sm:gap-5
                            "
                          >

                            <span
                              className="
                                text-white/75
                                group-hover:text-white
                                transition-colors
                              "
                            >
                              {project}
                            </span>

                            <div className="flex-1 h-px bg-white/10 group-hover:bg-white/20 transition-all" />

                          </div>

                        ))}

                      </div>

                    </div>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
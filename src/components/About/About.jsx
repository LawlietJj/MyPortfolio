import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "15+", label: "Technologies" },

];

export default function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto flex min-h-screen  max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mb-8 grid items-center gap-8 sm:gap-10 lg:mb-10 lg:grid-cols-2 lg:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .9 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/40 sm:mb-6">
            About
          </p>

          <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Building digital
            <br />
            products with
            <br />
            precision.
          </h2>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .9, delay: .15 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10"
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/10 pt-8 sm:pt-10 lg:pt-14"
            >
              <h3 className="text-3xl font-light sm:text-4xl lg:text-5xl xl:text-6xl">
                {item.value}
              </h3>

              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/45 sm:mt-3 sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
      <p className="mt-8 text-sm leading-7 text-white/60 sm:mt-10 sm:text-base lg:text-lg lg:leading-8">
            I'm Josiah James, a full-stack developer focused on building
            enterprise software, AI-powered applications and premium digital
            experiences with React, ASP.NET Core, Flutter and modern web
            technologies.I enjoy turning complex ideas into
            scalable products through clean architecture, thoughtful design
            and attention to detail. My goal is to create software that not
            only performs exceptionally well but also leaves a lasting
            impression through its usability and craftsmanship.
      </p>
      <div className="mt-20 relative left-1/2 -translate-x-1/2 w-[94vw] max-w-[1700px] border-t border-white/10 pt-14">

  <p className="uppercase tracking-[0.35em] text-sm text-white/40 mb-14">
    Technologies
  </p>

  <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">

    {/* FRONTEND */}

    <div className="flex gap-8">

      {/* Desktop Label */}

      <div className="hidden lg:flex items-start shrink-0">

        <span
          className="
            text-white/20
            uppercase
            tracking-[0.5em]
            text-xs
            [writing-mode:vertical-rl]
            rotate-180
            select-none
          "
        >
          Frontend
        </span>

      </div>

      <div className="flex-1 lg:border-l lg:border-white/10 lg:pl-8">

        {/* Mobile Label */}

        <h3 className="lg:hidden uppercase tracking-[0.3em] text-white/30 text-xs mb-5">
          Frontend
        </h3>

        <p className="text-white/45 leading-7 mb-8">
          Crafting modern interfaces with responsive layouts.
        </p>

        <div className="flex flex-wrap gap-4">

          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind",
            "Framer Motion",
            "Three.js",
          ].map((item) => (

            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/4

                px-3
                py-1.5
                text-xs

                lg:px-5
                lg:py-2.5
                lg:text-sm

                text-white/70
                hover:border-white/25
                hover:text-white
                transition-all
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>

    {/* BACKEND */}

    <div className="flex gap-8">

      <div className="hidden lg:flex items-start shrink-0">

        <span
          className="
            text-white/20
            uppercase
            tracking-[0.5em]
            text-xs
            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          Backend
        </span>

      </div>

      <div className="flex-1 lg:border-l lg:border-white/10 lg:pl-8">

        <h3 className="lg:hidden uppercase tracking-[0.3em] text-white/30 text-xs mb-5">
          Backend
        </h3>

        <p className="text-white/45 leading-7 mb-8">
          Designing scalable APIs, databases and systems.
        </p>

        <div className="flex flex-wrap gap-4">

          {[
            "ASP.NET Core",
            "C#",
            "Java",
            "Node.js",
            "Express",
            "REST APIs",
            "MySQL",
          ].map((item) => (

            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/3

                px-3
                py-1.5
                text-xs

                lg:px-5
                lg:py-2.5
                lg:text-sm

                text-white/70
                hover:border-white/25
                hover:text-white
                transition-all
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>

    {/* TOOLS */}

    <div className="flex gap-8">

      <div className="hidden lg:flex items-start shrink-0">

        <span
          className="
            text-white/20
            uppercase
            tracking-[0.5em]
            text-xs
            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          Tools
        </span>

      </div>

      <div className="flex-1 lg:border-l lg:border-white/10 lg:pl-8">

        <h3 className="lg:hidden uppercase tracking-[0.3em] text-white/30 text-xs mb-5">
          Tools
        </h3>

        <p className="text-white/45 leading-7 mb-8">
          Productivity, cloud and development workflow tools.
        </p>

        <div className="flex flex-wrap gap-4">

          {[
            "Flutter/Dart",
            "Git",
            "GitHub",
            "Azure",
            "Figma",
            "VS Code",
          ].map((item) => (

            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/3

                px-3
                py-1.5
                text-xs

                lg:px-5
                lg:py-2.5
                lg:text-sm

                text-white/70
                hover:border-white/25
                hover:text-white
                transition-all
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

</div>
    </motion.section>
  );
}
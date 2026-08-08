import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "josiahjames058670@gmail.com",
    href: "mailto:josiahjames058670@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+234 812 345 6789",
    href: "https://wa.me/2348145008115",
  },
  {
    label: "GitHub",
    value: "github.com/JosiahJames",
    href: "https://github.com/repos",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/josiahjames",
    href: "https://www.linkedin.com/in/josiah-james-428b28337?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex h-full w-full max-w-[1700px] flex-col justify-between py-8 sm:py-16 lg:py-24">

        {/* HEADER */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-sm uppercase tracking-[0.35em] text-white/35 sm:mb-8"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Let's build
            <br />
            something exceptional.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .15 }}
            className="mb-4 mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8"
          >
            Whether you're building enterprise software,
            AI-powered products or premium digital experiences,
            I'd love to hear about your next idea.
          </motion.p>

        </div>

        {/* CONTACT */}

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* LEFT */}

          <div className="space-y-4">

            {contacts.map((item) => (

              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 8 }}
                className="group flex w-full flex-col border-b border-white/10 pb-4 transition-all duration-500 hover:border-white/20 sm:w-fit"
              >

                <span
                  className="
                    uppercase
                    tracking-[0.32em]
                    text-[10px]
                    text-white/25
                    mb-2
                  "
                >
                  {item.label}
                </span>

                <div className="flex items-center gap-3">

                  <span
                    className="
                      text-sm
                      sm:text-base
                      xl:text-lg
                      text-white/70
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    {item.value}
                  </span>

                  <span
                    className="
                      opacity-0
                      -translate-x-2
                      text-white/20
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  >
                    ↗
                  </span>

                </div>

              </motion.a>

            ))}

          </div>

          {/* CTA CARD */}

          <motion.a
            href="mailto:josiahjames058670@gmail.com?subject=Let's%20Build%20Something"

            whileHover={{
              y: -6,
              scale: 1.01,
            }}

            whileTap={{
              scale: .99,
            }}

            transition={{
              duration: .35,
            }}

            className="
              group
              relative
              flex
              min-h-65
              sm:min-h-75
              items-center
              justify-center
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/4
              backdrop-blur-2xl
              hover:bg-white/6
              hover:border-white/20
              transition-all
            "
          >

            <div className="absolute inset-0 bg-linear-to-br from-white/3 to-transparent" />

            <div className="relative px-6 py-6 text-center sm:px-10 sm:py-0">

              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/35 sm:mb-5 sm:text-xs">
                Available Worldwide
              </p>

              <h3 className="mb-6 text-2xl font-light leading-tight sm:mb-8 sm:text-3xl xl:text-4xl">
                Have an idea
                <br />
                worth building?
              </h3>

              <p className="mx-auto mb-6 max-w-md text-sm leading-7 text-white/50 sm:mb-8 sm:text-base sm:leading-8">
                Whether it's an AI platform, enterprise software
                or your next startup, I'd love to hear about it.
              </p>

              <p className="mb-4 text-sm text-white/25 sm:mb-5">
                Click anywhere to get in touch
              </p>

              <div className="inline-flex items-center gap-3 text-lg transition-all duration-500 group-hover:gap-7 sm:gap-4 sm:text-xl">

                <span>Let's Talk</span>

                <span className="group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>

              </div>

            </div>

          </motion.a>

        </div>
                {/* FOOTER */}

        <footer className="mt-12 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-white/25 text-sm">
                © 2026 Josiah James
              </p>

              <p className="mt-2 text-white/20 text-sm">
                Full Stack Developer • Software Engineer
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/20 sm:gap-6">

              <span>Nigeria</span>

              <span className="w-1 h-1 rounded-full bg-white/20" />

              <span>Available for Freelance</span>

            </div>

          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <p className="text-white/15 uppercase tracking-[0.22em] text-xs">
              Built with React • Tailwind CSS • Three.js • Framer Motion
            </p>

            <motion.a
              href="#hero"

              whileHover={{
                y: -2,
              }}

              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                uppercase
                tracking-[0.28em]
                text-white/30
                hover:text-white
                transition-all
              "
            >

              <span>
                Back to Top
              </span>

              <span
                className="
                  group-hover:-translate-y-1
                  transition-transform
                  duration-300
                "
              >
                ↑
              </span>

            </motion.a>

          </div>

        </footer>

      </div>

    </section>
  );
}
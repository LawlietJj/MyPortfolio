import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "./navbar.config";

export default function MobileMenu({ theme }) {
const [open, setOpen] = useState(false);
const isDark = theme === "dark";

return (
<>
{/* MENU BUTTON */}

  <button
    type="button"
    onClick={() => setOpen(true)}
    aria-label="Open navigation menu"
    className={`
      flex h-10 w-10 items-center justify-center
      rounded-full border
      backdrop-blur-xl
      transition-all duration-300
      md:hidden

      ${
        isDark
          ? "border-white/10 bg-white/[0.07] text-white hover:bg-white/[0.12]"
          : "border-slate-300/70 bg-white/70 text-slate-800 hover:bg-white"
      }
    `}
  >
    <Menu className="h-5 w-5" />
  </button>


  {/* MOBILE MENU */}

  <AnimatePresence>
    {open && (
      <>
        {/* BACKDROP */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />


        {/* GLASS MENU */}

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.97,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            fixed
            right-4
            top-20
            z-[80]

            w-[calc(100vw-32px)]
            max-w-[300px]

            overflow-hidden
            rounded-[24px]
            border

            backdrop-blur-3xl

            shadow-[0_20px_60px_rgba(0,0,0,0.25)]

            md:hidden

            ${
              isDark
                ? `
                  border-white/10
                  bg-[#11151d]/95
                  text-white
                `
                : `
                  border-slate-300/60
                  bg-white/90
                  text-slate-900
                `
            }
          `}
        >

          {/* GLASS HIGHLIGHT */}

          <div
            className={`
              pointer-events-none
              absolute
              inset-0
              ${
                isDark
                  ? "bg-gradient-to-br from-white/[0.08] via-transparent to-transparent"
                  : "bg-gradient-to-br from-white/50 via-transparent to-transparent"
              }
            `}
          />


          {/* CONTENT */}

          <div className="relative p-4">

            {/* HEADER */}

            <div className="flex items-center justify-between px-2 py-1">

              <p
                className={`
                  text-[10px]
                  uppercase
                  tracking-[0.3em]

                  ${
                    isDark
                      ? "text-white/35"
                      : "text-slate-400"
                  }
                `}
              >
                Menu
              </p>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  hover:rotate-90

                  ${
                    isDark
                      ? "border-white/10 bg-white/[0.06] text-white/70 hover:bg-white/10"
                      : "border-slate-300/60 bg-white/60 text-slate-700 hover:bg-white"
                  }
                `}
              >
                <X className="h-4 w-4" />
              </button>

            </div>


            {/* DIVIDER */}

            <div
              className={`
                my-3
                h-px
                ${
                  isDark
                    ? "bg-white/10"
                    : "bg-slate-900/10"
                }
              `}
            />


            {/* LINKS */}

            <nav className="flex flex-col">

              {navItems.map((item, index) => (

                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}

                  initial={{
                    opacity: 0,
                    x: 10,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    delay: index * 0.04,
                    duration: 0.2,
                  }}

                  className={`
                    group
                    flex
                    items-center
                    justify-between

                    rounded-xl
                    px-3
                    py-3

                    text-sm
                    font-medium

                    transition-all
                    duration-200

                    ${
                      isDark
                        ? "text-white/70 hover:bg-white/[0.07] hover:text-white"
                        : "text-slate-700 hover:bg-black/[0.04] hover:text-slate-950"
                    }
                  `}
                >

                  <span>
                    {item.label}
                  </span>

                  <span
                    className={`
                      translate-x-[-5px]
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-0
                      group-hover:opacity-50
                    `}
                  >
                    →
                  </span>

                </motion.a>

              ))}

            </nav>

          </div>

        </motion.div>
      </>
    )}
  </AnimatePresence>
</>

);
}

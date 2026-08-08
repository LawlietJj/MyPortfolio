import { motion } from "framer-motion";

export default function HeroContent({ theme }) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-2 text-center sm:px-6"
    >
      <h1
        className={`max-w-3xl font-['Space_Grotesk'] text-4xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-slate-900'}`}
      >
        Building software
        <br />
        that solves
        <br />
        real problems.
      </h1>

      <p className={`mt-5 max-w-xl text-sm leading-7 sm:mt-6 sm:text-base ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
        Full-Stack Engineer creating modern web applications,
        enterprise systems and AI-powered solutions.
      </p>

      <button
        className={`mt-8 rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:mt-10 ${isDark ? 'border-white/15 bg-white/10 text-white hover:bg-white hover:text-black' : 'border-slate-300/80 bg-white/70 text-slate-800 hover:bg-slate-900 hover:text-white'}`}
      >
        Let's Talk
      </button>
    </motion.div>
  );
}
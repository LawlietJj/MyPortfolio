import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ theme, onToggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      onClick={onToggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-8 w-16 items-center rounded-full border border-white/15 bg-white/10 px-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-xl transition-all duration-300"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white/90 shadow-lg"
        animate={{ x: isDark ? 0 : 32 }}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-1">
        <Sun size={14} className={isDark ? 'text-slate-400' : 'text-amber-500'} />
        <Moon size={14} className={isDark ? 'text-slate-100' : 'text-slate-500'} />
      </div>
    </motion.button>
  )
}

export default ThemeToggle
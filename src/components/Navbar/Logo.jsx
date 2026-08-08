import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
     <motion.a
      href="#hero"
      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface) transition-all duration-300 hover:scale-105 hover:rotate-3"
      whileHover={{ scale: 1.08, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="font-['Space_Grotesk'] text-sm font-bold tracking-wider">
        JJ
      </span>
    </motion.a>
  )
}

export default Logo
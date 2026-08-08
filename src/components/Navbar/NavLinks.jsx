import React from 'react'
import { motion } from 'framer-motion';
import { navItems } from "./navbar.config";
import ActiveIndicator from "./ActiveIndicator";

const NavLinks = ({ activeSection, theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="hidden md:flex items-center justify-center">
      <div className="flex items-center justify-center gap-1 rounded-full px-1 py-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'page' : undefined}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              className={[
                'relative isolate flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 sm:px-4',
                isActive
                  ? isDark ? 'text-white' : 'text-slate-900'
                  : isDark ? 'text-white/70 hover:text-white' : 'text-slate-700 hover:text-slate-900',
              ].join(' ')}
            >
              {isActive && <ActiveIndicator />}

              <span className="relative z-10 whitespace-nowrap">
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  )
}

export default NavLinks
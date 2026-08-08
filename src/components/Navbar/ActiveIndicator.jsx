import { motion } from "framer-motion";

export default function ActiveIndicator() {
  return (
    <motion.span
      layoutId="active-nav-pill"
      transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.7 }}
      className="absolute inset-0 -z-10 rounded-full border border-white/15 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(15,23,42,0.18)]"
    />
  );
}
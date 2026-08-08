import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionReveal({
    children,
    className = "",
    start = 0.15,
    end = 0.42,
}) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 0.08, 0.2, 0.45, 0.72, 1],
        [900, 720, 420, 180, 50, 0]
    );

    const smoothY = useSpring(y, {
        stiffness: 70,
        damping: 24,
        mass: 3,
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.35, 1],
        [0.96, 0.985, 1]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 1],
        [0.78, 0.95, 1]
    );

    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        [8, 0]
    );

    const radius = useTransform(
        scrollYProgress,
        [0, 1],
        [36, 0]
    );

    return (
        <motion.section
            ref={ref}
            style={{
                y: smoothY,
                scale,
                opacity,
                rotateX,
                borderRadius: radius,
                transformOrigin: "center bottom",
            }}
            className={`relative w-full min-h-screen overflow-hidden snap-start ${className}`.trim()}
        >
            {children}
        </motion.section>
    );

}
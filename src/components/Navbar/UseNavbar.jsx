import { useEffect, useState } from "react";

export default function useNavbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const updateScrolled = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };

    const updateActiveSection = () => {
      let bestSection = "about";
      let bestScore = Number.NEGATIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        const distanceFromTop = Math.abs(rect.top - 120);
        const score = visibleHeight - distanceFromTop * 0.01;

        if (score > bestScore) {
          bestScore = score;
          bestSection = section.id;
        }
      });

      setActiveSection(bestSection);
    };

    updateScrolled();
    updateActiveSection();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        } else {
          updateActiveSection();
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return {
    activeSection,
    scrolled,
  };
}
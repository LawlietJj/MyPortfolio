import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import SectionReveal from "../components/SectionReveal";

export default function Home({ theme, setTheme }) {
  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />

      <main className="relative transition-colors duration-500">
        <Hero theme={theme} />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
    </>
  );
}
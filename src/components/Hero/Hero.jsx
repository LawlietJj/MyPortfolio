import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";

export default function Hero({ theme }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <HeroBackground theme={theme} />
      <HeroContent theme={theme} />
    </section>
  );
}
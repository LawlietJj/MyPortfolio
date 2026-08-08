import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import useNavbar from "./UseNavbar";

export default function Navbar({ theme, onToggleTheme }) {
  const { activeSection, scrolled } = useNavbar();
  const isDark = theme === "dark";

  const navStyle = {
    backgroundColor: scrolled
      ? isDark
        ? "rgba(15, 17, 21, 0.92)"
        : "rgba(255, 250, 242, 0.92)"
      : isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(255, 255, 255, 0.7)",
    borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(15, 17, 21, 0.12)",
    boxShadow: scrolled
      ? "0 10px 40px rgba(0,0,0,0.16)"
      : "0 10px 40px rgba(0,0,0,0.12)",
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        style={navStyle}
        className={`pointer-events-auto mx-auto flex items-center justify-between gap-3 px-3 py-2.5 transition-all duration-300 ease-out sm:px-6 lg:px-8 ${
          scrolled
            ? "mt-0 w-full rounded-none border backdrop-blur-2xl"
            : "mt-3 w-[min(92%,1120px)] rounded-full border backdrop-blur-2xl sm:mt-4"
        }`}
      >
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <div className="flex flex-1 justify-center">
          <NavLinks activeSection={activeSection} theme={theme} />
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <MobileMenu theme={theme} />
        </div>
      </nav>
    </header>
  );
}
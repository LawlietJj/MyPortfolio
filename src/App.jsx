import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectPage";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const isLight = theme === "light";

    root.style.setProperty("--background", isLight ? "#f5f1e8" : "#0f1115");
    root.style.setProperty("--surface", isLight ? "#fdfbf6" : "#171a21");
    root.style.setProperty("--surface-light", isLight ? "#f1ebdf" : "#20242c");
    root.style.setProperty("--text", isLight ? "#161616" : "#f5f5f5");
    root.style.setProperty("--text-secondary", isLight ? "#5b5b5b" : "#a8b0bd");
    root.style.setProperty("--border", isLight ? "rgba(15,17,21,.12)" : "rgba(255,255,255,.12)");
    root.style.setProperty("--accent", isLight ? "#111111" : "#e5e7eb");
    root.style.setProperty("--hero-glow", isLight ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.12)");

    root.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/projects"
        element={<ProjectsPage />}
      />
    </Routes>
  );
}

export default App;
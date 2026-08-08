import { Canvas } from "@react-three/fiber";
import bgTexture from "../../assets/bg texture.avif";
import FlowPlane from "./shaders/FlowPlane";

export default function HeroBackground({ theme }) {
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: isDark ? "linear-gradient(135deg, rgba(15,17,21,0.85), rgba(10,12,16,0.55))" : "linear-gradient(135deg, rgba(255,250,242,0.9), rgba(245,241,232,0.7))" }}
      />

      <img
        src={bgTexture}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 1],
            fov: 50,
          }}
        >
          <FlowPlane />
        </Canvas>
      </div>
    </div>
  );
}
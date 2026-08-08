import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import "./FlowMaterial";

export default function FlowPlane() {
  const material = useRef();

  const { size, mouse } = useThree();

  useEffect(() => {
    if (!material.current) return;

    material.current.uResolution.set(
      size.width,
      size.height
    );
  }, [size]);

  useFrame((state) => {
    if (!material.current) return;

    material.current.uTime = state.clock.elapsedTime;

   material.current.uMouse.x +=
  (mouse.x - material.current.uMouse.x) * 0.05;

    material.current.uMouse.y +=
    (mouse.y - material.current.uMouse.y) * 0.05;
    });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1]} />

      <flowMaterial
        ref={material}
        transparent
      />
    </mesh>
  );
}
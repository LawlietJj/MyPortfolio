import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";

const FlowMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(),
    uMouse: new THREE.Vector2(0.5, 0.5),
  },

  vertexShader,
  fragmentShader
);

extend({ FlowMaterial });

export { FlowMaterial };
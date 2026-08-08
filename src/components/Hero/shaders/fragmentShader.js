import { noise } from "./noise";

export const fragmentShader = /* glsl */`

${noise}

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec2 vUv;

void main(){

    vec2 uv = vUv;

    // Keep aspect ratio
    uv.x *= uResolution.x / uResolution.y;

    // Slow movement
    vec2 flow = vec2(
        uTime * 0.03,
        uTime * 0.02
    );

    // -------- Domain Warp --------

    vec2 q = vec2(
        fbm(uv * 2.0 + flow),
        fbm(uv * 2.0 - flow)
    );

    vec2 r = vec2(
        fbm(uv * 3.0 + q + vec2(1.7,9.2)),
        fbm(uv * 3.0 + q + vec2(8.3,2.8))
    );

    float n = fbm(uv * 4.0 + r);

    // Soft smoke

    float smoke = smoothstep(
        -0.2,
        0.9,
        n
    );

    // Gentle vignette

    float vignette = smoothstep(
        1.2,
        0.2,
        distance(vUv, vec2(0.5))
    );

    smoke *= vignette;

    // Premium monochrome

    vec3 color = mix(

        vec3(0.02),

        vec3(0.92),

        smoke

    );

    gl_FragColor = vec4(

        color,

        smoke * 0.22

    );

}
`;
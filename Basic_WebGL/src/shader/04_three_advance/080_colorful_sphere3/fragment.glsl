precision mediump float;

varying float vDelay;

uniform float uTick;
uniform float uSaturation;
uniform float uLightness;
uniform float uColorTime;
uniform float uColorDelay;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb)

void main() {

  if(distance(gl_PointCoord, vec2(0.5, 0.5)) > 0.5) {
    discard;
  }

  float hue = sin(uTick * uColorTime - vDelay * uColorDelay) * 0.5 + 0.5;
  vec3 rgb = hsl2rgb(hue, uSaturation, uLightness);

  gl_FragColor = vec4(rgb, 1.);
}

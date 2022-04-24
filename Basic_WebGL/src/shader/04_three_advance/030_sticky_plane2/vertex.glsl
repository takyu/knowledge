/**
 * 方法 1
 *
 * 頂点の順番通りに遅延時間を設けていく
 *
 * Part2. position の左上から右下に向かって、対角線上に
 * 遅延時間を設けていく。
 */

precision mediump float;

varying vec2 vUv;
varying float vDelay;

attribute float aDelay;

uniform float uProgress;

#pragma glslify: easeBack = require(glsl-easings/back-in-out)

void main() {
  vUv = uv;
  vDelay = aDelay;

  vec3 pos = position;

  float progress = easeBack(clamp(uProgress * 1.4 - aDelay * 0.3, 0., 1.));
  pos.z += progress * 250.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

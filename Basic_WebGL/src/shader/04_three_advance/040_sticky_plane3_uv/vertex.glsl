/**
 * 方法 2
 *
 * uv を使って遅延時間を設けていく
 *
 * uv までの長さ / uv の最大値となる、左上から右下の対角線の長さ (√2)
 * を用いて、左上からの遅延時間を設けていく。
 */

precision mediump float;

#pragma glslify: easeBack = require(glsl-easings/back-in-out)

varying vec2 vUv;
varying float vDelay;
attribute float aDelay;

uniform float uProgress;

void main() {
  vUv = uv;

  vec3 pos = position;

  float delay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  float x = clamp(uProgress * 1.3 - delay * 0.3, 0., 1.);

  // delay がきちんと渡っているか、fragment の color に渡して確認
  vDelay = delay;

  float progress = easeBack(x);

  pos.z += progress * 250.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

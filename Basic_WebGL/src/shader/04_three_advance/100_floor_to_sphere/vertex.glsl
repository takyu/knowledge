precision mediump float;

#pragma glslify: easeBack = require(glsl-easings/back-in-out)
#pragma glslify: easeExponential = require(glsl-easings/exponential-in-out)

varying float vDelay;
varying vec2 vUv;

// attribute vec3 plane;
attribute vec3 sphere;

uniform float uTick;
uniform float uProgress;

/**
* plane と sphere の座標が、progress の状態によってどちらを取るのか定義
*/
void main() {
  vUv = uv;

  float diagonalDelay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  vDelay = diagonalDelay;

  /* 平面（床）の頂点位置 */
  vec3 p = position;

  /* 球体の頂点位置 */
  vec3 s = sphere;

  /* 平面（床）の波の設定 */
  float wavePlane = sin(uTick * 0.02 - diagonalDelay * 10.);

  /* 球体の波の設定 */
  float waveSphere = sin(uTick * 0.02 - uv.y * 10.);

  /* 平面（床）の波を各 position のベクトルに設定 */
  p.y += wavePlane * 100.;
  p.x += wavePlane * 50.;
  p.z -= wavePlane * 50.;

  /* 球体の波を球体のベクトルに設定 */
  s += normal * waveSphere * 40.;

  float delay = easeExponential(clamp(uProgress * 2. - (1. - uv.y), 0., 1.));

  vec3 pos = mix(p, s, delay);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = 5. * (2000. / -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}

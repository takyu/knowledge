precision mediump float;

varying vec2 vUv;
varying float vDelay;

uniform float uProgress;

void main() {
  vUv = uv;

  vec3 pos = position;

  float delay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));

  vDelay = delay;

  // gl_PointSize :	float ポイントスプライトのサイズ
  gl_PointSize = 50.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

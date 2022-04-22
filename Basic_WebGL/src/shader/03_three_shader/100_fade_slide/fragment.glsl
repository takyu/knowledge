precision mediump float;

#pragma glslify: noise2 = require(glsl-noise/simplex/2d);
#pragma glslify: noise3 = require(glsl-noise/simplex/3d);

varying vec2 vUv;
uniform float uTick;
uniform vec2 uNoiseScale;

uniform sampler2D uTexCurrent;
uniform sampler2D uTexNext;

uniform float uProgress;

void main() {
  float time = uTick * 0.01;

  // ヨコシマのノイズ
  float n = noise3(vec3(vUv.x * uNoiseScale.x, vUv.y * uNoiseScale.y, time));

  vec4 texCurrent = texture(uTexCurrent, vUv);
  vec4 texNext = texture(uTexNext, vUv);

  /**
  * mix(x, y, a)
  *
  * x(1 - a) + ya を常に返す。
  *
  * ここでは、uProgress を 0 で初期化しているために、初めは、texCurrent
  * が表示され、1 になると texNext になる。
  * 途中の値は、線形補完されるために、遷移の途中経過が現れ、fade しているように見える。
  */
  gl_FragColor = mix(texCurrent, texNext, uProgress);
}

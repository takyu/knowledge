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
  /**
  * 時間軸におけるノイズが必要ないので、vec2 を使う
  *
  * また、noise2 で生成される値は、-1 ~ 1 を取る。
  */
  float n = noise2(vec2(vUv.x * uNoiseScale.x, vUv.y * uNoiseScale.y));

  // n => -1 ~ 0
  n = n * 0.5 - 0.5;

  // uProgress は、0 ~ 1 を緩急をつけながら変化して渡ってくる
  n += uProgress;

  // n >= 0.0 で、1.0、n < 0.0 で、0.0
  n = step(0., n);

  vec4 texCurrent = texture(uTexCurrent, vUv);
  vec4 texNext = texture(uTexNext, vUv);

  // n = 1.0 になった時、画像が完全に変更。その途中までは、元の画像のノイズ
  gl_FragColor = mix(texCurrent, texNext, n);
}

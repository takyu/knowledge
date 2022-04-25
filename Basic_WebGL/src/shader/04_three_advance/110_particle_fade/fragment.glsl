precision mediump float;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb)

varying float vDelay;
varying vec2 vUv;

uniform sampler2D uTex;

void main() {
  vec4 tex = texture(uTex, vUv);

  /**
  * vDelay は初期状態は 0 で、遅延してわたってくるにつれて 1 になる。
  *
  * → よって、初期状態は透明度を 1 にして表示させておき、遅延して値が 1
  * のものが渡ってきた時に、1 - 1 = 0 になり、透明になる
  */
  gl_FragColor = vec4(tex.rgb, 1. - vDelay);
}

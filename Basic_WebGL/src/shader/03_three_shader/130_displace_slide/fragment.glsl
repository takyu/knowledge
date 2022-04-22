precision mediump float;

#pragma glslify: noise2 = require(glsl-noise/simplex/2d);
#pragma glslify: noise3 = require(glsl-noise/simplex/3d);

varying vec2 vUv;
uniform float uTick;
uniform vec2 uNoiseScale;

uniform sampler2D uTexCurrent;
uniform sampler2D uTexNext;
uniform sampler2D uTexDisp;

uniform float uProgress;

/**
  * parabola(x, gradient)
  *
  * x が、0, 1 の場合は、値が 0 になるようにし、x が 0.5 の場合は、値が 1 になるようにする。
  */
float parabola(float x, float k) {
  return pow(4. * x * (1. - x), k);
}

void main() {

  vec4 texDisp = texture(uTexDisp, vUv);

  // 変化させたい場所の色をとる
  float disp = texDisp.r;
  // float disp = texDisp.b;
  // float disp = 1. - texDisp.b;

  disp *= parabola(uProgress, 0.5);

  // vec4 texCurrent = texture(uTexCurrent, vUv + disp);
  // vec4 texNext = texture(uTexNext, vUv + disp);

  /**
  * 上のコードだと、x軸、y軸共に動いてしまうために、斜めに遷移してしまうように見える
  *
  * → 縦方向にだけ遷移させたい場合は、y軸のみに disp を足してあげる
  */
  vec2 dispUv = vec2(vUv.x, vUv.y + disp);

  // 新しい画像に切り替わる際は、上から遷移するようにする
  vec2 dispUv2 = vec2(vUv.x, vUv.y - disp);

  vec4 texCurrent = texture(uTexCurrent, dispUv);
  vec4 texNext = texture(uTexNext, dispUv2);

  gl_FragColor = mix(texCurrent, texNext, uProgress);

}

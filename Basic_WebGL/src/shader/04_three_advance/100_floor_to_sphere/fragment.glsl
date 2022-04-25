precision mediump float;

varying float vDelay;
varying vec2 vUv;

uniform float uTick;
uniform float uProgress;
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

  /* 平面の時に円になるように透明度を設定 */

  /**
  * 中心からの距離を測る
  *
  * ベクトルから、スカラー値を引いているので、vUv - vec2(0.5, 0.5) と同じ
  *
  * length(vUv - 0.5) は物体の中心からの距離を測っている。
  * y軸方向で考えた時、距離が一番長いのは、中心から端っこつまり 0.5
  *
  * 端の要素は、0.5 - length(vUv - 0.5) = 0.5 - 0.5 = 0 のために透明度が 0 になり、
  * 中心に近ければ近いほど、距離は、0 になり、0.5 - length(vUv - 0.5) = 0.5 となり、
  * 透明度が 0.5 となる。
  */
  float planeAlpha = 0.5 - length(vUv - 0.5);

  // 各地点の透明度を 2倍に
  planeAlpha *= 2.;

  /* sphere になった時は、全ての地点の要素の透明度を 1 に */
  float sphereAlpha = 1.;

  // uProgress が 1未満の場合は、planeAlpha, 1以上の場合は sphereAlpha を適用
  float alpha = mix(planeAlpha, sphereAlpha, uProgress);

  gl_FragColor = vec4(rgb, alpha);
}

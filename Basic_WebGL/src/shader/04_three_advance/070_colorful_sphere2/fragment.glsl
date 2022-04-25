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
  // vec4 tex = vec4(uTex, gl_PointCoord);

  /**
  * 増加していく uTick から、頂点の座標ごとの遅延時間を引いてあげたもの
  * を sin に入れてあげ、0 ~ 1  に調整することで、hue の値が、0 ~ 1 の値を取り、
  * それぞれの座標が遅れてカラーリングされていく。
  */
  float hue = sin(uTick * uColorTime - vDelay * uColorDelay) * 0.5 + 0.5;
  vec3 rgb = hsl2rgb(hue, uSaturation, uLightness);

  gl_FragColor = vec4(rgb, 1.);
}

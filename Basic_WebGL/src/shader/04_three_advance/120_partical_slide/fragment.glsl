/**
* 小数点の計算をどれだけ細かく演算するか設定
*
* lowp → mediump → highp の順番で演算が細かくなるが、同時に負荷が大きいため
* パフォーマンスが悪くなる。
*/
precision lowp float;

varying float vAlpha;
varying vec2 vUv;
varying float vProgress;

uniform sampler2D uTexCurrent;
uniform sampler2D uTexNext;
uniform float uProgress;

/**
* uProgress: 0 ~ 1までの値
* vProgress: 0 ~ 1 まで行ってまた 1 ~ 0 の値 に戻る
*/

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb)

void main() {

  // progress が ポイントスプライトの状態に遷移している時のみ、形を丸くする
  if(vProgress > 0.1 && distance(gl_PointCoord, vec2(0.5, 0.5)) > 0.5) {
    discard;
  }

  vec4 texCurrent = texture(uTexCurrent, vUv);
  vec4 texNext = texture(uTexNext, vUv);

  vec4 color = mix(texCurrent, texNext, uProgress);

  // position 毎の透過度を決定
  color.a = vAlpha;

  gl_FragColor = color;
}

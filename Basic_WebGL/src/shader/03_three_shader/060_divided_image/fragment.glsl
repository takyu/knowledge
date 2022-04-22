varying vec2 vUv;

uniform sampler2D uTex;
uniform float uTick;

void main() {
  // amplitude
  const float AMP = 0.1;

  float time = uTick * 0.01;
  vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

  /**
  * fract()
  *
  * 小数点部分だけを切り出す。（ 0.0 ~ 1.0 を繰り返す。）
  *
  * 正の整数をかけることで、周期を狭くしてリピートさせている。
  *
  * 個別に書くと、
  *
  * vec2 fUv = vUv;
  * fUv.x = fract(fUv.x * 4.);
  * fUv.y = fract(fUv.y * 4.);
  *
  * color = texture2D(uTex, fUv);
  */
  // color = texture2D(uTex, fract(vUv * 4.));

  // 画像を伸縮させながらリピート
  vec2 fUv = vUv;
  fUv.x = fract(fUv.x * 4. * (sin(time) * 0.5 + 0.5));
  fUv.y = fract(fUv.y * 4. * (sin(time) * 0.5 + 0.5));

  color = texture2D(uTex, fUv);

  // gl_FragColor = color;

  // 画像の色情報を変更
  vec4 color2 = vec4(1.0);
  color2.rgb = color.rbg;

  gl_FragColor = color2;

}

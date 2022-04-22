varying vec2 vUv;

uniform sampler2D uTex;
uniform float uTick;

void main() {
  float time = uTick * 0.1;

  // amplitude
  const float AMP = 0.1;

  vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

  // texture の各要素の色を取得
  // color.r = texture2D(uTex, vUv).r;
  // color.g = texture2D(uTex, vUv).g;
  // color.b = texture2D(uTex, vUv).b;

  // 取得した色の座標をずらす。
  // color.r = texture2D(uTex, vUv + vec2(-0.1, 0.0)).r;
  // color.g = texture2D(uTex, vUv + vec2(0., -0.1)).g;
  // color.b = texture2D(uTex, vUv).b;

  // vec2 でずらす値を sin(time) 一定間隔ずらす
  color.r = texture2D(uTex, vUv + vec2(AMP * sin(time), 0.)).r;
  color.g = texture2D(uTex, vUv + vec2(0., AMP * sin(time))).g;
  color.b = texture2D(uTex, vUv).b;

  gl_FragColor = color;

}

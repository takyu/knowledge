varying vec2 vUv;

uniform sampler2D uTex;

void main() {

  vec2 p = vUv;
  vec2 center = vec2(0.5 * 2.0, 0.5);

  // アスペクト比を合わせる。今回の planematerial のサイズが、20 * 10 なため
  p.x *= 2.0;

  // center（原点） を texture の真ん中に設定したので、任意の点からの距離を出すために、distance() を使う
  float len = distance(p, center) * 2.0;

  float circle = 1. - smoothstep(.99, 1.0, len);

  vec4 texColor = texture2D(uTex, vUv);

  vec4 color = texColor * circle;

  // 円が描写される所に写真の texture を掛け合わせる
  gl_FragColor = color;
}

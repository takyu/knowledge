varying vec2 vUv;

uniform sampler2D uTex;
uniform float uTick;

void main() {
  float time = uTick * 0.01;
  vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
  vec4 texColor = texture2D(uTex, vUv);

  // color の red に、texture の green の情報の色を代入
  // color.r = texColor.g;

  // 以下同様
  // color.g = texColor.b;
  color.b = texColor.r;

  /**
  * 上記の代入を 1 行で行う。
  */
  // color.rgb = texColor.gbr;

  /**
  * 色を反転
  */
  // color.rgb = 1.0 - texColor.rgb;

  /**
  * 三角関数を用いて色を変遷させてあげる
  */
  color.r = texColor.g * (sin(uTick * 0.01) * 0.5 + 0.5);
  color.g = texColor.b * (cos(uTick * 0.01) * 0.5 + 0.5);

  gl_FragColor = color;

  /**
  * 色情報の値は、0 ~ 1 のみで良いので、
  *
  * sinx * 0.5 ← 振れ幅（振幅）を 1 に。
  * sinx * 0.5 + 0.5 ← y 軸方向に +0.5 で、正の値 0 ~ 1 を取るようにする。
  *
  *
  */
  // gl_FragColor = vec4(sin(uTick * 0.01) * 0.5 + 0.5, 0.0, 0.0, 1.0);
}

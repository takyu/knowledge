/**
 * 定数定義
 *
 * 以下の 2 通りのやり方が存在する
 *
 * #define val_name value
 * const type val_name = value;
 *
 * 違いとしては、define で渡されるのは文字列となるために、
 * 演算の順序が担保されないことがあるので、基本的には const を使う方が安全
 */
precision mediump float;

varying vec3 vVertexColor;
uniform vec3 uColor;

#define PI 3.14
#define PI2 PI * 2.0

void main() {
  const float CPI = 3.14;
  const float CPI2 = CPI * 2.0;

  vec4 color = vec4(0.0, -cos(PI), 0.0, 1.0); // vec4(0.0, 1.0, 0.0, 1.0)
  vec4 color2 = vec4(0.0, sin(CPI / 2.0), 0.0, 1.0); // vec4(0.0, 1.0, 0.0, 1.0)

  /**
  * 演算
  */
  // 1.0 / PI2 = 1.0 / PI * 2.0 = (1.0 / PI) * 2.0 = (1.0 / 3.14) * 2
  vec4 color3 = vec4(0.0, 1.0 / PI2, 0.0, 1.0);

  // 1.0 / CPI2 = 1.0 / (CPI * 2.0) = 1.0 / 6.28
  vec4 color4 = vec4(0.0, 1.0 / CPI2, 0.0, 1.0);

  gl_FragColor = color2;
}

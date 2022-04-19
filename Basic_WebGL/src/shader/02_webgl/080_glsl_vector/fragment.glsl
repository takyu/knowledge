precision mediump float;

varying vec3 vVertexColor;
uniform vec3 uColor;

void main() {
  vec4 v1 = vec4(1.0, 0.0, 0.0, 2.0);
  vec4 v2 = vec4(0.0, 0.0, 1.0, 1.0);

  /*
    全てのベクトルの値が、1.0に
   */
  vec4 v3 = vec4(1.0); // vec4(1.0,1.0,1.0,1.0);

  /*
    vector の一部の値に vector を使用
   */
  vec2 v4 = vec2(0.0);

  vec4 v5 = vec4(1.0, v4, 2.0); // v1
  vec4 v6 = vec4(v4, 1.0, 1.0); // v2

  /*
    scalar value

    ベクトルでない値のこと。
    ベクトル空間においてベクトルを乗算することができる量であり、
    ベクトルの各要素に乗算されていく。
   */
  float floatVal = 0.5;
  vec2 v7 = vec2(0.0, 0.0) + floatVal; // vec2(0.5, 0.5)

  // add vector
  vec4 color = v1 + v2;

  // substract vector
  vec4 color2 = v1 - v2;
  vec4 color3 = v5 - v6;

  // gl_FragColor = vec4(uColor, 1.);
  // gl_FragColor = color;
  gl_FragColor = color3;
}

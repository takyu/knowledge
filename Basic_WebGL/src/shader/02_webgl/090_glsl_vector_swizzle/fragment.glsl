/**
 * swizzle operator
 *
 * ベクトル要素の取得
 * 変数名.{ 下記の指定された文字 } で各要素の値を取得できる
 *
 * 座標 (x, y, z, w)
 * 色 (r, g, b. a)
 * テクスチャ座標 (s, t, p, q)
 */
precision mediump float;

varying vec3 vVertexColor;
uniform vec3 uColor;

void main() {
  vec4 v1 = vec4(0.0, 1.0, 0.5, 1.0);

  // v1.rg = vec2(0.0, 1.0)
  vec4 v2 = vec4(v1.rg, 1.0, 1.0); // v2 = vec4(0.0, 1.0, 1.0, 1.0)

  // v1.rb = vec2(0.0, 0.5)
  vec4 v3 = vec4(v1.rb, 1.0, 1.0); // v2 = vec4(0.0, 0.5, 1.0, 1.0)

  // v1.br = vec2(0.5, 0.0)
  vec4 v4 = vec4(v1.br, 1.0, 1.0); // v2 = vec4(0.5, 0.0, 1.0, 1.0)

  // v1.brr = vec3(0.5, 0.0, 0.0)
  vec4 v5 = vec4(v1.brr, 1.0); // v2 = vec4(0.5, 0.0, 0.0, 1.0)

  // 変数に別のベクトルとして定義可能
  vec2 v6 = v1.rb; // v6 = vec2(0.0, 0.5)
  vec3 v7 = v1.rbg; // v7 = vec3(0.0, 0.5, 1.0)

  // 色情報に対しても、座標の識別子は使えるが、あまりこの使い方は使われない
  vec3 v8 = v1.xzy; // v8 = vec3(0.0, 0.5, 1.0)

  // vertex から渡ってきた vVertexColor の vec2 を適用
  gl_FragColor = vec4(vVertexColor.rg, 0.0, 1.0);
}

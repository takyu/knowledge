precision mediump float;

// vertex から渡ってきた値
varying vec2 vVertexPosition;

uniform vec2 uColor;

void main() {

  vec2 uv = vVertexPosition / 2.0 + 0.5;

  vec4 rgba1 = vec4(.8, .9, .3, 1.);
  vec4 rgba2 = vec4(1., .9, .8, 1.);

  /**
  * genType mix(genType x, genType y, genType a)
  *
  * aの方向（ここでは、x座標）が増えていくにつれて、
  * x -> y に変遷（途中過程は、線形補完される。）
  *
  * 以下の例を用いながら、具体的には、
  * uv.x = 0 の時、
  * rgba1 * 1.0 + rgba2 * 0.0
  *
  * uv.x = 0.5 の時、
  * rgba1 * 0.5 + rgba2 * 0.5
  *
  * uv.x = 1 の時、
  * rgba1 * 0.0 + rgba2 * 1.0
  */
  vec4 color1 = mix(rgba1, rgba2, uv.x);

  /**
  * step 関数を用いて、x座標のある値を境にくっきり色分けさせることも可能
  */
  // uv.x = step(0.4, uv.x);

  vec4 color2 = mix(rgba1, rgba2, uv.x);

  /**
  * step 関数には、二次元座標も入れることも可能
  */
  uv = step(0.3, uv);

  vec4 color3 = vec4(uv, 0.0, 1.);

  /**
  * Component（ベクトルの各要素）を使って、
  * 色を反転させることも可能
  */
  vec4 color4 = vec4(uv.yx, 0.0, 1.);

  gl_FragColor = color4;
}

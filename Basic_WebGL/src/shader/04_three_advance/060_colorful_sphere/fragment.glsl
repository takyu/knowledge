precision mediump float;

varying vec2 vUv;
varying float vDelay;

uniform sampler2D uTex;
uniform float uProgress;

void main() {

  /**
  * 各 Point の四角形を円にしている。
  *
  * gl_PointCoord	: vec2 ポイントスプライト内の座標
  * discard : その部分のベクトルを適用しない（描写しない）
  *
  * 各 Point の色情報において、中心からの距離が 0.5 (uv 座標系で円を描く時の半径)
  * を超えるところを描写しないという意味。
  */
  if(distance(gl_PointCoord, vec2(0.5, 0.5)) > 0.5) {
    discard;
  }
  // vec4 tex = vec4(vDelay, 0., 0., 1.);

  /**
  * 以下、texture をポイントスプライトに反映させたい場合
  */
  // vec4 tex = texture(uTex, vUv);

  // 各 point に対して、texture を貼り付ける
  vec4 tex = texture(uTex, gl_PointCoord);

  // 画像が上下逆さまになっているのを、新たなベクトルを用意して対応
  // vec4 tex = texture(uTex, vec2(gl_PointCoord.x, 1. - gl_PointCoord.y));

  /**
  * どうやって、texture を、下から上に描写させるようにできるのか。
  *
  * https://khronos.org/registry/OpenGL-Refpages/gl4/html/gl_PointCoord.xhtml
  * https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/glPointParameter.xhtml
  */

  gl_FragColor = tex;

}

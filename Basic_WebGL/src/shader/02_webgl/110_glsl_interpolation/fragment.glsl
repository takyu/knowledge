precision mediump float;

// vertex から渡ってきた値
varying vec2 vVertexPosition;

uniform vec2 uColor;

void main() {
  /**
  * vVertexPosition に渡ってくる値は、線形補完をかける際に、
  * (-1, -1) => (1, 1) の値の範囲で渡ってくる。
  *
  * → 負の値は、rgbに渡されるときは、0になるために、線形補完される際は、
  * 負の領域である左下が黒の領域で覆い尽くされてしまう ( 黒: rgb(0, 0, 0) )
  *
  * ゆえに、vVertexPosition で渡ってくる値を、正の数の範囲に変えてやると、
  * 線形補完される際に、左下の一点のみが黒で表され、右上が白で表される
  * といった綺麗なカラーの線形補完を実現できる。
  */

  /**
  * vVertexPosition / 2.0 -> (-0.5, -0.5) => (0.5, 0.5)
  * vVertexPosition / 2.0 + 0.5 -> (0, 0) => (1.0, 1.0)
  */
  vec2 colorTmp = vVertexPosition / 2.0 + 0.5;

  vec4 color = vec4(colorTmp, 0.0, 1.0);
  gl_FragColor = color;
}

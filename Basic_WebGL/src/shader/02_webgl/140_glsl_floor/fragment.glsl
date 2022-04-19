precision mediump float;

// vertex から渡ってきた値
varying vec2 vVertexPosition;

uniform vec2 uColor;

void main() {

  vec2 uv = vVertexPosition / 2.0 + 0.5;

  /**
  * genType floor(genType x)
  *
  * 小数点以下を切り捨て
  */

  /**
  * 以下は、uv * 10. の段階で、0.1 上がると 1 に、すなわち
  * 1 上がると 10 に。
  * その結果を 10 で割ることによって、1 あがると 1 に、しかし、途中段階でも
  * 0.1 上がる毎に 0.1 あげていることを実現している。
  */
  uv = floor(uv * 10.) / 10.;

  vec4 color = vec4(uv, 0.0, 1.0);

  gl_FragColor = color;
}

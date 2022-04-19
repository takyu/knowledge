precision mediump float;

// vertex から渡ってきた値
varying vec2 vVertexPosition;

uniform vec2 uColor;

void main() {

  vec2 p = vVertexPosition * vec2(2.0, 1.0);
  float len = length(p) * 2.0;
  float circle = 1. - smoothstep(.99, 1.0, len);

  // コンテキスト全体をカラフルに
  vec2 uv = vVertexPosition / 2.0 + 0.5;

  // circle が 1 の時は、uv を 1 に、circle が 0 の時は、uv を 0 にする。
  uv *= circle;

  vec4 color = vec4(uv, 0.0, 1.0);

  gl_FragColor = color;
}

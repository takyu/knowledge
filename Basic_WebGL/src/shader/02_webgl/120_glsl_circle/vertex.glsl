precision mediump float;

attribute vec2 aVertexPosition;

// fragment に渡す変数
varying vec2 vVertexPosition;

uniform float uTick;

void main() {
  vVertexPosition = aVertexPosition;

  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}

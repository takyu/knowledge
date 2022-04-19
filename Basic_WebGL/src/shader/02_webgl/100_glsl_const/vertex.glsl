precision mediump float;

attribute vec2 aVertexPosition;
attribute vec3 aVertexColor;
varying vec3 vVertexColor;
uniform float uTick;

void main() {
  vec2 p = aVertexPosition;
  vVertexColor = aVertexColor;

  // vec3 aVertexColor の x,y を取り出し、vec2 化して代入
  gl_Position = vec4(aVertexColor.xy, 0.0, 1.0);
}

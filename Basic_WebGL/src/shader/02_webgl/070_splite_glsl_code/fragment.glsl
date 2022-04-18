/*
  fragment の場合、拡張子を fs, frag などとすることもできる。
  特に拡張子の決まりがない。。
 */
precision mediump float;

varying vec3 vVertexColor;
uniform vec3 uColor;

void main() {
  gl_FragColor = vec4(uColor, 1.);
}

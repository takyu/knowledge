precision mediump float;

varying vec2 vUv;
varying float vDelay;

uniform sampler2D uTex;
uniform float uProgress;

void main() {

  vec4 tex = texture(uTex, vUv);

  gl_FragColor = tex;

  /**
  * step() を用いて、
  *
  * ・ vDelay < uProgress の場合
  * → 値が、0.0 になり、黒くなっていく
  *
  * ・ vDelay >= uProgress の場合
  * → 値が、1.0 になり、初期の赤のまま
  *
  * uProgress 側たってくるにつれて、左上から変遷しているか確認する事ができる。
  */
  // gl_FragColor = vec4(step(uProgress, vDelay), 0., 0., 1.);
}

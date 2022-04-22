precision mediump float;

#pragma glslify: noise2 = require(glsl-noise/simplex/2d);
#pragma glslify: noise3 = require(glsl-noise/simplex/3d);

varying vec2 vUv;
uniform sampler2D uTex;
uniform float uTick;

void main() {
  float time = uTick * 0.1;

  // 通常のノイズ
  float n = noise2(vUv);

  // ノイズをより細かく → 数値をかけていく
  n = noise2(vUv * 50.);

  // 時間が経つにつれてノイズが細かく
  n = noise2(vUv * time * 0.1);

  // ノイズを移動
  n = noise2(vUv * 10. - time);

  // x方向にノイズを移動
  n = noise2(vec2(vUv.x * 10. - time, vUv.y * 10.));

  // 波のようにノイズを揺らす
  n = noise2(vec2(vUv.x * 100. - sin(vUv.y + time), vUv.y * 10. - sin(vUv.x + time)));

  // 模様を変化させる → 時間軸のみ変更したいので、vec3 を用いて、最後の三つ目の引数に、time を渡している
  n = noise3(vec3(vUv * 10., time * 0.1));

  // ヨコシマのノイズ
  n = noise3(vec3(vUv.x * 10., vUv.y * 50., time * 0.1));

  gl_FragColor = vec4(n, 0., 0., 1.);
}

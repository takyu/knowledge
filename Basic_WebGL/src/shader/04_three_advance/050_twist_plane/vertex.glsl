precision mediump float;

#pragma glslify: easeCubic = require(glsl-easings/cubic-in-out)
#pragma glslify: rotate = require(glsl-rotate)

varying vec2 vUv;
varying float vDelay;
attribute float aDelay;

uniform float uProgress;

const float HALF_PI = 1.570796327;
const float PI = 3.141592653;

void main() {
  vUv = uv;

  vec3 pos = position;

  float delay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  float progress = easeCubic(clamp(uProgress * 1.2 - delay * 0.2, 0., 1.));

  /**
  * 回転した際に、画像が重なって交差しないように、
  * z軸の手前の方向に少しずらしておく。
  *
  * → 回転軸が変わるために重ならないようになる。
  */
  pos.z += 100.;

  // 回転

  /**
  * x, y, z 軸に関して、それぞれベクトルで回転量を定義
  */
  vec3 axis = vec3(1.0, 1.0, 1.0);

  // 1 / 4 回転
  // pos = rotate(pos, axis, HALF_PI * progress);

  // 1 / 2 回転
  // pos = rotate(pos, axis, PI * progress);

  // 1 回転
  pos = rotate(pos, axis, 2. * PI * progress); // 遅延あり
  // pos = rotate(pos, axis, 2. * PI * uProgress); // 遅延なし

  // 回転後に、画像を手前にして、拡大させるように見せる
  pos.z += progress * 400.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

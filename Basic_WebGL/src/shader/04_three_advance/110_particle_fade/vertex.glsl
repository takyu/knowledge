precision mediump float;

#pragma glslify: easeExponential = require(glsl-easings/exponential-in-out)
#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

varying float vDelay;
varying vec2 vUv;

uniform float uTick;
uniform float uProgress;

void main() {
  vUv = uv;

  float diagonalDelay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));

  vec3 pos = position;

  /**
  * アニメーション時に、各方面に ひとつ一つの position を散らばらせる
  *
  * noiseによって乱数を発生させ（ 0 ~ 1 の乱数に調整している）、
  * その値を、xyz軸の position の行列に足し合わせていく
  *
  * ・なるべく細かいノイズを表現したいために、snoise3 に入れる数を大きくしたい
  *
  *  → uv 座標ではなく、position 座標を用いている
  *
  * ・ uTick * 0.01 で、ノイズの位置をランダムに変化させている
  */
  float n = snoise3(vec3(position.xy, uTick * 0.01)) * 0.5 + 0.5;

  // 左斜め上から遅延を入れていく
  float delay = easeExponential(clamp(uProgress * 2. - diagonalDelay, 0., 1.));

  // ノイズ発生後の散らばりで、透明にさせるために、同タイミングの遅延を fragment に渡す
  vDelay = delay;

  // 各ポジションに対して、ノイズと遅延を足し合わせる
  pos.x += 100. * n * delay;
  pos.y += 100. * n * delay;
  pos.z += 200. * n * delay;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = 5. * (800. / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}

precision mediump float;

#pragma glslify: easeBack = require(glsl-easings/back-in-out)

varying float vDelay;

// attribute vec3 plane;
attribute vec3 sphere;

uniform float uProgress;

/**
* plane と sphere の座標が、progress の状態によってどちらを取るのか定義
*/
void main() {
  vec3 pos = position;

  float diagonalDelay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  vDelay = diagonalDelay;

  /**
  * ・上から下に変遷させたいために、( 1 - uv.y ) で、y 座標 1 の方から変遷
  *
  * ・上から変遷させていく時に、下の方の状態がすぐ変わってくのを防ぐために、遅延時間
  * delay を大きくする
  *
  * → 引かれる方の uProgress の方の数字を大きくする。
  */
  // float delay = easeBack(clamp(uProgress * 1.3 - (1. - uv.y) * 0.3, 0., 1.));
  float delay = easeBack(clamp(uProgress * 2. - (1. - uv.y), 0., 1.));

  pos = mix(position, sphere, delay);

  /**
  * PointSize に遠近感を持たせて、手前側の point は大きく、奥側の point は小さくする。
  *
  * Camera は PerspectiveCamera を使って、物体に遠近感を出しているが、
  * ポイントスプライトには、適用されない。
  *
  * → vertex 側で計算して処理する
  */

  /**
  * オブジェクト座標から、視点座標に変換
  *
  * カメラの位置、角度を考慮した座標
  *
  * 以下、camera.position.z = 1000 として説明。
  *
  * オブジェクト座標から配置された後のワールド座標は、
  * 物体が原点 (x, y, 0) になり、カメラの位置は(x, y, 1000)
  *
  * modelViewMatrix により変換された後の視点座標は、
  * カメラが原点 (x, y, 0)になり、物体の位置は(x, y, -1000)
  *
  * → よって、1000 / -mvPosition.z によって、物体の離れ具合を正の数にして、
  * それを、pointsize の一番大きく見える基準にかけている。
  */
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = 7. * (1000. / -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}

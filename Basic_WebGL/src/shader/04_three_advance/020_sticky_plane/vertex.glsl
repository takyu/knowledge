/**
 * 方法 1
 *
 * 頂点の順番通りに遅延時間を設けていく
 *
 * Part1. position の上から下に向かって、遅延時間を設けていく。
 */

precision mediump float;

varying vec2 vUv;
varying float vDelay;

attribute float aDelay;

uniform float uProgress;

/**
* ts 側と shader 側で easing function を使い分ける
*
* → ts 側で適用するのは、全てのシェーダーで単一となるような、uniform の値に適用し、
* shader 側では、各ポジションが異なってシェーダーに渡されるような、attribute 側に適用する。
* （ ts 側では、CPU 処理になるために、直列の処理が得意な単一の処理を渡し、
*    shader 側では、GPU 処理になるために、並列の処理が得意な複数の処理を渡す。）
*/
#pragma glslify: easeBack = require(glsl-easings/back-in-out)

void main() {
  vUv = uv;
  vDelay = aDelay;

  vec3 pos = position;

  /**
  * 1. 初期位置は、z軸 0 で平面上に出しておきたいので、
  * clamp() を使って、0 (初めの uProgress の値、false) - 0 ~ 1 までの値
  * で、0 以下の負の値のところを、0 に均等にする。
  *
  * → 初期位置は、z 軸 0に。
  *
  * 2. uProgress を true に 1 に近づけると、初期位置は aDelay 0 に近いので、position.z
  * が、手前に倒れるが、最後の方は、aDelay が 1 に近づくために、動きがない。
  *
  * → uProgress > aDelay に常になるようにすれば良い（以下では、aDelay * 0.3 をしている）
  *
  * 3. このままだと、position に渡される値に差異が生まれてしまうので、傾斜ができてしまう。
  *
  * → position の開始地点、修了地点共に progress に入る値が、1 を超えると、clamp() により、
  * 1 になるので、uProgress の値を大きくする。（以下では、uProgress * 1.4 をしている）
  *
  * 4. easing-function (緩急をつける時に用いる関数) を glsl 側で適用して、遷移に動きをつける。
  */
  float progress = easeBack(clamp(uProgress * 1.4 - aDelay * 0.3, 0., 1.));
  pos.z += progress * 250.;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

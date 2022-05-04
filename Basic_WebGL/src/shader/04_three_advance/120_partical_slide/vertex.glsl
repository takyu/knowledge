/**
* 小数点の計算をどれだけ細かく演算するか設定
*
* lowp → mediump → highp の順番で演算が細かくなるが、同時に負荷が大きいため
* パフォーマンスが悪くなる。
*/
precision lowp float;

#pragma glslify: exponential = require(glsl-easings/exponential-out)

attribute float aIntensity;

varying float vAlpha;
varying vec2 vUv;
varying float vProgress;

uniform float uProgress;
uniform float uPointSizeRatio;
uniform float uCameraPositionZ;

float parabola(float x, float k) {
  return pow(4. * x * (1. - x), k);
}

void main() {
  vUv = uv;

  // float diagonalDelay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  // vDelay = aIntensity;

  /**
  * uProgress が
  * 0.5 の時に、一番粒が拡散し、
  * 1.0 の時に、次の画像に切り替わる
  *
  * uProgress が 0.5 の時に、pointsize の状態が、1 になるような progress の関数を設定
  * parabola を用いても良い。
  */

  /**
  * 一番右の演算結果を vProgress と progress に代入する
  *
  * → progress が 0 の時は、四角形の ポイントスプライトで表示したいために
  * fragment に条件で渡すため
  */
  float progress = vProgress = 1. - abs(2. * uProgress - 1.);
  // float progress = vProgress = parabola(uProgress, 0.5);

  // easing-function で粒子の速度に緩急をつける
  float speed = exponential(progress);

  /**
  * xyIntensity
  *
  * xy 平面に置いて拡散をどのくらい行うのか
  */
  float xyIntensity = 1000.;

  /**
  * xyDirection
  *
  * uv (-1 ~ 1)の値の範囲によって、-1 ~ 1 の値をとる二次元ベクトル
  * xy 平面のどの方向に粒子が動くのか定義している
  */
  vec2 xyDirection = (uv - 0.5) * 2.0;

  vec3 pos = position;

  /**
  * 手前に寄ってくるポイントスプライトをランダムに配置するために
  * aIntensity（乱数）を使う
  */
  pos.z = speed * aIntensity;

  /**
  * 実際に、渡ってくるそれぞれの position に適用
  *
  * xyDirection -> xy 平面のどの方向に
  * xyIntensity -> xy 平面においてどのくらい拡散させるのか
  * pos.z / cameraZ -> 遠近感を持たせる、手前に寄ってくるほど値を大きくさせる役割
  */
  pos.xy += xyDirection * xyIntensity * pos.z / uCameraPositionZ;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_PointSize = uPointSizeRatio * (uCameraPositionZ / -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;

  /**
  * vAlpha
  *
  * 画像からの距離によって、ポイントスプライトの透過度を変えている。
  */
  vAlpha = mix(0.1, 1.0, -mvPosition.z / uCameraPositionZ);
}

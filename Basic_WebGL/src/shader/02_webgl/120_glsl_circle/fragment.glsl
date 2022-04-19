precision mediump float;

// vertex から渡ってきた値
varying vec2 vVertexPosition;

uniform vec2 uColor;

void main() {

  // 各点までの距離を取得することができる => √(x^2 + y^2)
  float circle = length(vVertexPosition);

  // 原点に近ければ近いほど距離は,0なので黒くなる
  // vec4 color = vec4(circle, 0.0, 0.0, 1.0);

  /**
  * canvas が 300 * 150 の長さで、クリップ座標系における
  * x軸の 1 の割合と、y軸の 1 の割合とが違っているために、
  * 楕円形で描写されてしまう。
  *
  * 300 * 150 の場合、width のクリップ座標系を -2 ~ 2 にすると
  * 割合が合うので、widthの方は2倍してあげる
  */

  /**
  * vec2 p = vVertexPosition;
  *
  * p.x = p.x * 2.0;
  * p.y = p.y * 1.0;
  */
  vec2 p = vVertexPosition * vec2(2.0, 1.0);

  /**
  * 色を反転させる -> 1 - 距離 ( 原点に近いほど赤くする )
  * 距離を大きくすればするほど、赤くなる範囲が小さくなる
  */
  // float rCircle = 1. - length(p);

  // vec4 color = vec4(rCircle, 0.0, 0.0, 1.0);

  // 距離を2倍にして、1 から減算する絶対値を大きくする -> 赤くなる範囲が小さくなる
  float len = length(p) * 2.0;

  /**
  * genType smoothstep(float edge0, float edge1, genType x);
  *
  * x座標の値が、edge0 に達したとき、edge1 になるまで滑らかに上昇
  * x座標が、edge1 に達したとき、その後の y座標の値はずっと 1 に。
  *
  * genType step(float edge, genType x);
  *
  * x座標の値が、edge に達したとき、1になり、その後の y座標の値はずっと 1 に。
  */
  float sCircle = 1. - smoothstep(.99, 1.0, len);

  vec4 color = vec4(sCircle, 0.0, 0.0, 1.0);

  gl_FragColor = color;
}

precision mediump float;

varying float vDelay;

uniform float uTick;
uniform float uScaleTime;
uniform float uScaleDelay;

void main() {
  vec3 pos = position;

  float delay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
  vDelay = delay;

  /**
  * delay に対して、遅延を設けると、斜め方向に伸縮・拡大といった現象が起きる
  *
  * → 縦方向にかける場合は uv.y を掛ける。
  */
  float delta = sin(uTick * uScaleTime - uv.y * uScaleDelay) * 0.5 + 0.5;

  /**
  * normal
  *
  * 球面に対しての法線ベクトル
  *
  * 直行する方向に大きな角度をかけてあげることで、伸縮を表現している。
  */
  pos += 40. * normal * delta;

  // gl_PointSize :	float ポイントスプライトのサイズ
  gl_PointSize = 10. * delta;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

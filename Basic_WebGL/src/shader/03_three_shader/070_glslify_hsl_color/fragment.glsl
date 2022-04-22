varying vec2 vUv;

uniform sampler2D uTex;
uniform float uTick;

/**
* #pargma
*
* 関数として外部モジュールを読み込む。
* glslify の外部モジュールを用いて読み込み、
*
* #pragma glslify: func_name = require(using_module_name)
*
* func_name: using_module_name の関数にソース内で使う名前をつけることができる。
* using_module_name: 使いたいモジュールの名前
*/
#pragma glslify: hsl = require(glsl-hsl2rgb)

/**
* HSL
*
* hsl(hue, saturation, lightness)
*
* hue
* 0～360°の角度の値で指定。
* 角度のため、例えば 500 と指定すると 140 に変換される。
* 以下、n を実数とする。
* 360n = red
* 60 + 360n = yellow
* 120 + 360n = green
* 180 + 360n = cyan
* 240 + 360n = blue
* 300 + 360n = magenta
*
* saturation：彩度
* 0～100%の割合で指定。
* 100％＝純色、0%＝灰色
*
* lightness：輝度
* 0～100%の割合で指定。
* 100% = 白、50％ = 純色、0% = 黒
*（ 明度とは異なるので注意。明度は100% = 純色、0% = 黒 ）
*/
void main() {
  float time = uTick * 0.01;

  // x軸の方向にレインボー
  // vec3 rgb = hsl(vUv.x, 1., 0.5);

  // y軸の方向にレインボー
  // vec3 rgb = hsl(vUv.y, 1., 0.5);

  /**
  * fract を使って、時間経過と共に変遷していく
  *
  * fract に渡されたものは、0 ~ 1 の値を順に取っていくために、
  * その引数を動に変えることによって、色の色相を変えていっている
  */
  vec3 rgb = hsl(fract(vUv.x - time), 1., 0.5);

  vec4 color = vec4(rgb, 1.0);
  gl_FragColor = color;
}

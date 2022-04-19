# GLSL (OpenGL ES2.0)リファレンス

この文章は、日経BP社から出版されている[「HTML5ゲーム開発の極意」](http://ec.nikkeibp.co.jp/item/books/P85130.html)の[付録PDF](http://ec.nikkeibp.co.jp/nsp/dl/08513/HTML5GAMES_AppC.pdf)を元に、参照しやすいようmarkdown形式に書き起こした、個人的メモです。

[WebGL リファレンス](https://gist.github.com/gyohk/afe4d0f6a0a69a329d4e178ced77eecb)

[GLSL (OpenGL ES2.0)リファレンス](https://gist.github.com/gyohk/abf13dbcb5be750b3b021752b280ccd3)

---

##目次

* [データ型](#glsl_datatype)
* [スウィズル演算子](#glsl_swizzle)
* [組み込み関数](#glsl_functions)
    * [数学関数](#glsl_math)
    * [三角関数](#glsl_trigonometric)
    * [ベクトル、行列関数](#glsl_vector)
    * [ベクトルの関係演算](#glsl_vector_rel)
    * [ヘルパー関数](#glsl_helper)
* [組み込み変数と定数](#glsl_params)
    * [定数](#glsl_constant)
    * [頂点シェーダ変数](#glsl_params_vertex)
    * [フラグメントシェーダ変数](#glsl_params_fragment)

---

<a name="glsl_datatype"></a>
### データ型
|  名前                     |      説明     |
|:-------------------------|:-------------|
| void | 関数が戻り値を持たないときや、引数リストが空だということを示すときに使われる特別なデータ型。<br>例：<br>void myFunc(void) {<br>&nbsp;&nbsp; ...<br>} |
| int | 符号付き整数値。<br>例：<br>int myInt1 = 14;<br>int myInt2 = -7;<br> |
| float | 単精度浮動小数点数。<br>例：<br>float myFloat = 3.14159;<br> |
| bool | true、falseの論理値。<br>例：<br>bool myBool = true;<br> |
| vec2、vec3、vec4 | それぞれ2、3、4個の浮動小数点数要素を持つベクトル。<br>例：<br>vec3 myVec = vec3(1.0, 2.5, 0.25); |
| bvec2、bvec3、bvec4 | それぞれ2、3、4個の論理値要素を持つベクトル。<br>例：<br>bvec3 myBoolVec = bvec3(true, false, false); |
| ivec2、ivec3、ivec4 | それぞれ2、3、4個の整数要素を持つベクトル。<br>例：<br>ivec3 myIntVec = ivec3(12, -4, 84); |
| mat2、mat3、mat4 | それぞれ2×2、3×3、4×4の浮動小数点数行列。<br>例：<br>mat2 myMat = mat2(<br>&nbsp;&nbsp;1.0, 0.5,<br>&nbsp;&nbsp;2.7, 1.5<br>); |
| sampler2D | texture2D関数でアクセスできる2DテクスチャのID。<br>例：<br>sampler2D uTexture;<br>vec4 color = texture2D(uTexture, texCoords); |
| samplerCube | textureCube関数でアクセスできるキューブにマッピングされるテクスチャのID。<br>例：<br>samplerCube uSkyMap;<br>vec4 color = textureCube(uSkyMap, texCoords); |

---

<a name="glsl_swizzle"></a>
### スウィズル演算子

vec系の変数に対して、便利にアクセスできる記法。{x,y,z,w}の他、{r,g,b,a}、{s,t,p,q}という書き方も可能。

```
vec4 one = vec4(0.0, 1.0, 2.0, 3.0);
vec2 two = one.xy;                    // vec2(0.0, 1.0)
vec3 three = one.yzw;                 // vec3(1.0, 2.0, 3.0)
vec4 four = one.xyxy;                 // vec4(0.0, 1.0, 0.0, 1.0)
vec3 five = vec3(four.zz, three.z);   // vec3(0.0, 0.0, 3.0)
```

---

<a name="glsl_functions"></a>
### 組み込み関数
ジェネリックなgenType型で宣言された戻り値と引数は、float、vec2、vec3、vec4型にすることができる。

ただし、1つの関数呼び出しで使われるすべてのgenType引数は、みな同じ型でなければならない。

戻り値の型は、引数の型によって決まる。


<a name="glsl_math"></a>
#### 数学関数
|  関数                     |      説明     |
|:-------------------------|:-------------|
| genType pow(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType n```<br>) | xのn乗。<br>例：<br>vec2 result = pow(vec2(2.0, 3.0), vec2(4.0, 5.0));<br>// result == vec2(16.0, 243.0) |
| genType exp(<br>&nbsp;&nbsp;```genType n```<br>) The constant e(2.718...) |定数e（2.718...）のn乗。<br>例：<br>vec2 result = exp(vec2(2.0, 3.0));<br>// result == vec2(7.39, 20.09) |
| genType exp2(<br>&nbsp;&nbsp;```genType n```<br>) |2のn乗。<br>例：<br>vec2 result = exp2(vec2(2.0, 3.0));<br>// result == vec2(4.0, 8.0) |
| genType log(<br>&nbsp;&nbsp;```genType x```<br>) | xの自然対数。<br>例：<br>vec2 result = log(vec2(4.0, 8.0));<br>// result == vec2(1.39, 2.08) |
| genType log2(<br>&nbsp;&nbsp;```genType x```<br>) | xの2を底とする対数。<br>例：<br>vec2 result = log2(vec2(4.0, 8.0));<br>// result == vec2(2.0, 3.0) |
| genType sqrt(<br>&nbsp;&nbsp;```genType x```<br>) | xの平方根。<br>例：<br>vec2 result = sqrt(vec2(9.0, 25.0));<br>// result = vec2(3.0, 5.0) |
| genType inversesqrt(<br>&nbsp;&nbsp;```genType x```<br>) | xの平方根の逆数、つまり1 / sqrt(x)を計算する。<br>例：<br>vec2 result = inversesqrt(vec2(9.0, 25.0));<br>// result = vec2(0.33..., 0.04) |
| genType abs(<br>&nbsp;&nbsp;```genType x```<br>) |xの絶対値。<br>例：<br>vec2 result = abs(vec2(-4.0, 8.0));<br>// result = vec2(4.0, 8.0) |
| genType sign(<br>&nbsp;&nbsp;```genType x```<br>) |xの符号。<br>例：<br>vec2 result = abs(vec2(-4.0, 8.0));<br>// result == vec2(-1.0, 1.0) |
| genType floor(<br>&nbsp;&nbsp;```genType x```<br>) | x以下の最大の整数。<br>例：<br>vec2 result = floor(vec2(2.7, 14.0));<br>// result == vec2(2.0, 14.0) |
| genType ceil(<br>&nbsp;&nbsp;```genType x```<br>) | x以上の最小の整数。<br>例：<br>vec2 result = ceil(vec2(2.7, 14.0));<br>// result == vec2(3.0, 14.0) |
| genType fract(<br>&nbsp;&nbsp;```genType x```<br>) | xの小数部分。<br>例：<br>vec2 result = fract(vec2(2.7, 14.0));<br>// result == vec2(0.7, 0.0) |
| genType mod(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType y```<br>)<br>genType mod(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```float y```<br>) | 除算 x / y の剰余。<br>例：<br>vec2 result = mod(vec2(5.0, 19.5), vec2(2.0, 5.0));<br>// result == vec2(1.0, 4.5)<br>vec2 result = mod(vec2(5.0, 19.5), 2.0);<br>// result == vec2(1.0, 1.5) |
| genType min(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType y```<br>)<br>genType min(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```float y```<br>) | x、yの最小値。<br>例：<br>vec2 result = min(vec2(4.0, 15.5), vec2(2.5, 20.0));<br>// result == vec2(2.5, 15.0)<br>vec2 result = min(vec2(4.0, 15.5), 10.7);<br>// result == vec2(4.0, 10.7) |
| genType max(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType y```<br>)<br>genType max(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```float y```<br>) | x、yの最大値。<br>例：<br>vec2 result = max(vec2(4.0, 15.5), vec2(2.5, 20.0));<br>// result == vec2(4.0, 20.0)<br>vec2 result = max(vec2(4.0, 15.5), 10.7);<br>// result == vec2(10.7, 15.5) |

---

<a name="glsl_trigonometric"></a>
#### 三角関数
|  関数                     |      説明     |
|:-------------------------|:-------------|
| genType radians(<br>&nbsp;&nbsp;```genType degrees```<br>) |ラジアンに変換されたdegrees。<br>radians(degrees) == degrees * π / 180 |
| genType degrees(<br>&nbsp;&nbsp;```genType radians```<br>) | 度に変換されたradians。<br>degrees(radians) == radians * 180 / π |
| genType sin(<br>&nbsp;&nbsp;```genType angle```<br>) | angle（単位ラジアン）の正弦。 |
| genType cos(<br>&nbsp;&nbsp;```genType angle```<br>) | angle（単位ラジアン）の余弦。 |
| genType tan (<br>&nbsp;&nbsp;```genType angle```<br>) | angle（単位ラジアン）の正接。 |
| genType asin(<br>&nbsp;&nbsp;```genType x```<br>) | xの逆正弦。\[-π/2, π/2\]の範囲の値を返す。 |
| genType acos(<br>&nbsp;&nbsp;```genType x```<br>) | xの逆余弦。\[0, π\]の範囲の値を返す。 |
| genType atan(<br>&nbsp;&nbsp;```genType r```<br>) | rの逆正接。\[-π/2, π/2\]の範囲の値を返す。 |
| genType atan(<br>&nbsp;&nbsp;```genType y```,<br>&nbsp;&nbsp;```genType x```<br>) | y/xの逆正接。\[-π, π\]の範囲の値を返す。 |

---

<a name="glsl_vector"></a>
#### ベクトル、行列関数
|  関数                     |      説明     |
|:-------------------------|:-------------|
| float length(<br>&nbsp;&nbsp;```genType v```<br>) | ベクトルvの長さ。<br>length(v) == sqrt(v.x*v.x + v.y*v.y + ...) |
| float distance(<br>&nbsp;&nbsp;```genType p0```,<br>&nbsp;&nbsp;```genType p1```<br>) | 点p0、p1の距離。<br>distance(p0, p1) == length(p1 - p0) |
| float dot(<br>&nbsp;&nbsp;```genType v0```,<br>&nbsp;&nbsp;```genType v1```<br>) | ベクトルv0、v1のドット積。<br>dot(v0, v1) == v0.x*v1.x + v0.y+v1.y + ... |
| vec3 cross(<br>&nbsp;&nbsp;```vec3 v0```,<br>&nbsp;&nbsp;```vec3 v1```<br>) | ベクトルv0、v1のクロス積。<br>cross(v0, v1) == vec3(<br>&nbsp;&nbsp;v0.y * v1.z - v1.y * v0.z,<br>&nbsp;&nbsp;v0.z * v1.x - v1.z * v0.x,<br>&nbsp;&nbsp;v0.x * v1.y - v1.x * v0.y<br>) |
| genType normalize(<br>&nbsp;&nbsp;```genType v```<br>) | 単位長に正規化されたベクトルv。<br>normalize(v) == v / length(v) |
| genType faceforward(<br>&nbsp;&nbsp;```genType N```,<br>&nbsp;&nbsp;```genType I```,<br>&nbsp;&nbsp;```genType Nref```<br>) | サーフェス法線Nrefが生成ベクトルIと反対向きになっているなら、ベクトルNを反転する。<br>if (dot(Nref, I) < 0)<br>&nbsp;&nbsp; return N<br>else<br>&nbsp;&nbsp; return -N |
| genType reflect(<br>&nbsp;&nbsp; ```genType I```,<br>&nbsp;&nbsp; ```genType N```<br>) | 生成ベクトルIが法線Nを持つサーフェスで反射したもの。<br>reflect(I, N) == I - 2 * dot(N, I) * N |
| genType refract(<br>&nbsp;&nbsp;```genType I```,<br>&nbsp;&nbsp;```genType N```,<br>&nbsp;&nbsp;```float eta```<br>) | 生成ベクトルIが屈折率etaで法線Nを持つサーフェスに対して起こす屈折のベクトル。<br>屈折ベクトルは次のようにして計算する。<br>k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I))<br>if (k < 0.0)<br>&nbsp;&nbsp;return genType(0.0)<br>else<br>&nbsp;&nbsp;return eta * I - (eta * dot(N, I) + sqrt(k)) * N |
| mat matrixCompMult(<br>&nbsp;&nbsp;```mat m0```,<br>&nbsp;&nbsp;```mat m1```<br>) | 行列m0、m1の要素ごとの乗算。ここで、matはmat2、mat3、mat4のいずれかである。 |

---

<a name="glsl_vector_rel"></a>
#### ベクトルの関係演算
|  関数                     |      説明     |
|:-------------------------|:-------------|
| bvec lessThan(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br> | v0 < v1の要素ごとの評価。<br>lessThan(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(true, false) |
| bvec lessThanEqual(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br> | v0 <= v1の要素ごとの評価。<br>lessThanEqual(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(true, true)
| bvec greaterThan(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br> | v0 > v1の要素ごとの評価。<br>greaterThan(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(false, false) |
| bvec greaterThanEqual(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br> | v0 >= v1の要素ごとの評価。<br>greaterThanEqual(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(false, true) |
| bvec equal(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br>bvec equal(<br>&nbsp;&nbsp;```bvec v0```,<br>&nbsp;&nbsp;```bvec v1```<br>)<br> | v0 == v1の要素ごとの評価。<br>equal(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(false, true)<br>equal(bvec2(true, false), bvec2(false, false)) == bvec2(false, true) |
| bvec notEqual(<br>&nbsp;&nbsp;```vec v0```,<br>&nbsp;&nbsp;```vec v1```<br>)<br>bvec notEqual(<br>&nbsp;&nbsp;```bvec v0```,<br>&nbsp;&nbsp;```bvec v1```<br>) | v0 != v1の要素ごとの評価。<br>notEqual(vec2(1.0, 2.0), vec2(4.0, 2.0)) == bvec2(true, false)<br>notEqual(bvec2(true, false), bvec2(false, false)) == bvec2(true, false) |
| bool any(<br>&nbsp;&nbsp;```bvec v```<br>) | ベクトルvの任意の要素がtrueならtrue。<br>any(bvec3(false, false, false)) == true<br>any(bvec3(false, true, false)) == true |
| bool all(<br>&nbsp;&nbsp;```bvec v```<br>) | ベクトルvのすべての要素がtrueならtrue。<br>all(bvec3(false, true, false)) == false<br>all(bvec3(true, true, true)) == true |
| bvec not(<br>&nbsp;&nbsp;```bvec v```<br>) | !vの要素ごとの評価。<br>not(bvec2(true, false)) == bvec2(false, true) |

---

<a name="glsl_helper"></a>
#### ヘルパー関数
|  関数                     |      説明     |
|:-------------------------|:-------------|
| genType clamp(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType minVal```,<br>&nbsp;&nbsp;```genType maxVal```<br>)<br>genType clamp(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```float minVal```,<br>&nbsp;&nbsp;```float maxVal```<br>)<br> | xの値を[minVal,maxVal]の範囲、つまりmax(minVal,min(maxVal, x))に制限する。<br>clamp(<br>&nbsp;&nbsp;vec2(0.5, 1.7),<br>&nbsp;&nbsp;vec2(1.0, 1.2),<br>&nbsp;&nbsp;vec2(1.3, 1.5)<br>) == vec2(1.0, 1.5)<br>clamp(vec2(0.5, 1.7), 0.7, 1.3) == vec2(0.7, 1.3) |
| genType mix(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType y```,<br>&nbsp;&nbsp;```genType a```<br>)<br>genType mix(<br>&nbsp;&nbsp;```genType x```,<br>&nbsp;&nbsp;```genType y```,<br>&nbsp;&nbsp;```float a```<br>) | xとyの間の線形補間。<br> mix(x, y, a) == x * (1.0 - a) + y * a |
| genType step(<br>&nbsp;&nbsp;```genType edge```,<br>&nbsp;&nbsp;```genType x```<br>)<br>genType step(<br>&nbsp;&nbsp;```float edge```,<br>&nbsp;&nbsp;```genType x```<br>) | xの要素のうち、edgeよりも小さいものは0.0、そうでないものは1.0にする。 |
| genType smoothstep(<br>&nbsp;&nbsp;```genType edge0```,<br>&nbsp;&nbsp;```genType edge1```,<br>&nbsp;&nbsp;```genType x```<br>)<br>genType smoothstep(<br>&nbsp;&nbsp;```float edge0```,<br>&nbsp;&nbsp;```float edge1```,<br>&nbsp;&nbsp;```genType x```<br>)<br> | xの要素のうち、edge0以下のものは0.0、edge1以上のものは1.0にする。<br>xがedge0とedge1の間にあるときには、3次エルミート補間を返す。<br>t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0)<br>return t * t * (3 - 2 * t) |

---

<a name="glsl_params"></a>
### 組み込み変数と定数

<a name="glsl_constant"></a>
#### 定数

|  定数                    |  データ型   | 最小値      |      説明    |
|:-------------------------|:------------|:------------|:-------------|
| gl_MaxVertexAttribs | int | 8 | 頂点属性の最大個数。 |
| gl_MaxVertexUniformVectors | int | 128 | Uniform頂点ベクトルの最大個数。 |
| gl_MaxFragmentUniformVectors | int | 16 | Uniformフラグメントベクトルの最大個数。 |
| gl_MaxVaryingVectors | int | 8 | Varyingベクトルの最大個数。 |
| gl_MaxVertexTextureImageUnits | int | 0 | 頂点シェーダ内のテクスチャイメージユニットの最大個数。 |
| gl_MaxCombinedTextureImageUnits | int | 8 | 頂点シェーダとフラグメントシェーダ全体でのテクスチャイメージユニットの最大個数。 |
| gl_MaxTextureImageUnits | int | 8 | テクスチャユニットの最大個数。 |
| gl_MaxDrawBuffers | int | 1 | フラグメントシェーダ内のgl_FragData配列に含まれる出力カラーの最大個数。 |

<a name="glsl_params_vertex"></a>
#### 頂点シェーダ変数
|  変数                    |  データ型    |  入出力(R/W) |     説明     |
|:-------------------------|:-------------|:-------------|:-------------|
| gl_Position | vec4 | 出力(※必須) | 頂点シェーダが計算した現在の頂点の変換、射影された位置。 |
| gl_PointSize | float | 出力 | gl.POINTSタイプのジオメトリを描画する際、点のサイズを指定するために使われる。デフォルトの値は1.0。 |

<a name="glsl_params_fragment"></a>
#### フラグメントシェーダ変数
|  変数                    |  データ型    |  入出力(R/W) |     説明     |
|:-------------------------|:-------------|:-------------|:-------------|
| gl_FragColor | vec4 | 出力 | 現在のフラグメントに与えられたカラー値。基本的に、こちらに値を指定しないと描画がされない。 |
| gl_FragCoord | vec4 | 入力 | 現在のフラグメントのウィンドウからの相対座標。 |
| gl_FragData<br>\[gl_MaxDrawBuffers\] | vec4 | 出力 |  現在のフラグメントのフラグメントデータの配列。gl_FragColorと同じ機能を持ち、原則としてgl_FragColorを使用する。 |
| gl_PointCoord | vec2 | 入力 | ポイントスプライトの場合のみ使用可。ポイントスプライトを描くときに、gl_PointCoordは、フラグメントのポイントからの2次元相対座標を保持する。座標は、0.0から1.0までである。 |
| gl_FrontFacing | bool | 入力 | フラグメントがポリゴンの表裏どちらに属するかを示す論理値。 |


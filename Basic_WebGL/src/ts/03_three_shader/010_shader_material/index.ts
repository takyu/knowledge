import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 頂点の情報を定義
const geometry = new THREE.PlaneGeometry(2, 2);

// 頂点の位置、カラーを調節
const material = new THREE.ShaderMaterial({
  /**
   * attribute の position や uv などは、threejs のライブラリが、
   * 勝手に宣言してくれるものであり、使用できている状況である。
   * threejs の場合は、エラーを意図的に発生させることで、
   * コンソールで見ることができる。
   *
   * Matrix は 3D空間をどの様にして画面に描写するか定義しているもの。
   * のちのレクチャーで詳しく。
   */
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(vUv, 0.5, 1.0);
    }
  `,
  transparent: true,

  // 頂点と頂点が結ばれた線を表示
  wireframe: true,
});

// 頂点と shader を紐付ける
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

/**
 * PlaneGeometry
 *
 * attributes: {
 *  normal: 描写された面 (今回は三角形) を貫く直交ベクトルの情報。,
 *  position: 表示されている位置情報 {
 *    array: [
 *      各頂点の座標が入っている。
 *      (x, y, z)座標で表されるために、3 つの値で一つの頂点を表す。
 *    ],
 *    count: 頂点の数。今回は、4,
 *    itemSize: 何個の値で一つの頂点を表すか。今回は、3
 *  },
 *  uv: uv座標。texture座標(0 ~ 1の範囲で (x, y)座標を表す)を読み込む際に使用される情報。{
 *    array: [
 *      各頂点の座標が入っている。
 *      (x, y)座標で表されるために、2 つの値で一つの頂点を表す。
 *      texture 座標では、左下の点が原点 (0,0) になり、そこから 0 ~ 1 の範囲で、
 *      各点の情報が記載される。
 *    ],
 *    count: 頂点の数。今回は、4,
 *    itemSize: 何個の値で一つの頂点を表すか。今回は、2
 *  },
 *  index: どこの頂点を結んで三角形を作るかといった情報が入っている。 {
 *    array: [
 *      今回は、[0, 2, 1, 2, 3, 1] となっているが、これは
 *      position の三つ毎にまとめた（今回は、itemSize 3, つまり三つの値毎に一つの頂点）
 *      index の数字を表している。
 * }
 *
 * 02_webgl までのコードの function draw() の中の描画メソッドで、
 * gl.drawArrays(mode, firstIndex, count)
 * の第一引数で、三角形を描写する gl.TRIANGLES の mode を使用していた。
 *
 * gl.drawArrays() は、配列に収められた firstIndex からの順番通りに頂点から
 * 形を作っていくメソッドである。
 * ( https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays )
 *
 * 一方で、gl.drawElements() を使用する方法もあり、これは、上記の index の中の array (要素配列)
 * を使用して、定められた頂点 (position) を再利用して形を作っていくメソッドである。
 * ( https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements )
 */
console.log(geometry);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

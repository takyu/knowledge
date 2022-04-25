import * as THREE from 'three';

/**
 * Scene
 *
 * Mesh や Light を配置する箱のようなもの
 *
 * Mesh は後述。
 * Light はどの角度、位置から光を当てるか定義したもの。
 */
const scene = new THREE.Scene();

/**
 * Camera
 *
 * どの角度、位置から 3D を描写するのかを定義
 */
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

/**
 * Renderer
 *
 * <canvas> 要素に 3D を描写するための API
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * HTMLの <canvas>タグに挿入
 */
document.body.appendChild(renderer.domElement);

/**
 * リサイズに対応する処理
 */
onResize();

window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

function onResize() {
  // サイズを取得
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラーのPixelRatioを更新する
  renderer.setPixelRatio(window.devicePixelRatio);
  // レンダラーのサイズを画面の幅に合わせる
  renderer.setSize(width, height);

  // カメラのアスペクト比を正す
  camera.aspect = width / height;
  // アスペクト比の変更を有効にする
  camera.updateProjectionMatrix();
}

/**
 * Geometry
 *
 * 物体の形を定義。平面や球など
 */
const geometry = new THREE.BoxGeometry();

/**
 * Material
 *
 * 色や画像を定義。
 */
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

/**
 * Mesh
 *
 * Material と Geometry を合わせたもの。
 */
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate() {
  /**
   * コールバックに渡された関数をタスクが空いている際に連続的に呼び出す。
   * ここでは、animate 関数を呼び出して、連続的に立方体を回して、render している。
   */
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

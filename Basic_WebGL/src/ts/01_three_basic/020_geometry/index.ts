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
 * 立体
 */
// const geometry = new THREE.BoxGeometry();
// camera.position.z = 5;

/**
 * 平面
 */
// const geometry = new THREE.PlaneGeometry(20, 20);
// camera.position.z = 50;

/**
 * 球
 */
// const geometry = new THREE.SphereGeometry();
// camera.position.z = 5;

/**
 * ドーナツ
 *
 * 六角形でカクカク
 */
// const geometry = new THREE.TorusGeometry();
// camera.position.z = 5;

/**
 * ドーナツ
 *
 * 丸くする
 *
 * なお、webGL は三角形を組み合わせているので、segments はどのくらいの数の三角形で
 * 構成するのかを定義している。
 */
const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
camera.position.z = 30;

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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

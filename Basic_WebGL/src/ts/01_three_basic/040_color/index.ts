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

const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
camera.position.z = 30;

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: 1.0,
});

/**
 * カラーの指定の仕方
 *
 * 必ず、THREE の Color のインスタンスを渡す。
 *
 * (https://threejs.org/docs/index.html?q=color#api/en/math/Color)
 */
material.color = new THREE.Color('green');

/* set メソッドの使用 */
material.color.set('aqua');

/* RGB string */
material.color.set('rgb(255,255,0)');

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

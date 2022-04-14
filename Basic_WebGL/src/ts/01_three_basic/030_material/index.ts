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

const geometry = new THREE.TorusGeometry(10, 2, 16, 100);
camera.position.z = 30;

/**
 * 赤色に
 *
 * 0x は javascript における 16進数表記
 *
 * 0x (R, G, B) という様になっている。
 */
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

/**
 * visible
 *
 * css の display の様なもの
 */
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   visible: false
// });

/**
 * opacity
 *
 * 透明度
 */
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   transparent: true,
//   opacity: 0.5,
// });

/**
 * wireframe
 *
 * 線でメッシュを形成
 */
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  transparent: true,
  opacity: 0.8,
  wireframe: true,
});

/**
 * オブジェクトのプロパティなので、後から変更することも可能
 *
 * 以下は、2秒後に、wireframe を falseに
 */
setTimeout(() => {
  material.wireframe = false;
}, 2000);

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

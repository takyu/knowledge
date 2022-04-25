import * as THREE from 'three';

/**
 * Orbit Control
 *
 * ドラッグ操作で、物体に対しての視点を変える
 */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

init();

async function init() {
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

  const texLoader = new THREE.TextureLoader();

  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
  });

  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  /**
   * orbitcontrol のインスタンス
   */
  const orbitControl = new OrbitControls(camera, renderer.domElement);

  /**
   * この二つのオプションを使いたい時には、animate 関数の中で、
   * update() メソッドを実行する。
   *
   * enableDamping : ドラッグ後の動きに慣性をつける
   * autoRotate : ドラッグ後、自動で回り始める
   */
  orbitControl.enableDamping = true;
  orbitControl.autoRotate = true;

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    /**
     * required if controls.enableDamping or controls.autoRotate are set to true
     */
    orbitControl.update();

    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

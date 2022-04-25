import * as THREE from 'three';

/**
 * image files
 */
import textureImage from '@img/aurora.jpg';
import textureImage2 from '@img/forest.jpg';

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

  const geometry = new THREE.PlaneGeometry(20, 10);

  const texLoader = new THREE.TextureLoader();
  const textureAurora = await texLoader.loadAsync(textureImage);
  const textureForest = await texLoader.loadAsync(textureImage2);

  const material = new THREE.MeshBasicMaterial({
    map: textureAurora,
  });

  /**
   * 3秒後に画像が切り替わる
   */
  setTimeout(() => {
    material.map = textureForest;
  }, 3000);

  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

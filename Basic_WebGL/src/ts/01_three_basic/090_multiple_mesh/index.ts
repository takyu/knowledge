import * as THREE from 'three';

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

  const geometryBox = new THREE.BoxGeometry(10, 10, 10);
  const geometryPlane = new THREE.PlaneGeometry(20, 20);
  const geometryTorus = new THREE.TorusGeometry(10, 2, 16, 100);

  const texLoader = new THREE.TextureLoader();

  const materialBox = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });

  /**
   * 性質が同じ、material は clone メソッドを使い、
   * 色などのオプションだけ変える
   */
  const materialPlane = materialBox.clone();
  materialPlane.color = new THREE.Color(0x00ff00);

  const materialTorus = materialBox.clone();
  materialTorus.color = new THREE.Color(0x0000ff);

  const meshBox = new THREE.Mesh(geometryBox, materialBox);
  const meshPlane = new THREE.Mesh(geometryPlane, materialPlane);
  const meshTorus = new THREE.Mesh(geometryTorus, materialTorus);

  /**
   * mesh に対しても clone メソッドを使用できるので、
   * 同じ物体を複製したいときに用いる。
   *
   * const copyMeshBox = meshBox としてしまうと、
   * meshBox 自体のオブジェクトへの参照が渡ってくるので、
   * 複製とはならない。（例えば、色を copyMeshBox だけ変えようとして設定
   * しても、元の meshBox も変わってしまう。）
   */
  // const copyMeshBox = meshBox.clone();

  /**
   * mesh の移動
   */
  meshBox.position.x -= 25;
  meshPlane.position.x += 30;

  const axis = new THREE.AxesHelper(20);

  scene.add(meshBox, meshPlane, meshTorus, axis);

  const orbitControl = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 30;

  /**
   * mesh のアニメーションに関する設定を行う
   *
   * mesh の初期配置などはこの中ではしない。
   */
  function animate() {
    requestAnimationFrame(animate);

    /**
     * mesh の回転
     */
    meshBox.rotation.x += 0.01;
    meshBox.rotation.y += 0.01;

    meshPlane.rotation.z += 0.01;

    meshTorus.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

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

  const geometry = new THREE.TorusGeometry(10, 2, 16, 100);

  const texLoader = new THREE.TextureLoader();

  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
  });

  const mesh = new THREE.Mesh(geometry, material);

  /**
   * axis
   *
   * 座標軸を出す。mesh なので、scene にオブジェクトとして追加する。
   *
   * x-axis : 赤色、右方向に正の軸を取る
   * y-axis : 緑色、上方向に正の軸を取る
   * z-axis : 青色、手前方向に正の軸を取る
   */
  const axis = new THREE.AxesHelper(20);

  scene.add(mesh, axis);

  const orbitControl = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    /**
     * x軸を中心に回転（縦回転）
     */
    mesh.rotation.x += 0.01;

    // method を使用
    // mesh.rotateX(0.01);

    /**
     * y軸を中心に回転（横回転）
     */
    mesh.rotation.y += 0.01;

    // method を使用
    // mesh.rotateY(0.01);

    /**
     * x軸に沿って平行移動
     */
    mesh.position.x += 0.05;

    /**
     * y軸に沿って平行移動
     */
    mesh.position.y += 0.05;

    /**
     * z軸に沿って平行移動
     */
    // mesh.position.z += 0.05;

    /**
     * method を用いて xyz 軸を一括で動かす
     *
     * ただし、あまりパフォーマンスが良くないので、基本的には position の値を
     * 変更する。
     */
    // geometry.translate(0.05, 0.05, 0.05);

    /**
     * x軸上の絶対位置
     */
    // mesh.position.x = 20;

    /**
     * y軸上の絶対位置
     */
    // mesh.position.y = 20;

    /**
     * z軸上の絶対位置
     */
    // mesh.position.z = 20;

    /**
     * method を用いて xyz 軸の絶対位置を固定
     */
    // mesh.position.set(5, 5, 0);

    /**
     * x軸上での拡大・縮小（ 1 が元の大きさ ）
     *
     * 代入であればその位置での拡大・縮小、加算や減算による代入であれば
     * その物体の拡大・縮小が遷移することになる。
     */
    // mesh.scale.x = 2;
    // mesh.scale.x += 0.02;

    /**
     * y軸上での拡大・縮小（ 1 が元の大きさ ）
     *
     * 代入であればその位置での拡大・縮小、加算や減算による代入であれば
     * その物体の拡大・縮小が遷移することになる。
     */
    // mesh.scale.y = 2;
    // mesh.scale.y += 0.02;

    /**
     * method を用いた拡大・縮小 （ 1 が元の大きさ ）
     */
    geometry.scale(1.002, 1.001, 1.003);

    renderer.render(scene, camera);
  }

  animate();
}

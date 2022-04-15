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

  const renderer = new THREE.WebGLRenderer({
    /**
     * antialias
     *
     * 物体の辺などのギザギザの線を滑らかにする
     */
    antialias: true,
  });

  /**
   * 画面幅の設定
   */
  renderer.setSize(window.innerWidth, window.innerHeight);

  /**
   * 背景色の設定
   */
  renderer.setClearColor(0xf3f3f3);

  document.body.appendChild(renderer.domElement);

  /**
   * ランダムな数字を生成する関数
   */
  function mapRand(min: number, max: number, isInt: boolean = false): number {
    let rand = Math.random() * (max - min) + min;
    return isInt ? Math.round(rand) : rand;
  }

  /**
   * 定数定義
   */
  const meshes: THREE.Mesh[] = [],
    MESH_NUM = 50,
    POS_RANGE = 100,
    MAX_SCALE = 1.5;

  /**
   * ランダムなメッシュを生成する関数
   */
  function randomMesh(): THREE.Mesh {
    const geometries = [
      new THREE.BoxGeometry(10, 10, 10),
      new THREE.PlaneGeometry(20, 20),
      new THREE.TorusGeometry(10, 2, 16, 100),
    ];

    const color = new THREE.Color(
      mapRand(0.7, 1),
      mapRand(0.7, 1),
      mapRand(0.7, 1)
    );

    const pos = {
      x: mapRand(-POS_RANGE, POS_RANGE),
      y: mapRand(-POS_RANGE, POS_RANGE),
      z: mapRand(-POS_RANGE, POS_RANGE),
    };

    const scale = mapRand(1, MAX_SCALE);

    // material の作成
    const material = new THREE.MeshBasicMaterial({ color });

    // どの geometry を扱うかの設定
    const gIndex = mapRand(0, geometries.length - 1, true);

    // mesh の作成
    const mesh = new THREE.Mesh(geometries[gIndex], material);

    // mesh に対しての初期位置、大きさを設定
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.geometry.scale(scale, scale, scale);

    return mesh;
  }

  /**
   * 複数個の mesh の作成
   */
  function generateMeshes(meshes: THREE.Mesh[], amount: number) {
    for (let i = 0; i < amount; i++) {
      meshes.push(randomMesh());
    }
  }

  generateMeshes(meshes, MESH_NUM);

  const axis = new THREE.AxesHelper(20);

  scene.add(...meshes, axis);

  const orbitControl = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

  animate();
}

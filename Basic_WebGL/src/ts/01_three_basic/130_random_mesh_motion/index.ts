import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

init();

function mapRand(min: number, max: number, isInt: boolean = false): number {
  let rand = Math.random() * (max - min) + min;
  return isInt ? Math.round(rand) : rand;
}

async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf3f3f3);

  document.body.appendChild(renderer.domElement);

  /**
   * 定数定義
   */
  const MESH_INFO = {
    NUM: 50,
    POS_RANGE: 100,
    MAX_SCALE: 1.5,
    TARGET_NUM: 10,
  } as const;
  type MESH_INFO = typeof MESH_INFO[keyof typeof MESH_INFO];

  const meshes: THREE.Mesh[] = [];

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
      x: mapRand(-MESH_INFO.POS_RANGE, MESH_INFO.POS_RANGE),
      y: mapRand(-MESH_INFO.POS_RANGE, MESH_INFO.POS_RANGE),
      z: mapRand(-MESH_INFO.POS_RANGE, MESH_INFO.POS_RANGE),
    };

    const scale = mapRand(1, MESH_INFO.MAX_SCALE);

    /**
     * light による光の影響を受けるために material を変更
     */
    const material = new THREE.MeshLambertMaterial({ color });

    const gIndex = mapRand(0, geometries.length - 1, true);

    const mesh = new THREE.Mesh(geometries[gIndex], material);
    mesh.position.set(pos.x, pos.y, pos.z);
    mesh.geometry.scale(scale, scale, scale);

    return mesh;
  }

  function generateMeshes(meshes: THREE.Mesh[], amount: number) {
    for (let i = 0; i < amount; i++) {
      meshes.push(randomMesh());
    }
  }

  generateMeshes(meshes, MESH_INFO.NUM);

  scene.add(...meshes);

  const orbitControl = new OrbitControls(camera, renderer.domElement);

  camera.position.z = 30;

  /**
   * Ambient Light
   */
  const amLight = new THREE.AmbientLight(0xe4e4e4, 0.5);

  scene.add(amLight);

  /**
   * Point Light
   */
  const pointLight1 = new THREE.PointLight(0xe4e4e4, 1, 400);
  pointLight1.position.set(10, 100, 110);

  const pointLight2 = new THREE.PointLight(0xeeeeee, 1, 400);
  pointLight2.position.set(-150, -100, 200);

  /**
   * helper 自体の色や大きさを変えることが可能
   */
  const pHelper1 = new THREE.PointLightHelper(pointLight1, 5, 0xff0000);
  const pHelper2 = new THREE.PointLightHelper(pointLight2, 5, 0xff0000);

  /**
   * helper 自体をオプションでオフにすることが可能
   */
  pHelper1.visible = false;
  pHelper2.visible = false;

  scene.add(pointLight1, pHelper1, pointLight2, pHelper2);

  /**
   * 物体の移動
   *
   * オリジナルのメソッドを追加したいために、any にする。
   */
  let targetMeshes: any[] = [];

  /**
   * THREE.mesh オブジェクトのメソッドを拡張
   *
   * あまり良く無い方法だが、THREE.Mesh クラスを any にキャストして拡張
   *
   * [problem]
   * → ts での Symbol を用いた prototype の入れ方がわからない、、、
   */
  // const action = Symbol('action');
  // (<any>THREE.Mesh.prototype)[action] = getAction(mesh.position);

  /**
   * x, y, z 軸いずれかの方向にどれくらい動かすか決める関数
   *
   * 現在のポジションが原点から見て、負の位置にいる場合正の方向に、
   * 正の位置にいる場合は負の方向に動かす。
   */
  function getAction({ x, y, z }: THREE.Vector3): Function {
    const rand = mapRand(0.7, 1.3);

    const ACTIONS = [
      function (this: THREE.Mesh) {
        const direction = x > 0 ? -rand : rand;
        this.position.x += direction;
      },
      function (this: THREE.Mesh) {
        const direction = y > 0 ? -rand : rand;
        this.position.y += direction;
      },
      function (this: THREE.Mesh) {
        const direction = z > 0 ? -rand : rand;
        this.position.z += direction;
      },
    ];

    // 上記の三つの関数から一つをランダムに取る
    const action = ACTIONS[mapRand(0, ACTIONS.length - 1, true)];
    return action;
  }

  setInterval(() => {
    /**
     * 2000ms 毎に回ってきた際に、動く mesh の対象を全て削除、初期化しておく
     */
    // targetMeshes.forEach((mesh) => (mesh[action] = null));
    targetMeshes.forEach((mesh) => (mesh.__action = null));
    targetMeshes = [];

    for (let i = 0; i < MESH_INFO.TARGET_NUM; i++) {
      const mesh: any = meshes[mapRand(0, meshes.length - 1, true)];

      // 一時的に、any にして対応
      mesh.__action = getAction(mesh.position);

      targetMeshes.push(mesh);
    }
  }, 2000);

  function animate() {
    requestAnimationFrame(animate);

    // ポジションを定める関数を実行して動かす
    targetMeshes.forEach((mesh) => mesh.__action());

    // メッシュのある範囲より近い場合は、カメラを徐々に引いていく
    if (MESH_INFO.POS_RANGE > camera.position.z) {
      camera.position.z += 0.2;
    }

    renderer.render(scene, camera);
  }

  animate();
}

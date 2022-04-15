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

  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf3f3f3);

  document.body.appendChild(renderer.domElement);

  const meshes: THREE.Mesh[] = [],
    MESH_NUM = 50,
    POS_RANGE = 100,
    MAX_SCALE = 1.5,
    TARGET_MESH_NUM = 10;

  /**
   * THREE.mesh オブジェクトのメソッドを拡張
   *
   * あまり良く無い方法だが、THREE.Mesh クラスを any にキャストして拡張
   */
  // const active = Symbol('active');

  // (<any>THREE.Mesh).prototype[active] = function () {
  //   const direction = mapRand(0.5, 1.3);
  //   this.position.x += direction;
  // };

  // const extendTHREEMesh = <any>new THREE.Mesh();

  function mapRand(min: number, max: number, isInt: boolean = false): number {
    let rand = Math.random() * (max - min) + min;
    return isInt ? Math.round(rand) : rand;
  }

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

  generateMeshes(meshes, MESH_NUM);

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

  type TPosition = {
    x: number;
    y: number;
    z: number;
  };

  /**
   * x, y, z 軸いずれかの方向にどれくらい動かすか決める関数
   *
   * 現在のポジションが原点から見て、負の位置にいる場合正の方向に、
   * 正の位置にいる場合は負の方向に動かす。
   */
  function getAction(position: TPosition) {
    const x: number = position.x;
    const y: number = position.y;
    const z: number = position.z;

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
    targetMeshes.forEach((mesh) => (mesh.__action = null));
    targetMeshes = [];

    for (let i = 0; i < TARGET_MESH_NUM; i++) {
      const mesh: any = meshes[mapRand(0, meshes.length - 1, true)];

      mesh.__action = getAction(mesh.position as TPosition);

      targetMeshes.push(mesh);
    }
  }, 2000);

  function animate() {
    requestAnimationFrame(animate);

    // ポジションを定める関数を実行して動かす
    targetMeshes.forEach((mesh) => mesh.__action());

    // メッシュのある範囲より近い場合は、カメラを徐々に引いていく
    if (POS_RANGE > camera.position.z) {
      camera.position.z += 0.4;
    }

    renderer.render(scene, camera);
  }

  animate();
}

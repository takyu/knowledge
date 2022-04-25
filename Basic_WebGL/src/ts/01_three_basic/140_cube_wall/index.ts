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
  camera.position.z = 90;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

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
   * Create Mesh
   */
  // Define const value
  const MESH_INFO = {
    X_NUM: 10,
    Y_NUM: 6,
    Z_POSITION: 10,
    SCALE: 30,
    COLORS: {
      MAIN: '#f3f4f6',
      SUB: '#60a5fa',
    },
  } as const;
  type MESH_INFO = typeof MESH_INFO[keyof typeof MESH_INFO];

  // Geometry
  const boxGeo = new THREE.BoxGeometry(
    MESH_INFO.SCALE,
    MESH_INFO.SCALE,
    MESH_INFO.SCALE
  );

  // Material
  const mainMate = new THREE.MeshLambertMaterial({
    color: MESH_INFO.COLORS.MAIN,
  });

  const subMate = new THREE.MeshLambertMaterial({
    color: MESH_INFO.COLORS.SUB,
  });

  const boxes: THREE.Mesh[] = [];

  function generateBoxes(boxes: THREE.Mesh[]) {
    for (let y = 0; y <= MESH_INFO.Y_NUM; y++) {
      for (let x = 0; x <= MESH_INFO.X_NUM; x++) {
        const material = mapRand(1, 10, true) > 3 ? mainMate : subMate;
        const box = new THREE.Mesh(boxGeo, material);

        /**
         * 原点から、負の方向にも半分配置するように、
         * 初期位置を、長さの半分で引く。
         */
        box.position.x =
          x * MESH_INFO.SCALE - (MESH_INFO.X_NUM * MESH_INFO.SCALE) / 2;
        box.position.y =
          y * MESH_INFO.SCALE - (MESH_INFO.Y_NUM * MESH_INFO.SCALE) / 2;

        box.position.z = mapRand(-MESH_INFO.Z_POSITION, MESH_INFO.Z_POSITION);

        // 立方体の間に隙間
        box.scale.set(0.98, 0.98, 0.98);

        // box 自信が影を受け取り、影を写すのでどちらも有効に
        box.castShadow = true;
        box.receiveShadow = true;

        boxes.push(box);
      }
    }
  }

  generateBoxes(boxes);
  scene.add(...boxes);

  // Axis helper
  const axis = new THREE.AxesHelper(100);
  // scene.add(axis);

  /**
   * Create light
   */
  const amLight = new THREE.AmbientLight(0x3f3f46);

  const pLight = new THREE.PointLight(0xffffff, 1, 0);
  pLight.position.set(-26, 7, 100);
  pLight.castShadow = true;
  pLight.shadow.mapSize.width = 1024;
  pLight.shadow.mapSize.height = 1024;

  const dLight = new THREE.DirectionalLight(0xaabbff, 0.2);
  dLight.position.set(0, 0, 5);

  scene.add(amLight, pLight, dLight);

  const control = new OrbitControls(camera, renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);

    control.update();

    renderer.render(scene, camera);
  }

  animate();
}

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

  /**
   * ライトによる影を有効化
   *
   * ・ pointLight もしくは spotLight のライトによる影を有効化
   *  → directionLight などはうまく影ができないことが多い
   *
   * ・ 影をつけたい mesh に対して影を有効化する
   *  → ここでは、影を受け止める mesh の床と、三つの物体の mesh
   */
  renderer.shadowMap.enabled = true;

  document.body.appendChild(renderer.domElement);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),

    new THREE.MeshStandardMaterial({
      color: 0xf4f4f4,
      side: THREE.DoubleSide,
    })
  );
  floor.rotation.x = THREE.MathUtils.degToRad(90);
  floor.position.y = -50;

  /**
   * receiveShadow
   *
   * 影を受け止める mesh に対して有効化
   */
  floor.receiveShadow = true;

  scene.add(floor);

  const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 100);

  const basic = new THREE.MeshBasicMaterial({ color: 0x3f7b9d });

  const lambert = new THREE.MeshLambertMaterial({ color: 0x3f7b9d });

  const standard = new THREE.MeshStandardMaterial({
    color: 0x3f7b9d,
    roughness: 0,
  });

  const meshBasic = new THREE.Mesh(geometry, basic);
  meshBasic.position.x -= 20;

  const meshLambert = new THREE.Mesh(geometry, lambert);

  const meshStandard = new THREE.Mesh(geometry, standard);
  meshStandard.position.x += 20;

  /**
   * castShadow
   *
   * 影を映し出したい mesh に対して有効化
   */
  meshBasic.castShadow = true;
  meshLambert.castShadow = true;
  meshStandard.castShadow = true;

  scene.add(meshBasic, meshLambert, meshStandard);

  const axis = new THREE.AxesHelper(20);
  scene.add(axis);

  camera.position.z = 50;

  const control = new OrbitControls(camera, renderer.domElement);

  /**
   * light
   */
  const plight = new THREE.PointLight(
    0xffffff,
    1,
    // 0 を設定すると距離が無限遠になる
    0
  );

  const spherical = new THREE.Spherical(30, 0.2, 1);
  plight.position.setFromSpherical(spherical);

  /**
   * point light による影を有効化
   */
  plight.castShadow = true;

  /**
   * 影の解像度
   *
   * default は 512
   * 解像度を上げると、粗さが無くなる。
   * GPU に対して負荷をかけることになるので、あまり大きすぎる値は設定しない。
   */
  plight.shadow.mapSize.width = 1024;
  plight.shadow.mapSize.height = 1024;

  const pHelper = new THREE.PointLightHelper(plight);

  // scene.add(plight);
  scene.add(plight, pHelper);

  function animate() {
    requestAnimationFrame(animate);

    // 反時計回り
    spherical.theta += 0.3;

    // 時計回り
    // spherical.theta -= 0.3;

    plight.position.setFromSpherical(spherical);

    renderer.render(scene, camera);
  }

  animate();
}

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

  /* 床 */
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    /**
     * MeshStandardMaterial
     *
     * 光沢がある material、光が無いと表示されない。
     */
    new THREE.MeshStandardMaterial({
      color: 0xf4f4f4,

      // 平面の裏面をも描写する設定
      side: THREE.DoubleSide,
    })
  );
  /**
   * WebGL では角度は、radian 表記
   *
   * radian = degree * Math.PI / 180 で計算しても良いが、
   * threejs には、radian に変換してくれるメソッドが用意されている。
   */
  // floor.rotation.x = 90 * Math.PI / 180;
  floor.rotation.x = THREE.MathUtils.degToRad(90); // 平面を倒して床に
  floor.position.y = -50; // 倒した平面を下方向に下げる
  scene.add(floor);

  const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 100);

  const basic = new THREE.MeshBasicMaterial({ color: 0x3f7b9d });

  /**
   * MeshLambertMaterial
   *
   * シックな material、光が無いと表示されない。
   */
  const lambert = new THREE.MeshLambertMaterial({ color: 0x3f7b9d });

  const standard = new THREE.MeshStandardMaterial({
    color: 0x3f7b9d,

    // 光沢の度合い 0 がテカテカ 1 は光沢がなくなってしまう
    roughness: 0,
  });

  /* mesh 作成、追加 */
  const meshBasic = new THREE.Mesh(geometry, basic);
  meshBasic.position.x -= 20;

  const meshLambert = new THREE.Mesh(geometry, lambert);

  const meshStandard = new THREE.Mesh(geometry, standard);
  meshStandard.position.x += 20;

  scene.add(meshBasic, meshLambert, meshStandard);

  // axis helper
  const axis = new THREE.AxesHelper(20);
  scene.add(axis);

  camera.position.z = 30;

  const control = new OrbitControls(camera, renderer.domElement);

  /**
   * Ambient light
   *
   * 全方位から照射、scene 全体を均等に明るくする
   */
  const amLight = new THREE.AmbientLight(0xffffff);
  // scene.add(amLight);

  /**
   * Directional light
   *
   * 平行に光を照射
   */
  const diLight = new THREE.DirectionalLight(
    0xffffff,
    // 光の強度
    0.9
  );

  /**
   * 光をどこから照らすのかを設定
   */
  // z軸の手前から照らす
  // diLight.position.set(0, 0, 10);

  // z軸の奥から照らす
  // diLight.position.set(0, 0, -10);

  // y軸の真下
  // diLight.position.set(0, -90, 0);

  // 手前の上から照らす
  // diLight.position.set(0, 10, 10);

  diLight.position.set(0, 4, 10);

  /**
   * デフォルトでは原点に向かって照らすが、変えることもできる
   *
   * 必ず、scene に追加
   */
  // diLight.target.position.set(0, 10, 5);

  /**
   * Directional Light Helper
   *
   * どこから照らしているのか、線と正方形で示してくれる。
   *
   * 必ず、scene に追加
   */
  const dHelper = new THREE.DirectionalLightHelper(diLight);

  // scene.add(diLight);
  scene.add(diLight, dHelper);

  /**
   * target を指定した時など、helper が正しく動作しない時がある
   *
   * → animate 関数の中で、update() する。
   */
  // scene.add(diLight, diLight.target, dHelper);

  /**
   * Point Light
   *
   * 点光源
   */
  const plight = new THREE.PointLight(
    0xffffff,
    1,
    // どのくらいまでライトを届かせるのか距離を指定する
    100
  );
  // plight.position.set(10, 10, 10);

  /**
   * spherical
   *
   * 今までは、xyz 軸でその物体の位置を決めていたが、
   * 長さと、x軸からの角度、y軸からの角度で位置を決定する
   * 極座標を用いて、点光源の動きを表現する。
   *
   * @param number radius 原点からの長さ
   * @param number phi y軸からの角度
   * @param number radius y軸周りの角度
   */
  // const spherical = new THREE.Spherical(20, 0, 0);
  const spherical = new THREE.Spherical(20, 1, 1);
  plight.position.setFromSpherical(spherical);

  /**
   * Point Light Helper
   *
   * どこから照らしているのか、正八面体で教えてくれる
   *
   * 必ず、scene に追加
   */
  const pHelper = new THREE.PointLightHelper(plight);

  // scene.add(plight);
  scene.add(plight, pHelper);

  function animate() {
    requestAnimationFrame(animate);

    /**
     * x軸中心に回転し続ける
     */
    spherical.phi += 0.1;

    /**
     * y軸中心に回転し続ける
     */
    spherical.theta += 0.1;
    plight.position.setFromSpherical(spherical);

    dHelper.update();

    renderer.render(scene, camera);
  }

  animate();
}

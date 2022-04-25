/**
 * vender modules
 */
import * as THREE from 'three';
import GUI from 'lil-gui';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Shader source
 */
import vertexShader from '@shader/04_three_advance/090_plane_to_sphere/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/090_plane_to_sphere/fragment.glsl';

init();

async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    10,
    3000
  );

  camera.position.z = 1000;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // エラー時に、コードを全文表示
  renderer.debug.checkShaderErrors = true;

  // 背景を白色に
  // renderer.setClearColor(0xffffff);

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

  // OrbitControls
  const control = new OrbitControls(camera, renderer.domElement);

  const wSeg = 30,
    hSeg = 30;

  /**
   * segment の数によって頂点の数が決まるので、sphere と plane のセグメントを
   * 合わせておくことによって、頂点の数を同じにして、遷移を実現する。
   */
  const gSphere = new THREE.SphereGeometry(400, wSeg, hSeg);
  const gPlane = new THREE.PlaneGeometry(600, 300, wSeg, hSeg);

  /**
   * BufferGeometry()
   *
   * 開発者が独自に、position や uv を設定
   */
  const geometry = new THREE.BufferGeometry();

  // attribute の position を plane のものに設定（初期状態）
  geometry.setAttribute('position', gPlane.getAttribute('position'));

  // uv も渡しておく
  geometry.setAttribute('uv', gPlane.getAttribute('uv'));

  // 状態遷移する際に用いる attribute の plane を plane のものに設定
  // 上で宣言した初期状態のものと同一なので、そちらを shader でも用いる
  // geometry.setAttribute('plane', gPlane.getAttribute('position'));

  // 状態遷移後の sphere を描写するために、attribute の sphere を shere のものに設定
  geometry.setAttribute('sphere', gSphere.getAttribute('position'));

  console.log('🚀 ~ file: index.ts ~ line 63 ~ init ~ geometry', geometry);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uProgress: {
        value: 0,
      },
      uTick: {
        value: 0,
      },
      uSaturation: {
        value: 0.7,
      },
      uLightness: {
        value: 0.67,
      },
      uColorTime: {
        value: 0.05,
      },
      uColorDelay: {
        value: 3.3,
      },
      uScaleTime: {
        value: 0.15,
      },
      uScaleDelay: {
        value: 4,
      },
    },
    vertexShader,
    fragmentShader,

    // 裏側も画像を描写
    side: THREE.DoubleSide,

    // wireframe: true,
  });

  const sphere = new THREE.Points(geometry, material);

  scene.add(sphere);

  // axis helper
  // const axis = new THREE.AxesHelper(500);
  // scene.add(axis);

  /**
   * lil-gui
   */
  const gui = new GUI();

  const folder1 = gui.addFolder('Progress');

  folder1
    .add(material.uniforms.uProgress, 'value', 0, 1, 0.1)
    .name('progress')
    .listen();
  const datObj = { next: !!material.uniforms.uProgress.value };
  folder1
    .add(datObj, 'next')
    .name('animate')
    .onChange(function () {
      gsap.to(material.uniforms.uProgress, {
        value: +datObj.next,
        duration: 2,
        ease: 'power2.out',
      });
    });

  const folder2 = gui.addFolder('Color');

  folder2
    .add(material.uniforms.uSaturation, 'value', 0, 1, 0.01)
    .name('saturation');
  folder2
    .add(material.uniforms.uLightness, 'value', 0, 1, 0.01)
    .name('lightness');
  folder2.add(material.uniforms.uColorDelay, 'value', 0, 100, 1).name('delay');
  folder2
    .add(material.uniforms.uColorTime, 'value', 0.001, 1, 0.01)
    .name('time');

  function animate() {
    requestAnimationFrame(animate);

    // なくても良い
    control.update();

    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

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
import vertexShader from '@shader/04_three_advance/100_floor_to_sphere/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/100_floor_to_sphere/fragment.glsl';

init();

async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  camera.position.z = 2000;

  // カメラを少し傾ける
  camera.position.x = 500;

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

  const wSeg = 50,
    hSeg = 50;

  const gSphere = new THREE.SphereGeometry(800, wSeg, hSeg);

  /**
   * 平面を床にするために、
   *
   * ・ plane の geometry の大きさを大きくする
   * ・ 床の角の透明度を上げて丸く見せる
   */
  const gPlane = new THREE.PlaneGeometry(3000, 3000, wSeg, hSeg);

  // plane を π / 2 傾けて床にする
  gPlane.rotateX(Math.PI / 2);

  // 床を中央より少し下にずらす → y軸方向のマイナスの方向に平行移動させる
  gPlane.translate(0, -700, 0);

  /**
   * BufferGeometry()
   *
   * 開発者が独自に、position や uv を設定
   */
  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute('position', gPlane.getAttribute('position'));
  geometry.setAttribute('uv', gPlane.getAttribute('uv'));
  geometry.setAttribute('sphere', gSphere.getAttribute('position'));

  // 球に対しての法線ベクトルを渡しておく
  geometry.setAttribute('normal', gSphere.getAttribute('normal'));

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

    // 透明度を設定するために、true にしておく
    transparent: true,

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

    control.update();

    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

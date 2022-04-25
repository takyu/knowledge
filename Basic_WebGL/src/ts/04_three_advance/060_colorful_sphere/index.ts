/**
 * Part1. point sprite を描写する
 */

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
import vertexShader from '@shader/04_three_advance/060_colorful_sphere/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/060_colorful_sphere/fragment.glsl';

/**
 * image file
 */
import textureImage from '@img/aurora.jpg';

init();

// texture を取得する関数
async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  const texture = await texLoader.loadAsync(url);
  return texture;
}

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

  const geometry = new THREE.SphereGeometry(200);

  console.log(geometry);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTex: {
        value: await loadTex(textureImage),
      },
      uTick: {
        value: 0,
      },
      uProgress: {
        value: 0,
      },
    },
    vertexShader,
    fragmentShader,

    // 裏側も画像を描写
    side: THREE.DoubleSide,

    // wireframe: true,
  });

  /**
   * PointsMaterial()
   *
   * Shader を用いずに、簡単に material を渡す場合に使用する。
   * MeshBasicMaterial と同様の使い方。
   */
  // const material = new THREE.PointsMaterial({
  //   color: 0xff0000,
  // });

  /**
   * THREE.Points()
   *
   * Geometry に沿って点で表示される。
   */
  const sphere = new THREE.Points(geometry, material);

  scene.add(sphere);

  // axis helper
  // const axis = new THREE.AxesHelper(500);
  // scene.add(axis);

  /**
   * lil-gui
   */
  const gui = new GUI();

  // noiseFolder
  const folder1 = gui.addFolder('Animation');
  folder1
    .add(material.uniforms.uProgress, 'value', 0, 1, 0.1)
    .name('progress')
    .listen();

  const datData = {
    next: !!material.uniforms.uProgress.value,
  };

  folder1.add(datData, 'next').onChange(() => {
    gsap.to(material.uniforms.uProgress, {
      value: +datData.next,
      duration: 2,
      ease: 'power2.inOut',
    });
  });

  function animate() {
    requestAnimationFrame(animate);

    // なくても良い
    control.update();

    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

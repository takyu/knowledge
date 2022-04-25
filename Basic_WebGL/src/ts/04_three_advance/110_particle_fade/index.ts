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
import vertexShader from '@shader/04_three_advance/110_particle_fade/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/110_particle_fade/fragment.glsl';

/**
 * image file
 */
import textureImage from '@img/hello_webgl_world.png';

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

  camera.position.z = 800;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

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

  const wTexture = 466,
    hTexture = 65,
    wSeg = 500,
    hSeg = 90;

  const gPlane = new THREE.PlaneGeometry(wTexture, hTexture, wSeg, hSeg);

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute('position', gPlane.getAttribute('position'));
  geometry.setAttribute('uv', gPlane.getAttribute('uv'));

  console.log('🚀 ~ file: index.ts ~ line 63 ~ init ~ geometry', geometry);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTex: {
        value: await loadTex(textureImage),
      },
      uProgress: {
        value: 0,
      },
      uTick: {
        value: 0,
      },
    },
    vertexShader,
    fragmentShader,

    // 裏側も画像を描写
    side: THREE.DoubleSide,

    // 透明度も適用
    transparent: true,
  });

  const sphere = new THREE.Points(geometry, material);

  scene.add(sphere);

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

  function animate() {
    requestAnimationFrame(animate);

    control.update();

    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

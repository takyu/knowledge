/**
 * Part3. point sprite に遅延時間を設けて色をつけていく
 */

/**
 * vender modules
 */
import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Shader source
 */
import vertexShader from '@shader/04_three_advance/080_colorful_sphere3/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/080_colorful_sphere3/fragment.glsl';

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

  // OrbitControls
  const control = new OrbitControls(camera, renderer.domElement);

  const geometry = new THREE.SphereGeometry(200);

  console.log(geometry);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
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

  // noiseFolder
  const folder1 = gui.addFolder('Color');
  folder1
    .add(material.uniforms.uSaturation, 'value', 0, 1, 0.01)
    .name('Saturation');
  folder1
    .add(material.uniforms.uLightness, 'value', 0, 1, 0.01)
    .name('Lightness');
  folder1
    .add(material.uniforms.uColorTime, 'value', 0.001, 1, 0.001)
    .name('Time');
  folder1.add(material.uniforms.uColorDelay, 'value', 0, 100, 1).name('Delay');

  const folder2 = gui.addFolder('Scale');
  folder2
    .add(material.uniforms.uScaleTime, 'value', 0.001, 1, 0.001)
    .name('Time');
  folder2.add(material.uniforms.uScaleDelay, 'value', 0, 10, 1).name('Delay');

  /**
   * Tick を手動で変更
   */
  // const folder3 = gui.addFolder('Extra');
  // folder3.add(material.uniforms.uTick, 'value', 0, 100, 1).name('Tick');

  function animate() {
    requestAnimationFrame(animate);

    // なくても良い
    control.update();

    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

/**
 * 方法 2
 *
 * uv を使って遅延時間を設けていく
 *
 * uv までの長さ / uv の最大値となる、左上から右下の対角線の長さ (√2)
 * を用いて、左上からの遅延時間を設けていく。
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
import vertexShader from '@shader/04_three_advance/040_sticky_plane3_uv/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/040_sticky_plane3_uv/fragment.glsl';

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

  // OrbitControls
  const control = new OrbitControls(camera, renderer.domElement);

  const geometry = new THREE.PlaneGeometry(600, 300, 30, 30);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTex: {
        value: await loadTex('/img/aurora.jpg'),
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
    // wireframe: true,
  });

  // 頂点と shader を紐付ける
  const plane = new THREE.Mesh(geometry, material);

  scene.add(plane);

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

export = {};

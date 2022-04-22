import * as THREE from 'three';
import GUI from 'lil-gui';

import vertexShader from '@shader/03_three_shader/090_noise_image/vertex.glsl';
import fragmentShader from '@shader/03_three_shader/090_noise_image/fragment.glsl';

init();

// texture を取得する関数
async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  const texture = await texLoader.loadAsync(url);

  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;

  return texture;
}

async function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // エラー時に、コードを全文表示
  renderer.debug.checkShaderErrors = true;

  // 背景を白色に
  renderer.setClearColor(0xffffff);
  document.body.appendChild(renderer.domElement);

  // 頂点の情報を定義
  const geometry = new THREE.PlaneGeometry(20, 10);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTex: {
        value: await loadTex('/img/aurora.jpg'),
      },
      uTick: {
        value: 0,
      },
      uNoiseScale: {
        value: new THREE.Vector2(10, 10),
      },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
  });

  // 頂点と shader を紐付ける
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 20;

  /**
   * lil-gui
   */
  const gui = new GUI();

  // noiseFolder
  const noiseFolder = gui.addFolder('Noise');
  noiseFolder.add(material.uniforms.uNoiseScale.value, 'x', 0, 100, 1);
  noiseFolder.add(material.uniforms.uNoiseScale.value, 'y', 0, 100, 1);

  function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // uTick を増やし、時間の変遷を表す
    material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

import * as THREE from 'three';
import GUI from 'lil-gui';

import vertexShader from '@shader/03_three_shader/100_fade_slide/vertex.glsl';
import fragmentShader from '@shader/03_three_shader/100_fade_slide/fragment.glsl';

/**
 * image files
 */
import textureImage1 from '@img/aurora.jpg';
import textureImage2 from '@img/nightsky.jpg';

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
      uTexCurrent: {
        value: await loadTex(textureImage1),
      },
      uTexNext: {
        value: await loadTex(textureImage2),
      },
      uTick: {
        value: 0,
      },

      // 何番目の写真を描写しているか。0 → current, 1 → next
      uProgress: {
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
  noiseFolder
    .add(material.uniforms.uProgress, 'value', 0, 1, 0.1)
    .name('progress'); // 名前をつけることで、property の表示名を変えることができる。

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

import * as THREE from 'three';

import vertexShader from '@shader/03_three_shader/030_circle_image/vertex.glsl';
import fragmentShader from '@shader/03_three_shader/030_circle_image/fragment.glsl';

/**
 * image files
 */
import textureImage from '@img/aurora.jpg';

init();

// texture を取得する関数
async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  return await texLoader.loadAsync(url);
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
  document.body.appendChild(renderer.domElement);

  // 頂点の情報を定義
  const geometry = new THREE.PlaneGeometry(20, 10);

  // 頂点の位置、カラーを調節
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTex: {
        value: await loadTex(textureImage),
      },
    },

    /**
     * property_name: value_name と書くのがめんどくさいので、
     * import時に同じ名前にし、同じ名前の場合、一つだけ書くだけで良い記法（ ES6 ）
     * を用いる。
     */
    vertexShader,
    fragmentShader,
    transparent: true,
  });

  // 頂点と shader を紐付ける
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 20;

  function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

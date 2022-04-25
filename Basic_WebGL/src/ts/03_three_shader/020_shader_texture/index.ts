import * as THREE from 'three';

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
    /**
     * texture や shader の中で用いる変数やその値などを定義できる。
     *
     * 変数名 : { value: 値 } の様に書く。
     */
    uniforms: {
      uTex: {
        value: await loadTex(textureImage),
      },
    },
    vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    fragmentShader: `
        varying vec2 vUv;

        // uniforms で宣言した変数を使用
        uniform sampler2D uTex;

        void main() {

          // uv 座標を用いて、texture の色を定義する
          // texture() でも可。同じ関数
          vec4 texColor = texture2D(uTex, vUv);

          gl_FragColor = texColor;
        }
      `,
    transparent: true,
  });

  // 頂点と shader を紐付ける
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

import * as THREE from 'three';

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

const geometry = new THREE.BoxGeometry();

/**
 * material を shader を用いて記述していく
 */
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.ShaderMaterial({
  /**
   * vertexShader
   *
   * 頂点の位置を操作
   */
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  /**
   * fragmentShader
   *
   * 色を操作
   *
   * vec4(r, g, b, a)
   */
  fragmentShader: `
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(vUv, 0.5, 1.0);
    }
  `,
  // vec4 の a つまり透過度を適用する場合、以下のオプションを有効にする
  transparent: true,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

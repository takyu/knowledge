import * as THREE from 'three';

import vertexShader from '@shader/04_three_advance/010_coordinate/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/010_coordinate/fragment.glsl';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry1 = new THREE.PlaneGeometry(200, 200, 1, 1);
const material1 = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  wireframe: true,
});

const geometry2 = new THREE.PlaneGeometry(150, 150, 2, 2);
const material2 = material1.clone();

const geometry3 = new THREE.PlaneGeometry(30, 30, 10, 10);
const material3 = material1.clone();

const plane1 = new THREE.Mesh(geometry1, material1);
const plane2 = new THREE.Mesh(geometry2, material2);
const plane3 = new THREE.Mesh(geometry3, material3);
// plane1.position.y -= 1;
// plane2.position.x += 1;
// plane2.position.z -= 10;
scene.add(plane1, plane2, plane3);

// camera.lookAt(1, 0, -1)
camera.position.z = 500;
// camera.scale.z = 1.2;

/**
 * object coordinates
 */
printMat(geometry1.attributes.position, 3, 'position1');
printMat(geometry2.attributes.position, 3, 'position2');
printMat(geometry3.attributes.position, 3, 'position3');

/**
 * modelViewMatrix
 *
 * オブジェクトの位置や、カメラ位置などを考慮して座標が設定されている。
 */
printMat(plane1.modelViewMatrix, 4, 'modelViewMatrix1');
printMat(plane2.modelViewMatrix, 4, 'modelViewMatrix2');
printMat(plane3.modelViewMatrix, 4, 'modelViewMatrix3');

/**
 * projectionMatrix
 *
 * カメラの定義に基づいて、画面の見え方を、modelViewMatrix から設定されている。
 */
printMat(camera.projectionMatrix, 4, 'projectionMatrix');

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

function printMat(
  targetMatrix:
    | THREE.BufferAttribute
    | THREE.InterleavedBufferAttribute
    | THREE.Matrix4,
  col = 4,
  label = ''
) {
  const mat1D: number[] =
    'array' in targetMatrix
      ? (targetMatrix.array as number[])
      : targetMatrix.elements;

  setTimeout(() => {
    // 非同期でマトリクスが更新されるため、非同期で実行
    let mat2D = mat1D.reduce((arry2D: number[][], v: number, i: number) => {
      if (i % col === 0) arry2D.push([]);

      const lastArry = arry2D[arry2D.length - 1];
      lastArry.push(v);

      return arry2D;
    }, []);

    loggerOfTypeOfCoordinates(label);

    console.log(
      `%c${label}`,
      'font-size: 1.3em; color: red; background-color: white;'
    );
    console.table(mat2D);
  });
}

function loggerOfTypeOfCoordinates(type: string) {
  let PatternObCoordinate = new RegExp('^position.*$');
  let PatternViCoordinate = new RegExp('^modelViewMatrix.*$');

  if (PatternObCoordinate.test(type)) {
    outputLoggerOfTypeOfCoordinates('Object');
  }
  if (PatternViCoordinate.test(type)) {
    outputLoggerOfTypeOfCoordinates('Viewpoint');
  }
  if (type === 'projectionMatrix') {
    outputLoggerOfTypeOfCoordinates('Clip');
  }
}

function outputLoggerOfTypeOfCoordinates(name: string) {
  console.log(`%c<${name} coordinates>`, 'font-size: 1.1em; color: aqua;');
}

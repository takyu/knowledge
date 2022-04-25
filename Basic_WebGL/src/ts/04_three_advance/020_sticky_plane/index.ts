/**
 * 方法 1
 *
 * 頂点の順番通りに遅延時間を設けていく
 *
 * Part1. position の上から下に向かって、遅延時間を設けていく。
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
import vertexShader from '@shader/04_three_advance/020_sticky_plane/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/020_sticky_plane/fragment.glsl';

/**
 * image file
 */
import textureImage from '@img/aurora.jpg';

init();

// 遅延時間を伴った Geometry を作成する関数
function setupPlaneGeometry(): THREE.PlaneGeometry {
  const wSeg = 30,
    hSeg = 30;
  const geometry = new THREE.PlaneGeometry(600, 300, wSeg, hSeg);

  const delayVertices: number[] = [];
  const maxCount = (wSeg + 1) * (hSeg + 1);

  // 頂点の数： (widthSegment + 1) * (heightSegment + 1)
  for (let i = 0; i < maxCount; i++) {
    // 遅延時間は、0 ~ 1 で格納
    const delayDuration = (1 / maxCount) * i;
    delayVertices.push(delayDuration);
  }

  // 各遅延時間が設定されているのを確認
  console.log(delayVertices);

  // 頂点情報を渡す時のテンプレート
  geometry.setAttribute(
    'aDelay',
    new THREE.Float32BufferAttribute(delayVertices, 1)
  );
  // geometry.attributes['aDelay'] = new THREE.Float32BufferAttribute(
  //   delayVertices,
  //   1
  // );

  return geometry;
}

// texture を取得する関数
async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  const texture = await texLoader.loadAsync(url);

  // texture.wrapS = THREE.MirroredRepeatWrapping;
  // texture.wrapT = THREE.MirroredRepeatWrapping;

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

  const geometry = setupPlaneGeometry();

  // コンソールから確認したいために、window オブジェクトに入れる
  window.geometry = geometry;

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
    wireframe: true,
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

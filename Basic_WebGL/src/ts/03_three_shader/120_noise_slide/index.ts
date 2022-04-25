import * as THREE from 'three';
import GUI from 'lil-gui';
import { gsap } from 'gsap';

import vertexShader from '@shader/03_three_shader/120_noise_slide/vertex.glsl';
import fragmentShader from '@shader/03_three_shader/120_noise_slide/fragment.glsl';

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
        value: new THREE.Vector2(2, 3),
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
  noiseFolder.add(material.uniforms.uNoiseScale.value, 'x', 0, 10, 1);
  noiseFolder.add(material.uniforms.uNoiseScale.value, 'y', 0, 10, 1);
  noiseFolder
    .add(material.uniforms.uProgress, 'value', 0, 1, 0.1)
    .name('progress')
    .listen(); // 他のメソッドなどによる操作で値が変わった場合でも、監視する事ができる。

  // datData に uProgress の値を入れることで、gsap 等で柔軟に変更する事ができる
  const datData = {
    // !! を先頭につけることで、boolean にキャストできる。
    next: !!material.uniforms.uProgress.value,
  };

  noiseFolder.add(datData, 'next').onChange(() => {
    gsap.to(material.uniforms.uProgress, {
      value: +datData.next,
      duration: 2,
      ease: 'power3.inOut',
    });
  });

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

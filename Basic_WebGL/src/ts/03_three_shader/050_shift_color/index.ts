import * as THREE from 'three';

import vertexShader from '@shader/03_three_shader/050_shift_color/vertex.glsl';
import fragmentShader from '@shader/03_three_shader/050_shift_color/fragment.glsl';

/**
 * image files
 */
import textureImage from '@img/aurora.jpg';

init();

// texture を取得する関数
async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  const texture = await texLoader.loadAsync(url);

  /**
   * wrapS, wrapT
   *
   * texture が座標操作などによってずらされ、texture 外の部分が描写される際に、
   * どのように表示するのか指定する。
   * wrapS は、x座標。 wrapTは、y座標。
   *
   * ・ ClampToEdgeWrapping
   * → texture の端の部分（ Edge ）の色情報を補完する。
   *
   * ・ RepeatWrapping
   * → texture の画像の色情報を補完する。
   *
   * ・ MirroredRepeatWrapping
   * → texture の画像の反転画像の色情報を補完する。
   */
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
      uTex: {
        value: await loadTex(textureImage),
      },
      uTick: {
        value: 0,
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

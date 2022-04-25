/**
 * 方法 1
 *
 * 頂点の順番通りに遅延時間を設けていく
 *
 * Part2. position の左上から右下に向かって、対角線上に
 * 遅延時間を設けていく。
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
import vertexShader from '@shader/04_three_advance/030_sticky_plane2/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/030_sticky_plane2/fragment.glsl';

/**
 * image file
 */
import textureImage from '@img/aurora.jpg';

init();

// 0~1 までの値を step 毎に返す
function getValueFromZeroToOne(
  previousValue: number,
  currentIndex: number,
  hSeg: number,
  wSeg: number
) {
  /**
   * 頂点の数で 1 を割っている
   */
  let step = 1 / ((hSeg + 1) * (wSeg + 1));
  return previousValue + step;
}

// 対角線上に頂点を詰めた配列を返す
function getDiagonalVertices(
  hSeg: number,
  wSeg: number,
  getValueFromZeroToOne: Function,
  defaultValue: number
): number[] {
  /**
   * 各 segment 数に対して、頂点の数は、segment + 1
   */
  const hSeg1 = hSeg + 1,
    wSeg1 = wSeg + 1;

  let arry = [],
    currentValue = defaultValue;

  /**
   * @param number i 縦と横の重複しない行数と列
   *
   * 縦方向と横方向をそれぞれ順にループしていく。
   * -1 は、縦方向と横方向の重複分、行列でいう一番左の列を引いている。
   */
  for (let i = 0; i < hSeg1 + wSeg1 - 1; i++) {
    /**
     * @param number j 対角線上に何回ループしているか
     *
     * < Math.min >
     * ・ i + 1 に入る場合
     *  → 折り返し前に入る
     * ・ hSeg1 に入る場合
     *  → 折り返し後に入る
     *
     * < Math.max >
     * ・ 0 に入る場合
     *  → 折り返し前に入る
     * ・ i - wSeg1 + 1 に入る場合
     *  → 折り返し後に入る
     */
    for (
      let j = Math.min(hSeg1, i + 1) - 1;
      j >= Math.max(0, i - wSeg1 + 1);
      j--
    ) {
      /**
       * Three.js で、頂点の配置が上から横の順々にされていくので、
       * それに対応した、対角線上に入れる配列の入れ方をする。
       *
       * j * wSeg1 で、行列上の何行目かを指定
       * i - j で、j * wSeg1 の計算結果で、何行目かを指定した後に、何列目かを指定
       */
      let currentIndex = j * wSeg1 + i - j;

      currentValue = getValueFromZeroToOne(
        currentValue,
        currentIndex,
        hSeg,
        wSeg
      );

      arry[currentIndex] = currentValue;
    }
  }
  return arry;
}

// 遅延時間の行列を表示
function printMat(
  targetMatrix:
    | THREE.BufferAttribute
    | THREE.InterleavedBufferAttribute
    | THREE.Matrix4
    | number[],
  col = 4,
  label = ''
) {
  let mat1D: number[] = [];

  if ('array' in targetMatrix) {
    mat1D = targetMatrix.array as number[];
  } else if ('elements' in targetMatrix) {
    mat1D = targetMatrix.elements;
  } else {
    mat1D = targetMatrix;
  }

  setTimeout(() => {
    // 非同期でマトリクスが更新されるため、非同期で実行
    let mat2D = mat1D.reduce((arry2D: number[][], v: number, i: number) => {
      if (i % col === 0) arry2D.push([]);

      const lastArry = arry2D[arry2D.length - 1];
      lastArry.push(v);

      return arry2D;
    }, []);

    console.log(
      `%c${label}`,
      'font-size: 1.3em; color: red; background-color: white;'
    );
    console.table(mat2D);
  });
}

// 遅延時間を伴った Geometry を作成する関数
function setupPlaneGeometry(): THREE.PlaneGeometry {
  const wSeg = 30,
    hSeg = 30;
  const geometry = new THREE.PlaneGeometry(600, 300, wSeg, hSeg);

  // 対角線上に詰められた遅延時間用の頂点データ
  const delayVertices: number[] = getDiagonalVertices(
    hSeg,
    wSeg,
    getValueFromZeroToOne,
    0
  );
  printMat(delayVertices, wSeg + 1, 'Delay time matrix');

  // 各遅延時間が設定されているのを確認
  console.log(delayVertices);

  // 頂点情報を渡す時のテンプレート
  geometry.setAttribute(
    'aDelay',
    new THREE.Float32BufferAttribute(delayVertices, 1)
  );

  return geometry;
}

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

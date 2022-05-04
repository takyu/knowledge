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
import vertexShader from '@shader/04_three_advance/120_partical_slide/vertex.glsl';
import fragmentShader from '@shader/04_three_advance/120_partical_slide/fragment.glsl';

/**
 * image files
 */
import textureImage1 from '@img/aurora.jpg';
import textureImage2 from '@img/nightsky.jpg';

init();

async function loadTex(url: string) {
  const texLoader = new THREE.TextureLoader();
  const texture = await texLoader.loadAsync(url);
  return texture;
}

function randomNumber(a: number, b: number): number {
  return a + (b - a) * Math.random();
}
// // debug 用に window に入れた
// window.randomNumber = randomNumber;

function getDiagonalVertices(
  hSeg: number,
  wSeg: number,
  getValue: Function,
  defaultValue: number
): number[] {
  const hSeg1 = hSeg + 1,
    wSeg1 = wSeg + 1;

  let arry = [],
    currentValue = defaultValue;

  for (let i = 0; i < hSeg1 + wSeg1 - 1; i++) {
    for (
      let j = Math.min(hSeg1, i + 1) - 1;
      j >= Math.max(0, i - wSeg1 + 1);
      j--
    ) {
      let currentIndex = j * wSeg1 + i - j;

      currentValue = getValue(currentValue, currentIndex, hSeg, wSeg);

      arry[currentIndex] = currentValue;
    }
  }
  return arry;
}

function setupPlaneGeometry(p: TParameterPlaneGeometry): THREE.PlaneGeometry {
  const plane = new THREE.PlaneGeometry(p.width, p.height, p.wSeg, p.hSeg);

  const intensityVertices: number[] = getDiagonalVertices(
    p.hSeg,
    p.wSeg,

    /**
     * camera のポジションを 1000 に設定しているので、それよりも手前に粒子がくるように、
     * 最大 1500 の z の position を設定している。
     */
    () => randomNumber(0, 1500),
    0
  );

  // 頂点情報を渡す時のテンプレート
  plane.setAttribute(
    'aIntensity',
    new THREE.Float32BufferAttribute(intensityVertices, 1)
  );

  console.log(plane);

  return plane;
}

async function init() {
  /**
   * Initialize Scene
   */
  const scene = new THREE.Scene();

  /**
   * Initialize Camera
   */
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    10,
    3000
  );
  camera.position.z = 1000;

  /**
   * Initialize Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.debug.checkShaderErrors = true;
  // renderer.setClearColor(0xffffff);

  /**
   * Insert element to body
   */
  document.body.appendChild(renderer.domElement);

  /**
   * support resize window
   */
  onResize();
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize);
  function onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  /**
   * Initialize OrbitControls and enabled
   */
  const control = new OrbitControls(camera, renderer.domElement);

  /**
   * Initialize PlaneGeometry
   */
  const parameterPlaneGeometry: TParameterPlaneGeometry = {
    width: 600,
    height: 300,
    // wSeg: this.width / 2,
    // hSeg: this.height / 2,
    wSeg: 300,
    hSeg: 150,
  };
  const pGeometry = setupPlaneGeometry(parameterPlaneGeometry);

  /**
   * Initialize Material
   */
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTexCurrent: {
        value: await loadTex(textureImage1),
      },
      uTexNext: {
        value: await loadTex(textureImage2),
      },
      uProgress: {
        value: 0,
      },
      uCameraPositionZ: {
        value: camera.position.z,
      },

      /**
       * Issue.
       *
       * segment をそれぞれ width, height の半分にしているので、
       * 2 より少し大きい数字（例えば、2.2）を渡してあげれば、隙間無く
       * 表示されるはずだが表示されない。。
       *
       * -> Retina であれば、解像度が2倍になるので、その分の隙間を埋めてあげるために
       * 2倍してあげないといけないのかもしれない。。
       */
      uPointSizeRatio: {
        value: 4.4,
      },
    },
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    // wireframe: true,
  });

  const sphere = new THREE.Points(pGeometry, material);

  scene.add(sphere);

  // axis helper
  const axis = new THREE.AxesHelper(2);
  // scene.add(axis);

  // axis helper
  // const axis = new THREE.AxesHelper(500);
  // scene.add(axis);

  /**
   * lil-gui
   */
  const gui = new GUI();

  const folder1 = gui.addFolder('Progress');

  folder1
    .add(material.uniforms.uProgress, 'value', 0, 1, 0.1)
    .name('progress')
    .listen();
  const datObj = { next: !!material.uniforms.uProgress.value };
  folder1
    .add(datObj, 'next')
    .name('animate')
    .onChange(function () {
      gsap.to(material.uniforms.uProgress, {
        value: +datObj.next,
        duration: 3,
        ease: 'none',
      });
    });

  const folder2 = gui.addFolder('PointSize');

  folder2
    .add(material.uniforms.uPointSizeRatio, 'value', 1, 10, 0.1)
    .name('ratio');

  function animate() {
    requestAnimationFrame(animate);

    control.update();

    // material.uniforms.uTick.value++;

    renderer.render(scene, camera);
  }

  animate();
}

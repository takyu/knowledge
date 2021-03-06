/**
 * GLSL
 * OpenGl Shading Language
 */

// context debug tool
import { makeDebugContext } from 'webgl-debug';

// import shader
import vertShaderSource from '@shader/02_webgl/080_glsl_vector/vertex.glsl';
import fragShaderSource from '@shader/02_webgl/080_glsl_vector/fragment.glsl';

window.addEventListener('DOMContentLoaded', () => {
  startup();
});

let gl: WebGLRenderingContext;

function startup() {
  const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;
  if (!canvas) {
    console.error('could not get canvas');
    return;
  }

  gl = createGLContext(canvas);
  if (!gl) {
    console.error('could not get context');
    return;
  }

  const ctxViewportInfo: TCtxViewportInfo = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
  };

  gl = makeDebugContext(gl);

  const shaderProgram = setupShaders();

  const programInfo: Partial<TProgramInfo> = {
    program: shaderProgram,
    attribLocations: {
      position: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      color: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
  };
  programInfo.verticeNum = setupBuffers(programInfo as TProgramInfo);

  draw(programInfo as TProgramInfo, ctxViewportInfo);
}

function createGLContext(canvas: HTMLCanvasElement) {
  let ctx = canvas.getContext('webgl')! as WebGLRenderingContext;
  if (!ctx) {
    console.error('could not create context');
  }
  return ctx;
}

function loadShader(type: number, shaderSource: string) {
  const shader = gl.createShader(type)! as WebGLShader;

  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('could not create shader.' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function setupShaders() {
  const vertexShaderSource = vertShaderSource;
  const fragmentShaderSource = fragShaderSource;

  const vertexShader = loadShader(gl.VERTEX_SHADER, vertexShaderSource)!;
  const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fragmentShaderSource)!;

  const shaderProgram = gl.createProgram()! as WebGLProgram;

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('could not setup shader');
  }

  return shaderProgram;
}

function setupBuffers(pInfo: TProgramInfo) {
  /**
   * ???????????????
   */
  const verticeNum = 3;
  const vertexPositionBuffer = gl.createBuffer();

  const triangleVertices = [1, 0, -1, -1, -1, 1];

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(triangleVertices),
    gl.STATIC_DRAW
  );

  gl.vertexAttribPointer(
    pInfo.attribLocations.position,
    triangleVertices.length / verticeNum,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.enableVertexAttribArray(pInfo.attribLocations.position);

  /**
   * ????????????
   */
  const vertexColorBuffer = gl.createBuffer();

  const colorVertices = [
    // (1, 0)
    1, 0, 0,

    // (-1, -1)
    0, 1, 0,

    // (-1, 1)
    0, 0, 1,
  ];

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(colorVertices),
    gl.STATIC_DRAW
  );

  gl.vertexAttribPointer(
    pInfo.attribLocations.color!,
    colorVertices.length / verticeNum,
    gl.FLOAT,
    false,
    0,
    0
  );

  gl.enableVertexAttribArray(pInfo.attribLocations.color!);

  return verticeNum;
}

function draw(pInfo: TProgramInfo, cvInfo: TCtxViewportInfo) {
  // WebGL????????????????????????????????????????????????????????????????????????
  gl.viewport(cvInfo.x, cvInfo.y, cvInfo.width, cvInfo.height);

  // WebGL????????????????????????????????????????????????????????????
  gl.useProgram(pInfo.program);

  // uniform ????????????????????????????????????
  const uColorLoc = gl.getUniformLocation(pInfo.program, 'uColor');
  const uTickLoc = gl.getUniformLocation(pInfo.program, 'uTick');

  let tick = 0;

  animate();

  function animate() {
    tick++;

    // ????????????????????????????????????0~1???rgba????????????
    gl.clearColor(0, 0, 0, 1);
    // ???????????????????????????????????????
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Uniform ?????????
    gl.uniform3fv(uColorLoc, [1, 0, 0]);
    gl.uniform1f(uTickLoc, tick);

    // ARRAY_BUFFER???????????????????????????????????????????????????
    gl.drawArrays(gl.TRIANGLES, 0, pInfo.verticeNum);

    // callback ?????????????????????
    window.requestAnimationFrame(animate);
  }
}

export {};

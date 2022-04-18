var { makeDebugContext } = require('webgl-debug');

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
  /**
   * gl_position の aVertexPosition に2点の座標が渡ってきている
   *
   * vec4 の最初の三つの引数に (x, y, z) が渡される。
   * 四つめの引数は、行列計算に行われるための数字で、1.0 としておく。
   */
  const vertexShaderSource = `
    precision mediump float;
    attribute vec2 aVertexPosition;

    void main() {
      vec2 p = aVertexPosition;
      gl_Position = vec4(p, 0.0, 1.0);
    }
    `;
  const fragmentShaderSource = `
    precision mediump float;

    void main() {
        gl_FragColor = vec4(1., 0., 0., 1.);
    }
  `;

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
  const verticeNum = 3;
  const vertexPositionBuffer = gl.createBuffer();

  /**
   * クリップ座標
   *
   * WebGL では座標は -1 ~ 1 までの値に限定される
   */
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

  return verticeNum;
}

function draw(pInfo: TProgramInfo, cvInfo: TCtxViewportInfo) {
  // WebGLのコンテキストとキャンパスのサイズを同じにする。
  gl.viewport(cvInfo.x, cvInfo.y, cvInfo.width, cvInfo.height);
  // 背景色を特定の色で指定（0~1のrgbaで指定）
  gl.clearColor(0, 0, 1, 1);
  // 上記で指定した背景色を描写
  gl.clear(gl.COLOR_BUFFER_BIT);
  // WebGLのコンテキストが使用するプログラムを指定
  gl.useProgram(pInfo.program);
  // ARRAY_BUFFERに格納されている頂点を元に画面描写
  gl.drawArrays(gl.TRIANGLES, 0, pInfo.verticeNum);
}

export {};

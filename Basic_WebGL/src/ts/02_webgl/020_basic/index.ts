// js のコードなので、require で対応
var { makeDebugContext } = require('webgl-debug');

/**
 * Shader program の情報
 */
type TProgramInfo = {
  program: WebGLProgram;
  attribLocations: {
    // 頂点データが格納されているインデックスを取得
    position: number;
  };
  verticeNum: number;
};

type TCtxViewportInfo = {
  x: number;
  y: number;
  width: number;
  height: number;
};

let gl: WebGLRenderingContext;

// window.onload = startup;

window.addEventListener('DOMContentLoaded', () => {
  startup();
});

function startup() {
  const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;

  let ctxViewportInfo: Partial<TCtxViewportInfo> = {};

  gl = createGLContext(canvas);
  if (gl) {
    ctxViewportInfo = {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    };
  }

  /**
   * コンソールなどで、エラーの詳細な内容を表示してくれる Debug ライブラリ
   */
  gl = makeDebugContext(gl);

  const shaderProgram = setupShaders();

  const programInfo: Partial<TProgramInfo> = {
    program: shaderProgram,
    attribLocations: {
      position: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
  };
  programInfo.verticeNum = setupBuffers(programInfo as TProgramInfo);

  draw(programInfo as TProgramInfo, ctxViewportInfo as TCtxViewportInfo);
}

/**
 * WebGLコンテキストの作成
 */
function createGLContext(canvas: HTMLCanvasElement) {
  let ctx = canvas.getContext('webgl')! as WebGLRenderingContext;
  if (ctx) {
    // ctx.viewportWidth = canvas.width;
    // ctx.viewportHeight = canvas.height;
  } else {
    console.error('could not get context');
  }
  return ctx;
}

/**
 * シェーダーコードの読み込み
 */
function loadShader(type: number, shaderSource: string) {
  // fragment、またはvertexのシェーダータイプを指定
  const shader = gl.createShader(type)! as WebGLShader;
  // シェーダーコードを指定
  gl.shaderSource(shader, shaderSource);
  // シェーダーコードをバイナリコードにコンパイル
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('could not create shader.' + gl.getShaderInfoLog(shader));
    // 問題のあるコードの場合は削除
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * シェーダーコードをWebGLコンテキストにバインド
 */
function setupShaders() {
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

  // プログラムの作成
  const shaderProgram = gl.createProgram()! as WebGLProgram;

  // プログラムにシェーダーをバインド
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  /**
   * vertexシェーダーとfragmentシェーダーをリンク
   *
   * varying などで値の受け渡しが可能になる
   */
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('could not setup shader');
  }

  return shaderProgram;
}

// 頂点データを格納するバッファを設定
function setupBuffers(pInfo: TProgramInfo) {
  // 頂点の数
  const verticeNum = 3;

  // 位置を管理する頂点の入れ物（バッファ）を作成
  const vertexPositionBuffer = gl.createBuffer();

  // 頂点の位置を指定（-1 ~ 1）
  const triangleVertices = [-1, -1, 1, 1, -1, 1];

  // ARRAY_BUFFERに頂点データを格納するバッファを紐づける
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);

  // ARRAY_BUFFERバッファに頂点データをロードする
  gl.bufferData(
    gl.ARRAY_BUFFER,

    // 必要最低限の浮動小数点を設定、ここでは32bit分の小数で表す
    new Float32Array(triangleVertices),
    gl.STATIC_DRAW
  );

  /**
   * シェーダーコード内から抽出された属性（attribute）と上記でアップした頂点データを紐づける
   *
   * Buffer の参照を使って定義しているので、buffer の操作をしなくても良い
   */
  gl.vertexAttribPointer(
    pInfo.attribLocations.position,

    // 一つの頂点の場所をどれくらいの数で表すか。ここでは、xy 座標系 → vec2
    triangleVertices.length / verticeNum,

    gl.FLOAT,
    false,
    0,
    0
  );

  // 属性を有効化する
  gl.enableVertexAttribArray(pInfo.attribLocations.position);

  return verticeNum;
}

// 画面描写
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

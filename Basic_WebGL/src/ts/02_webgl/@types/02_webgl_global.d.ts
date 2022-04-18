/**
 * Shader program の情報
 */
type TProgramInfo = {
  program: WebGLProgram;
  attribLocations: {
    // 頂点データが格納されているインデックスを取得
    position: number;
    color?: number;
  };
  verticeNum: number;
};

/**
 * context の位置と大きさ
 */
type TCtxViewportInfo = {
  x: number;
  y: number;
  width: number;
  height: number;
};

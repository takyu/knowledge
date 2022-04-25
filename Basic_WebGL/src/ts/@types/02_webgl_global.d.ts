/**
 * webgl-debug
 */
declare module 'webgl-debug' {
  /**
   * makeDebugContext の型情報
   *
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not gl.NO_ERROR.
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *        wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc
   *        The function to call when gl.getError returns an
   *        error. If not specified the default function calls
   *        console.log with a message.
   * @param {!function(funcName, args): void} opt_onFunc The
   *        function to call when each webgl function is called.
   *        You can use this to log all calls for example.
   * @param {!WebGLRenderingContext} opt_err_ctx The webgl context
   *        to call getError on if different than ctx.
   */
  function makeDebugContext(ctx: WebGLRenderingContext): any;
}

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

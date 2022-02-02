import { nodeOps } from './nodeOps.js';
import { createVnode, patch } from './renderer.js'

function createApp(args) {
	// 渡されるプロパティのrender部分を分割代入
	const { render } = args;

	// 返すオブジェクトを用意
	const app = {};

	app.mount = function(selector) {
		// どの部分に挿入するか
		const container = nodeOps.qs(selector);

		// ノード作成
		app.vnode = createVnode();

		// 入れたいDOMのノードを代入(仮想DOMとして保持)
		const nextVnode = render();

		// 更新
		patch(app.vnode, nextVnode, container);
	}

	return app;
}

export { createApp, createVnode as h };
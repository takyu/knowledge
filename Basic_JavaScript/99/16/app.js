import { nodeOps } from './nodeOps.js';
import { createVnode, patch } from './renderer.js'
import { reactive, effect} from './reactive.js'

function createApp(args) {
	// 渡されるプロパティのdata, render部分を分割代入
	const { data, render } = args;

	const app = {};

	app.data = reactive(data());

	app.mount = function(selector) {
		const container = nodeOps.qs(selector);
		effect(() => {
			app.vnode = createVnode();
			const nextVnode = render.call(app);
			patch(app.vnode, nextVnode, container);
		})
	}
	return app;
}

export { createApp, createVnode as h };
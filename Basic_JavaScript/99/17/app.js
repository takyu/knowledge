import { nodeOps } from './nodeOps.js';
import { createVnode, patch } from './renderer.js'
import { reactive, effect, computed} from './reactive.js'

function createApp(args) {
	// 渡されるプロパティのdata, render部分を分割代入
	const { data, render, computed: computedData } = args;

	const app = {};
	app.data = reactive(data());

	app.computed = {};
	for (let prop in computedData) {
		const c = computed(computedData[prop], app);
		app.computed[prop] = c;
	}

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
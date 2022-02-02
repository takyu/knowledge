import { nodeOps } from './nodeOps.js';
import { createVNode, patch } from './renderer.js'
import { reactive, effect, computed} from './reactive.js'
import { createVnode } from '../19/renderer.js';

function createApp(args) {
	const { data, render, computed: computedData, methods } = args;

	const app = {};
	app.data = reactive(data());

	app.methods = methods;

	app.computed = {};
	for (let prop in computedData) {
		const c = computed(computedData[prop], app);
		app.computed[prop] = c;
	}

	app.mount = function(selector) {
		const container = nodeOps.qs(selector);
		app.vnode = createVnode();
		effect(() => {
			const nextVnode = render.call(app);
			patch(app.vnode, nextVnode, container);
			app.vnode = nextVnode;
		})
	}
	return app;
}

export { createApp, createVNode as h };
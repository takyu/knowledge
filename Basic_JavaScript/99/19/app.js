import { nodeOps } from './nodeOps.js';
import { createVNode, patch } from './renderer.js'
import { reactive, effect, computed} from './reactive.js'

function createApp(args) {
	const { data, render, computed: computedData, methods } = args;

	const app = {};

	// data関数のオブジェクトを取得しておく
	const rawData = data();

	// appに渡されるプロパティを別に作る
	const ctx = { ...rawData, ...computedData, ...methods};
	console.log(ctx);

	// 変更をProxyで監視する
	app.publicCtx = new Proxy(ctx, {
		get(target, key, receiver) {
			if(rawData.hasOwnProperty(key)) {
				return app.data[key];
			} else if (computedData.hasOwnProperty(key)) {
				return app.computed[key].value;
			} else {
				return Reflect.get(target, key, receiver);
			}
		},
		set(target, key, value, receiver) {
			if (rawData.hasOwnProperty(key)) {
				const res = app.data[key] = value;
				return res;
			}
		}
	})

	app.data = reactive(rawData);
	app.methods = methods;

	app.computed = {};
	for (let prop in computedData) {
		const c = computed(computedData[prop], app.publicCtx);
		app.computed[prop] = c;
	}

	app.mount = function(selector) {
		const container = nodeOps.qs(selector);
		app.vnode = createVNode();
		effect(() => {
			const nextVnode = render.call(app.publicCtx);
			patch(app.vnode, nextVnode, container);
			app.vnode = nextVnode;
		})
	}
	return app;
}

export { createApp, createVNode as h };
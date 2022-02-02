import { nodeOps } from './nodeOps.js';
import { createVNode, patch } from './renderer.js';
import { reactive, effect, computed} from './reactive.js';

function createApp(args) {
	const { data, render, computed: computedData, methods } = args;
	const app = {};
	const rawData = data();

	app.publicCtx = createPublicCtx(app, rawData, computedData, methods);
	app.data = reactive(rawData);
	app.computed = createComputedData(app, computedData);
	app.mount = createMountFn(app, render); 

	return app;
}

function createPublicCtx(app, rawData, computedData, methods) {
	const ctx = { ...rawData, ...computedData, ...methods};

	return new Proxy(ctx, {
		get(target, key, receiver) {
			if(rawData.hasOwnProperty(key)) {
				return Reflect.get(app.data, key);
			} else if (computedData.hasOwnProperty(key)) {
				return Reflect.get(app.computed, key).value;
			} else {
				return Reflect.get(target, key, receiver);
			}
		},
		set(target, key, value, receiver) {
			if (rawData.hasOwnProperty(key)) {
				const res = Reflect.set(app.data, key, value);
				return res;
			}
		}
	})
}

function createComputedData({ publicCtx }, computedData) {
	const res = {}

	for (let prop in computedData) {
		const c = computed(computedData[prop], publicCtx);
		res[prop] = c;
	}

	return res;
}

function createMountFn(app, render) {
	return function(selector) {
		const container = nodeOps.qs(selector);

		app.vnode = createVNode();
		effect(() => {
			const nextVnode = render.call(app.publicCtx);
			patch(app.vnode, nextVnode, container);
			app.vnode = nextVnode;
		}, { lazy: true })
	}
}

// 使用したい関数を他モジュールから持ってきてそのままexportする
export { nextTick } from './scheduler.js';

export { createApp, createVNode as h };
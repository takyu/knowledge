import { nodeOps } from './nodeOps.js';

function createVnode(type = '', props = {}, children = '') {
	return {
		// タグの種類
		type,
		
		// 属性
		props,

		// 子ノード
		children
	}
}

function patch(n1 /* old status node */, n2 /* new status node */, container) {
	console.log(n1, n2);

	let el;
	if (n1.type !== n2.type) {
		el = nodeOps.create(n2.type);
		nodeOps.append(container, el);
	}
	if (n1.children !== n2.children) {
		nodeOps.html(el, n2.children);
	}
}

export { createVnode, patch } 
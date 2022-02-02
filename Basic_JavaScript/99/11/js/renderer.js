import { nodeOps } from './nodeOps.js';

function createVnode(type = '', props = {}, children = '') {
	return {
		// タグの種類
		type,
		
		// HTMLタグに付与されている属性
		props,

		// 子ノード
		children
	}
}

function patch(n1 /* old status node */, n2 /* new status node */, container) {
	console.log(n1, n2);

	let el;
	if (n1.type !== n2.type) {
		el = n2.el = nodeOps.create(n2.type);
		nodeOps.append(container, el);
	} else {
		el = n2.el = n1.el;
	}

	for (const key in n2.props) {
		const prevProp = n1.props[key];
		const nextProp = n2.props[key];

		if (prevProp !== nextProp) {

			// keyにonで始まる文字列を発見したとき
			if (key.startsWith('on')) {
				console.log(key);

				// 二文字目以降を取る -> substring(2), slice(2)
				// 全部小文字に -> toLowerCase()
				nodeOps.on(el, key.substring(2).toLowerCase(), () => {
					nextProp();
				});
			} else {
				nodeOps.setAttr(el, key, nextProp);
			}
		}
	}

	if (n2.children instanceof Array) {
		for (let i = 0; i < n2.children.length; i++) {
			if (n1.children.hasOwnProperty(i)) {
				patch(n1.children[i], n2.children[i], el);
			} else {
				patch(createVnode(), n2.children[i], el);
			}
		}
	} else {
		if (n1.children !== n2.children) {
			nodeOps.html(el, n2.children);
		}
	}
}

export { createVnode, patch } 
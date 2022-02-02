// ノードを操作するオブジェクト
const nodeOps = {
	qs(selector, scope) {
		return (scope || document).querySelector(selector);
	},
	create(type) {
		return document.createElement(type);
	},
	setAttr(target, key, value) {
		target.setAttribute(key, value);
	},
	append(parent, target) {
		parent.appendChild(target);
	},
	html(target, value) {
		target.innerHTML = value;
	},
	on(target, eventType, callback) {
		target.addEventListener(eventType, () => {
			callback();
		})
	}
}

let i = 0;

//qs -> querySelector()
const body = nodeOps.qs('body');

// create -> createElement()
const div = nodeOps.create('div');

// setAttr -> setAttribute()
nodeOps.setAttr(div, 'class', 'green');

// append -> appendChild()
nodeOps.append(body, div);

const button = nodeOps.qs('#inc', body);

// html -> innerHTML()
nodeOps.html(div, i);

// on -> addEventListener()
nodeOps.on(button, 'click', () => {
	nodeOps.html(div, ++i);
})

console.log(div);
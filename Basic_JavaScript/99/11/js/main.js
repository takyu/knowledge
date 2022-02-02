import { createVnode, patch } from './renderer.js';
import { nodeOps } from './nodeOps.js';

const container = nodeOps.qs('#app');

const prevVNode = createVnode();

const nextVNode1 = createVnode('div', {class: 'green'}, [
	createVnode('div', { class: 'green'}, 'hello'),
]);
const nextVNode2 = createVnode('div', {class: 'green'}, [
	createVnode('div', { class: 'green'}, 'bye'),
]);

patch(prevVNode, nextVNode1, container);
console.log('%cmain:', 'color: red; font-size: 2em', nextVNode1);
patch(nextVNode1, nextVNode2, container);
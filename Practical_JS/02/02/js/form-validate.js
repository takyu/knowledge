import { nodeOps as ns } from './nodeOps.js';

init();
function init() {
	// $はDOMの目印
	const $input = ns.qs('.validate-target');
	ns.on($input, 'input', () => {
		alert('値が変更されました。');
	})
	console.dir($input);
}
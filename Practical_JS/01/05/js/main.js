import { nodeOps as ns } from './nodeOps.js';
import { ScrollObserver as scob } from './scroll.js';

ns.on(document, 'DOMContentLoaded', _ => {

	const cb = function (el, isIntersecting) {
		if (isIntersecting) {
			ns.clta(el, 'inview');
		}
	}

	const so = new scob('.cover-slide', cb, {once: true});

});
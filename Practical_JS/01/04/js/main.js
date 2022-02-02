import { nodeOps as ns } from './nodeOps.js';
import { ScrollObserver as scob } from './scroll.js';
import { TweenTextAnimation as txAma } from './text-animation.js';

ns.on(document, 'DOMContentLoaded', _ => {

	const cb = function (el, isIntersecting) {
		if (isIntersecting) {
			const ta = new txAma(el);
			ta.animate();
		}
	}

	const so = new scob('.tween-animate-title', cb, {once: true});

});
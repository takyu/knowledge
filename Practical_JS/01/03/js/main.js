import { nodeOps as ns } from './nodeOps.js';
import { TweenTextAnimation as txAma } from './text-animation.js';

ns.on(document, 'DOMContentLoaded', _ => {

	const els = ns.qsAl('.tween-animate-title');

	const cb = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const ta = new txAma(entry.target);
				ta.animate();
				observer.unobserve(entry.target);
			}
		});
	};

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0
	};
	
	const io = new IntersectionObserver(cb, options);

	// ひとつずつの要素を監視
	els.forEach(el => io.observe(el));
});
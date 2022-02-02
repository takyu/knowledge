import { nodeOps } from "./nodeOps.js";

class TextAnimation {
	constructor(el) {
		this.DOM = {}
		this.DOM.el = nodeOps.qs(el);
		this.chars = this.DOM.el.innerHTML.trim().split("");
		this.DOM.el.innerHTML = this._splitText()
	}
	_splitText() {
		return this.chars.reduce((acc, curr) => {
			curr = curr.replace(/\s+/, '&nbsp;');
			return `${acc}<span class='char'>${curr}</span>`;
		}, "");
	}
	animate() {
		this.DOM.el.classList.toggle('inview');
	}
}
class TweenTextAnimation extends TextAnimation {
	constructor(el) {
		super(el);
		console.log(this.DOM.el);
		this.DOM.chars = nodeOps.qsAl('.char', this.DOM.el);
	}

	animate() {
		this.DOM.el.classList.add('inview');
		this.DOM.chars.forEach((c, i) => {
			gsap.to(c, .6, {
				ease: Back.easeout, /* timing-function */
				delay: i * .05,
				startAt: {
					y: '-50%',
					opacity: 0
				},
				y: '0%',
				opacity: 1
			})
		});
	}
}

nodeOps.on(document, 'DOMContentLoaded', () => {
	const ta = new TweenTextAnimation('.tween-animate-title');
	ta.animate();
});

import { nodeOps as ns } from './nodeOps.js';

class MobileMenu {
	constructor() {
		this.DOM = {};
		this.DOM.btn = ns.qs('.mobile-menu__btn');
		this.DOM.container = ns.qs('#global-container');
		this.eventType = this._getEventType();
		this._addEvent();
	}

	_getEventType() {
		/*
		const isTouchCapable =
			"ontouchstart" in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch) ||
			navigator.maxTouchPoints > 0 ||
			window.navigator.msMaxTouchPoints > 0;

		return isTouchCapable ? "touchstart" : "click";
		*/
		if (Modernizr.touchevents) {
			console.log('touchestart registard.')
			return "touchstart";
		} else {
			console.log('click registard.')
			return "click";
		}
	}

	_toggle() {
		ns.cltt(this.DOM.container, 'menu-open');
	}

	// イベント登録用メソッド
	_addEvent() {
		ns.on(this.DOM.btn, 'click', this._toggle.bind(this));
	}
}

new MobileMenu();
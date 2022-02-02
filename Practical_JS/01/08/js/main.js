import { nodeOps as ns } from "./nodeOps.js";

class MobileMenu {
	constructor() {
		this.DOM = {};
		this.DOM.btn = ns.qs('.mobile-menu__btn');
		this.DOM.cover = ns.qs('.mobile-menu__cover');
		this.DOM.container = ns.qs('#global-container');
		this.eventType = this._getEventType();
		this._addEvent();
	}

	_getEventType() {
		if (Modernizr.touchevents) {
			return "touchstart";
		} else {
			return "click";
		}
	}
	
	_toggle() {
		ns.cltt(this.DOM.container, 'menu-open');
	}
	
	_addEvent() {
		ns.on(this.DOM.btn, this.eventType, this._toggle.bind(this));
		ns.on(this.DOM.cover, this.eventType, this._toggle.bind(this));
	}
}

new MobileMenu();
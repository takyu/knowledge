const nodeOps = {

	qs(selector, scope) {
		return (scope || document).querySelector(selector);
	},
	qsAl(selector, scope) {
		return (scope || document).querySelectorAll(selector);
	},
	html(target, value) {
		target.innerHTML = value;
	},
	on(target, eventType, callback) {
		target.addEventListener(eventType, () => callback());
	},
	rmOn(target, eventType, callback) {
		target.removeAddEventListener(eventType, () => callback());
	}

}

export { nodeOps };
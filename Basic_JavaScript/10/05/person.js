export class Person {
	
	constructor(name) {
		this._name = name;
	}
	
	hello() {
		console.log(`hello ${this._name}`);
	}
}

// wmはexportされていないためアクセスされない
const wm = new WeakMap();

export class Person2 {

	constructor(name) {
		wm.set(this, {
			name
		})
	}

	hello() {
		console.log(`hello ${wm.get(this).name}`);
	}
}
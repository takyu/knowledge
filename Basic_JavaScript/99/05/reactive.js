const handler = {
	get(target, key, receiver) {
		const res = Reflect.get(target, key, receiver);
		console.log('%c[reactive: get]', 'color: green;', target, key, res);
		track(target, key);
		return res;
	},
	set(target, key, value, receiver) {
		const res = Reflect.set(target, key, value, receiver);
		console.log('%c[reactive: set]', 'color: red;', target, key, value);
		trigger(target, key);
		return res;
	}
}

function reactive(target) {
	return new Proxy(target, handler)
}

let activeEffect = null;
function effect(fn) {
	activeEffect = fn;
	activeEffect();

	// 一番最後に登録したコールバック関数(fn)が残っているため初期化
	activeEffect = null;
}

const targetMap = new WeakMap();
function track(target, key) {

	// 登録する関数がない場合、早期処理で抜ける
	if (!activeEffect) {
		return;
	}
	
	let depsMap = targetMap.get(target);
	if (!depsMap) {
		/*
			depsMap = new Map();
			targetMap.set(target, depsMap);
		*/
		targetMap.set(target, (depsMap = new Map()));
	}

	// 一つのオブジェクトに対して複数の関数を登録できるようにする
	let deps = depsMap.get(key);
	if (!deps) {
		depsMap.set(key, deps = new Set());
	}

	// 該当関数が重複していないか
	if (!deps.has(activeEffect)) {
		console.log('%c[effect: register]', 'color: purple;', target, key, activeEffect);
		deps.add(activeEffect);
	}

	// depsMap.set(key, dep);
}

function trigger(target, key) {
	const depsMap = targetMap.get(target);
	if(!depsMap) {
		return;
	}
	const deps = depsMap.get(key);
	if (!deps) {
		return;
	}
	deps.forEach(e => e());
}

export { effect, reactive };
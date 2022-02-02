const wm = new WeakMap();

let obj = {};

wm.set(obj, 'value1');

obj = null;
obj = {};
/*
	上の二つの操作で、一度セットしたkeyとvalueのペアは2度と使われなくなるので、
	ガベージコレクションが働いて削除される。
	-> このように使わなくなった関数や変数の参照を削除することをガベージコレクションという。
*/
console.log(wm.get(obj));

let obj2 = {};

wm.set(obj2, 'value2');

console.log(wm.has(obj2));
console.log(wm.delete(obj2));
console.log(wm.has(obj2));

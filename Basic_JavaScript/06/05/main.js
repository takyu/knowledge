// 関数コンストラクター
const fn1 = new Function('a', 'b', 'return a + b');

function fn2(a, b) {
	return a + b;
}

const result = fn1(1, 2);
console.log(result);

// 関数はFunctionオブジェクトから作られている->関数は実行可能なオブジェクトであることの証明
console.log(fn2 instanceof Function);

// 関数コンストラクターのスコープはグローバルスコープである
let d = 0;
function fn3() {
	let d = 1;
	const fn4 = new Function('a', 'b', 'return a * b * d');
	return fn4;
}

const f = fn3();
const result2 = f(1, 2);
console.log(result2);

// 関数宣言と関数コンストラクターは明確に区別する
const obj = new function() {
	this.a = 0;
}
console.log(obj);

const fn5 = new Function('this.a = 0;');
console.log(fn5);

// オブジェクトにするには
const obj2 = new fn5();
console.log(obj2);
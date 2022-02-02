a();

function a() {
	console.log(e);
	var e = 1;

	f();
	function f() {
		console.log('f is called');
	}
	console.log('a is called');
}

console.log(b);

// varを見つけたらその変数をまずundefinedで初期化してくれる
var b = 0;

equation();

// 関数式
const equation = function a() {
	console.log(e);
	var e = 1;

	f();
	function f() {
		console.log('f is called');
	}
	console.log('a is called');
}

console.log(c);
console.log(d);

// let, constはundefinedで初期化しない
let c = 0;
const d = 0;
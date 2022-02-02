function fn(a, b) {
	console.log(a, b);
}

fn(0, 1);
fn(null, 1);
fn(1);

// 同じ関数名だと、後から書いたやつが実行される点に注意
function fn(a, b) {
	console.log(2);
}

// 重複を避けるために、関数式を利用する
const fn1 = function fn(a, b) {
	console.log(a, b);
}

fn1(1);

// デフォルト引数
function fn2(a, b=1) {
	console.log(a, b);
}

fn2(1);

/*
意図的に空であることを示したい時は null を使う
undefinedはコンピューターが付けるからと言う意味なので、使わない。
*/
fn2(1, null);
fn2(1, undefined);

// この時点で、cはundefined(宣言しただけ)
let c;
fn2(1, c);

// 関数のaruguments
function fn3() {

	// 関数のargumentsには呼び出し元の実引数が渡ってくる
	const a = arguments[0];
	const b = arguments[1];
	console.log(arguments);
	console.log(a, b);
};

fn3(1, 2);

// Rest Parameters(ES6)
function fn4(...args) {
	const a = args[0];
	const b = args[1];
	console.log(args);
	console.log(a, b);
};

fn4(1, 2, 3);

// return
function fn5() {
	const a = arguments[0];
	const b = arguments[1];
	console.log(arguments);
	console.log(a, b);
	return a;
};

let d = fn5(1, 2);
console.log(d);

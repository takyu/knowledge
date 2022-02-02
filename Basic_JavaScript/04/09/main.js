// プリミティブ型の関数への引き渡しは、元に影響を与えない
let a = 0;

function fn1(arg1) {
	arg1 = 1;
	console.log(a, arg1);
}

let arg1 = a;
arg1 = 1;
console.log(a, arg1);

fn1(a);

// オブジェクトの関数への引き渡しは、元に影響を与える
let b = {
	prop: 0
}

function fn2(arg2) {
	arg2.prop = 1;
	console.log(b, arg2);
} 

fn2(b);

function fn3(arg3) {
	arg3 = {};
	console.log(b, arg3);
}

fn3(b);
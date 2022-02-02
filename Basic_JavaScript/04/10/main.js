const a = {
	prop: 0
}

// 基本的にオブジェクトの変数名と一緒にする。
let { prop } = a;

prop = 1;

console.log(prop);

// 変えたい場合
const b = {
	prop: 0
}

// オブジェクトのように書く	
let { prop: c } = b;

c = 1;

console.log(c);

let d = {
	prop: 0
}

function fn1(obj) {
	let { prop } = obj;
	prop = 1;
	console.log(obj, prop);
}

fn1(d);

// { prop }をそのまま引数に渡すこともできる
let e = {
	prop: 0
}

function fn2({ prop }) {
	prop = 1;
	console.log(e, prop);
}

fn2(e);

const f = {
	prop1: {
		prop2: 0
	}
}

let { prop1 } = f;

prop1.prop2 = 1;

console.log(f, prop1)

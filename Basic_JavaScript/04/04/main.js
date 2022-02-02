function printBoolean(val) {
	console.log(Boolean(val));
}

let a = 0;
printBoolean(a);

let b = ""
printBoolean(b);

let c = 0n;
printBoolean(c);

let d = null;
printBoolean(d);

// 宣言した段階でundefined
let e;
printBoolean(e);

// NaNは計算結果が数値として期待されるが、数値として計算できないもの(Not a Number)
let f = NaN;
printBoolean(f);

let g = parseInt("");
console.log(g);
printBoolean(g);

// truethyかどうか
if (a) {
	console.log('truethy');
} else {
	console.log('falsy');
}

// falsyかどうか
if (!a) {
	console.log('falsy');
} else {
	console.log('truethy');
}
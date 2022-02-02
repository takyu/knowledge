let a = 1 + 2;
console.log(a);

let b = 1 + 2 * 3;
console.log(b);

let c = (1 + 2) * 3;
console.log(c);

let d = 0;

/*
後置インクリメント
下記は、 d = (e = d) + 1; 
*/
e = d++;
console.log(e, d);

let f = 0;

/*
前置インクリメント
下記は、 g = f = g + 1;
*/
let g = ++f;
console.log(g, f);

function fn() {
	let a = 0;
	return a++;
}
console.log(fn() * 5);

// 0がfalseなのでその否定はtrueの1、暗黙の型変換によりtrueが数字の1に変換され、演算される
console.log(!fn() * 5);

// 0 * 5は0、の否定なのでtrueが返る
console.log(!(fn() * 5));
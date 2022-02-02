// 'use strict'

// windowオブジェクトに格納
a = 0;
console.log(a);

// windowオブジェクトに格納
function fn() {
	//'use strict'
	b = 1;

	// 予約語は使えない
	// let implements, interface, package;
}
fn();
console.log(b);

/*
通常なら、windowオブジェクトが返されるが、strictモードだとundefinedが返される。
-> 無駄なオブジェクトの部分を露出しないようにしている
-> セキュア面を向上させている
*/
function fn2() {
	//'use strict'
	return this;
}
console.log(fn2());

/*
通常であればthisを束縛して渡してthisを返すとその渡される型にラップされた状態で
のオブジェクトが返却されるが、strictモードであればプリミティブ型の値も参照先
として保持し、それが返ってくる。
*/
function fn3() {
	'use strict'
	return this;　// プリミティブ型の数字としての2
}
console.log(fn3.call(2));

function fn3NonStrict() {
	return this; // Numberオブジェクト型にラップされた2
}
console.log(fn3NonStrict.call(2));
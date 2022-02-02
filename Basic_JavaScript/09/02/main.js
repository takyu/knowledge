const moduleA = (function () {
	console.log('IIFE called');

	let privateVal = 1;
	let publicVal = 10;

	function publicFn() {
		console.log('publicFn called: ' + publicVal);
	}

	function privateFn() {

	}

	return {
		publicFn,
		publicVal
	}
})();

moduleA.publicFn();
moduleA.publicFn();
console.log(moduleA.publicVal++);
console.log(moduleA.publicVal++);

/*
publicValはプリミティブ型であるので、値をコピーされたものを変更している
-> moduleAの中のオブジェクトに対する変数publicValは変化しない。
*/
moduleA.publicFn();

// 分割代入で表す
const moduleB = (function({ publicVal:val, publicFn:fn}) {
	fn();
	fn();
	console.log(val++);
	console.log(val++);
	fn();
})(moduleA);

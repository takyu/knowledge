function a() {
	console.log('called');
}

a();

// IIFE
(function() {
	console.log('called');
})();

/*
()には二つ意味があり、
後ろのカッコは、関数の実行。
前のカッコは、グループ化(優先度、数式で言う())という違いがある。
今回は、特に何もしない()である(aを実行するだけ)。
*/
(a)();

// 関数式の場合は()をつけなくても良い。
let b = function() {
	console.log('called');
}();

let c = function(d) {
	console.log('called ' + d);
	return 0;
}(10);


let e = (function() {
	console.log('e is called');

	let privateVal = 1;
	let publicVal = 10;

	function privateFn() {
		console.log('privateFn is called');
	}

	function publicFn() {
		console.log('publicFn is called ' + privateVal++ + 'times');
	}

	return {
		// 返したい時の名前が一緒ならば省略できる。
		// privateVal: privateValと一緒
		publicVal,
		publicFn
	};
})();

console.log(e.publicVal);
e.publicFn();
e.publicFn();
e.publicFn();
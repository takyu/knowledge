// 関数aはオブジェクトである
function a() {
	console.log('hello');
}

a.prop = 0;
a.method = function() {
	console.log('method');
}

// ()は実行可能なオブジェクトを実行する、と言う意味
a();
a.method();
console.log(a.prop);
function hello(name) {
	console.log('hello' + name);
}

function bye() {
	console.log('bye');
}

function fn(cb) {
	cb('Tom');
}

// 関数はオブジェクトなので引数として渡すことが可能
fn(hello);
fn(bye);

// 無名関数も渡せる
fn(function(name) {
	console.log('goodmorning ' + name)
})

setTimeout(hello, 2000);
new Promise(function(resolve, reject) {
	console.log('promise');
	// thenの関数が実行
	// resolve('hello');

	// catchの関数が実行
	// reject('bye');

	// setTimeoutを用いる
	setTimeout(() => {
		resolve('hello');
		// reject('bye');
	}, 1000);

// thenは非同期で渡るためにコールスタックが空になった状態で実行される
}).then(function(data) {
	console.log('then1 ' + data);

	return data;
}).then(function(data) {
	console.log('then2 ' + data);

	return data;
}).then(function(data) {
	console.log('then3 ' + data);

	// catchに投げる
	// throw new Error();

}).catch(function(data) {
	console.log('catch ' + data);

// 引数は受け取れない
}).finally(function(data) {
	console.log('finally ' + data);
})

console.log('global end');
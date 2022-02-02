function sleep(val) {

	// rejectに当たるものがない場合書かなくても良い
	return new Promise(function(resolve) {
		setTimeout(() => {
			console.log(val++);
			resolve(val);
		}, 1000);
	});
}

sleep(0).then((val) => {

	// returnは必ずPromiseのインスタンス(sleepの返り値)を返す -> 非同期の処理にならない
	return sleep(val);
}).then((val) => {

	// returnは必ずPromiseのインスタンス(sleepの返り値)を返す -> 非同期の処理にならない
	return sleep(val);
}).then((val) => {

	// returnは必ずPromiseのインスタンス(sleepの返り値)を返す -> 非同期の処理にならない
	return sleep(val);
}).then((val) => {

	// returnは必ずPromiseのインスタンス(sleepの返り値)を返す -> 非同期の処理にならない
	return sleep(val);
})
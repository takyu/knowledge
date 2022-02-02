const sleep = (callback, val) => {
	setTimeout(() => {
		console.log(val++);
		callback(val);
	}, 1000)
}

// 非同期の処理を順番に実行することができる
sleep((val) => {
	sleep((val) => {
		sleep((val) => {
			sleep((val) => {

			}, val)
		}, val)
	}, val)
}, 0)
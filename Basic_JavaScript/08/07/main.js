function sleep(val) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			console.log(val++);
			//resolve(val);
			reject(val);
		}, val * 300);
	});
}

// allSettledはcatchに処理がうつらない
//Promise.allSettled([sleep(2), sleep(3), sleep(4)])
// allの中身が終わってから次のthenが呼び出される
Promise.all([sleep(2), sleep(3), sleep(4)])
.then((data) => {

	// resolveで使われたvalが配列として戻ってくる
	console.log(data);
}).catch((e) => {
	console.log(e);
})


//sleep(0).then((val) => {
//	return sleep(val);
//}).then((val) => {
//	/*
//	Promise.allメソッドは、resolveで渡された値の配列を作成し、次のthenに渡す。
//	Promise.raceメソッドは、resolveで渡された最初の値を直ちに次のthenに渡す。
//	Promise.allSettledメソッドは、resolveで渡された値と、statusの二つのプロパティ
//	を持つオブジェクトが返される。
//	statusには、resolveが呼ばれた際は"fulfilled"、
//	rejectが呼ばれた際は"rejected"のどちらかがおさめられる。
//	*/
//	// 反復可能オブジェクト(今回は配列)にPeomiseのインスタンスを返している
//	// return Promise.all([sleep(10), sleep(15), sleep(20)]);
//	// return Promise.race([sleep(10), sleep(15), sleep(20)]);
//	return Promise.allSettled([sleep(10), sleep(15), sleep(20)]);
//}).then((val) => {
//	console.log(val);
//	return sleep(val);
//}).then((val) => {
//	return sleep(val);
//})
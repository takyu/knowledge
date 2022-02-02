function sleep(val) {
	return new Promise(function(resolve) {
		setTimeout(() => {
			console.log(val++);
			resolve(val);
		}, 1000);
	});
}

/*
sleep(0).then((val) => {
	return sleep(val);
}).then((val) => {
	return sleep(val);
}).then((val) => {
	return sleep(val);
}).then((val) => {
	return sleep(val);
})
*/

async function init() {
	let val = await sleep(0);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);

	// console.log(val);
}

let res = init();

// asyncの関数はPromiseを返す
console.log(res);

async function init2() {
	let val = await sleep(10);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);
	return val;
}

// Promiseが返されるためにthenメソッドで繋げることができる
init2().then((val) => {
	console.log('hello ' + val);
});

async function init3() {
	let val = await sleep(20);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);
	val = await sleep(val);
	throw new Error();
	return val;
}

// error処理も可能
init3().then((val) => {
	console.log('hello ' + val);
}).catch((e) => {
	console.error(e);
});
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function() {

	// オブジェクトのプロパティを配列にしてkeysに保管
	const keys = Object.keys(this);
	console.log(keys);
	
	// リターンされるオブジェクト内で使うためにthisを変数に保存
	let _this = this;

	let i = 0;
	return {
		next() {
			// プロパティ名を順々に取得
			let key = keys[i++];

			// 渡されてきたプロパティにアクセスできている
			console.log(_this);

			return {
				done: i > keys.length,
				value: [key, _this[key]]
			}
		}
	}
}

//const items = Object.entries(obj);
//for (let item of items) {
//	console.log(item);
//}

for (let [k, v] of obj) {
	console.log(k, v);
}

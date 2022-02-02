const s = Symbol();

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'hello'
}


Object.prototype.method = () => {}

// ディスクリプターの変更
Object.defineProperty(Object.prototype, 'method', {
	enumerable: false
})

// 仮にprop1のenumerableをfalseにすると
Object.defineProperty(obj, 'prop1', {
	enumerable: false
})

// 権限確認
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'method'));

// ビルトインメソッドは基本的にenumerableがfalseになっている
console.log(Object.getOwnPropertyDescriptors(Object.prototype, 'hasOwnProperty'));

// Symbolのenumerableはtrueである
console.log(Object.getOwnPropertyDescriptors(obj, s));

for (let key in obj) {

	/*	
	プロトタイプに含まれているメソッドは継承したモノ -> つまり自分自身は持っていない -> ifで逃す
	これをするとメソッドのディスクリプターを変更する必要がなくなる(l:10-13)
	*/
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);
	}
}

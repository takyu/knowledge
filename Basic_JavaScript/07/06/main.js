const arry = ['a', 'b', 'c'];

arry[4] = 'e';

// プロトタイプのメソッドなどは表示しない
Object.prototype.method = () => {};

// enumerableに依存しない
Object.defineProperty(arry, 0 /* arryの添字 */, {
	enumerable: false
})

// ほんとにfalseになってるか確認
console.log(Object.getOwnPropertyDescriptor(arry, 0));

for (let v of arry) {
	console.log(v);
}

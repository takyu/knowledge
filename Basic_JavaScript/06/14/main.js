const s = Symbol('hello');
const s2 = Symbol('hello');
console.log(typeof s);
console.log(s);
console.log(s2);

// 一意の値なので等しくない
console.log(s === s2);

const str = new String('Tom');
console.log(str);

/*
	開発者が独自に作成したメソッドとあらかじめbuilt-in objectにある
	メソッドが競合する可能性がある。
	そこで、同じ名前のメソッドでも異なる結果が返るようにSymbolが導入された
	シンボルをキーにしたプロトタイプが追加される。
*/

// シンボルをキーにしたプロトタイプが追加される。ブラケット記法
String.prototype[s] = function() {
	return 'hello ' + this;
}
String.prototype[s2] = () => {

}

const tom = "Tom";
const res = tom[s]();
console.log(res);
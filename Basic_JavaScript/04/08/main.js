const a = 'hello';
// a = 'bye';

const b = {
	prop: 'hello'
}
// オブジェクトへの参照の切り替えはできない。
// b = {}

// オブジェクトの中のプロパティのキーは変更できる
b.prop = 'bye';
console.log(b);
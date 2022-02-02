function F1(a, b) {
	this.a = a;
	this.b = b;
}

function F2(a, b) {
	this.a = a;
	this.b = b;
	/*
		Objectは本来、objectコンストラクタを用いてインスタンス化している
		const result = new Object();
		result.a = 1;
		return result;

		↑のresultは下のオブジェクトを返しているのと同じ
	*/
	return {a: 1};
}

// メソッド追加
F1.prototype.c = () => {};
F2.prototype.c = () => {};

const instance1 = new F1(1, 2);
const instance2 = new F2(1, 2);

console.log(instance1);
console.log(instance2);

console.log(instance1 instanceof F1);

// 新しいオブジェクトを返している->'false'
console.log(instance2 instanceof F2);

console.log(instance1.__proto__ === F1.prototype);

// instanceの__proto__は、Objectのprototypeと同じ
console.log(instance2.__proto__ === Object.prototype);

// インスタンスはオブジェクトのprototypeを継承している
console.log(instance1 instanceof Object);
console.log(instance2 instanceof Object);

function fn(arg) {

	// argに配列が渡ってきた場合
	if (arg instanceof Array) {
		arg.push('value');
	// オブジェクトが渡ってきた場合
	} else {
		arg['key'] = 'value';
	}

	console.log(arg);
}

fn( {} );
fn( [] );
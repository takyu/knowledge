class C {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
}

// 従来
const obj1 = new C(1, 2);
console.log(obj1);

/**
 * @param C コンストラクタ関数
 * @param [] 渡したい引数を配列にして渡す
 */
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj2);

/**
 * 対応するプロパティを持っているか 
 * @return boolean
 */
console.log('c' in obj1);
console.log(Reflect.has(obj1, 'c')); // false
console.log(Reflect.has(obj1, 'b')); // true

obj3 = {};
console.log(obj3);

/**
 * オブジェクトへのプロパティ追加
 * ES6からはReflectからdefinePropertyするよう推奨されている
 * @return boolean
 */
if (Reflect.defineProperty(obj3, 'c', {value: 3})) {
	console.log('c created!');
} else {
	console.log('problem creating c');
}

console.log(obj3);

const bob = {
	name: 'Bob',
	_hello() {
		console.log(`hello ${this.name}`);
	}
}

const tom = {
	name: 'Tom',
	_hello() {
		console.log(`hello ${this.name}`);
	},
	get hello() {
		console.log(this);
		return this._hello();
	}
}

tom.hello; // 

// getの第3引数のreceiverはオブジェクトを渡すのでthisをバインドできる。
Reflect.get(tom, 'hello', bob);
function Person1(name, age) {
	this._name = name;
	this._age = age;
}

// スタティックメソッド
Person1.hello = () => {
	console.log('hello');
}

Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
	get: function() {
		return this._name;
	},
	set: function(val) {
		this._name = val;
	}
});

const p1 = new Person1('Bob', 223);
console.log(p1.name);

p1.name = "Tom";
console.log(p1.name);

// 以下ES6で表記
class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// getter
	get name() {
		return this._name;
	}

	// setter
	set name(val) {
		this._name = val;
	}

	static hello() {
		console.log('hello');
	}
}

const p2 = new Person2('Bob', 33);

// p2のコンストラクターがPerson2と等しい、class表記のコンストラクターであっても関数なのは変わりない
console.log(p2.constructor === Person2);

// 静的メソッドまたはスタティックメソッド
Person2.hello();

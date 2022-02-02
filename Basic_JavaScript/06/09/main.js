/*
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.hello = function() {
	console.log('hello ' + this.name);
}
*/

// 上のコンストラクタ関数をクラス表記に
class Person {

	// コンストラクター
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	// コンストラクター関数のプロトタイプになる
	hello() {
		console.log('hello ' + this.name);
	}
}

const bob = new Person('Bob', 18);
console.log(bob);
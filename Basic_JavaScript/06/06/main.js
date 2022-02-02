function Person(name, age) {
	this.name = name;
	this.age = age;

	// helloメソッドに囲まれている関数を定義 -> thisはPersonオブジェクト
	this.hello = () => {
		console.log('Ownproperty: Hello ' + this.name);
	}
}

Person.prototype.hello = function() {
	console.log('Person: Hello ' + this.name);
}

Object.prototype.hello = function() {
	console.log('Object: Hello ' + this.name);
}

const bob = new Person('Bob', 18);
console.log(bob);
bob.hello();

// 該当のプロパティがあるかどうか
console.log(bob.hasOwnProperty('name'));
console.log(bob.hasOwnProperty('hello'));

const tim = {
	name: "Tim",
	age: 30,

	// helloメソッドを定義 -> thisはwindowオブジェクト
	hello: () => {
		console.log(this);
		console.log('hello ' + this.name);
	}
}

console.log(tim);
tim.hello();
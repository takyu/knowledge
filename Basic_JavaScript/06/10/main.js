/*
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.hello = function() {
	console.log('hello ' + this.name);
}
Person.prototype.bye = function() {
	console.log('bye ' + this.name);
}
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello() {
		console.log('hello ' + this.name);
	}
	bye() {
		console.log('bye ' + this.name);
	}
}

/*
function Japanese(name, age, gender) {
	// 継承
	Person.call(this, name, age);

	this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);
console.log(Japanese.prototype);

Japanese.prototype.hello = function() {
	console.log('こんにちは ' + this.name);
}
Japanese.prototype.bye = function() {
	console.log('バイ ' + this.name);
}
*/

// 継承
class Japanese extends Person {
	constructor(name, age, gender) {
		super(name, age);
		this.gender = gender;
	}

	hello() {
		console.log('こんにちは' + this.name);
	}
	bye() {
		console.log('ばい ' + this.name);
	}
}

const taro = new Japanese('Taro', 18, "Male");
const bob = new Person('Bob', 20);

console.log(taro);
console.log(bob);

taro.hello();
taro.bye();
bob.hello();
bob.bye();
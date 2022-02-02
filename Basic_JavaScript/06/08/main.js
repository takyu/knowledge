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

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();
taro.bye();
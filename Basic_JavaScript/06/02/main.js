function person(name, age) {
	this.name = name;
	this.age = age;
	this.hello = function() {
		console.log('hello ' + this.name);
	}
}


person.prototype.hello = function() {
	console.log('hello ' + this.name);
}

const bob = new person('Bob', 18);
const tom = new person('Tom', 33);
const sum = new person('Sum', 20);

console.log(bob);
console.log(tom);
console.log(sum);

bob.hello();
tom.hello();
sum.hello();
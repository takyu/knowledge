// コンストラクター関数と一般の関数を明確に区別するために、先頭を大文字にする
function person(name, age) {
	this.name = name;
	this.age = age;
}

const bob = new person('Bob', 18);
const tom = new person('Tom', 33);
const sum = new person('Sum', 20);

console.log(bob);
console.log(tom);
console.log(sum);
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);

		// instanceを返す
		return this;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old`);
		return this;
	}

	shakehands(person) {
		console.log(`${this.name} shale hands with ${person.name}`);
		return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}`);
		return this;
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

/*
インスタンスに対してメソッドを実行したいので、
続くメソッドの処理にインスタンスを渡してあげるために、
各メソッド内で生成されているインスタンスを返してあげる(this)。
*/

bob.hello(tim)
	.introduce()
	.shakehands(tim)
	.bye(tim);

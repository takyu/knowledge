window.name = "John";

// 無名関数
const person = {
	name: 'Tom',
	hello: function() {
		console.log('Hello ' + this.name);
	}
}
person.hello()

// 上の無名関数表記をES6で表す
const personES6 = {
	name: 'Tom',
	hello() {
		console.log('Hello ' + this.name);
	}
}
personES6.hello();

// arrow関数
const personArrow = {
	name: 'Tom',
	hello: () => {
		console.log('Hello ' + this.name);
	}
}
personArrow.hello();

// レキシカルスコープにより一つ上のthisを辿る

// ここで宣言された場合のthisは一つ上のwindowオブジェクト
const a = () => console.log('Bye ' + this.name);

const person2 = {
	name: 'Tom',
	hello() {
		console.log('Hello ' + this.name);
		a();
	}
}

person2.hello();

const person3 = {
	name: 'Tom',
	hello() {
		console.log('Hello ' + this.name);

		// ここで宣言された場合のthisは一つ上のperson3オブジェクト
		const a = () => console.log('Bye ' + this.name);
		a();
	}
}

person3.hello();

function b() {
	const a = () => console.log('Bye ' + this.name);
	a();
}

b();
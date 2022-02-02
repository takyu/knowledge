class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello() {
		console.log('hello ' + this.name);
	}
}

class Japanese extends Person {
	constructor(name, age, gender) {

		// 親コンストラクターを用いる際は、一番最初に記述
		super(name, age);

		this.gender = gender;
	}

	// @override
	hello() {
		
		// メソッドとして呼ぶ場合はどこでも良い
		super.hello();
		console.log('こんにちは ' + this.name);
		super.hello();
	}
}

const taro = new Japanese('Taro', 18, 'Male');
console.log(taro);
taro.hello();

// オブジェクトリテラルの中でもsuperを呼び出せる
const american = {
	hello() {
		console.log('hello ' + this.name);
	}
}

const bob = {
	name: 'Bob',
	hello() { 
		super.hello(); 
	}
	//hello() {
	//	console.log('hello ' + this.name);
	//}
}

// superはオブジェクトリテラル内でしか使えない
/* 下は文法エラーである
bob.bye = function() {
	super.hello();
}
*/

// bobのプロトタイプに継承するメソッド
Object.setPrototypeOf(bob, american);

bob.hello();
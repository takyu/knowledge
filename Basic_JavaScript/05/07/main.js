window.name = 'John';

const person = {
	name: 'Tom',
	hello: function() {
		console.log('Hello ' + this.name);
	}
}

person.hello();

// bindの引数は 'this' を指定する
const helloTom = person.hello.bind(person);

function fn(ref) {
	ref();
}

fn(person.hello);

// このhelloTomの関数オブジェクトは、元の関数のthisを受け継いだ別物の関数である。
fn(helloTom);

function a() {
	console.log('hello ' + this.name);
}

/*
bindでは
第一引数に'this'のオブジェクトを固定、
第二引数以下は、渡す引数を固定することができる。
*/
const b = a.bind({name: 'Tim'});

b();

function c(name) {
	console.log('hello ' + name);
}

const d = c.bind(null, 'Tum');

// bindの方の引数の方が適用されるため、引数をこちらで渡せない
d('Tem');
window.name = 'John';

const person = {
	name: 'Tom',
	hello: function() {
		console.log('Hello ' + this.name);
	}
}

person.hello();

function fn(ref) {
	ref();
}

// オブジェクトのメソッドを引数として渡している => グローバルオブジェクト
fn(person.hello);
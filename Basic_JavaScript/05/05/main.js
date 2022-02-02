window.name = 'John';

const person = {
	name: 'Tom',
	hello: function() {
		console.log('Hello ' + this.name);

		// 関数として実行 => 'John'
		a();

		const person = {
			name: 'Tim',
			hello: function() {
				console.log('Hello ' + this.name);
		
				// 関数として実行 => 'John'
				a();
			}
		}
		person.hello();
	}
}

person.hello();

// const ref = person.hello;
// ref();

function a() {
	console.log('Hello ' + this.name);
}
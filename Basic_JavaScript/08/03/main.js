/*
// a -> b -> task1
const a = () => {
	setTimeout(function task1() {
		console.log('task1 is done');
	});

	console.log('a is done');
}

const b = () => {
	console.log('b is done');
}

a();
b();
*/

// a -> task1 -> b としたい。
const a = (/* b */) => {
	setTimeout(function task1() {
		console.log('task1 is done');

		// 関数bのレキシカルスコープがあるため、引数に別に渡さなくても良い
		b();
	});

	console.log('a is done');
}

const b = () => {
	console.log('b is done');
}

a(/* b */);
// b();
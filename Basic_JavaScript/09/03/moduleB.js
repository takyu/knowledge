import './moduleA.js'

// windowオブジェクトでなくundefined
console.log(this);

const a = 0;

// windowオブジェクトでなくundefined
function fn() {
	console.log(this);
	console.log(a);
};

fn();

// 関数オブジェクト(今まで通り)
const obj = {
	fn
}
obj.fn();

console.log(window.d);
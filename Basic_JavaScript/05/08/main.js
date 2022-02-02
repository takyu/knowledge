function a() {
	console.log('hello ' + this.name);
}

function aForCall(name) {
	console.log('hello ' + name);
}

function aForApply(...names) {
	console.log('hello ' + names[0] + ' ' + names[1]);
}

const tim = {
	name: 'Tim'
}

const b = a.bind(tim);

b();

a.apply(tim);
a.call(tim);

// callは第二引数以下は渡す引数(仮引数)の指定ができる -> bindとsyntaxは同じ
aForCall.call(tim, 'Tom');

// applyは第二引数は「配列として」、渡す引数(仮引数)の指定ができる
aForApply.apply(tim, ['Tom', 'Bob']);

const arry = [1, 2, 3, 4, 5];

// Math.max()は引数を一つずつ渡すので、配列を渡したい時、一つずつ渡してくれるようにapply
// メソッドを併用した例
const result = Math.max.apply(null, arry);
console.log(result);

// ES6以降ではスプレッド演算子を用いた方が良い
// スプレッド演算子は配列の中身を一つずつ、展開して渡してくれる
const res = Math.max(...arry);
console.log(res);
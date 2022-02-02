const arry1 = [1, 2, 3, 4, 5];
const arry2 = [...arry1];
console.log(arry2);

// 別物の配列が新たに作られている
console.log(arry1 === arry2);

arry2.push(6);

console.log(arry2);

const arry3 = [0, ...arry1, 6] 
console.log(arry3);

const sum = (...args) => {
	let ret = 0;

	for (let v of args) {
		console.log(v);
		ret += v;
	}
	return ret;
}
const result = sum(1,2,3,4);
console.log(result);

const obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// 配列にするイテレーターを組み込むとスプレッド演算子はそれに従う
Object.prototype[Symbol.iterator] = function*() {
	for (let key in this) {
		yield [key, this[key]];
	}
}

// []で囲むとイテレーターに従う
const arry4 = [ ...obj1 ];
console.log(arry4);

// {}で囲むと新たなオブジェクトで返される
const arry5 = { ...obj1 };
console.log(arry5);
console.log(obj1 === arry5);

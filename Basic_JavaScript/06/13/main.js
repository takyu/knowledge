const a = new String('hello');
const ap = 'hello';

console.log(a);
console.log(a.toUpperCase());

// プリミティブ型にもメソッドは使える
console.log(ap);
console.log(ap.toUpperCase());

// 初期化時に指定もできる
const greeting = 'hello'.toUpperCase();
console.log(greeting);


const b = new Number(100);
const bp = 100;

console.log(b);
console.log(b.toExponential());

console.log(bp);
console.log(bp.toExponential());

/*
1e+2は10の2乗と言う意味
1e+3は100, 1e+4は1000
*/
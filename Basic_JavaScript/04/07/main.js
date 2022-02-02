// primitive type
/*
'hello'
   ↑
   a
*/
let a = 'hello';
let b = a;

console.log(a);
console.log(b);

b = 'bye';

console.log(a);
console.log(b);

// object
/*
'Hello'
   ↑
{ prop }
   ↑
{...}への参照
   ↑
   c
*/
let c = {
	prop: 'hello'
}
let d = c;

console.log(c);
console.log(d);

d.prop = 'bye';

console.log(c);
console.log(d);


let e = {
	prop: 'hello'
}
let f = e;

console.log(e);
console.log(f);

// オブジェクトへの参照を変えるだけなので、コピー元には影響がない。
f = {};

console.log(e);
console.log(f);

/*
<プリミティブ値のコピー>
参照先の値がコピーされる。
<オブジェクトのコピー>
オブジェクトへの参照がコピーされる。
*/
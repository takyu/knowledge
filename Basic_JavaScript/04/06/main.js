function hello(name) {

	/*
	if(!name) {
		name = 'Tom';
	}
	と同じことをOR条件で書ける。
	*/
	name = name || 'Tom';
	console.log('hello' + name);
}

hello('Bob');
hello();
// 0もfalsyな値なので、注意
hello(0);

// default parameter(ES6)
function helloEs6(name = 'Tom') {
	console.log('Hello' + name);
}

helloEs6('Bob');
helloEs6();
helloEs6(0);

let name = 'Bob';
let name2;

/*
if(name) {
	hello(name);
}
と同じことをAND条件で書ける。
*/
name && hello(name);
name2 && hello(name);
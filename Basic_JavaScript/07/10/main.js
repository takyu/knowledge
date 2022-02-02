function* gen() {
	yield 1;
	yield 2;
	return 3;
}

const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
function genIterator(max) {
	let i = 0;

	return {
		next: function() {
			if (i >= max) {
				return {
					done: true
				}
			} else {
				return {
					done: false,
					value: i++
				}
			}
		}
	}
}
*/
function* genIterator(max) {
	let i = 0;

	while(i < max) {
		yield i++;
	}
	return;
}

const it2 = genIterator(5);

let a = it2.next();
while (!a.done) {
	console.log(a.value);
	a = it2.next();
}

const obj = {
	[Symbol.iterator]: genIterator.bind(null, 5)
}

for (let i of obj) {
	console.log(i);
}

// 直接書いても良い(イテレーターと違うところ)
for (let i of genIterator(5)) {
	console.log(i);
}

// オブジェクトの省略記法とジェネレーターの書き方を合わせると短縮してかける
const obj2 = {
	*[Symbol.iterator](max = 8) {
		let i = 0;
	
		while(i < max) {
			yield i++;
		}
		return;
	}
}

for (let i of obj2) {
	console.log(i);
}
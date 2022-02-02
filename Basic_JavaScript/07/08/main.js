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

// 上限値を10に設定
const it = genIterator(10);

let a = it.next();

// doneがfalseの間動くようにする
while(!a.done) {
	console.log(a.value);
	a = it.next();
}

// シンボルのイテレーターに格納、上限値をbindで設定する
const obj = {
	// キーを変数で設定している -> ブラケット記法
	[Symbol.iterator]: genIterator.bind(null, 20)
}

for (let i of obj) {
	console.log(i);
}

// objのイテレータを使ってSetのオブジェクトに格納
const s = new Set(obj);
console.log(s);

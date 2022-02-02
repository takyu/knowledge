function a() {
	// 関数スコープ
	let b = 0;

	console.log(b);
}

// bは関数内で宣言された変数のために、参照できない
// console.log(b);
a();

// ブロックスコープはletやconstを用いる、varやfunction表記だとブロックスコープは無視される
if (true) {
	let c = 1;
	console.log(c);

	const d = function() {
		console.log('d is called');
	}
	d();
}

// cはブロック内で宣言された変数のために、参照できない
console.log(c);

// dはブロック内で宣言された関数のために、参照できない
d();

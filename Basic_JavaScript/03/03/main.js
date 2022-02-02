let a = 2;
function fn1() {
	let b = 1;
	function fn2() {
		let c = 3;
		console.log(b);
	}
	fn2();
}
fn1();

// 外部から関数スコープ内の変数や関数には参照できない
fn2();
console.log(b);
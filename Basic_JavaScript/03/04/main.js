// 内側のスコープから探し、スクリプトスコープ→グローバルスコープへと探しにいく
let a = 2;
window.a = 4;

function fn1() {
	// let a = 1;
	function fn2() {
		// let a = 3;
		console.log(a);

		if(true) {
			// ホイスティングの関係上、var(や、function())で宣言するとこちらのブロックの
			// 変数が優先されるため、undefinedになる。
			var a = 3;
		}
	}
	fn2();
}
fn1();
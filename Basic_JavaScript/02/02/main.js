/*
global context
→JavaScriptファイル内の直下の実行環境
*/
let a = 0;
function b() {

	/*
	function context
	→関数内の実行環境
	*/

	// thisやarugumentsは実行される環境において取りうる値が変わってくる
	console.log(this, arguments);

	// 関数の中で外で宣言された変数を見れる->外部変数
	console.log(a);
}

console.log(a);
b();
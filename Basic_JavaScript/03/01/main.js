// letやconstで定義された場合、スクリプトスコープに保持される。
let a = 0;

// varやfunctionで定義された場合、グローバルスコープのwindowオブジェクトに保持される。
var b = 0;
function c() {}

// windowの部分は省略できる
console.log(window.b);
console.log(b);

window.d = 1;
console.log(d);

// スコープチェーン(後述)によってletで宣言された方を参照している
window.e = 2;
let e = 3;
console.log(e);
function printTypeValue(val) {
	console.log(typeof val + '\n' + val);
}

let a = 0;
printTypeValue(a);

// 数字としての文字列1とaは数字としての文字列0に変換される。
let b = '1' + a;
printTypeValue(b);

// 数字としての15をまず認識するので、bは数字に暗黙的変換される。
let c = 15 - b;
printTypeValue(c);

// 数字としてのcをまず認識するので、nullが数字としての0に暗黙的変換
let d = c - null;
printTypeValue(d);

/*
true -> 1
false -> 0
*/
// 数字としてのdをまず認識するので、trueが数字としての1に暗黙的変換
let e = d - true;
printTypeValue(e);

// 明示的に型変換させてやることも可能
let bInt = parseInt('1') + a;
printTypeValue(bInt);
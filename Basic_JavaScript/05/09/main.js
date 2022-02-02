function a(name) {
	return 'hello ' + name;
}

const b = function(name) {
	return 'hello ' + name;
}

/*
元の形
const c = (name) => {
	return 'hello ' + name;
}
*/
const c = name => 'hello ' + name;

console.log(c('Tom'));

const d = (name1, name2) => 'hello ' + name1 + ' ' + name2;

console.log(d('Tom', "Bob"));

const e = () => 'hello ';

// 上をダミー引数の '_' で表した書き方もある。
const f = _ => 'hello ';

console.log(e());
console.log(f());

// 関数の中身が一行以上の場合は、{}必須
const g = () => {

	// {} をつけた場合は、returnを記法する
	return 'hello ';
}
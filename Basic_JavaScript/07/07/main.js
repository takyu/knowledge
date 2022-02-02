// mapをインスタンス化
const map = new Map();

// キーにオブジェクトを格納
const key1 = {};
map.set(key1, 'value1');
console.log(map);
console.log(map.get(key1));

// キーに関数を格納
const key2 = () => {};
map.set(key2, 'value2');
console.log(map);
console.log(map.get(key2));

// キーにプリミティブ型を格納
let key3 = 0;
map.set(key3, 'value3');
console.log(map);
console.log(map.get(key3));

let key4;

// key4に1を代入して、結果として代入演算子が0を返すのでこう書いても良い
map.set(key4 = 1, 'value4');
console.log(map);

// プリミティブ型は値そのものの参照を保持しているので、値でもgetできる
console.log(map.get(key4));

// mapを取得
for (const m of map) {
	console.log(m);
}

// 分割代入で表示させるといい
for (const [k, v] of map) {
	console.log(k, v);
}

// mapから削除
map.delete(key4);
console.log(map);

// setをインスタンス化
const s = new Set();

// キーに変数を追加
s.add(key1);
s.add(key2);
s.add(key3);
s.add(key4);

// setから削除
s.delete(key4);

// 存在するか確認
console.log(s.has(key3));
console.log(s.has(key4));

// setを取得
for (let k of s) {
	console.log(k);
}

/*
// setオブジェクトを配列にする
const arry = Array.from(s);
console.log(arry);
*/

/*
// スプレッド構文で記載
const arry = [...s];
console.log(arry);
*/
localStorage.setItem('key', '1');
localStorage.setItem('key2', '1');
const res = localStorage.getItem('key');
console.log(res);
console.log('end');

// ローカルストレージの中のメソッドを見る
console.log(localStorage);

// ローカルストレージ経由でオブジェクトの操作、取得をする。
const obj = {
	a: 0
};
const json = JSON.stringify(obj);
localStorage.setItem('key3', json);
const obj2 = JSON.parse(localStorage.getItem('key3'));
console.log(obj2);
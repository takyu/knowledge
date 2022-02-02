// 戻り値がオブジェクトの場合
function F1(a, b) {
	this.a = a;
	this.b = b;
	return {};
}

F1.prototype.c = () => {};

const instance1 = new F1(1, 2);
console.log(instance1);

// 戻り値がオブジェクト以外の場合
function F2(a, b) {
	this.a = a;
	this.b = b;
}

F2.prototype.c = () => {};

const instance2 = new F2(1, 2);
console.log(instance2);


function F(a, b) {
	this.a = a;
	this.b = b;
	return {};
}

// new演算子と同じ動きをする関数
function newOpe(C, ...args) {
	// コンストラクタ関数
	console.log(C.prototype);

	// レストパラメーター
	console.log(args);

	// __proto__にprototypeをコピーして、空のオブジェクトを生成するメソッド
	const _this = Object.create(C.prototype);
	console.log(_this);

	// コンストラクタ関数(ここではF)を実行する際の'this'を持たせるメソッド
	const result = C.apply(_this, args);
	console.log(_this);
	console.log(result);

	// typeof演算子でオブジェクトかどうか見る、JSではnullもオブジェクト判定
	console.log(typeof result);
	console.log(typeof _this);
	console.log(typeof null);

	// 返されたresultがオブジェクトかどうか
	if (typeof result === "object" && result !== null) {
		return result;
	}

	return _this;
}

const instance3 = newOpe(F, 1, 2);
console.log(instance3);
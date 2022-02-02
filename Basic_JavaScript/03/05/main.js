// 何かを生成する関数にFactoryと命名することが多い
function incrementFactory() {

	// 外部からアクセス不能
	let num = 0;

	function increment() {
		num += 1;
		console.log(num);
	}

	// 関数を返す(JSでは関数を変えせる)
	return increment;
}

// 変数に関数を持たせる、この時にnumを初期化
const increment = incrementFactory();

// 関数を持った変数を実行->変数名();
// 以降は6~12行目の関数が実行されるため、初期化は行われない。
increment();
increment();
increment();
increment();

// 外部からはアクセスできない
console.log(num);
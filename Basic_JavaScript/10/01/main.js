const targetObj = {
	a: 0
}
/**
 * @param target プロキシへの第一引数として渡されるオブジェクト
 * @param prop プロパティにアクセスされた際のプロパティの名前
 * @param value setに渡ってくる新しい値
 * @param receiver newで作成したProxyのオブジェクト
 */
const handler = {
	set: function(target, prop, value, receiver) {
		console.log(receiver);
		console.log(`[set]: ${prop}`);
		target[prop] = value;

		// 実用的な例として、targetobjの値を変更させたくない時
		//throw new Error('cannot add prop');
	},

	get: (target, prop, receiver) => {
		console.log(`[get]: ${prop}`);
		
		// getで無かった際のデフォルト値を渡したい場合
		if (target.hasOwnProperty(prop)) {
			return target[prop];	
		} else {
			return '-1';
		}
	},
	
	deleteProperty(target, prop) {
		console.log(`[delete]: ${prop}`);
		delete target[prop];

		// 実用的な例として、targetobjの値を削除させたくない時
		//throw new Error('cannnot delete prop');
	}
}

const pxy = new Proxy(targetObj, handler);
console.log(pxy);

// set
pxy.a = 1;
console.log(targetObj.a);

// get
const res = pxy.a;
console.log(res);
console.log(pxy.b);

// delete
delete pxy.a;
console.log(targetObj);
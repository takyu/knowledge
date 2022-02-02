const targetObj = {
	a: 0,

	// getter
	get value() {
		console.log(this);
		return this.b;
	}
}

const handler = {
	get(target, prop, receiver) {
		console.log(`[get]: ${prop}`);
		if(target.hasOwnProperty(prop)) {

			/*
				reflectに置き換え
				return target[prop];
			*/
			return Reflect.get(target, prop);

		} else {
			return -1;
		}
	}
}

const pxy = new Proxy(targetObj, handler);

// -1
console.log(pxy.b);

/*
targetObjのgetter経由で呼ぶとthisがtargetObjになってしまう。-> undefinedが返る。
pxy.value === targetObj.bがtrueとなる。
*/
console.log(pxy.value);

/*
そこでthisをpxyにbindするために、recevierをReflect.get()に渡してあげる。
handler2のgetter(prop: value) -> targetObjのgetter -> handler2のgetter(prop: b)
pxy.value === targetObj.bがfalseとなる。
*/
const handler2 = {
	get(target, prop, receiver) {
		console.log(`[get]: ${prop}`);
		if(target.hasOwnProperty(prop)) {

			// 第3引数にrecevierを追加
			return Reflect.get(target, prop, receiver);
		} else {
			return -1;
		}
	}
}

const pxy2 = new Proxy(targetObj, handler2);

console.log(pxy2.value);

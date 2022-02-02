const a = {
	prop: 0
}

const b = {
	prop: 0
}

// オブジェクトへの参照は違うので、false
console.log(a === b);
console.log(a == b);

// オブジェクトの中身を取ってくると、true
console.log(a.prop === b.prop);

const c = a;
console.log(a === c);
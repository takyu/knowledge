const obj = {
	a: 0,
	b: 1,
	c: 2
};

// 取り出したい値を条件で指定できる関数
const replacer = (prop, value) => {
	if (value < 1)
		return;
	return value;
}

const reviver = (prop, value) => {
	if (value < 2)
		return;
	return value;
}

const json = JSON.stringify(obj);
console.log(json);
console.log(typeof json);

const json2 = JSON.stringify(obj, null, '\t');
console.log(json2);

const json3 = JSON.stringify(obj, replacer);
console.log(json3);

// 配列として指定可能
const json4 = JSON.stringify(obj, ['a', 'b']);
console.log(json4);

const obj2 = JSON.parse(json);
console.log(obj2);

const obj3 = JSON.parse(json, reviver);
console.log(obj3)
function addNumberFactory(num) {
	function addNumber(value) {
		return num + value;
	}
	return addNumber;
}

// numに5を渡すので、[return 5 + value]が設定された関数を返している。
const add5 = addNumberFactory(5);

// add5の関数に対してvalue10を渡す。
const result1 = add5(10);

console.log(result1);

const add10 = addNumberFactory(10);
const result2 = add10(10);
console.log(result2);


const arry = [1, 2, 3, 4, 5];

const res = arry.reduce(function(accu, curr) {
	console.log(accu, curr); // 1 2  3 3  6 4  10 5  15
	return accu + curr * 2;
}, 0 /* 初期値 */);

console.log(res);
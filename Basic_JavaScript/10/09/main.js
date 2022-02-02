const arry = [1, 2, 3, 4, 5];

/*
forEachは、第1引数に要素、第2引数に添字、第3引数に配列、第4引数にthisを受け取る
arry.forEach(function(v, i, arry) {
	console.log(v);
});
*/
arry.forEach((v, i, arry) => {
	console.log(v); // 1 2 3 4 5
}, this)

/*
mapも、第1引数に要素、第2引数に添字、第3引数に配列、第4引数にthisを受け取る
const newArry = arry.map(function(v, i, arry) {
	return v * 2;
});
*/
const newArry = arry.map((v, i, arry) => v * 2);
console.log(newArry); // (5) [2, 4, 6, 8, 10]

// 配列を5回返す
const newArry2 = arry.map((v, i, arry) => arry);
console.log(newArry2); // (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]

/*
filterも、第1引数に要素、第2引数に添字、第3引数に配列、第4引数にthisを受け取る
const filterarry = arry.filter(function(v, i, arry) {
	return i >= 1;
});
*/
const filterarry = arry.filter((v, i, arry) => i >= 1);
console.log(filterarry); // (4) [2, 3, 4, 5]

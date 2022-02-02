// windowオブジェクトはグローバルオブジェクト
const arry = new Array(1, 2, 3, 4);

console.log(arry)

// JSでは配列もオブジェクト
console.log(arry[0]);
console.log(arry["0"]);

console.log(arry.hasOwnProperty(0));

// プロパティとしては持っていない -> 4は[3](プロパティ)のキーである
console.log(arry.hasOwnProperty(4));
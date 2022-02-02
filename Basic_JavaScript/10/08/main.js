const arry = [1,2,3,4,5];

// 末尾追加
let length = arry.push(6);
console.log(arry); // (6) [1, 2, 3, 4, 5, 6]
console.log(length); // 6

// 末尾削除
const lastVal = arry.pop();
console.log(arry); // (5) [1, 2, 3, 4, 5]
console.log(lastVal); // 6

// 先頭削除
const headVal = arry.shift();
console.log(arry); // (4) [2, 3, 4, 5]
console.log(headVal); // 1

// 先頭追加
length = arry.unshift(1);
console.log(arry); // (5) [1, 2, 3, 4, 5]
console.log(length);

// 配列を切り取る
/*
0番目の引数には、何番目の添字から
1番目の引数には、何文字分
2番目以降の引数には、切り取る前の配列に組み込む値を指定することができる
*/
const arry2 = arry.splice(0, 2, 0, 1, 2) // (6) [0, 1, 2, 3, 4, 5]
console.log(arry);
console.log(arry2);

// 配列のコピー
const copyArry = arry.slice(); // (6) [0, 1, 2, 3, 4, 5]
console.log(copyArry);

// 配列の結合
const arry3 = arry.concat([6, 7, 8]);
console.log(arry3);

// スプレッド構文での配列の結合
const arry4 = [0, ...arry, 6, 7, 8];
console.log(arry4);

const a = 0;
const b = 1;
const c = 3;
const d = 0;

/*
AND条件は、falsyなものが式の途中にあるかどうか
→今回はaがtruethyかどうかみられる
aがtruethyならbの値を返却、aがfalsyならaの値を返却(0)
*/
console.log(a && b);

/*
aがtruethyならbの値を、bがtruethyならcの値を返却
bが0だった場合、bの時点でfalsyなので、bの値が返却(0)
*/
console.log(a && b && c);

/*
OR条件は、truethyなものが式の途中であるかどうか
truethyなものがあった時点で、その値を返却
*/
console.log(a || b);

// group化で優先順位を作れる
console.log((a || b) && c);
console.log((a || b) && (c || d));

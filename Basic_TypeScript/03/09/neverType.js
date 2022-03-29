/**
 * Never type
 *
 * どんな値も入れることができず決して戻ることのない
 * （例外をスローする関数など）関数の型
 *
 * voidはreturnでの戻り値なしの型なのに対して
 * neverはそもそもreturnしない。
 */
var one = function () {
};
var two = function () {
    return;
};
var three = function () {
    while (true) { }
};
var oneVal = one();
var twoVal = two();
var threeVal = three();

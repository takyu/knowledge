/**
 * Define type file
 *
 * declare
 *
 * アンビエント宣言と呼ばれ、変数の宣言をする
 * 通常は、型定義ファイル(.d.ts)と呼ばれる別ファイルで管理する。
 *
 * command: tsc -d
 */
var goodMorning = function (name) {
    return "Good Morning, " + name;
};
var hello = function (name) {
    console.log("Hello, " + name);
};
var goodEvening = function (name) {
    console.log("Good Evening, " + name);
};

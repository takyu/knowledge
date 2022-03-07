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
const goodMorning: (name: string) => string = (name: string): string =>
  "Good Morning, " + name;

const hello = (name: string): void => {
  console.log("Hello, " + name);
}

const goodEvening = (name: string) => {
  console.log("Good Evening, " + name);
}
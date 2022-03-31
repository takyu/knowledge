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
declare const goodMorning: (name: string) => string;
declare const hello: (name: string) => void;
declare const goodEvening: (name: string) => void;

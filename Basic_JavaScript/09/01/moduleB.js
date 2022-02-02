import defaultVal, { publicVal, publicFn } from "./moduleA.js";

console.log(publicVal);
publicFn();
console.log(defaultVal);

// ロードする関数や変数の名前を変えたい時
import { publicVal2 as val, publicFn2 as fn } from './moduleA.js';

console.log(val);
fn();

// モジュールをオブジェクトにしてインポート
import * as moduleA from './moduleA.js';

console.log(moduleA);

console.log(moduleA.publicVal);
console.log(moduleA.default);
console.log(moduleA.publicVal2);
moduleA.publicFn();

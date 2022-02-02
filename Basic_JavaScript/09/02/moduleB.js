import { publicVal as val, publicFn as fn } from './moduleA.js';

fn();
fn();
console.log(val.prop++);
console.log(val.prop++);

// オブジェクトは参照をコピーしているため、内部で保存されている変数に対しても変更がなされる
fn();
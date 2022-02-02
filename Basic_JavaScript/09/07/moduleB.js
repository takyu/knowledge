// 従来は同期的にモジュールをインポートされた所から順に読み込む
import defaultVal, { publicVal, publicFn }from './moduleA.js';

console.log(publicVal);
publicFn()
console.log(defaultVal);

// ダイナミックインポートで返されるのはPromiseオブジェクト
import('./moduleA.js').then((modules) => {
	console.log(modules);

	// 確認
	console.log(modules.publicVal);
	modules.publicFn()
	console.log(modules.default);
});

const fn = async () => {
	const modules = await import('./moduleA.js');

	console.log(modules.publicVal);
	modules.publicFn()
	console.log(modules.default);
}
fn();

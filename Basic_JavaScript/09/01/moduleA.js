export let publicVal = 0;

export let publicFn = function() {
	console.log('publicFn called: ');
}

// defaultのキーワードを使うと変数名なしで定義できる
export default 1;

export let publicVal2 = 2;

export function publicFn2() {
	console.log('publicFn2 called: ');
}

// MacroTaskはMicroTaskよりも後に実行される
setTimeout(function task1() {
	console.log('task1');
});

new Promise(function promise(resolve) {
	console.log('promise');
	resolve();
}).then(function job1() {
	console.log('job1');
});

console.log('global end');
/*
 実行結果は、
 promise -> global end -> job1 -> task1
 Promiseオブジェクトを用いて呼ばれたものはMicroTasksに入るために、setTimeout
 などのMacroTaskよりも先にthenが呼ばれることとなる。
*/
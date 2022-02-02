const btn = document.querySelector('button');
btn.addEventListener('click', function task2() {
	console.log('task2 is done');
});

const a = () => {
	setTimeout(function task1() {
		console.log('task1 is done');
	}, 4000);

	const startTime = new Date();
	while (new Date() - startTime < 5000);

	console.log('fn a is done');
}

a(); // fn is a done -> task2 is done -> task1 is done

/*

今回の流れは、コールスタックにまずグローバルコンテキストが積まれ、
その中のUIイベントが登録される(l.1 ~ 4)。
そのコールスタックの上にaという関数コンテキスト(l.6 ~ 15)が積まれ、非同期APIであるsetTimeout、
つまりtask1(l.7 ~ 9)が登録、4s間待機する。
その間に、非同期でUIイベント(l.1 ~ 4)が実行され、タスクキューに積まれる。
そして4s待つと非同期処理であるtask1(l.7 ~ 9)が積まれ、5s後に関数コンテキストのaが終了。
同時にグローバルコンテキストも消え、コールスタックが空になる。
それをイベントループがタスクキューに伝えて、FIFOより、task2 -> task1の順にコールスタックに
渡されて実行。
つまり、fn is a done -> task2 is done -> task1 is done の順になる。

*/

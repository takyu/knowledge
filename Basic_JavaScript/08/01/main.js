const sleep = (ms) => {
	const startTime = new Date();
	while (new Date() - startTime < ms);
	console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	console.log('button clicked');
})

// setatimeoutで最初の2s間メインスレッドを解放できる
setTimeout(() => {
	sleep(3000);
}, 2000);
let isFlushing = false;
let isFlushingPending = false;
const queue = [];

// 非同期処理
const p = Promise.resolve();
function nextTick(fn) {
	return p.then(fn);
}

// queueにjobを登録する
function queueJob(job) {
	if(!queue.includes(job)) {
		queue.push(job);
		queueFlush();
	}
}

function queueFlush() {
	if (!isFlushingPending && !isFlushing) {
		isFlushingPending = true;
		nextTick(flushJobs);
	}
}

// Schedulerのjobを実行する
function flushJobs() {
	let job;
	
	isFlushing = true;
	isFlushingPending = false;
	while ((job = queue.shift()) !== undefined) {
		job();
	}
	isFlushing = false;
}

export { queueJob, nextTick };
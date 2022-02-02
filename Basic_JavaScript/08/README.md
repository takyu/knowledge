## Thread

The Thread that stands for the thread of execution is a single processing successive flow that is executed.  
There are various threads in JavaScript, but the "Main thread" is the one which is executed primarily.  
**Main thread** is runnung JavaScript and render.

## FPS

**FPS** stands for Flames Per Second.  
FPS is the frequency of screen refreshes per second.  
The screen refresh frequency that is bearable for human viewing is considered to be once every 16.7 milliseconds, which refers to 60 fps.  
If there is heavy processing in the JavaScript execution stage of the main thread, the screen refresh frequency will fall below 60 fps...

## Synchronous processing

In synchronous processing, code is executed sequentially in the main thread. 
In other words, it will not proceed to the next process until one process is completed.

## Asynchronous processing

In asynchronous processing, the process is temporarily detached from the main thread.  
Asynchronous processing includes "asynchronous APIs", "UI events", "NW events", and "I/O events".  
**For instance**  
- Asynchronous APIs 

	- "setTimeout", "Promise", and "queueMicrotask", etc...
	
- UI events include 

	- "click", "dblclick", "mousedown", and "mouseup", etc...

## Date

Date() is constructor that creates a JavaScript Date instance which represents a single moment in time in a platform-independent format.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date>

## Task Queue

Task queue is a row of asynchronous processes waiting to be executed. 
Manages the execution order of asynchronous processes.  
Therefore, the queue mechanism is FIFO(stands for First In, First Out).

## Event Loop

It monitors the Call Stack and Task Queue, and if the Call Stack is empty, it pushes the first element of the Task Queue to the Call Stack.


## Chain of Asychronous processing using callback function

The callback function can connect asynchronous processes, but the nesting is deeper and the readability of the code is reduced.  
Therefore, the callback function is not suitable for connecting asynchronous chains.

## Promise

Promise object is a way to write a chain of asynchronous processes in a way that is easier and more readable than callback function.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>  
Follow the Promise syntax.

```JS
new Promise(function(resolve, reject) {
	// when call resolve, execute then function
	resolve();

	// when call reject, execute catch function
	reject();

// "then" connects functions to be executed sequentially
}).then(function(data /* "then" can accept arguments */) {
	// first processing

	// pass it to the next "then" argument.
	return data
}).then(function(data) {
	// Second processing
}).then(function() {
	// third processing

	// When a specific "then" is called, it can be moved to "catch".
	throw new Error();

}).catch(function(data /* "catch" can accept arguments */) {
	// "catch" is used for error handling.
}).finally(function(/* "finaly" can't accept arguments */) {
	// "finally" is always be executed at the end.
})
```

## Promise Chaining

Promise Chaining is to use Promise to execute asynchronous processes in sequence.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining>
```JS
function fn(val) {
	return new Promise(function(resolve, reject) {

		// processing
		setTimeout(() => {
			console.log(val++);
			resolve(val);
		}, 1000);
	});
}

fn(0).then((val) => {

	// always return an instance of new
	return fn(val)
}).then((val) => {
	return fn(val)
}).then((val) => {
	return fn(val)
}).then((val) => {
	return fn(val)
})
```

## Asynchronous operations in parallel.

Promise.all(), Promise.race() and Promise.allSettled() are methods for running asynchronous operations in parallel.  

***Promise.all() vs. Promise.race() vs. Promise.allSettled()***
- Promise.all()

	- create an array of the values passed in resolve and passes it to the next then.

- Promise.race()

	- pass immediately the first value passed in resolve to the next then.

- Promise.allSettled()

	- The Promise.allSettled method returns an object with two properties: the value passed in resolve, and status.  
	The status is either "fulfilled" when resolve is called, or "rejected" when reject is called.  
	Also, Promise.allSettled() method doesn't shift to catching.

## Promise.all

Promise.all is method.( Promise.all() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all>  
Take an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
```JS
// argument is iterable object such as an Array.
Promise.all(iterable);
```

## Promise.race

Promise.race is method.( Promise.race() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race>  
Return a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
```JS
// argument is iterable object such as an Array.
Promise.race(iterable);
```

## Promise.allSettled()

Promise.allSettled is method. ( Promise.allSettled() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled>  
Return a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
```JS
// argument is iterable object such as an Array.
Promise.allSettled(iterable);
```

## MacroTasks and MicroTasks

**MacroTasks** are task queues.  
On the other hand, **MicroTasks** is an asynchronous processing queue that exists separately from task queue. 
Also known as a jobqueue.  
"CallStacks", "MicroTasks", and "MacroTasks" are executed in that order. 
Of course, it's the event loop that manages all this.  
"MicroTasks" executes all jobs when their turn comes, while "MacroTasks" executes tasks one by one when their turn comes.  
This means that when one job in the "MacroTasks" finishes executing, if there are multiple jobs piled up in the "MicroTasks", it will finish all the "MicroTasks" jobs and then move on to the "MacroTask" job again.  
"Macrotasks" and "MicroTasks" include the following.

- MacroTasks
```JS
setTimeout, setInterval, requestAnimationFrame
```

- MicroTasks
```JS
Promise, queueMicroTask, MutationObserver
```

## queueMicrotask

queueMicrotask is a method. ( queueMicrotask() )  
<https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask>  
queues a microtask to be executed at a safe time prior to control returning to the browser's event loop.  
```JS
queueMicrotask(function);
```

## Await / Async

It is a more intuitive way to write Promise.  
For functions that use "await" in them, be sure to prefix the function with "async" to indicate that it is done asynchronously.  
***"await" receives is an instance of Promise, and "async" returns is an instance of Promise.***  

- Async<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>

	- Declare a function that returns a Promise.

	- If the function is prefixed with "async", it is guaranteed that Promise will be returned.

	- Even if there is no return value in the "async" function, an empty Promise instance is returned.

- Await<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await>

	- Wait until the asynchronous processing of the function which returns the Promise is complete.

	- If the function is prefixed with "await", the "resolve" argument of the returned Promise will be returned.

	- Functions with await must be executed in the context of the function with async.

## fetch

fecth is the API. 
<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>  
It can retrieve data from the server.
```JS
/**
 * @param URL the request destination
 */
window.fetch(URL);
```

## JSON file

JSON stands for JavaScript Object Notation.  
<https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON>  
It is a standard text-based format for representing structured data based on JavaScript object syntax and is commonly used for transmitting data in web applications.  
There are ***three different ways*** to write a JSON file compared to JavaScript.  

- Always use double quotation marks to enclose strings.

- Always use double quotation marks to enclose properties in an object.

- Don't put a comma for the last element.

## Exception Handling

Special processing to jump to when an error occurs.  
By separating exception handling with "throw", it is possible to write the handling separately, making it easier to maintain.
```JS
try {
	throw new Error()
} catch(e) {
	// error handling
} finally {
	// final processing
}
```

## Custom Error

If you want to create a conditional branch for an error, you can create your own custom error.
```JS
class CustomError extends Error {
	constructor(message) {
		super(message);

		// Name the error as your own custom error name.
		this.name = 'CustomError'
	}
}
```
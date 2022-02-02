## Framework

It enables you to create a highly functional site easily by implementing functions according to the framework.  
For instance, AngularJS, React, Vue.js etc...  

## Vue

Vue is JS framework for building user interfaces. <https://v3.vuejs.org/>  
This is written in **typeScript**.

## TypeScript

A superset programming language that extends JavaScript.  
<https://www.typescriptlang.org/>  
A superset is, while still covering an existing feature, an evolution of it which is easier to write.  
there are three main features of TypeScript.  

1. To be executed after being converted to JS.

2. It is possible to be type definition

3. It is possible to use operators not to found in JS.

## Reactive

Return a reactive copy of the object.  
<https://v3.ja.vuejs.org/api/basic-reactivity.html#reactive>  
It works in the same way as Proxy in JS, calling the specified callback function when the object is accessed.  
Also, callback functions that are unrelated to the object will not be called. (Dependencies).
```JS
const obj = reactive({ count: 0 })

effect(() => {
	// processing about callback-function
})
```

## Computed

Return a reactive copy of the object.  
<https://vuejs.org/v2/api/index.html#computed>  
It works the same as Vue's reactive, and the callback function reflects the calculation result of the object in real time.
```JS
const obj = reactive({ count: 0 })

const computedValue = computed(() => {
	return /* processing */
});
```

## Virtual DOM

It has been adopted by Vue and React.  
A mechanism to manage the state of HTML separately from the DOM.  
The framework of JS maintains the state of HTML through the virtual DOM, and modifies the DOM by detecting changes in the virtual DOM. -> This is **patch**.

## Compiler

'Compiler' creates a 'Renderer' that creates a virtual DOM from a template.  
From the template (HTML in this case), it is converted into a tree-type data structure called AST, and a function to create a virtual DOM called Renderer is dynamically activated to finally complete the virtual DOM.  
AST stands for Abstract Syntax Tree, which is a tree-type inputted data(HTML or program etc...) structure.

## Scheduler

The scheduler is a module to manipulate asynchronous processing.  
In Vue, Scheduler works the same way as a microtasks in JS.  
When some job is added from the context of the call stack, the job is added to the queue held by the Scheduler.  
When the first job is added to the scheduler, it will enter a state called 'FlushPending'.  
After that, the state of 'FlushPending' does not change when a job is added to the scheduler, when all call stack contexts are executed, changes to the state of 'Flushing'.  
When the state changes to 'Flush', the job held in the Scheduler will be executed.

## nextTick

A function for asynchronous processing using Promise in Vue.  
<https://v3.vuejs.org/api/global-api.html#nexttick>
```JS
/**
 * @param fn Callback function
 */
nextTick(fn);
```
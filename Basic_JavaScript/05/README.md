## Function

In JavaSctript, function is an executable object and are one of the fundamental building blocks.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>  
Anything other than a primitive type is an object.  
variable() is running an executable object.

## Callback Function

Functions that are passed as arguments to other functions.
```JS
function fn(cb) {
	cb();
}

fn(functionName);
```

## 'this'

Keyword that holds a reference to the calling object.  
The referent of 'this' changes depending on the execution context.

## Copying references and 'this'

In case,  
executed as a method of an object
```
'this' => Caller Object
```

In case,  
executed as a function
```
'this' => Global Object
```

## bind

bind is a method.( Function.prototype.bind() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>  
Bind can create a new function with a fixed "this" and a fixed arguments.  
Therefore, It is possible to bind "this" with bind.  
The first argument is a fixed object of 'this'.
For the second and following arguments, the arguments to be passed can be fixed.
```JS
func.bind(thisArg, arg1, ... , argN)
```

## call

call is a method. ( Function.prototype.call() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call>  
"call" is almost the same as "bind", the difference is that it is executed as soon as it is used.  
```JS
func.call(thisArg, arg1, ... , argN)
```

## apply

apply is a method. ( Function.prototype.apply() )  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply>  
"apply" is almost the same as "call", the difference is that the second argument is to pass an array.
```JS
func.apply(thisArg, [ argsArray])
```

## bind vs. call, apply

- bind

	- Change references to "this" and arguments

	- Don't execute at point of use

- call, apply

	- Change references to "this" and arguments

	- Execute a function as soon as it is used.

## call vs. apply

- call

	- The second and following arguments can be used to specify arguments (parameter) to be passed.

- apply

	- The second argument can be specified "as an array" and the arguments (parameter) to be passed.

## Arrow Function

Shorthand notation to make it easier to write IIFE.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
```JS
() => {};
```

|  | IIFE | Arrow Function |
| :---: | :---: | :---: |
| this | ○ | × |
| arguments | ○ | × |
| new | ○ | × |
| prototype | ○ | × |

## Arrow Function and 'this'

Since the arrow function does not have "this", it follows the scope chain and refers to the window object in the global context, which is the lexical scope.  
In other words, the scope of the Arrow function is one level higher.

## Default parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters>  

```js
function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) {
	statement
}
```

An example is as follows.

```js
function return_sum(a, b = 1) {
	return a + b;
}

console.log(return_sum(3, 5)); // 8

console.log(return_sum(3)); // 4
```
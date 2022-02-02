## Proxy

An object to add your own processing to property operations.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming#proxies>
```JS
/**
 * @param obj The original object which you want to proxy
 * @param handler An object that defines which operations will be intercepted
 	and how to redefine intercepted operations.
 */
new Proxy(obj, handler);
```

The method of the handler object is called ***trap*** because the method of the handler object moves when some property is changed.
```JS
const handler = {

	/**
	 * @param target Object to be passed as first argument to the Proxy
	 * @param prop Name of the property when the property is accessed
	 * @param value New value to be passed to set
	 * @param receiver Object of the Proxy created with new
	 */
	set(target, prop, value, receiver) {

	}
	get(target, prop, receiver) {

	}
	deleteProperty(target, prop) {

	}
}
```

## Reflect

An object that contains methods which directly call generic functions inside the JavaScript engine.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming#reflection>  
JavaScript engine has "internal methods" which are used only internally, and by using "reflect" you can indirectly call the internal methods.  
Examples are shown in the following table

| internal methods | Reflect |
| :---: | :---: |
| \[\[Get]] | get |
| \[\[Set]] | set |
| \[\[Delete]] | deleteProperty |
| \[\[Construct]] | construct |

```JS
/**
 * @param C Constructer function
 * @param arguments Pass the arguments you want to pass as an array
 */
Reflect.construct(C, [arguments])
```
Two purposes of using Reflect  

1. Storage location for functions that call internal methods.

2. Using in conjunction with Proxy

## Reflect.has

It is the static method working like the in operator as a function.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has>

```JS
/**
 * @param target Target object in which to look for the property
 * @param propertyKey Name of the property to check
 */
Reflect.has(target, propertyKey)
```

## Reflect.defineProperty

It is the static method like Object.defineProperty().  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty>  
But return a ***boolean***.

```JS
/**
 * @param target Target object on which to define the property
 * @param propertyKey nNme of the property to be defined or modified
 * @param attributes Attributes for the property being defined or modified
 */
Reflect.defineProperty(target, propertyKey, attributes);
```

## Proxy and Reflect

The relationship between "Reflect", "Proxy" and the internal methods is shown under the table.

| internal methods | Reflect | Proxy |
| :---: | :---: | :---: |
| \[\[Get]] | get | get |
| \[\[Set]] | set | set |
| \[\[Delete]] | deleteProperty | deleteProperty |
| \[\[Construct]] | construct | construct |

From the table, arguments which are passed by Proxy can be passed directly to Reflect.  
Therefore, it is possible to bind "this" in the object's getter to the Proxy's object.

## WeakMap

It is an object that is a collection of key/value pairs in which the keys are weakly referenced.  
The keys must be objects and the values can be arbitrary values.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap>  
If the key is an object and it is not need to be iterative processing, use WeakMap.  
Also, since WeakMap cannot be iterative processing using "for...of", in that case, use Map.

```JS
const wm = new WeakMap();
```

## JSON Object

The JSON object contains methods for parsing JSON(stands for JavaScript Object Notation) and converting values to JSON.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>  
The JSON method is used for communicating with the server side and for storing data in local storage as described later.  
***JSON.stringify*** method is to convert Object to JSON.
```JS
/**
 * @param value The value to convert to a JSON string
 * @param replacer Optional. A function that alters the behavior
 	of the stringification process, or an array of String and Number
	that serve as an allowlist for selecting/filtering the properties
	of the value object to be included in the JSON string
 * @param space Optional. A String or Number object that's used to insert
 	white space into the output JSON string for readability purposes.
	For instance, using a tab character('\t') mimics standard pretty-print appearance
 */
JSON.stringify(value, replacer, space);
```
***JSON.parse*** method is to convert JSON to Object.
```JS
/**
 * @param text The string to parse as JSON
 * @param reviver Optional. If a function, this prescribes
 	how the value originally produced by parsing is transformed, before being returned
 */
JSON.parse(text, reviver);
```

## Storage

An object for storing data in the browser's storage area.  
In practice, "localStorage" is created from the "Storage" constructor and is the storage area in the browser.  
Also, static methods of localStorage are handled synchronously.  
<https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>
```JS
// set
localStrage.setItem('key', 'value');

// get
localStorage.getItem('key');

// get length of localStorage
localStorage.length();
```

## Array

The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>  
The basic operation is shown below.
```JS
// create an array
const arry = [1, 2, 3, 4, 5];

// add an item to the end of an array
let newLength = arry.push(6); // (6) [1, 2, 3, 4, 5, 6]
// newLength -> 6

// remove an item from the end of an array
let last = arry.pop(); // (5) [1, 2, 3, 4, 5]
// last -> 6

// remove an item from the beginning of an array
let first = arry.shift(); // (4) [2, 3, 4, 5]
// first -> 1

// add an item to the beginning of an array
let newLength = arry.unshift(1); // (5) [1, 2, 3, 4, 5]
// newLength -> 5

// find the index of an item in the array
let pos = arry.indexOf(3); // pos -> 2

/*
removes an item from the index position(first argument)
by a specified number of characters(second argument).
The third and subsequent arguments can be used to specify items
to be placed in the cut-out area.
*/
let removedArry = arry.splice(0, 2, 0, 1, 2); // (6) [0, 1, 2, 3, 4, 5]
// removedArry -> (2) [1, 2]

// copy an array
let copiedArry = arry.slice();
// copiedArry -> (6) [0, 1, 2, 3, 4, 5]

// concatenate two arraies
let concatenatedArry = arry.concat([6, 7, 8]);
// concatenatedArry -> (9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

// concatenate two arraies by spread syntax
let concatenatedArry = [-1, ...arry, 9, 10];
// concatenatedArry -> (12) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## forEach()

The forEach() method executes a provided function once for each array element.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
```JS
/**
 * @param callbackFn Function to execute on each element
 * @param element The current element being processed in the array
 * @param index Optional. The index of element in the array
 * @param array Optional. The array forEach() was called upon
 * @param thisArg Optional. Value to use as this when executing callbackFn
 *
 * @return undefined
 */
forEach(function callbackFn(element, index, array) { ... }, thisArg);
```

## map()

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
```JS
/**
 * @param callbackFn Function that is called for every element of array
 * @param element The current element being processed in the array
 * @param index Optional. The index of the current element being processed in the array
 * @param array Optional. The array map was called upon
 * @param thisArg Optional. Value to use as this when executing callbackFn
 *
 * @return A new array with each element being the result of the callback function
 */
map(function callbackFn(element, index, array) { ... }, thisArg);
```

## filter()

The filter() method creates a new array with all elements that pass the test implemented by the provided function.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>
```JS
/**
 * @param callbackFn Function is a predicate, to test each element of the array
 * @param element The current element being processed in the array
 * @param index Optional. The index of the current element being processed in the array
 * @param array Optional. The array filter was called upon
 * @param thisArg Optional. Value to use as this when executing callbackFn
 *
 * @return A new array with the elements that pass the test.
 	If no elements pass the test, an empty array will be returned
 */
filter(function callbackFn(element, index, array) { ... }, thisArg);
```

## reduce()

The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element.  
The final result of running the reducer across all elements of the array is a single value.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
```JS
/**
 * @param callbackFn Function that will be executed on all elements of the array
 	(except the first, if no initialValue is provided)
 * @param accumulator Accumulator to accumulate callback return values
 * @param currentValue The element of the array which is currently being processed
 * @param currentIndex Optional. The index of the array element currently being processed.
 	If initialValue is specified, it starts at index 0; otherwise, it starts at index 1
 * @param array Optional. The array reduce was called upon
 * @param initialValue Optional. Value to be used as the first argument of the first call to callback.
 	if initialValue is not given, the first element of the array
	will be used as the initial value of the accumulator
	and skipped as currentValue. When reduce() is called on an empty array,
	a TypeError will be raised if no initialValue is provided.
 *
 * @return The value that results from running the “reducer” callback function
 	to completion over the entire array
 */
reduce(function callbackFn(accumulator, currentValue, index, array) {
	// return result from executing something for accumulator or currentValue
}, initialValue);
```
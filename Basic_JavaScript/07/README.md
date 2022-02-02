## loop

About typical while sentence and for sentence.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration>

- for statement
```JS
for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
	// statement
}
```

- while statement
```JS
while (condition) {
	// statement
}
```

- do while statement
statement is always executed once before the condition is checked.  
If condition is true, the statement executes again. 
```JS
do {
	// statement
}
while (condition);
```

## Operator precedence

Operator is symbol that performs processing based on a value (operand) and **returns the result**.  
Also, operators have precedence.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>

## loop and block scope

Variables declared in the block scope hold references in completely different memory spaces for each loop.  
The only variable declarations that can be used within the block scope are let and const.

## for...in and enumerable

for...in is to iterate over enumerable properties in no particular order.  
If you want to enumerate only the property which are set for yourself, use the "Object.hasOwnProperty()" method.
Because the  prototype chain is also enumerated.  
Properties defined with Symbol are not enumerated.  
The built-in methods basically have enumerable set to false.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in>
```JS
const obj = {
	prop1: 'value1',
	prop2: 'value2'
}

for (let key in obj) {

	// Exclude methods in prototype
	if (obj.hasOwnProperty(key)) {
		console.log(obj[key]); // value1 value2
	}
}
```

## for...of

"for...of" is to perform repetitive operations on object which has iterator.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>
```JS
const arry = ['a', 'b', 'c'];

arry[4] = 'e';

for (let v of arry) {
	console.log(v); // a b c undefined e
}
```

## Iterator

Iterater is object to use when performing repetitive operations.  
Iterator calls repeatable object(String, Array, Map, Set, arguments, etc...).  
Depend on the movement of the iterator stored in the object.  
Iterator is written according to a set of rules.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator>  
The return section is the iterator.
```JS
function genIterator() {

	// must have a 'next' method
	return {
		next: function() {

			// must return object
			return {

				// must write boolean value of whether or not to loop
				done: true / false;

				// must write property to store the value passed during the loop
				value: val
			}
		}
	}
}
```

## Generator

Generator is special function for generating iterators.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator>  
Generator is written according to a set of rules.
Generators can be written in a much simpler way. 
```JS
function* gen() {
	if (condition) {
		yield val; // done: false value: val
	} else {
		return val; // done: true value: val
	}
}
```

Also, combining the shorthand notation of the object with the way the generator is written can make it shorter.
```JS
const obj = {
	*[Symbol.iterator]() {
		if (condition) {
			yield val; // done: false value: val
		} else {
			return val; // done: true value: val
		}
	}
}
```

## Map, Set

Map and Set are container for managing data. 
it calls collection.

## Map

Map object holds key-value pairs and remembers the original insertion order of the keys.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map>
```JS
// instantiate
const map = new Map();

// key of map is non-restricted
const key = {};

// insert
map.set(key, 'value');

// get
map.get(key); // value

// Whether or not you have the specified key.
map.has(key); // true

// delete
map.delete(key);
```

## Set

Set object lets you store unique values of any type.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set>
```JS
// instantiate
const s = new Set();

// key of map is non-restricted
const key = {};

// insert
s.add(key);

// get
s.get(key);

// Whether or not you have the specified key.
s.has(key); // true

// delete
s.delete(key);

// make object an array
const arry = Array.from(s);

// make object an array(Spread syntax)
const arry = [...s];
```

## Object vs. Map

|  | Object | Map |
| :---: | :---: | :---: |
| Key | String | non-restricted |
| for...in | ○ | × |
| for...of | × | ○ |

## Array vs. Set

|  | Array | Set |
| :---: | :---: | :---: |
| duplicate key | ○ | × |
| for...in | ○ | × |
| for...of | ○ | ○ |

## Spread Operator

Expand iterable and enumerable objects.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>  
The spread operator follows the iterator operation.
```JS
let a = [...array];
```

## Rest Parameter

Combine variables passed as real arguments into an array.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters>
```JS
function(...args)
```

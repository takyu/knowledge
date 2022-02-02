## How to write objects

```JS
const obj = {

	// property
	prop1: 'value1',
	prop2: 'value2',

	// Functions stored in the object's properties -> Method
	prop3: function() {
		console.log('function');
	}

	// Object in Object ...
	prop4: {
		prop1: 'value1';
	}
```

also, Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions>
```JS
const obj = {
	prop3() {
		console.log('function');
	}
}
```

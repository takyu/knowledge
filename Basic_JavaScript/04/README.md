## let, const, and var

1. let
```
re-declaration: unable,
re-Substitution: able,
scope: block,
initialize: never
```

2. const
```
re-declaration: unable,
re-Substitution: unable,
scope: block,
initialize: never
```

3. var
```
re-declaration: able,
re-Substitution: able,
scope: function,
initialize: "undefined"
```

## Data Type

There are eight data types in JavaScript.

```JavaScript
1. Boolean		ex. true / false

2. Number		ex. 12

3. String		ex. "Hello"

4. Undefined	ex. undefined

5. Null			ex. null

6. Symbol
→unique value(later mention)

7. BigInt		ex. 12n
→Use when dealing with large numbers. Add n to the end of numbers.

8. Object		ex. {a: 'value'}
```

## Implicit conversion

Variable types are automatically converted depending on the situation that the variable is called in.  
ex. "1" -> 1

## Compalison operators

- Strict equivalence  
	Type comparison available.
```
a === b
```

- Abstract equivalence  
	Not type comparioson.
```
a == b
```

The Abstract Equality Comparison Algorithm link is as follows.  
<https://262.ecma-international.org/5.1/#sec-11.9.3>

## falsy, truthy

**falsy value**  
	Falsy value is a value that is considered false when converted to a boolean true/false value.  
	<https://developer.mozilla.org/en-US/docs/Glossary/Falsy>
```JavaScript
false, null, 0, undefined, 0n, NaN, ""
```
**truthy value**  
	Truthy value is an all value except "falsy value".<https://developer.mozilla.org/en-US/docs/Glossary/Truthy>

## AND, OR condition

AND  
	AND condition is whether or not something falsy is in the middle of the equation.  
	Return the value of the falsy when it is found.

OR  
	OR condition is whether or not something truethy is in the middle of the equation.  
	Return the value of the truethy when it is found.

## Primitive type

- Variables store values.

- Once created, its value cannot be changed. -> immutable  
	Reassignment is just switching references.

- Copying a primitive type is the value itself being copied.  
	Changing the value of the copy destination doesn't change it of the copy source.

## Object

- Variables store references.

- The value can be changed. -> mutable  
	Before Object is a container for managing names and values in pairs, in Actually, it is a container for managing named references.

- Copying an object is copying a reference.  
	If you change the value of the destination, the value of the source will also change.

## Destructuring assignment

Extracts specific properties from an object and declares.
Usage is as follws.
```JavaScript
let obj = {
	prop: 'hello'
}

let { prop } = obj;

console.log(prop); // hello
```

## Comparison references and values

Value comparison for primitive types, reference comparison for objects.
# What's Modules?

A mechanism to divide the source code into separate functions because of easier maintenance.  
Typical examples are ESM(Ecma Script Modules) and CJS(Common JavaScript).

## CommonJS

A mechanism to manage modules on NodeJS.  
The keywords **"require"** and **"exports"** are used to load modules and expose modules to external files.

## ESModules

A mechanism to manage modules on ECMAScript.  
The keywords **"import"** and **"export"** are used to load modules and expose modules to external files.

## ESM vs. CJS

|  | ESM | CJS |
| :---: | :---: | :---: |
| load and expose | import / export | require / exports |
| using place | Browser | Node.js |
| file extension | .mjs | .cjs |

## Import / Export

- Export

	- expose modules to external files.

	- It uses to define functions and variables which can use from external modules.

- Import

	- use to load modules.

## Usage ESM

- export
```JS
// filename: moduleA.js

export let val = 0;

export function fn() {
	console.log('publicFn called: ');
}

export default 1;
```

- import
```JS
import defaultVal, { val, fn } from "./moduleA.js";

console.log(defaultVal); // 1
console.log(val); // 0;
fn(); // publicFn called:

/*
use the "as" keyword if you want to change the name of a function or variable to be loaded
*/
import { val as valA, fn as fnA } from "./moduleA.js";

console.log(valA); // 0
fnA(); // publicFn called:

/*
import the module as an object
*/
import * as moduleA from './moduleA.js'

console.log(moduleA); // Module {...}
console.log(moduleA.val); // 0
console.log(moduleA.default); // 1
moduleA.fn(); // publicFn called:
```

## Difference between IIFE and Module

Variables of primitive types can be changed externally in IIFE, but the variables of exported primitive types cannot be changed.

## Context in ESM

There are three types of execution contexts.  
In ESM, the global context is changed to a module context, and this points to undefined.

1. module context

	1. Variables and functions in the context of execution.
	
	2. Global Object

2. function context

	1. Context and situation in which the code is executed.

	2. arguments

	3. super

	4. this

	5. external variables

3. eval context

## Scope in ESM

There are four scopes in ESM.
In ESM, script scope changes to module scope.

1. Global Scope

2. Module Scope

3. funcion Scope

4. Block Scope

## Module Features

- If type="module" is specified, the file is be loaded asynchronously.  In other words, when type="module", it is accompanied by the defer attribute.

- Even if a module is loaded multiple times in an html file, it will only be loaded once(similar to IIFE).

- Even if the same module file is loaded multiple times in a module file, it will only be loaded once(similar to IIFE).

```html
<script type="module" src="file.js"></script>
```

## defer

The script tag is executed as soon as it is loaded. This is called synchronous processing.  
On the other hand, by adding the defer attribute to the script tag, it is loaded asynchronously, that is, when the parsing of the html file is finished.

```html
<script src="file.js" defer></script>
```

## nomodule

Browsers which don't support modules (such as Internet Explorer), only script tags with the attribute "nomodule" will be loaded.

```html
<script nomodule>/* processing */</script>
```

## Strict Mode

Restrict some writing styles which are allowed in normal JavaScript.  
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode>  
In the module, it is always in strict mode.  
There are three main purposes to use Strict mode.  

- Preventing unintentional bugs from entering the system

- Secure reserved word

- Securing the code

```JS
/*
Write the following at the beginning of the file or on the first line of the function.
*/
"use strict"
```

## Reserved Word
A reserved word are IdentifierName which cannot be used as an identifier.  
<https://tc39.es/ecma262/#sec-keywords-and-reserved-words>

## Strict Mode and Class

The constructor functions and methods defined in class have strict mode turned on by default.

## Dynamic import

With dynamic import, variables and functions declared with "export" can be loaded asynchronously.  
What is returned by the dynamic import is a ***Promise object***.
```JS
import(/* filename */);
```
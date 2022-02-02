## Scope

The extent to which values and expressions can be referenced from running code. 
There are five scopes in JavaScript.

1. Global Scope

2. Script Scope

3. Funcion Scope

4. Block Scope

5. Module Scope

## Lexical Scope

Depending on where the code is written, scope that changes the variables which can be referenced. 
Therefore, called 'static scope' because the decision is made at the time the code is written.  
Also, the external scope as seen from the running code. 

## Scope Chain

Scope is multitired and is in a row.  
Search from the inner scope, then go to the script scope, then to the global scope.

## Closier

A variable in the lexical scope is being used by a function.  
For implementations using closures, there are the "definition of private variables" and "dynamic (variable values differ depending on the situation) function generation.

## IIFE

IIFE stands for Immediately Invoked Function Expression.  
Function to be executed only once as soon as the function is defined.  
Usage is as follows.
```JavaScript
let result = 
(function (parameter) {
	return resultValue;
})(arguments);
```
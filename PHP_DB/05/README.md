## How the try-catch syntax is configured

If an error occurs for code written outside of the try-catch syntax, the subsequent code will not be executed and an error will occur.  
If an error occurs for code written inside the try-catch syntax, the subsequent code will be executed because the catch block is executed and the finally block is executed.  
Also, if a function or class method is called within the try-catch syntax, the subsequent code will be executed even if an error occurs.  
When an error occurs, the code is tracing back, so individual error handling is set up in the function or method, and if it is not specify individual error, the exception is handled in the final try syntax.  

```php
function fn() {

	try {

		// processing
		
	} catch (PDOException $e) /* Individual error settings */ {
		
		// error processing

	} 
	
}

try {

	fn();

} catch (Error $e) {

	// error processing

} finally {
	
	// To be executed
	
}

// To be executed
```

## Error hierarchy

Error and Exception in PHP inherit from the Throwable class.  
Therefore, depending on the class written in the catch, you can narrow down what will be handled in error.  
Conversely, by making Throwable an error handling class, it will receive all exceptions.  
<https://www.php.net/manual/en/language.errors.php7.php#language.errors.php7.hierarchy>

```
・Throwable
	・Error
		・ArithmeticError
			・DivisionByZeroError

		・AssertionError

		・CompileError
			・ParseError

		・TypeError
			・ArgumentCountError

		・ValueError

		・UnhandledMatchError

・Exception
	・ ...

```

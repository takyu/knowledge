## Exceptions

PHP has an exception model similar to that of other programming languages. An exception can be thrown, and caught ("catched") within PHP.  
<https://www.php.net/manual/en/language.exceptions.php#language.exceptions>  
Code may be surrounded in a try block, to facilitate the catching of potential exceptions.  
Each try must have at least one corresponding catch or finally block.

- catch

A catch block defines how to respond to a thrown exception.  
A catch block defines one or more types of exception or error it can handle, and optionally a variable to which to assign the exception.  
(The variable was required prior to PHP 8.0.0.)  
The first catch block a thrown exception or error encounters that matches the type of the thrown object will handle the object.

- finally

A finally block may also be specified after or instead of catch blocks.  
Code within the finally block will always be executed after the try and catch blocks, regardless of whether an exception has been thrown, and before normal execution resumes.


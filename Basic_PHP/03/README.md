## Order of program description (PHP)

The process in a function works only when the function is executed.  
Therefore, declaring a variable in the global scope to be used in a function after the function description is not a problem as long as the function is not being executed.  
Also, since function declarations are prepared before program execution, it is not a problem to write the function after the function's executable statement.  
Otherwise, the programs are executed in order from the top.

## isset()

It is a function to determine if a variable is declared and is different than null.  
<https://www.php.net/manual/en/function.isset>  
It is often used to check if a key is set in an array.

```php
/**
 * @param mixed var The variable to be checked.
 * @param mixed vars Further variables.
 * 
 * @return bool Returns true if var exists and has any value other than null. false otherwise.
 */
isset(mixed $var, mixed ...$vars): bool
```

## Ternary Operator

The expression ```(expr1) ? (expr2) : (expr3)``` evaluates to expr2 if expr1 evaluates to true, and expr3 if expr1 evaluates to false.  
<https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary>  
It is often used for array initialization and variable initialization.  
It is possible to leave out the middle part of the ternary operator.   Expression ```expr1 ?: expr3``` returns expr1 if expr1 evaluates to true, and expr3 otherwise.

## Null Coalescing Operator

The expression ```(expr1) ?? (expr2)``` evaluates to expr2 if expr1 is null, and expr1 otherwise.  
<https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce>  
In particular, this operator does not emit a notice or warning if the left-hand side value does not exist, just like isset().  
This is especially useful on array keys.

## Constant

A constant is an identifier (name) for a simple value.  
<https://www.php.net/manual/en/language.constants.php>  
Constants are case-sensitive.  
Also, const cannot be used in if statements or functions.  
By convention, constant identifiers are always **uppercase**.

## constant()

It is a function to return the value of the constant indicated by name.  
<https://www.php.net/manual/en/function.constant.php>  
It is stored in a variable or returned by a function.

```php
/**
 * @param string name The constant name
 * 
 * @return mixed Returns the value of the constant, or null if the constant is not defined.
 */
constant(string $name): mixed
```

## define()

It is a function to define a named constant at runtime.  
<https://www.php.net/manual/en/function.define.php>  

```php
/**
 * @param string constant_name The name of the constant
 * @param mixed value The value of the constant
 * @param boolean case_insensitive The default behavior is case-sensitive
 * 
 * @return bool Returns true on success or false on failure
 */
define(string $constant_name, mixed $value, bool $case_insensitive = false): bool
```

- constant_name

	It is possible to define() constants with reserved or even invalid names, whose value can (only) be retrieved with constant().  
	However, doing so is not recommended.

- value
	In PHP 5, value must be a scalar value (int, float, string, bool, or null).  
	In PHP 7, array values are also accepted.  

	**\[[Warning]]**  
	While it is possible to define resource constants, it is not recommended and may cause unpredictable behavior.

- case_insensitive

	If set to true, the constant will be defined case-insensitive.  
	Therefore, CONSTANT and Constant represent different values.  

	**\[[Warning]]**  
	Defining case-insensitive constants is ***deprecated*** as of PHP 7.3.0.  
	Case-insensitive constants are stored as lower-case.

## defined()

It is a function to check whether the given constant exists and is defined.  
<https://www.php.net/manual/en/function.defined>  

```php
/**
 * @param string constant_name The constant name
 * 
 * @return boolean Returns true if the named constant given by constant_name has been defined, false otherwise
 */
defined(string $constant_name): bool
```

## function_exists()

It is a function to checks the list of defined functions, both built-in (internal) and user-defined, for function.  
<https://www.php.net/manual/en/function.function-exists.php>  
This function will return false for constructs, such as [include_once](https://www.php.net/manual/en/function.include-once.php) and echo.

```php
/**
 * @param string function The function name, as a string
 * 
 * @return boolean Returns true if function exists and is a function, false otherwise
 */
function_exists(string $function): bool
```

- isset() v.s. defined() v.s. function_exists()

	If you want to see if a **variable** exists, use isset().  
	If you want to see if a **constant** exists, use defined().  
	If you want to see if a **function** exists, use function_exists().

## define() v.s. const

Constants set with define() are placed in the global scope, while constants declared with const are placed in the namespace.

## divide file

When the amount of code is large, split the files for easier maintenance.  
In php, there is no scope for each file, and the functions of the loaded file are placed in the global scope.  
Therefore, when writing a function, make sure that the function name already exists. (Use [function_exists()]).  
There are two types of loading methods, "include" and "require", which have the same function, but each has its own differences.

## include

The include expression includes the specified file.  
<https://www.php.net/manual/en/function.include.php>  
It is often used to load php files that contain HTML templates.

```php
// Load as a function
include('filename');

// Load as keyword
include 'filename';
```

## require

The require expression is identical to include.  
<https://www.php.net/manual/en/function.require.php>  
Except upon failure it will also produce a fatal error, in other words, it will **halt the script**.  
It　is often used when you want to load a function.

```php
// Load as a function
require('filename');

// Load as keyword
require 'filename';
```

## include_once

It is a behavior similar to the include statement,  
with the only difference being that if the code from a file has already been included, it will not be included again.

```php
// Load as a function
include_once('filename');

// Load as keyword
include_once 'filenema';
```

## require_once

It is identical to require except PHP will check if the file has already been included, and if so, not include (require) it again.

```php
// Load as a function
require_once('filename');

// Load as keyword
require_once 'filenema';
```

## Relative path

The path of the file as seen from the running file.  
This is often used when the file to be read is in the same directory.  
To indicate the current directory, use "./",  to indicate the previous directory, use "../".

## Abosolute path

The path that contains all the paths from the root directory.  
In PHP, the magic constant ```"__DIR__"``` can be used to get the absolute path to the directory of the file being executed,  
and the magic constant ```"__FILE__"``` can be used to get the absolute path to the file being executed.  
The "require" function searches for paths even if they aren't written correctly to some extent (e.g., absolute and relative paths are mixed up),  
but it is important to write the path properly so that it doesn’t create unexpected bugs.

## Magic constants

There are nine magical constants that change depending on where they are used.  
<https://www.php.net/manual/en/language.constants.magic.php>  

| Name | Description |
| :---: | :---: |
| \_\_LINE__ | The current line number of the file. |
| \_\_FILE__ | The full path and filename of the file with symlinks resolved. |
| \_\_DIR__ | The directory of the file. |
| \_\_FUNCTION__ | The function name, or {closure} for anonymous functions. |
| \_\_CLASS__ | The class name. The class name includes the namespace it was declared in. |
| \_\_TRAIT__ |	The trait name. The trait name includes the namespace it was declared in. |
| \_\_METHOD__ | The class method name. |
| \_\_NAMESPACE__ |	The name of the current namespace. |
| ClassName::class | The fully qualified class name. |

## dirname()

It is a function to be given a string containing the path of a file or directory.  
<https://www.php.net/manual/en/function.dirname.php>  
this function will return the parent directory's path that is "levels" up from the current directory.

```php
/**
 * @param string path A path
 * @param int levels The number of parent directories to go up
 * 
 * @return string Returns the path of a parent directory
 */
dirname(string $path, int $levels = 1): string
```

## The difference between / and \\

On Windows, both slash (/) and backslash (\\) are used as directory separator character. In other environments, it is the forward slash (/).  
Since the OS we are developing for is often different from the OS we are actually running, we basically use slash (/).

## The difference between '' and ""

strings are written inside quotation Mark ("), the character following \\ is a character with special meaning in some cases (escape sequence).  
On the other hand, strings are written inside apostrophe (') are recognized as just strings.

## Namespaces

Namespaces are a way of encapsulating items and to prevent class/function/constant names from clashing with other files.  
<https://www.php.net/manual/en/language.namespaces.rationale.php>  
Write ```namespace <namespace name>``` at the top of the file that defines class/function/constant.
There are two ways to use them.

- File defining namespaces (sub.php)

```php
<?php
namespace lib;

const ONE_NUM = 1;

function fn1() {
	echo 'fn1 is called.';
}
```

- Files using namespaces (index.php)

1. Use ```use``` keyword

```php
<?php
require_once 'sub.php';

// Put (\) in front of function/constant/class name.
use function lib\fn1;
use const lib\ONE_NUM;

fn1(); // fn1 is called.
echo ONE_NUM; // 1
```

2. Call from global space

```php
<?php
require 'sub.php';

// Add (\) at the beginning to indicate a global space
\lib\fn1(); // fn1 is called.
echo \lib\ONE_NUM; // 1
```

You need not specify the namespace for those defined in the same namespace.  
Also, if a **function** or **constant** is in global space, the leading backslash (\\), which means global space, can be omitted.  
However, a **class** in global space, the leading backslash (\\) cannot be omitted.  
Namespaces can be specified with many layers of backslashes, just like specifying a directory.
For example, ```namespace sub\lib;```, ```namespace sub\lib\calculate;```.

```php
<?php
namespace sub;

// namespace lib
function fn1(int $num = lib\TWO_NUM): void {
	echo "{$TWO_NUM}";
}

namespace sub\lib;

// namespace sub\lib
const TWO_NUM = 2;
```

or

```php
<?php
namespace sub;

use sub\lib\TWO_NUM;

// namespace lib
function fn1(int $num = TWO_NUM): void {
	echo "{$TWO_NUM}";
}

namespace sub\lib;

// namespace sub\lib
const TWO_NUM = 2;
```

## class

A ***class*** is a template for the creation of new objects.  
<https://www.php.net/manual/en/language.oop5.basic.php>  
An ***object*** is something called a structure that has a specific variable or holds a specific function.  
The variable held in an object is called **member** or **property**, and the function is called **method**.  
To create an object, **instantiate** the class using the **new** operator.  
The resulting object is called an **instance**.  
The pseudo-variable **$this** is available when a method is called from within an object context.  
Visibility should be prefixed with a property or method.  
**$this** is the value of the calling object.   
Also, Be sure to put it before the property or method name of the class.

```php
<?php
// define class 
class Sweets {
	public $name;
	private $sweetness;

	function __construct($name, $sweetness)
	{
		$this->$name = $name;
		$this->$sweetness = $sweetness;
	}

	// If you omit the visibility before the method, it is public.
	function introduce_name() {
		echo 'This is, ' . $this->name . '<br>';
	}

	function introduce_sweetness() {
		echo "{$this->name} is {$this->sweetness}<br>";
	}
}

// instantinate
$sweet1 = new Sweets('chocolate', 'sweet');
$sweet1->introduce_name(); // This is, chocolate
$sweet1->introduce_sweetness(); // chocolate is sweet

$sweet2 = new Sweets('rice_cracker', 'salty');
$sweet2->introduce_name(); // This is, rice_cracker
$sweet2->introduce_sweetness(); // rice_cracker is salty
```

## Visibility

The visibility of a property, a method or (as of PHP 7.1.0) a constant can be defined by prefixing the declaration with the keywords public, protected or private.  
<https://www.php.net/manual/en/language.oop5.visibility.php>  
Class members declared ***public*** can be accessed everywhere.  
Members declared ***protected*** can be accessed only within the class itself and by inheriting and parent classes.  
Members declared as ***private*** may only be accessed by the class that defines the member.  

## __construct()

Classes which have a constructor method call this method on each newly-created object.  
So it is suitable for any initialization that the object may need before it is used.  
<https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor>

## chain method

This is used when you want to call an instance method in succession.  
This can be implemented by returning an instance of itself at the end of the method execution.  

```php
<?php
class Sweets {
	public $name;
	private $sweetness;

	function __construct($name, $sweetness)
	{
		$this->name = $name;
		$this->sweetness = $sweetness;
	}

	// Finally, it returns an instance of itself.
	function introduce_name() {
		echo 'This is, ' . $this->name . '<br>';
		return $this;
	}

	function introduce_sweetness() {
		echo "{$this->name} is {$this->sweetness}<br>";
		return $this;
	}
}

$sweet1 = new Sweets('chocolate', 'sweet');

// Continue writing methods
$sweet1->introduce_name() // This is chocolate
	->introduce_sweetness(); // chocolate is sweet

$sweet2 = new Sweets('rice_cracker', 'salty');
$sweet2->introduce_name() // This is rice_cracker
	->introduce_sweetness(); // rice_cracker is salty
```

## Static Keyword

Declaring class properties or methods as static makes them accessible without needing an instantiation of the class.  
<https://www.php.net/manual/en/language.oop5.static.php#language.oop5.static>  
These can also be accessed statically within an instantiated class object.

- Static methods

	Static methods are accessed using the Scope Resolution Operator (::) and cannot be accessed through the object operator (->).  
	The pseudo-variable $this is not available inside methods declared as static, because static methods are callable without an instance of the object created.  
	Use a static method, if you need not use $this in your process.

- Static properties

	Static properties are accessed using the Scope Resolution Operator (::) and cannot be accessed through the object operator (->).  
	It's possible to reference the class using a variable.  
	The variable's value cannot be a keyword (self, parent and static).  
	Use a static property for variables that are commonly used within an object.  
	Also, when const is used within a class, it is synonymous with static property (However, it cannot be overwritten if const is used.).

## Scope Resolution Operator (::)

The Scope Resolution Operator (also called Paamayim Nekudotayim) or in simpler terms, the double colon,  
is a token that allows access to static, constant, and overridden properties or methods of a class.  
<https://www.php.net/manual/en/language.oop5.paamayim-nekudotayim.php#language.oop5.paamayim-nekudotayim>  

```php
<?php 
class Address {

	// static properties
	public static $prefecture = 'Osaka';
	public static $city = 'Osaka city';
	private const ward = 'Chuoku';

	// static methods
	public static function say_prefecture() {
		echo Address::$prefecture . '<br>';
	}
	public static function say_city() {
		echo static::$city . '<br>';
	}
	private static function say_ward() {
		echo self::ward . '<br>';
	}
	public static function say_all() {

		// call static methods of your own class
		Address::say_prefecture();
		static::say_city();
		self::say_ward();
	}

}

// access static methods
Address::say_prefecture(); // Osaka
Address::say_city(); // Osaka city
Address::say_all(); // Osaka Osaka city Chuoku

// private method can't access
//Address::say_ward();

// access static properties
echo Address::$prefecture . '<br>'; // Osaka
echo Address::$city . '<br>'; // Osaka city

// private property can't access
//echo Address::ward . '<br>';
?>
```

## static v.s. self

In the inherited class, there is no difference between **self** and **static**.  
In the parent class, there is a difference between the two keywords.

- self

	If **self::** is written in the parent class, it refers to the one in the parent class.  
	It doesn't look at the values defined in the inherited child classes.

- static

	If **static::** is written in the parent class, it refers to the one in the inherited child class.  
	If the inherited child class is undefined, it is of course look at the value of the parent class.

## extends

A class can inherit the constants, methods, and properties of another class by using the keyword extends in the class declaration.  
It is not possible to extend multiple classes; a class can only inherit from **one base class**.  
<https://www.php.net/manual/en/language.oop5.basic.php#language.oop5.basic.extends>  
The inherited constants, methods, and properties can be **overridden** by redeclaring them with the same name defined in the parent class.  
However, if the parent class has defined a method as **final**, that method may **not be overridden**.  
It is possible to access the overridden methods or static properties by referencing them with **parent::**.

## abstract

PHP has abstract classes and methods.  
<https://www.php.net/manual/en/language.oop5.abstract.php>  
Classes defined as abstract cannot be instantiated, and any class that contains at least one abstract method must also be abstract.  
Methods defined as abstract simply declare the method's signature; they cannot define the implementation.  
When inheriting from an abstract class, all methods marked abstract in the parent's class declaration must be defined by the child class.  
By including abstract in the parent class, it is guaranteed that the inherited class will have what is specified by abstract.

```php
<?php
abstract class Japan {

	public static $country = 'Japan';
	protected $food;
	protected $location;

	function __construct($food, $location)
	{
		$this->food = $food;
		$this->location = $location;
	}

	// can't be overridden by inherited class
	final function say_country() {
		echo 'self::' . self::$country . '<br>'; // Japan
		echo 'static::' . static::$country . '<br>'; // 日本
	}

	abstract function famous_food();
	abstract function famous_location();

}

class Osaka extends Japan {

	public static $country = '日本';
	protected $prefecture;

	function __construct($food, $location, $prefecture)
	{
		// Use the constructor of the parent class
		parent::__construct($food, $location);
		$this->prefecture = $prefecture;
	}

	function famous_food()
	{
		echo $this->food . '<br>';
		return $this;
	}
	
	function famous_location()
	{
		echo $this->location . '<br>';
		return $this;
	}

}

$osaka = new Osaka('takoyaki', 'americamura', 'Osaka');
$osaka->say_country();
$osaka->famous_food(); // takoyaki
$osaka->famous_location(); // americamura
```

## Interfaces

Object interfaces allow you to create code which specifies which methods a class must implement, without having to define how these methods are implemented.  
<https://www.php.net/manual/en/language.oop5.interfaces.php>  
Interfaces share a namespace with classes and traits, so they may not use the same name.  
Interfaces are defined in the same way as a class, but with the interface keyword replacing the class keyword and without any of the methods having their contents defined.  
All methods declared in an interface must be public; this is the nature of an interface.

## Strict typing

The mode of strict checking for data types is called strict mode.  
<https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.strict>  
To enable strict mode, a single [**declare**](https://www.php.net/manual/en/control-structures.declare.php) directive must be placed at the top of the file.  
This means that the strictness of typing for scalars is configured on a per-file basis.  
PHP allows for object-oriented programming, such as using objects as arguments and return values.

- class.php

```php
// Add to the beginning of a file
<?php declare(strict_types=1);

namespace japan;

// Implementing the interface
interface Template_country {
	public function say_country(): self;
	public function famous_food(): self;
	public function famous_location(): self;
}

// Inheriting an Interface
abstract class Japan {

	public static string $country = 'Japan';
	protected string $food;
	protected string $location;

	function __construct(string $food, string $location)
	{
		$this->food = $food;
		$this->location = $location;
	}

	final function say_country(): self {
		echo 'self::' . self::$country . '<br>';
		echo 'static::' . static::$country . '<br>';
		return $this;
	}

	// Returns its own class.
	abstract function famous_food(): self;
	abstract function famous_location(): self;

}

class Osaka extends Japan {

	public static string $country = '日本';
	protected string $prefecture;
	protected int $city;

	function __construct(string $food, string $location, string $prefecture, int $city)
	{
		parent::__construct($food, $location);
		$this->prefecture = $prefecture;
		$this->city = $city;
	}

	function famous_food(): self
	{
		echo $this->food . '<br>';
		return $this;
	}

	function famous_location(): self
	{
		echo $this->location . '<br>';
		return $this;
	}

	function city_num(): void {
		echo 'Number of cities is ' . $this->city . '<br>';
	}

}
```

- index.php

```php
<?php declare(strict_types=1);

require_once 'class.php';

use japan\Japan;
use japan\Osaka;

// Execute methods of the parent class
function say_feature(Japan $prefecture): void {
	$prefecture->say_country()
		->famous_food()
		->famous_location(); 
}

// Execute the method of the child class
function say_city_num(Osaka $prefecture): void {
	$prefecture->city_num();
}

$osaka = new Osaka('takoyaki', 'americamura', 'Osaka', 33);
say_feature($osaka); // self::Japan static::日本, takoyaki, americamura
say_city_num($osaka); // Number of cities is 33
```

## Predefined Constants

These constants are defined by the PHP core.  
<https://www.php.net/manual/en/reserved.constants.php#reserved.constants>  
For example, ```PHP_EOL``` is a predefined constant that represents a newline.

## file_put_contents()

It is a function to write data to a file.  
<https://www.php.net/manual/en/function.file-put-contents.php>  
This function is identical to calling [fopen()](https://www.php.net/manual/en/function.fopen.php), [fwrite()](https://www.php.net/manual/en/function.fwrite.php) and [fclose()](https://www.php.net/manual/en/function.fclose.php) successively to write data to a file.  
If filename does not exist, the file is created.  
Otherwise, the existing file is overwritten, unless the FILE_APPEND flag is set.

```php
/**
 * @param string filename Path to the file where to write the data
 * @param mixed data The data to write
 * @param int flags flags can be any combination joined with the binary OR (|) operator
 * @param resource context A valid context resource created with stream_context_create()
 * 
 * @return int Returns the number of bytes that were written to the file, or false on failure.
 */
file_put_contents(
    string $filename,
    mixed $data,
    int $flags = 0,
    resource $context = ?
): int
```

- data

	It can be either a string, an array or a stream resource.  
	If data is a stream resource, the remaining buffer of that stream will be copied to the specified file.  
	This is similar with using stream_copy_to_stream().  
	You can also specify the data parameter as a single dimension array.  
	This is equivalent to file_put_contents($filename, implode('', $array)).

- flags

	Available flags are as follows.  
	| Flag | Description |
	| :---: | :---: |
	| FILE_USE_INCLUDE_PATH | Search for filename in the include directory. See include_path for more information. |
	| FILE_APPEND | If file filename already exists, append the data to the file instead of overwriting it. |
	| LOCK_EX | Acquire an exclusive lock on the file while proceeding to the writing. In other words, a flock() call happens between the fopen() call and the fwrite() call. This is not identical to an fopen() call with mode "x". |

## date()

It is a function to return a string formatted according to the given format string using the given integer timestamp or the current time if no timestamp is given.  
<https://www.php.net/manual/en/function.date>  
In other words, timestamp is optional and defaults to the value of time().

```php
/**
 * @param string format Date format
 * @param int timestamp Optional. timestamp parameter is an int Unix timestamp
 * 
 * @return string Returns a formatted date string
 */
date(string $format, ?int $timestamp = null): string
```

- format

	Format accepted by [DateTimeInterface::format()](https://www.php.net/manual/en/datetime.format.php).

- timestamp

	Timestamp defaults to the current local time if timestamp is omitted or null.  
	In other words, it defaults to the value of [time()](https://www.php.net/manual/en/function.time.php).

## sprintf()

It is a function to return a string produced according to the formatting string format.  
<https://www.php.net/manual/en/function.sprintf.php#refsect1-function.sprintf-parameters>

```php
/**
 * @param string format The format string is composed of zero or more directives
 * @param mixed values Some mixed variables
 * 
 * @return string Returns a string produced according to the formatting string format
 */
sprintf(string $format, mixed ...$values): string
```

- format

	Ordinary characters (excluding %) that are copied directly to the result and conversion specifications, each of which results in fetching its own parameter.  
	A conversion specification follows this prototype  
	```%[argnum$][flags][width][.precision]specifier.```  
	Click [this](https://www.php.net/manual/en/function.sprintf.php#refsect1-function.sprintf-parameters) for more information about each specifier.

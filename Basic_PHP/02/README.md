## Array

Create an array.  
An array in PHP is actually an ordered map.  
A map is a type that associates values to keys.  
Arrays in which are created pairs like this are called associative arrays.  
<https://www.php.net/manual/en/function.array.php>

```php
/**
 * @param mixed values Syntax "index => values", separated by commas, (index can omitted)
 * 
 * @return array
 */
array(mixed ...$values): array
```

Define an array as follows.

```php
<?php
$arry = array(
    "foo" => "bar",
    "bar" => "foo",
);

// Using the short array syntax
$arry = [
    "foo" => "bar",
    "bar" => "foo",
];

// If you omit the index, an integer index is automatically generated, starting at 0.
$person = [
	'taro', // [0] => 'taro'
	'jiro', // [1] => 'jiro'
	'hanako' // [2] => 'hanako'
];
?>
```

Basic operations on arrays are as follows.

```php
$country = [
	'Nihon',
	'America',
	'China'
];

echo $country[1]; // America

// Change array values
$arry[1] = 'Russia';
echo $arry[1]; // Russia

// Insert at the end of the array.
$arry[] = 'America';
var_dump($arry); // Array ( [0] => Nihon [1] => Russia ...)
```

## print_r()

It is a function to display information about a variable data type that's readable by humans.  
<https://www.php.net/manual/en/function.print-r>  
```php
/**
 * 
 * @param mixed value The expression to be printed
 * @param boolean return  If you would like to capture the output of print_r(), use the return parameter
 * 
 * @return string|bool data type of value
*/
print_r(mixed $value, bool $return = false): string|bool
```

## for (loop)

for loops are the most complex loops in PHP.
They behave like their C counterparts.  
<https://www.php.net/manual/en/control-structures.for.php>  
The syntax of a for loop is as follows.

```php
for (expr1; expr2; expr3) {
	statement
}
```

The first expression (expr1) is evaluated (executed) once unconditionally at the beginning of the loop.  
In the beginning of each iteration, expr2 is evaluated.  
If it evaluates to true, the loop continues and the nested statement(s) are executed.  
If it evaluates to false, the execution of the loop ends.  
At the end of each iteration, expr3 is evaluated (executed).

## count()

It is a funcrion to count all elements in an array when used with an array.  
<https://www.php.net/manual/en/function.count>  

```php
/**
 * @param Countable|array value An array or Countable object
 * @param int mode If the optional mode parameter is set to COUNT_RECURSIVE (or 1), count() will recursively count the array
 * 
 * @return int Returns the number of elements in value
 */
count(Countable|array $value, int $mode = COUNT_NORMAL): int
```

## foreach (loop)

foreach loops provide an easy way to iterate over arrays.  
<https://www.php.net/manual/en/control-structures.foreach.php>  
There are two syntaxes and are as follows.

```php
foreach (iterable_expression as $value) {
	statement
}

foreach (iterable_expression as $key => $value) {
	statement
}
```

The first form traverses the iterable given by iterable_expression. On each iteration, the value of the current element is assigned to $value.  
The second form will additionally assign the current element's key to the $key variable on each iteration.  
An example is as follows.

```php
$fruits = [
	'apple',
	'banana',
	'orange'
]

foreach ($fruits as $v) {
	echo '<div>' . $v . '</div>';
	/* 
	apple
	banana
	orange
	*/
}

foreach ($fruits as $i => $v) {
	echo '<div>' . '[' . $i . ']' . ' => ' . $v . '</div>';
	/* 
	[0] => apple
	[1] => banana
	[2] => orange
	*/
}
```

## array_shift()

It is a function to shift the first value of the array off and returns it.  
<https://www.php.net/manual/en/function.array-shift>

```php
/**
 * @return mixed Returns the shifted value
 */
array_shift(array &$array): mixed
```

## array_pop()

It is a function to pop and returns the value of the last element of array, shortening the array by one element.  
<https://www.php.net/manual/en/function.array-pop>

```php
/**
 * @return mixed Returns the value of the last element of array
 */
array_pop(array &$array): mixed
```

## array_splice()

It is a fuction to Remove the elements designated by offset and length from the array array, and replaces them with the elements of the replacement array, if supplied.  
<https://www.php.net/manual/en/function.array-splice>  

```php
/**
 * @param array offset Where to start with the index
 * @param int length How many to remove
 * @param mixed replacement Elements to be replaced
 * 
 * @return array Returns an array consisting of the extracted elements
 */
array_splice(
    array &$array,
    int $offset,
    ?int $length = null,
    mixed $replacement = []
): array
```

The arguments "offset", "length", and "replacement" each have their own characteristics.  

- length

	- If offset is **positive** then the start of the removed portion is at that offset from the **beginning** of the array array.

	- If offset is **negative** then the start of the removed portion is at that offset from the **end** of the array array.

- offset

	- If length is **omitted**, removes everything from offset to the **end** of the array.

	- If length is specified and is **positive**, then that many elements will be removed.

	- If length is specified and is **negative**, then the **end** of the removed portion will be that many elements from the end of the array.

	- If length is specified and is **zero**, **no** elements will be removed.

- replacement

	- If replacement array is **specified**, then the removed elements are **replaced** with elements from this array.

	- If offset and length are such that **nothing is removed**, then the elements from the replacement array are **inserted** in the place specified by the offset.

## unset()

It is a function to destroy the specified variables.  
<https://www.php.net/manual/en/function.unset>  

```php
/**
 * @param mixed var The variable to be unset
 * @param mixed vars Further variables
 */
unset(mixed $var, mixed ...$vars): void
```

## preg_match()

It is a function to Searches subject for a match to the regular expression given in pattern.  
<https://www.php.net/manual/en/function.preg-match>  

```php
/**
 * @param string pattern The pattern to search for, as a string
 * @param string subject The input string
 * @param array matches If specified, return the search results as an array
 * @param int flags Can be a combination of the following flags
 * @param int offset The search starts from the beginning of the subject string
 * 
 * @return int|false 1 if the pattern matches given subject, 0 if it does not, or false on failure.
 */
preg_match(
	string $pattern,
	string $subject,
	array &$matches = null,
	int $flags = 0,
	int $offset = 0
): int|false
```

- matches

If matches is provided, then it is filled with the results of search.   $matches[0] will contain the text that matched the full pattern, $matches[1] will have the text that matched the first captured parenthesized subpattern, and so on.

- flags

	- PREG_OFFSET_CAPTURE

		If this flag is passed, for every occurring match the appendant string offset (in bytes) will also be returned.  
		Note that this changes the value of matches into an array where every element is an array consisting of the matched string at offset 0 and its string offset into subject at offset 1.

	- PREG_UNMATCHED_AS_NULL

		If this flag is passed, unmatched subpatterns are reported as null; otherwise they are reported as an empty string.

- offset

Normally, the search starts from the beginning of the subject string.  
The optional parameter offset can be used to specify the alternate place from which to start the search (in bytes).

## preg_match_all()

Searches subject for all matches to the regular expression given in pattern and puts them in matches in the order specified by flags.  
After the first match is found, the subsequent searches are continued on from end of the last match.  
<https://www.php.net/manual/en/function.preg-match-all>

```php
/**
 * @param string pattern The pattern to search for, as a string
 * @param string subject The input string
 * @param array matches Array of all matches in multi-dimensional array ordered according to flags
 * @param int flags Can be a combination of the following flags
 * @param int offset The search starts from the beginning of the subject string
 * 
 * @return int|false|null Returns the number of full pattern matches (which might be zero), or false on failure.
 */
preg_match_all(
	string $pattern,
	string $subject,
	array &$matches = null,
	int $flags = 0,
	int $offset = 0
): int|false|null
```

The different parameters compared to the preg_match() function are "$matches" and "$flags".  
The options for "$flags" are as follows.  
Note that it doesn't make sense to use PREG_PATTERN_ORDER together with PREG_SET_ORDER.  
Also, If no order flag is given, PREG_PATTERN_ORDER is assumed.

- flags

	- PREG_PATTERN_ORDER

		Orders results so that $matches[0] is an array of full pattern matches, $matches[1] is an array of strings matched by the first parenthesized subpattern, and so on.

	- PREG_SET_ORDER

		Orders results so that $matches[0] is an array of first set of matches, $matches[1] is an array of second set of matches, and so on.

	- PREG_OFFSET_CAPTURE

		If this flag is passed, for every occurring match the appendant string offset (in bytes) will also be returned.  
		Note that this changes the value of matches into an array of arrays where every element is an array consisting of the matched string at offset 0 and its string offset into subject at offset 1.

	- PREG_UNMATCHED_AS_NULL

		If this flag is passed, unmatched subpatterns are reported as null; otherwise they are reported as an empty string.

## Regular Expressions

In PHP, when using regular expressions, be sure to include a delimiter (a symbol such as /) before and after the regular expression.  
A reference for regular expressions is as follows.  

- **Character Classes**

| Symbols | Descriptions |
| :---: | :---: |
| \[abc] | One of the letters a, b, or c |
| \[^abc] | One letter other than a, b, or c |
| \[A-Z] | One uppercase letter of an alphabet |
| \[0-9] or \d | One letter of a number |
| \[^0-9] or \D | Not numeric character |
| \[a-zA-z0-9] | One letter of alphabet or number |
| \[!-~] | One single-byte character |
| \w | Letters, numbers, or a single underscore character |
| \W | One character other than alphabet, number, or underscore |
| \s | One single space |
| \S | Not one space character |
| \n | Newline |
| \t | Tab |

- **Other meta characters**

| Symbols | Descriptions |
| :---: | :---: |
| . | One character other than newline |
| ^ | Beginning of line |
| $ | End of line |
| \| | Any character string |
| () | Grouping |
| \ | Escape the meta characters immediately following |

- **Quantity Specifier**

| Symbols | Descriptions |
| :---: | :---: |
| * | 0 or more repetitions |
| + | 1 or more repetitions |
| ? | 0 or 1 occurrence |
| {n} | n repetitions |
| {n,m} | More than n times and less than m times repetition |
| {n,} | More than n repetitions |

- **modifier (write after the trailing delimiter)**

| Symbols | Descriptions |
| :---: | :---: |
| i | Ignore differences in uppercase and lowercase letters |
| s | Set to single-line mode (. matches a newline) |
| m | Set to multiline mode (^ and $ match immediately before and after the newline) |
| u | Multi-byte (UTF-8) support |

## User-defined functions

A collection of specific functions that can be used in different ways.  
<https://www.php.net/manual/en/functions.user-defined.php>  
Set Input (parameter) and Output (return values).  
The process of the function ends when return is executed.  
When executing a function, add () to the end of the function name.  
It is also possible to declare types for parameter and return values.  (PHP 7.0 and later)

```php
// Define function
function fn(mixed /* datatype */ $parameter): mixed|void /* datatype */ {
	statement
	return val|0;
}

// execute function
fn(argument);
```

## Variable functions

In PHP, variable functions are suppoted.  
This means that if a variable name has parentheses appended to it, PHP will look for a function with the same name as whatever the variable evaluates to, and will attempt to execute it.  
<https://www.php.net/manual/en/functions.variable-functions.php>

```php
function execute_fn() {
	statement
}

$fn = "execute_fn";

// Put () after a variable to call the function.
$fn();
```

## Default parameter

If no argument is passed, substitute a pre-prepared argument.  
<https://www.php.net/manual/en/functions.arguments.php#functions.arguments.default>

```php
$sum = 0;
$sum2 = 0;
$sum3 = 0;

function return_sum(int $a = 1, int $b = 2): int {
	return $a + $b;
}

$sum = return_sum(5, 10); // 15
$sum2 = return_sum(5); // 7
$sum3 = return_sum(); // 3
```

## round()

It is a function to return the rounded value of num to specified precision (number of digits after the decimal point). precision can also be negative or zero (default).  
<https://www.php.net/manual/en/function.round>

```php
/**
 * @param int|float num The value to round
 * @param int precision The optional number of decimal digits to round to
 * @param int mode Specifies the rounding mode
 * 
 * @return float The value rounded to the given precision as a float
 */
round(int|float $num, int $precision = 0, int $mode = PHP_ROUND_HALF_UP): float
```

- precision 

	- If the precision is positive, num is rounded to precision significant digits after the decimal point.

	- If the precision is negative, num is rounded to precision significant digits before the decimal point.

- mode

	- PHP_ROUND_HALF_UP
	
		Rounds num away from zero when it is half way there, making 1.5 into 2 and -1.5 into -2.

	- PHP_ROUND_HALF_DOWN
	
		Rounds num towards zero when it is half way there, making 1.5 into 1 and -1.5 into -1.

	- PHP_ROUND_HALF_EVEN
	
		Rounds num towards the nearest even value when it is half way there, making both 1.5 and 2.5 into 2.

	- PHP_ROUND_HALF_ODD
	
		Rounds num towards the nearest odd value when it is half way there, making 1.5 into 1 and 2.5 into 3.

## PHPDoc

Common name for the formatting in DocBlock that can be described in blocks of classes and functions.  
<https://docs.phpdoc.org/3.0/>  
A DocBlock is a special type of comment that can provide verbose information about an element in your code.  
A slash (/) followed by two asterisks (**) will show the format.  
Annotations (@) can be used in the DocBlock (annotation types is [this](https://zonuexe.github.io/phpDocumentor2-ja/references/phpdoc/index.html)).  
The usage is as follows.

```php
<?php 
/**
 * File Description
 * 
 * @author // Name
 * @since // Version
 * 
 */

/**
 * Description of functions, classes, etc.
 * 
 * If there are more than two lines, open each line.
 * 
 * @param // Datatype Valname paramaterDescription
 * @param // Datatype Valname paramaterDescription
 * 
 * @return // Datatype returnValDescription
 * 
 * @see // Reference site
 */
function fn() {
	statement
}
```

## phpDocumentor

[phpDocumentor](https://www.phpdoc.org/) is the de-facto documentation application for PHP projects.  

- Installation & Usage (local)

1. Download the latest PHAR file from [this](https://github.com/phpDocumentor/phpDocumentor/releases)

2. After downloading PHAR file (phpDocumentor.phar), place it under the project you want to use.

3. Type the following command from a terminal

```sh
php phpDocumentor.phar -d . -t ./document/
```

Also, When using this option "-d" specifies the code to be documented and "-t" specifies the output destination of the created document.

4. Open "document/index.html" to see the completed PHPDoc.

- Installation & Usage (global)

1. download the latest PHAR file from [this](https://github.com/phpDocumentor/phpDocumentor/releases)

2. Move it under the executable folder as follows(Don't forget to add execution permission to PHAR file(phpDocumentor.phar)).

```sh
chmod +x phpDocumentor.phar
mv phpDocumentor.phar /usr/local/bin/phpDocumentor
```

3. You can use it globally as follows.

```sh
phpDocumentor -d . -t ./document/
```

## Scope

The extent to which a variable can be referenced is called the scope.  
<https://www.php.net/manual/en/language.variables.scope.php>  
In PHP, there are basically three scopes.

- Global Scope

	A variable written directly under the file.  
	It can be referenced from within a file or from within a function(local scope).  
	To refer to it from within a function, declare and refer to it using the "global" keyword.

- Local Scope

	A variable declared within the confines of a function.  
	It can only be referenced from within a function.

- Super Global Scope

	A variable that has been declared in advance and doesn't require the "global" keyword.  
	For example, $_SERVER (information when a request is received.), etc.

Also, in PHP, There is **no block scope** created in if, for, etc.
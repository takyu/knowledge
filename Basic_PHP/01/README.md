## Basic php writing

enclose ```<?php ?>``` as a whole and write the code inside it.  
If you do not write it inside this tag, it will be recognized as HTML code, even if it is a php file.
```php
<?php
// write php code
echo 'goodmorning';
echo 'hello';
?>

// recognize html code
goodnight
```

If the php code is only one line, it will not be a syntax error even if there is no semicolon at the end of the sentence.
```php
<?php
echo 'Tom' 
?>
```

If you don't write HTML code after the PHP code, there will be no syntax error without the closing tag.
```php
<?php
echo 'Tom'; /* If there are no closing tags, add a ";" */
```

## Writing comments

Use "#" or "//" for line comments, and "/* */" for block comments.

- for line comment
```php
<?php 
// echo 'hello';
# echo 'hello';
?>
```

- for block comment
```php
<?php
/*
echo 'hello';
echo 'hello';
echo 'hello';
echo 'hello';
*/
?>
```

## Variable

Add a leading "$" to the variable name.  
In general, there are snake cases and camel cases against naming conventions for php.  
To join strings, use "."
```php
<?php

# snake case
$person_name = 'taro';

# camel case
$personGender = 'male';

echo 'I\'m ' . $person_name . '<br>';
echo 'I\'m ' . $personGender; 
?>
```

## Manipulate String

If the string is enclosed in double-quotes ("), PHP will interpret the following escape sequences for special characters.  
<https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double>  
```php
<?php
$person_name = 'Taro';

# Enclose the variable with "{}"
echo "hello, {$person_mame}\n";
?>
```

## Self-substitution

Self-substitution is a situation where the same variable is used for both the left and right sides of an operation.  
```php
<?php 
$i = 1;
$j = 2;
$i = $i + $j;
echo $i; // 3

# self-substitution operator
$k = 3;
$k += $i; # $k = $k + $i
echo $k; // 4

$k -= $j; # $k = $k - $j
echo $k; // 2

# increment operator
$l = 10;
$l++; # $l = $l + 1;
echo $l; // 11

$l--; # $l = $l - 1;
echo $l; // 10
?>
```

Also, It can also perform string concatenation with self-substitution operator ( .= ).
```php
<?php
$first = 'Genki';
$last = 'Taro';
$first .= $last;
echo $first;
?>
```

## Data type

PHP is a dynamically typed language.  
<https://www.php.net/manual/en/language.types.php>  
Dynamically typed languages do not compile in advance, but perform type consistency checks at program runtime.  
Use the following function to check the data type.
```php
<?php
var_dump(/* variable */);
?>
```

Also, different types automatically are converted to one of the other types.
```php
<?php
$i = 1;

# bool type of php can be uppercase or lowercase.
$b = true;

# In this case, true is converted to 1 of integer.
echo $i + $b; // 2

# If you want an explicit type conversion, cast it with ().
echo $i + (int) $b; // 2
?>
```

## mixed Type

The value can be any value, and can be available as of PHP 8.0.0.
```
array|bool|callable|int|float|object|resource|string|null
```


## Conditional branch

<https://www.php.net/manual/en/control-structures.if.php>
```php
<?php
if (expr)
  statement
?>
```

## Strict equivalence and Abstract equivalence

As with JS there are strict equivalence and abstract equivalence.

- Strict equivalence -> type comparison available
```
a === b
```

- Abstract equivalence -> not type comparioson
```
a == b
```

Also, there is falsy value as with JS as follows.
```
"" (empty character)
0 (value, string)
NULL
FALSE (false)
```

## isset()

It is a function to determine if a variable is declared and is different than null.  
<https://www.php.net/manual/en/function.isset>  
```php
<?php
/**
 * @param mixed var The variable to be checked
 * @param mixed vars Further variables
 * 
 * @return boolean
 */
isset(mixed $var, mixed ...$vars): bool
>
```

## empty()

It is a function to determine whether a variable is empty.  
<https://www.php.net/manual/en/function.empty>
```php
/**
 * @param mixed var Variable to be checked
 * 
 * @return boolean
 */
empty(mixed $var): bool
```

Also, "empty" is represent "isset", ```!isset($var) || $var == false```

## $_SERVER

It is a superglobal variable and, server and execution environment information.  
<https://www.php.net/manual/en/reserved.variables.server.php>  
This is an array containing information such as headers, paths, and script locations.  
The entries in this array are created by the web server.  
There is no guarantee that every web server will provide any of these; servers may omit some, or provide others not listed here.  
That said, a large number of these variables are accounted for in the [CGI/1.1 specification](http://www.faqs.org/rfcs/rfc3875.html), so you should be able to expect those.  
[This site](https://www.php.net/manual/en/reserved.variables.server.php#refsect1-reserved.variables.server-indices) contains the information stored in $_SERVER (possibly not all of it).  

## PHP_SELF

It is stored in $SERVER.  
The filename of the currently executing script, relative to the document root.

```php
// Variable that points to the page you are on.
$self_url = $_SERVER['PHP_SELF'];
```

## die()

It is a function, and when it is called, no further code is loaded and it exits.  
<https://www.php.net/manual/en/function.die>

## colon syntax

The colon syntax can be used to enclose a long process, such as writing in an HTML statement, in a for or if statement.  

- for

```php
for (expr1; expr2; expr3):
	statement
	...
endfor;
```

- if

```php
if (expr):
	statement
	...
endif;
```

- foreach

```php
foreach (iterable_expression as $value):
	statement
	...
endforeach;

foreach (iterable_expression as $key => $value):
	statement
	...
endforeach;
```

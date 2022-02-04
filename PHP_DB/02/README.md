## PDO_MYSQL DSN

The PDO_MYSQL Data Source Name (DSN) is composed of the following elements.

- DSN prefix
	The DSN prefix is **mysql:**.

- host
	The hostname on which the database server resides.

- port
	The port number where the database server is listening.

- dbname
	The name of the database.

- unix_socket
	The MySQL Unix socket (shouldn't be used with host or port).

- charset
	The character set. See the character set concepts documentation for more information.

## PDO::__construct

It is a constructer to create a PDO instance to represent a connection to the requested database.  
<https://www.php.net/manual/en/pdo.construct.php>  

```php
/**
 * @param string dsn The Data Source Name, or DSN, contains the information
 * @param string username The user name for the DSN string
 * @param string password The password for the DSN string
 * @param array options A key=>value array of driver-specific connection options
 * 
 * @return object Returns a PDO object on success.
 */
public PDO::__construct(
	string $dsn,
	?string $username = null,
	?string $password = null,
	?array $options = null
)
```

## PDO::setAttribute

It is a instance method to set an attribute on the database handle.  
<https://www.php.net/manual/en/pdo.setattribute.php>  

```php
/**
 * @return boolean Returns true on success or false on failure.
 */
public PDO::setAttribute(int $attribute, mixed $value): bool
```

Some of the available generic attributes are listed below; some drivers may make use of additional driver specific attributes.

- attribute

	- PDO::ATTR_DEFAULT_FETCH_MODE
	
		Set default fetch mode.  
		Description of modes is available in PDOStatement::fetch() documentation.

	- PDO::ATTR_CASE

		Force column names to a specific case.

		- value

			- PDO::CASE_LOWER
			
				Force column names to lower case.

			- PDO::CASE_NATURAL
			
				Leave column names as returned by the database driver.

			- PDO::CASE_UPPER
			
				Force column names to upper case.

	- PDO::ATTR_ERRMODE
		
		Error reporting.

		- value

			- PDO::ERRMODE_SILENT
			
				Just set error codes.

			- PDO::ERRMODE_WARNING
			
				Raise E_WARNING.

			- PDO::ERRMODE_EXCEPTION
			
				Throw exceptions.

	- PDO::ATTR_ORACLE_NULLS

		Available with all drivers, not just Oracle.  
		Conversion of NULL and empty strings.

		- value

			- PDO::NULL_NATURAL
			
				No conversion.

			- PDO::NULL_EMPTY_STRING
			
				Empty string is converted to null.

			- PDO::NULL_TO_STRING
			
				NULL is converted to an empty string.

	- PDO::ATTR_STRINGIFY_FETCHES
	
		Convert numeric values to strings when fetching.

		- value

			Requires bool.

	- PDO::ATTR_STATEMENT_CLASS
	
		Set user-supplied statement class derived from PDOStatement.
		
		- value

			Cannot be used with persistent PDO instances.  
			Requires array  
			(string classname, array(mixed constructor_args)).

	- PDO::ATTR_TIMEOUT
	
		Specifies the timeout duration in seconds.
		
		- value

			Requires int.

	- PDO::ATTR_AUTOCOMMIT
	
		Available in OCI, Firebird and MySQL.  
		Whether to autocommit every single statement.

	- PDO::ATTR_EMULATE_PREPARES
	
		Enables or disables emulation of prepared statements.   
		Use this setting to force PDO to either always emulate prepared statements (if true and emulated prepares are supported by the driver), or to try to use native prepared statements (if false).
		
		- value

			Requires bool.

	- PDO::MYSQL_ATTR_USE_BUFFERED_QUERY
	
		available in MySQL. Use buffered queries.

## PDOStatement::fetch

Fetches a row from a result set associated with a PDOStatement object.  
<https://www.php.net/manual/en/pdostatement.fetch.php>  
The mode parameter determines how PDO returns the row.

```php
/**
 * @return mixed The return value of this function on success depends on the fetch type
 */
public PDOStatement::fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0): mixed
```

- mode

	Controls the contents of the returned array.  
	Defaults to value of PDO::ATTR_DEFAULT_FETCH_MODE (which defaults to PDO::FETCH_BOTH).

	- PDO::FETCH_ASSOC
	
		returns an array indexed by column name as returned in your result set

	- PDO::FETCH_BOTH (default)
	
		returns an array indexed by both column name and 0-indexed column number as returned in your result set

	- PDO::FETCH_BOUND
	
		returns true and assigns the values of the columns in your result set to the PHP variables to which they were bound with the PDOStatement::bindColumn() method

	- PDO::FETCH_CLASS
	
		returns a new instance of the requested class, mapping the columns of the result set to named properties in the class, and calling the constructor afterwards, unless PDO::FETCH_PROPS_LATE is also given.  
		If mode includes PDO::FETCH_CLASSTYPE (e.g. PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE) then the name of the class is determined from a value of the first column.

	- PDO::FETCH_INTO
	
		updates an existing instance of the requested class, mapping the columns of the result set to named properties in the class

	- PDO::FETCH_LAZY
	
		combines PDO::FETCH_BOTH and PDO::FETCH_OBJ, creating the object variable names as they are accessed

	- PDO::FETCH_NAMED
	
		returns an array with the same form as PDO::FETCH_ASSOC, except that if there are multiple columns with the same name, the value referred to by that key will be an array of all the values in the row that had that column name

	- PDO::FETCH_NUM
	
		returns an array indexed by column number as returned in your result set, starting at column 0

	- PDO::FETCH_OBJ:
	
		returns an anonymous object with property names that correspond to the column names returned in your result set

	- PDO::FETCH_PROPS_LATE
	
		when used with PDO::FETCH_CLASS, the constructor of the class is called before the properties are assigned from the respective column values.

- cursorOrientation

	For a PDOStatement object representing a scrollable cursor, this value determines which row will be returned to the caller.  
	This value must be one of the PDO::FETCH_ORI_* constants, defaulting to PDO::FETCH_ORI_NEXT.  
	To request a scrollable cursor for your PDOStatement object, you must set the PDO::ATTR_CURSOR attribute to PDO::CURSOR_SCROLL when you prepare the SQL statement with PDO::prepare().

- offset

	For a PDOStatement object representing a scrollable cursor for which the cursor_orientation parameter is set to PDO::FETCH_ORI_ABS, this value specifies the absolute number of the row in the result set that shall be fetched.

## PDOStatement::fetchAll

It is a instance method to returns an array containing all of the result set rows.  
<https://www.php.net/manual/en/pdostatement.fetchall>

```php
/**
 * @retuen array Contain all of the remaining rows in the result set
 */
public PDOStatement::fetchAll(int $mode = PDO::FETCH_DEFAULT): array
```

- mode

	Controls the contents of the returned array.  
	Defaults to value of PDO::ATTR_DEFAULT_FETCH_MODE (which defaults to PDO::FETCH_BOTH).

	- PDO::FETCH_ASSOC
	
		returns an array indexed by column name as returned in your result set

	- PDO::FETCH_BOTH (default)
	
		returns an array indexed by both column name and 0-indexed column number as returned in your result set

	- PDO::FETCH_BOUND
	
		returns true and assigns the values of the columns in your result set to the PHP variables to which they were bound with the PDOStatement::bindColumn() method

	- PDO::FETCH_CLASS
	
		returns a new instance of the requested class, mapping the columns of the result set to named properties in the class, and calling the constructor afterwards, unless PDO::FETCH_PROPS_LATE is also given.  
		If mode includes PDO::FETCH_CLASSTYPE (e.g. PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE) then the name of the class is determined from a value of the first column.

	- PDO::FETCH_INTO
	
		updates an existing instance of the requested class, mapping the columns of the result set to named properties in the class

	- PDO::FETCH_LAZY
	
		combines PDO::FETCH_BOTH and PDO::FETCH_OBJ, creating the object variable names as they are accessed

	- PDO::FETCH_NAMED
	
		returns an array with the same form as PDO::FETCH_ASSOC, except that if there are multiple columns with the same name, the value referred to by that key will be an array of all the values in the row that had that column name

	- PDO::FETCH_NUM
	
		returns an array indexed by column number as returned in your result set, starting at column 0

	- PDO::FETCH_OBJ:
	
		returns an anonymous object with property names that correspond to the column names returned in your result set

	- PDO::FETCH_PROPS_LATE
	
		when used with PDO::FETCH_CLASS, the constructor of the class is called before the properties are assigned from the respective column values.

```php
/**
 * @return array Returns the indicated 0-indexed column
 */
public PDOStatement::fetchAll(int $mode = PDO::FETCH_COLUMN, int $column): array
```


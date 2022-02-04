## SQL injection

SQL injection is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.  
For example, to dump the database contents to the attacker.  
The fact that there is an input field does not mean that it can be attacked, and there are tools that throw POST methods, so it is impossible to take countermeasures from the front end (such as browsers).  
So, as a countermeasure, use a prepared statement on the backend backend side.

## prepared statement

Prepared statement is a method of creating SQL statements with variable parts as variables in advance when it is necessary to generate SQL statements dynamically in a program, and having the processing system insert the values.  
It is effective in improving execution efficiency and preventing SQL injection.

## PDO::prepare

It is a instance method to prepare an SQL statement to be executed by the PDOStatement::execute() method.  
<https://www.php.net/manual/en/pdo.prepare>  
You must include a unique parameter marker for each value you wish to pass in to the statement when you call PDOStatement::execute().

```php
/**
 * @param string query This must be a valid SQL statement for the target db server
 * @param array options This array holds one or more key=>value pairs
 * 
 * @return PDOStatement|false Returns a PDOStatement object 
 */
public PDO::prepare(string $query, array $options = []): PDOStatement|false
```

## The PDOStatement class

It is a class to represents a prepared statement and, after the statement is executed, an associated result set.  
<https://www.php.net/manual/en/class.pdostatement.php#class.pdostatement>

```php
class PDOStatement implements Traversable {

	/* Properties */
	readonly string $queryString;

	/* Methods */
	public bindColumn(
		string|int $column,
		mixed &$var,
		int $type = PDO::PARAM_STR,
		int $maxLength = 0,
		mixed $driverOptions = null
	): bool

	public bindParam(
		string|int $param,
		mixed &$var,
		int $type = PDO::PARAM_STR,
		int $maxLength = 0,
		mixed $driverOptions = null
	): bool
	
	public bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR): bool
	public closeCursor(): bool
	public columnCount(): int
	public debugDumpParams(): ?bool
	public errorCode(): ?string
	public errorInfo(): array
	public execute(?array $params = null): bool
	public fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0): mixed
	public fetchAll(int $mode = PDO::FETCH_DEFAULT): array
	public fetchColumn(int $column = 0): mixed
	public fetchObject(?string $class = "stdClass", array $constructorArgs = []): object|false
	public getAttribute(int $name): mixed
	public getColumnMeta(int $column): array|false
	public nextRowset(): bool
	public rowCount(): int
	public setAttribute(int $attribute, mixed $value): bool
	public setFetchMode(int $mode): bool
}
```

## PDOStatement::bindValue

It is a instance method to bind a value to a corresponding named or question mark placeholder in the SQL statement that was used to prepare the statement.  
<https://www.php.net/manual/en/pdostatement.bindvalue>  

```php
/**
 * @param string|int param Parameter identifier
 * @param mixed value The value to bind to the parameter
 * @param int type Explicit data type for the parameter using the PDO::PARAM_* constants.
 * 
 * @return boolean Returns true on success or false on failure
 */
public PDOStatement::bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR): bool
```

- param

	- using named placeholders

		This will be a parameter name of the form **:name**.

	- using question mark placeholders

		This will be the **1-indexed position** of the parameter.

- type

	- [PDO::PARAM_* constants](https://www.php.net/manual/en/pdo.constants.php)

		The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.  
		The following two types are often used.

		- PDO::PARAM_INT (int)

			Represents the SQL INTEGER data type.

		- PDO::PARAM_STR (int)

			Represents the SQL CHAR, VARCHAR, or other string data type.

## PDOStatement::execute

Execute the prepared statement.  
<https://www.php.net/manual/en/pdostatement.execute>

```php
/**
 * @param ?array params An array of values with as many elements
 * 
 * @return boolean Returns true on success or false on failure
 */
public PDOStatement::execute(?array $params = null): bool
```

If the prepared statement included parameter markers, either:

- [PDOStatement::bindParam()](https://www.php.net/manual/en/pdostatement.bindparam.php) and/or [PDOStatement::bindValue()](https://www.php.net/manual/en/pdostatement.bindvalue.php) has to be called to bind either variables or values (respectively) to the parameter markers.  
Bound variables pass their value as input and receive the output value, if any, of their associated parameter markers.  
An example is shown below.

	```php
	<?php
	$calories = 150;
	$colour = 'gre';
	$sth = $dbh->prepare('
		SELECT name, colour, calories
		FROM fruit
		WHERE calories < :calories AND colour LIKE :colour';
	);
	$sth->bindParam(':calories', $calories, PDO::PARAM_INT);
	$sth->bindValue(':colour', "%{$colour}%");
	$sth->execute();
	?>
	```

- An array of input-only parameter values has to be passed.

	- using named placeholders

		```php
		<?php
		$calories = 150;
		$colour = 'red';
		$sth = $dbh->prepare('
			SELECT name, colour, calories
			FROM fruit
			WHERE calories < :calories AND colour = :colour';
		);
		$sth->execute(array(':calories' => $calories, ':colour' => $colour));
		?>
		```

	- using question mark placeholders

		```php
		<?php
		$calories = 150;
		$colour = 'red';
		$sth = $dbh->prepare('
			SELECT name, colour, calories
			FROM fruit
			WHERE calories < ? AND colour = ?';
		);
		$sth->execute(array($calories, $colour));
		?>
		```

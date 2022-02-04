## PDO::exec

It is a instance method to execute an SQL statement in a single function call, returning the number of rows affected by the statement.  
<https://www.php.net/manual/en/pdo.exec>

```php
/**
 * @param string statement The SQL statement to prepare and execute
 * 
 * @return int|boolean PDO::exec() returns the number of rows
 */
public PDO::exec(string $statement): int|false
```


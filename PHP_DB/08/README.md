## Prepared statements

When the prepare method is called, the DB is in a state of "precompiling" that it saves the query and just waits for the parameters to be passed.  
Therefore, the query only needs to be parsed (or prepared) once, but can be executed multiple times with the same or different parameters.  
Then, the parameters are passed in bind, and you can execute the query on the DB in Execute.  
<https://www.php.net/manual/en/pdo.prepared-statements.php>  
There are two advantages to using prepared statements.

1. It can address vulnerabilities caused by SQL injection.

2. Performance is improved because fewer operations are required to read the query.

Also, by calling the method as follows, DBs that do not support prepared statements can also handle prepared statements in a pseudo manner.

```php
$conn = new PDO($dsn, $user, $pwd);

// call this method
$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
```

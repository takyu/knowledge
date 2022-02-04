## PDO::beginTransaction

It is a instance method to declare the start of a transaction.  
<https://www.php.net/manual/en/pdo.begintransaction>

```php
/**
 * @return boolean Returns true on success or false on failure
 */
public PDO::beginTransaction(): bool
```

If you use transaction processing, be sure to turn off autocommit mode.  
While autocommit mode is turned off, changes made to the database via the PDO object instance are not committed until you end the transaction by calling **PDO::commit()**.  
Calling **PDO::rollBack()** will roll back all changes to the database and return the connection to autocommit mode.

## PDO::commit

It is a instance method to commit a transaction, returning the database connection to autocommit mode until the next call to **PDO::beginTransaction()** starts a new transaction.  
<https://www.php.net/manual/en/pdo.commit>

```php
/**
 * @return boolean Returns true on success or false on failure
 */
public PDO::commit(): bool
```

## PDO::rollBack

It is a instnce method to roll back the current transaction, as initiated by **PDO::beginTransaction()**.  
<https://www.php.net/manual/en/pdo.rollback>

```php
/**
 * @return boolean Returns true on success or false on failure
 */
public PDO::rollBack(): bool
```


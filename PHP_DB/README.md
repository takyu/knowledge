## PHP and DB

To manipulate the DB from PHP.

## PDO

It is a class in PHP and Represents a connection between PHP and a database server.  
<https://www.php.net/manual/en/class.pdo.php>

```php
class PDO {
public __construct(
	string $dsn,
	?string $username = null,
	?string $password = null,
	?array $options = null
)
public beginTransaction(): bool
public commit(): bool
public errorCode(): ?string
public errorInfo(): array
public exec(string $statement): int|false
public getAttribute(int $attribute): bool|int|string|array|null
public static getAvailableDrivers(): array
public inTransaction(): bool
public lastInsertId(?string $name = null): string|false
public prepare(string $query, array $options = []): PDOStatement|false
public query(string $query, ?int $fetchMode = null): PDOStatement|false
public quote(string $string, int $type = PDO::PARAM_STR): string|false
public rollBack(): bool
public setAttribute(int $attribute, mixed $value): bool
}
```

## Detail

1. [Prepare database, table etc..](https://github.com/takyu/knowledge/tree/main/PHP_DB/01)

2. [Get value from DB](https://github.com/takyu/knowledge/tree/main/PHP_DB/02)

3. [Update value of database](https://github.com/takyu/knowledge/tree/main/PHP_DB/03)

4. [Exceptions](https://github.com/takyu/knowledge/tree/main/PHP_DB/04)

5. [Error hierarchy](https://github.com/takyu/knowledge/tree/main/PHP_DB/05)

6. [practice (DB manipulation)](https://github.com/takyu/knowledge/tree/main/PHP_DB/06)

7. [SQL injection (Prepared Statement)](https://github.com/takyu/knowledge/tree/main/PHP_DB/07)

8. [Prepared Statement](https://github.com/takyu/knowledge/tree/main/PHP_DB/08)

9. [Transaction](https://github.com/takyu/knowledge/tree/main/PHP_DB/09)

10. [Create the class which manipulates a Database](https://github.com/takyu/knowledge/tree/main/PHP_DB/10)

11. [practice (DataSource manipulate)](https://github.com/takyu/knowledge/tree/main/PHP_DB/11)

12. [Model and Class](https://github.com/takyu/knowledge/tree/main/PHP_DB/12)
## PDOStatement::fetchAll

```php
public PDOStatement::fetchAll(int $mode = PDO::FETCH_CLASS, string $class, ?array $constructorArgs): array
```

- mode: PDO::FETCH_CLASS

	Returns instances of the specified class(second argument).  
	Mapping the columns of each row to named properties in the class.

- constructorArgs

	Arguments of custom class constructor when the mode parameter is PDO::FETCH_CLASS.

## ::class 

The class keyword is also used for class name resolution.  
<https://www.php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class>  
To obtain the fully qualified name of a class ClassName use **ClassName::class**.  
This is particularly useful with namespaced classes.

## Dotenv

It is not a good idea to write authentication information such as database connection information or API keys in the source code.  
Also, since authentication information changes depending on the environment, separate it into a separate file.  
That is the **dotenv** file.  
In PHP, it is managed by the composer package, ***phpdotenv***.  
<https://github.com/vlucas/phpdotenv>

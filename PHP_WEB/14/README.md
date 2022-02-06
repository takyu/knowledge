## password_hash

It is a function to create a new password hash using a strong one-way hashing algorithm.  
<https://www.php.net/manual/en/function.password-hash>  
password_hash() is compatible with [crypt()](https://www.php.net/manual/en/function.crypt.php).  
Therefore, password hashes created by crypt() can be used with password_hash().

```php
/**
 * @param string password The user's password
 * @param string|int|null algo A password algorithm 
 * @param array options An associative array containing options
 * 
 * @return string Returns the hashed password
 */
password_hash(string $password, string|int|null $algo, array $options = []): string
```

See [this documentation](https://www.php.net/manual/en/password.constants.php) for what can be specified for ***algo*** and ***option***.  
The used algorithm, cost and salt are returned as part of the hash.  
Therefore, all information that's needed to verify the hash is included in it.  
This allows the ***password_verify()*** function to verify the hash without needing separate storage for the salt or algorithm information.

## password_verify

It is a function to Verify that the given hash matches the given password.  
<https://www.php.net/manual/en/function.password-verify.php>

```php
/**
 * @param string password The user's password
 * @param string hash A hash created by password_hash()
 * 
 * @return bool Returns true if the password and hash match, or false otherwise
 */
password_verify(string $password, string $hash): bool
```
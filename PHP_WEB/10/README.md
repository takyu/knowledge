## session_start()

It is a function to create a session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie.  
<https://www.php.net/manual/en/function.session-start.php>  

```php
/**
 * @param array options Override the currently set session configuration directives
 * 
 * @return boolean true if a session was successfully started, otherwise false
 */
session_start(array $options = []): bool
```

- options

	If provided, this is an associative array of options that will override the currently set [session configuration directives](https://www.php.net/manual/en/session.configuration.php). (The behaviour of these functions is affected by settings in php.ini.)  
	The keys should not include the **session.** prefix.

## $_SESSION

It is a superglobal varible and is an associative array containing session variables available to the current script.  
<https://www.php.net/manual/en/reserved.variables.session>  
Use to store the value of SESSION.

## Where to save session file?

Since each browser stores a different SESSIONID, the value which stored is different for each browser.  
In the Cookies part of the Application tab from Google's inspection, there is a file name (value tab in Cookies) where session information is stored.  
The values you have set are stored in this file.  
You can find the save directory for this file by looking at the **session.save_path** field in phpinfo(), or by writing the following in the command.

```sh
php -i | grep "session.save_path"
```

If the value is "no value", follow the steps below to set the destination directory.

1. open php.ini file (You can find the save location by typing ```php -i | grep "php.ini"```.)

2. Find the place where it is ***session.save_path***.

3. In this field, specify the path where the file will be saved. (If not specified, /tmp is recommanded).


## GET

The HTTP GET method requests a representation of the specified resource.  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET>  
You can use the GET method by adding ***action*** to the attribute of the <form> tag and writing a link to send the parameter.  
It can also be used by writing GET to the ***method*** attribute of the form tag.  
For the URL of the link, enter the absolute or relative path.


- index.php

```php
// <form action="get.php" method="GET">
<form action="get.php">
	<input type="text" name='username'>
	<input type="password" name="pwd">
	<input type="submit" value="Send!">
</form>
```

- get.php

```php
<div>
	名前：<?php
		echo $_GET['username']; // Content of the first form
	?>
</div>
<div>
	パスワード：<?php
		echo $_GET['pwd']; // Content of the second form
	?>
</div>
```

## $_GET

It is a superglobal variable and an associative array of variables passed to the current script via the URL parameters (aka. query string).  
<https://www.php.net/manual/en/reserved.variables.get.php>

## superglobal

This is also known as automatic global variable.  
This simply means that it is available in all scopes throughout a script.  There is no need to do global $variable; to access it within functions or methods.

## GET information

Click on the Network tab in Chrome's inspection and press command + R (Mac) to see the communication between your browser and the server.  
In the ***General*** part of the Headers, the **Request URL** (you can see that the parameters for the GET method are written in the URL), **Request Method** (GET in this case), and **Status Code** (200 if normal), and other information are written.  
In the ***Request Headers*** part of the Headers, the browser **cache settings**, **Cookie** (see below), **User-Agent** (what kind of terminal sent the request), and other information are written.  
In the ***Query String Parameters*** part of the Headers isn't the body part, and this is the part where the browser displays the parameters for us to see.

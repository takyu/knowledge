## POST

The HTTP POST method sends data to the server.  
<https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST>  
The POST method can be used by adding ***action*** to the attribute of the <form> tag and writing a link to send the parameter.  
Unlike the GET method, be sure to include POST in the ***method*** attribute of the form tag.

- index.php

```php
<form action="post.php" method="POST">
	<input type="text" name='username'>
	<input type="password" name="pwd">
	<input type="submit" value="ボタンを押して！">
</form>
```

- post.php

```php
<div>
	名前：<?php
		// $_POST is superglobal variable
		echo $_POST['username']; // Content of the first form
	?>
</div>
<div>
	パスワード：<?php
		echo $_POST['pwd']; // Content of the second form
	?>
</div>
```

## $_POST

It is a superglobal variable and an associative array of variables passed to the current script via the HTTP POST method when using application/x-www-form-urlencoded or multipart/form-data as the HTTP Content-Type in the request.  
<https://www.php.net/manual/en/reserved.variables.post.php>

## POST information

Click on the Network tab in Chrome's inspection and press command + R (Mac) to see the communication between your browser and the server.  
The information is basically the same as for GET, but there are no variables in the Request URL part, and variables are written in the Form Data part of the Headers.
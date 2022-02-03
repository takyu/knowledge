## Send a form with an array

By writing ```<array name>[]``` in the name attribute of the input tag, it can be sent as an associative array.  
Both POST and GET methods can be used.

- index.php

```php
<form action="receive.php" method="POST">
	<div>
		<input type="text" name="members[]">
	</div>
	<div>
		<input type="text" name="members[]">
	</div>
	<div>
		<input type="text" name="members[]">
	</div>
	<div>
		<input type="text" name="account[name]">
	</div>
	<div>
		<input type="text" name="account[id]">
	</div>
	<div>
		<input type="password" name="account[pwd]">
	</div>
	<input type="submit">
</form>
```

- receive.php

```php
<?php
/* 
Array ( [0] => Content of the first form
	[1] => Content of the second form
	[2] => Content of the third form )
*/
print_r($_POST['members']);

$account = $_POST['account'];
$name = $account['name'];
$id = $account['id'];
$pwd = $account['pwd'];

echo "<div>name: {$name}</div>"; // Content of the fourth form
echo "<div>id: {$id}</div>"; // Content of the fiveth form
echo "<div>password: {$pwd}</div>"; // Content of the sixth form 
?>
```
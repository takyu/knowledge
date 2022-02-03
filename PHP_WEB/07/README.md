## hidden

\<input> elements of type hidden let web developers include data that cannot be seen or modified by users when a form is submitted.  
<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden>  
A hidden field is a field that you do not want to show the input field on the screen, but want to send it to the server as a value.  
Also, the value attribute of hidden is easy to tamper with, so don't use its value in PHP or JavaScript.  

- index.php

```php
<form action="post.php" method="POST">
	<div>
		個数：<input type="number" name="num" id="">
	</div>
	<div>
		価格：<input type="number" name="price" id="">
	</div>
	<div>
		割引：50%
	</div>
	<input type="hidden" name="discount" value="50">
	<input type="submit" value="合計">
</form>
```

- post.php

```php
var_dump($_POST); // detail of array.

$num = $_POST['num'];
$price = $_POST['price'];
$discount = $_POST['discount'];

$sum = round(($num * $price) * (1 - ($discount / 100)));

echo "<div>The price after discount is {$sum} yen.</div>"
```
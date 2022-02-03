<?php 
var_dump($_POST);

$num = $_POST['num'];
$price = $_POST['price'];
$discount = $_POST['discount'];

$sum = round(($num * $price) * (1 - ($discount / 100)));

echo "<div>割引後の価格は、{$sum}円です。</div>"
?>
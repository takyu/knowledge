<?php 

require 'lib.php';

// \名前空間\関数名
$price = \lib\with_tax(1000);
echo $price . '<br>';

// \名前空間\定数名
echo \lib\TAX_RATE . '<br>';

// useは名前空間の前に\は要らない
use function lib\with_tax;
use const lib\TAX_RATE;

$price2 = with_tax(1000);

echo $price2 . '<br>';

echo TAX_RATE;
?>
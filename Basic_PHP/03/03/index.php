<?php 
//const TAX_RATE = 0.1;

if (!defined('TAX_RATE')) {
	define('TAX_RATE', 0.1);
}

function with_tax(int $base_price, float $tax_rate = TAX_RATE): int {
	$sum_price = $base_price + ($base_price * $tax_rate);
	$sum_price = round($sum_price);
	return $sum_price;
}

$price = With_tax(1000);
echo $price;
?>
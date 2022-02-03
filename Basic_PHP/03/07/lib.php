<?php 

namespace lib;

// namespace lib
function with_tax(int $base_price, float $tax_rate = sub\TAX_RATE): int {
	$sum_price = $base_price + ($base_price * $tax_rate);
	$sum_price = round($sum_price);
	return $sum_price;
}

namespace lib\sub;

// namespace lib\sub
const TAX_RATE = 0.1;

// \要らない
my_func();

// \が先頭にいる
new \Global_class();
?>
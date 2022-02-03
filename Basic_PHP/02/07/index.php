<?php 
$price = 1000;
$price2 = 2000;
$price3 = 3000;

$price_included_tax = 0;
$price_included_tax2 = 0;
$price_included_tax3 = 0;

// デフォルト引数で、税率を指定さなかった場合は8%
function with_tax(int $base_price, float $tax_rate = 0.08): int {
	$sum_price = $base_price + ($base_price * $tax_rate);

	// 小数点四捨五入
	$sum_price = round($sum_price);

	return $sum_price;
}

$price_included_tax = with_tax($price, 0.1);
echo "<div>税抜：{$price} -> 税込：{$price_included_tax}(10%)</div>";

$price_included_tax2 = with_tax($price2);
echo "<div>税抜：{$price2} -> 税込：{$price_included_tax2}(8%)</div>";

// 関数を文字列として変数に入れる
$fn = "with_tax";

// 実行
$price_included_tax3 = $fn($price3, 0.1);
echo "<div>税抜：{$price3} -> 税込：{$price_included_tax3}(10%)</div>";

?>
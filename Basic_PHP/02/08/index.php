<?php 
/**
 * 税率計算のための関数を格納しているファイル
 * 
 * @author takyu
 * @since 1.0.0
 * 
 */

/**
 * 税込金額を返す関数
 * 
 * デフォルト引数で、税率が指定されていない場合は8%になります。
 * 
 * @param int $base_price 価格
 * @param float $tax_rate 税率
 * 
 * @return int 税込金額
 * @see https://test.com/
 */
function with_tax(int $base_price, float $tax_rate = 0.08): int {
	$sum_price = $base_price + ($base_price * $tax_rate);
	$sum_price = round($sum_price);
	return $sum_price;
}

$price_included_tax = with_tax($price, 0.1);
echo "<div>税抜：{$price} -> 税込：{$price_included_tax}(10%)</div>";
?>
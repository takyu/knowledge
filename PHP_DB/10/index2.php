<?php

require_once 'datasource.php';

use db\DataSource;

try {

	$db = new DataSource('localhost', '8889', 'test_phpdb', 'takyu', 'Takyu@123');

	$product_id = 2;
	$from_shop_id = 1;
	$to_shop_id = 3;
	$amount = 10;

	$sql = '
		update txn_stocks
		set amount = amount + :amount
		where shop_id = :shop_id
		and product_id = :product_id
	';

	$db->begin();

	$db->execute($sql, [
		':amount' => $amount,
		':shop_id' => $to_shop_id,
		':product_id' => $product_id
	]);
	$db->execute($sql, [
		':amount' => -1 * $amount,
		':shop_id' => $from_shop_id,
		':product_id' => $product_id
	]);

	$db->commit();

} catch (PDOException $e) {

	echo "<div>エラーが発生しました</div>";
	echo "<div>{$e->getMessage()}</div>";
	$db->rollback();

}

?>
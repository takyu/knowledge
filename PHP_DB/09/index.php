<?php 

/**
 * 
 * transaction
 * 
 * 店舗Aから店舗Bへ商品を転送する場合
 * 
 * 例えば、店舗Aから店舗Bへ商品を10個送りたい場合に、
 * 店舗Aから商品を-10、店舗Bへ+10するトランザクションを記入します。
 * この時、どちらのトランサクションも正常に処理されたことを確認して、
 * コミットさせるようにします。
 * 
 */
try {

	$user = 'hoge';
	$pwd = 'hogehoge';
	$host = 'localhost';
	$dbname = 'test_phpdb';
	$dsn = "mysql:host{$host};port=8889;dbname={$dbname}";
	$conn = new PDO($dsn, $user, $pwd);
	$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

	$product_id = 3;
	$from_shop_id = 1;
	$to_shop_id = 3;
	$amount = 10;

	$pst = $conn->prepare('
		update txn_stocks
		set amount = amount + :amount
		where shop_id = :shop_id
		and product_id = :product_id;'
	);

	$conn->beginTransaction();

	$pst->execute([
		':amount' => $amount,
		':shop_id' => $to_shop_id,
		':product_id' => $product_id
	]);
	$pst->execute([
		':amount' => -1 * $amount,
		':shop_id' => $from_shop_id,
		':product_id' => $product_id
	]);

	$conn->commit();

} catch (PDOException $e) {

	echo "<div>エラーが発生しました</div>";
	echo "<div>{$e->getMessage()}</div>";
	$conn->rollBack();
}

?>
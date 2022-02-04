<form action="<?php $_SERVER['REQUEST_URI']; ?>" method="POST">
	Shop ID: <input type="text" name="shop_id">
	<input type="submit" value="検索">
</form>

<?php

require_once 'datasource.php';

use db\DataSource;

if (isset($_POST['shop_id'])) {
	try {

		$shop_id = $_POST['shop_id'];

		$db = new DataSource('localhost', '8889', 'test_phpdb', 'hoge', 'hogehoge');

		$result = $db->select("select * from mst_shops where id = :id;", [
			':id' => $shop_id
		]);

		if (!empty($result) && count($result) > 0) {
			//var_dump($result);
			echo "店舗名は、{$result['name']}です。";
		} else {
			//var_dump($result);
			echo "指定されたショップIDは存在しません";
		}

	} catch (PDOException) {
		echo 'Somethig is wrong!!';
	}	
}
?>
<form action="<?php $_SERVER['REQUEST_URI']; ?>" method="POST">
	Shop ID: <input type="text" name="shop_id">
	<input type="submit" value="検索">
</form>

<?php 
if (isset($_POST['shop_id'])) {
	try {

		$shop_id = $_POST['shop_id'];

		$user = 'hoge';
		$pwd = 'hogehoge';
		$host = 'localhost';
		$dbname = 'test_phpdb';
		$dsn = "mysql:host{$host};port=8889;dbname={$dbname}";
		$conn = new PDO($dsn, $user, $pwd);
		$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		// プリペアードステートメントに対応していないDBも擬似的に対応させる設定
		$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

		$pst = $conn->prepare("
			select * from mst_shops where id = :id;
		");

		// 厳格に型を指定したい場合
		//$pst->bindValue(':id', $shop_id, PDO::PARAM_INT);

		// 型を気にしない場合 -> 配列で渡す (PARAM_STRになる)。
		$pst->execute([
			':id' => $shop_id
		]);
		$result = $pst->fetch();

		if (!empty($result) && count($result) > 0) {
			echo "店舗名は、{$result['name']}です。";
		} else {
			echo "指定されたショップIDは存在しません";
		}

	} catch (PDOException) {
		echo 'Somethig is wrong!!';
	}	
}
?>
<!-- 入力フォーム -->
<form action="<?php $_SERVER['REQUEST_URI']; ?>" method="POST">
	Shop ID: <input type="text" name="shop_id">
	<input type="submit" value="検索">
</form>

<?php 
if (isset($_POST['shop_id'])) {

	$shop_id = $_POST['shop_id'];

	$user = 'hoge';
	$pwd = 'hogehoge';
	$host = 'localhost';
	$dbname = 'test_phpdb';
	$dsn = "mysql:host{$host};port=8889;dbname={$dbname}";
	$conn = new PDO($dsn, $user, $pwd);
	$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	// queryやexexはSQLインジェクションを引き起こせる。
	//$result = $conn->query("
	//	select * from mst_shops where id = {$shop_id};
	//	")->fetch();

	$pst = $conn->prepare("
		select * from mst_shops where id = :id;
	");
	//$pst->bindValue(':id', $shop_id, PDO::PARAM_INT);
	$pst->bindValue(':id', $shop_id, PDO::PARAM_STR);
	$pst->execute();
	$result = $pst->fetch();

	//var_dump($result);

	if (empty($result)) {
		echo "指定されたショップIDは存在しません";
	} else if (count($result) > 0) {
		echo "店舗名は、{$result['name']}です。";
	}
}
?>
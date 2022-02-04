<!--
/* 
Please search the product table (mst_products) with the product_id that flew in the following form and display the text on the screen.

If the product exists.
-> The product name is [{product_name}].

If the product does not exist.
-> No matching product found.

If the record exists, but delete_flg is 1
-> No matching product found.

If an exception occurs in the DB operation
-> Please wait for a while and try again.
*/
-->

<form action="<?php $_SERVER['REQUEST_URI']; ?>" method="POST">
	商品ID: <input type="text" name="product_id">
	<input type="submit">
</form>

<?php 
require_once 'datasource.php';

use db\DataSource;

if (isset($_POST['product_id'])) {
	try {

		$product_id = $_POST['product_id'];

		$db = new DataSource('localhost', '8889', 'test_phpdb', 'hoge', 'hogehoge');

		$query = '
			select * from mst_products
			where id = :id
			and delete_flg != 1;
		';
		$param = [
			':id' => $product_id
		];

		$result = $db->select_one($query, $param);

		if (!empty($result)) {
			$name = $result['name'];
			echo "<div>The product name is [{$name}].</div>";
		} else {
			echo "<div>No matching product found.</div>";
		}

	} catch (PDOException $e) {
		echo "<div>Please wait for a while and try again.</div>";
		echo "<div>{$e->getMessage()}</div>";
	}
}
?>
<div></div>
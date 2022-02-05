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
require_once 'product.model.php';
require_once 'datasource.php';
require_once __DIR__ . '/vendor/autoload.php';

use db\DataSource;
use model\ProductModel;
use Dotenv\Dotenv;

if (isset($_POST['product_id'])) {
	try {

		// get productID
		$product_id = $_POST['product_id'];

		// get database authentication 
		$dotenv = Dotenv::createImmutable(__DIR__, 'db_auth.env');
		$dotenv->load();
		$host = $_ENV['DB_HOST'];
		$port = $_ENV['DB_PORT'];
		$dbname = $_ENV['DB_NAME'];
		$username = $_ENV['DB_USER'];
		$password = $_ENV['DB_PASS'];

		// connect database
		$db = new DataSource($host, $port, $dbname, $username, $password);

		$query = '
			select * from mst_products
			where id = :id
			and delete_flg != 1;
		';
		$param = [
			':id' => $product_id
		];

		$result = $db->select_one($query, $param, DataSource::CLS, ProductModel::class);
		//$result = $db->select_one($query, $param);
		
		//var_dump($result);

		if (!empty($result)) {
			if (gettype($result) === 'object') {
				$result->echo_product();
			} else {
				$name = $result['name'];
				echo "<div>The product name is [{$name}].</div>";
			}
		} else {
			echo "<div>No matching product found.</div>";
		}

	} catch (PDOException $e) {
		echo "<div>Please wait for a while and try again.</div>";
		echo "<div>{$e->getMessage()}</div>";
	}
}
?>
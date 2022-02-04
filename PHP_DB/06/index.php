<?php 
$user = 'hoge';
$pwd = 'hogehoge';
$host = 'localhost';
$dbname = 'test_phpdb';
$dsn = "mysql:host={$host};port=8889;dbname={$dbname}";
$conn = new PDO($dsn, $user, $pwd);
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

try {

/*
Question1:
Add +10 to the number of items in stock for all items in storeC.
*/
$updated_rows_count = $conn->exec('
	update txn_stocks
	set amount = amount + 10;
	where shop_id = 3;
	');
echo $updated_rows_count;

/*
Question2
Add store D as follows.
	name: '店舗D'
	pref_id: 4
*/
$insertd_rows_count = $conn->exec("
	insert into mst_shops(name, pref_id, updated_by) values
	('StoreD', 4, 'takyu');
	");
echo $insertd_rows_count;

/*
Question3:
Get the number of chairs in stock at store A.
*/
$tmp = $conn->query("
	select id from mst_products
	where name = 'chair';
");

// Array[0][id] -> 2 (product_id of chair)
//var_dump($tmp->fetchAll());

$p_id = $tmp->fetchAll()[0]['id'];
echo $p_id . '<br>';

$s_id = $conn->query("
select id from mst_shops
where name = 'StoreA';
")->fetch()['id']; /* If there is only one record, use fetch() */

echo $s_id . '<br>';

$amount = $conn->query("
select amount from txn_stocks
where shop_id = {$s_id}
and product_id = {$p_id}
")->fetch()['amount'];

echo $amount . '<br>';

// another method
//$amount2 = $conn->query("
//	select ts.amount 
//	from txn_stocks ts 
//	inner join mst_shops ms 
//	on ts.shop_id = ms.id
//	inner join mst_products mp  
//	on ts.product_id = mp.id
//	where mp.name = '椅子'
//	and ms.name = '店舗A'
//	")->fetch()['amount'];


} catch(PDOException $e) {
	echo $e->getMessage();
}
?>
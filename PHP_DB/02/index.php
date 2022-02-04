<?php 
$user = 'hoge';
$pwd = 'hogehoge';
$host = 'localhost';
$dbname = 'test_phpdb';
$dsn = "mysql:host={$host};port=8889;dbname={$dbname};";
$conn = new PDO($dsn, $user, $pwd);

//　連想配列のデータの読み取り方を指定しておく場合 (1)
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$pst = $conn->query('select * from mst_shops');

// (1)
$res = $pst->fetchall();

// 連想配列のデータの受け取り方をここで記述もできる。(1)がない場合
//$res = $pst->fetchall(PDO::FETCH_ASSOC);

echo '<pre>';
print_r($res);
echo '</pre>';

// データベースに接続した後は破棄
// PDOの場合はコネクションを破棄しなくても大丈夫
$conn = null;
?>
<?php 
print_r($_POST['members']);

$account = $_POST['account'];
$name = $account['name'];
$id = $account['id'];
$pwd = $account['pwd'];

echo "<div>name: {$name}</div>";
echo "<div>id: {$id}</div>";
echo "<div>password: {$pwd}</div>";
?>
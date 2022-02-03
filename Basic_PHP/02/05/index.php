<?php 
// 郵便番号
$correct_postal_code = '001-0012';
$wrong_postal_code = '001-001';
$wrong_postal_code_2 = '2.2-3042';
$wrong_postal_code_3 = 'wd3-2132';
$wrong_postal_code_4 = '124-56789';

if (preg_match("/^[0-9]{3}-[0-9]{4}$/", $correct_postal_code, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[0-9]{3}-[0-9]{4}$/", $wrong_postal_code, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[0-9]{3}-[0-9]{4}$/", $wrong_postal_code_2, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[0-9]{3}-[0-9]{4}$/", $wrong_postal_code_3, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[0-9]{3}-[0-9]{4}$/", $wrong_postal_code_4, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}

// メールアドレス
$correct_email = 'example000@gmail.com';
$correct_email2 = 'example-0.00@gmail.com';
$correct_email3 = 'example-0.00@ex.co.jp';
$wrong_email = 'example/0.00@ex.co.jp';

if (preg_match("/^[\w.\-]+@[\w\-]+\.[\w.\-]+$/", $correct_email, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[\w.\-]+@[\w\-]+\.[\w.\-]+$/", $correct_email2, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[\w.\-]+@[\w\-]+\.[\w.\-]+$/", $correct_email3, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
if (preg_match("/^[\w.\-]+@[\w\-]+\.[\w.\-]+$/", $wrong_email, $matches)) {
	print_r($matches);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}

// HTML -> 見出しタグ<h1~h6>のみ取得
$html = 
'<!DOCTYPE html>
<html>
<head>
	<title>Document</title>
</head>
<body>
	<h1>見出し1</h1>
	<h2>見出し2</h2>
	<h3>見出し3</h3>
	<h4>見出し4</h4>
	<h5>見出し5</h5>
	<h6>見出し6</h6>
	<header>ヘッダー</header>
</body>
</html>';

if (preg_match_all("/<h[1-6]>(.+)<\/h[1-6]>/", $html, $matches)) {
	// タグを含めずに末尾だけを取る
	print_r($matches[count($matches) - 1]);
	echo "<div>OK</div>";
} else {
	echo "<div>NG</div>";
}
?>
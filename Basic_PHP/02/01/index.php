<?php 
// 配列定義
$arry = [
	'taro',
	'hanako',
	'jiro'
];
//$arry = array('taro', 'hanako', 'jiro');
print_r($arry);

// var_dumpでも可
var_dump($arry);

echo $arry[1]; // hanako

// 配列の値の変更
$arry[1] = 'sachiko';
echo $arry[1];

// 一番最後に挿入される
$arry[] = 'saburo';
var_dump($arry);

for ($i = 0; $i < count($arry); $i++) {
	echo '<div>' . $arry[$i] . '</div>';
}
foreach ($arry as $v) {
	echo '<div>' . $v . '</div>';
}
foreach ($arry as $i => $v) {
	echo '<div>' . '[' . $i . ']' . ' => ' . $v . '</div>';
}
?>
<?php 
$arry = [
	'key' => 10
];

// if文で書く
if (isset($arry['key'])) {
	$arry['key'] *= 10;
} else {
	$arry['key'] = 1;
}
echo "<div>{$arry['key']}</div>";

// 三項演算子で書く
$arry['key'] = isset($arry['key']) ? $arry['key'] *= 10 : $arry['key'] = 1;
echo "<div>{$arry['key']}</div>";

//　null合体演算子
$arry['key'] = $arry['key'] *= 10 ?? 1;
echo "<div>{$arry['key']}</div>";

?>
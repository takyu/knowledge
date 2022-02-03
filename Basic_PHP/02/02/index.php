<?php 
$arry = [
	['table', 1000],
	['chair', 100],
	['bed', 10000]
];

foreach ($arry as $v) {
	echo "{$v[0]}の値段は{$v[1]}円です。\n";
}
// 椅子の値段を変更
$arry[1][1] = 500;

$arry = [
	['table', 1000],
	['chair', 100],
	['bed', 10000]
];

// 一番最初の要素を削除
array_shift($arry);

foreach ($arry as $v) {
	echo "{$v[0]}の値段は{$v[1]}円です。\n";
}

$arry = [
	['table', 1000],
	['chair', 100],
	['bed', 10000]
];

// 一番最後の要素を削除
array_pop($arry);

foreach ($arry as $v) {
	echo "{$v[0]}の値段は{$v[1]}円です。\n";
}

$arry = [
	['table', 1000],
	['chair', 100],
	['bed', 10000]
];

// 途中の要素を削除
array_splice($arry, 1, 1);

foreach ($arry as $v) {
	echo "{$v[0]}の値段は{$v[1]}円です。\n";
}

?>
<?php 
$arry = [
	'name' => 'Bob',
	'age' => 12,
	'sports' => [
		'baseball',
		'soccer'
	]
];

// 値の確認
echo $arry['name'];
echo $arry['age'];
echo $arry['sports'][0];
echo $arry['sports'][1];

// 値の変更
$arry['age'] = 50;
echo $arry['age'];
$arry['age'] += 50;
echo $arry['age'];

print_r($arry);
// キーを指定して削除
unset($arry['name']);
print_r($arry);
?>
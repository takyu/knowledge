<?php 
declare(strict_types=1);

function add1(int $val): int {
	return $val + 1;

	// エラー
	return (string) ($val + 1);
}
$res = add1(2);
echo $res;

// エラー
//$res = add1('hello');
?>
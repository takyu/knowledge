<?php 
$numbers = [1, 2, 3];
$numbers2 = [1, 2, 3, 4];
$numbers3 = [1, 2, 3, 4, 5];
$numbers4 = [1, 2, 3, 4, 5, 6];
$numbers5 = [1, 2, 3, 4, 5, 6, 7];
$numbers6 = [1, 2, 3, 4, 5, 6, 7, 8];

$sum = 0;
$sum2 = 0;
$sum3 = 0;
$sum4 = 0;
$sum5 = 0;
$sum6 = 0;

foreach ($numbers as $num) {
	$sum += $num;
}
echo "<div>合計：{$sum}</div>";

// 同じ記述を書いている -> 同じような機能は関数へ
foreach ($numbers2 as $num) {
	$sum2 += $num;
}
echo "<div>合計：{$sum2}</div>";

// 関数定義(返り値なし)
function echo_sum($nums) {
	$sum = 0;
	foreach ($nums as $num) {
		$sum += $num;
	}
	echo "<div>合計：{$sum}</div>";
}

// 関数を実行するときは、関数名の末尾に()をつける
$sum3 = echo_sum($numbers3);
$sum4 = echo_sum($numbers4);

// 関数定義(返り値あり)
function return_sum(Array $nums): int {
	$sum = 0;
	foreach ($nums as $num) {
		$sum += $num;
	}
	return $sum;
}

// 実行
$sum5 = return_sum($numbers5);
$sum6 = return_sum($numbers6);

echo "<div>合計：{$sum5}</div>";
echo "<div>合計：{$sum6}</div>";

?>
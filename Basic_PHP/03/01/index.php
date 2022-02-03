<?php 
// null + 2
$num = counter(2);
echo "<div>{$num}</div>";

// num + 2
$num = 0;
$num = counter(2);
echo "<div>{$num}</div>";

function counter(int $step = 1): int {
	global $num;
	$num += $step;
	return $num;
}
?>
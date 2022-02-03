<?php 
# 自己代入
$i = 1;
$j = 2;
$i = $i + $j;
echo $i; // 3

# 自己代入演算子
$i += $j;
echo $i;

$name1 = 'Bob';
$name2 = 'Tom';
$name1 .= $name2;
echo $name1;

# インクリメント演算子
$l = 10;
$l++;
echo $l;
?>
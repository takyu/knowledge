<?php 
/* 基本的な書き方

if (true) {

}
else if (true) {

}
else {

}
*/

$score = 79;
$abstract_days = 5;

if ($score < 50 || $abstract_days >= 5) {
	echo '不合格';
}
else if ($score < 70) {
	echo '合格';
}
else {
	echo '秀';
}
?>
<?php 
# Session
session_start();

if (!isset($_SESSION['VISIT_COUNT'])) {
	$_SESSION['VISIT_COUNT'] = 1;
} else {
	$_SESSION['VISIT_COUNT']++;
}

?>

<h1>SESSION: 訪問回数は、<?php 
	echo $_SESSION['VISIT_COUNT'];
?>回目です。</h1>

<?php
$visit_count = 1;
if (isset($_COOKIE['VISIT_COUNT'])) {
	$visit_count = $_COOKIE['VISIT_COUNT'] + 1;
}
setCookie('VISIT_COUNT', $visit_count);

?>

<h1>Cookie: 訪問回数は、<?php 
	echo $visit_count;
?>回目です。</h1>
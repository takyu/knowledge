<?php 
if (!session_start()) {
	echo 'fail';
} else {
	echo '<div>session start</div>';
}

$_SESSION['VISIT_COUNT'] = 1;

var_dump($_SESSION['VISIT_COUNT']);

phpinfo();
?>
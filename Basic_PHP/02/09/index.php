<?php 
$a = 0;
echo $a;

function fn1() {
	$b = 1;
}

function fn2() {
	global $a;
	var_dump($_SERVER);

	// ブロックスコープは形成されない
	if(true) {
		$b = 2;
	}
	echo $b;
	
}
fn2();
?>
<?php 

$a = 0;
$b = null;
$c = 1;

# PHPでは文字列の０もfalsyな値
$str = '0';

# isset -> 変数が定義されていて、null以外の値の時にtrueを返す

// true
if (isset($a)) {
	echo "true\n";
} else {
	echo "false\n";
}

// false
if (isset($b)) {
	echo "ture\n";
} else {
	echo "false\n";
}

// false
if (isset($d)) {
	echo "ture\n";
} else {
	echo "false\n";
}

# empty -> issetがfalse, または値がfalsyな時にtrueを返す

// true
if (empty($a)) {
	echo "true\n";
} else {
	echo "false\n";
}
//false
if (!empty($a)) {
	echo "true\n";
} else {
	echo "false\n";
}

// true
if (empty($b)) {
	echo "true\n";
} else {
	echo "false\n";
}

// true
if (empty($str)) {
	echo "true\n";
} else {
	echo "false\n";
}

// false
if (empty($c)) {
	echo "true\n";
} else {
	echo "false\n";
}

var_dump(!isset($str));

// emptyはissetを用いて次のように書ける
if (!isset($str) || $str == false) {
	echo 'true';
} else {
	echo 'false';
}
?>
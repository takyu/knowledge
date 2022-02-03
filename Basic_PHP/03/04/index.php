<?php 

$arry = [
	'num' => 0
];

// 関数呼び出し
require('file1.php');

// キーワード呼び出し
require 'file2.php';

// 一回しか読み込まれない
require_once 'file1.php';
require_once('file1.php');
require_once('file1.php');
require_once('file2.php');
require_once('file2.php');
require_once('file2.php');

fn1();

echo $arry['num'];
?>
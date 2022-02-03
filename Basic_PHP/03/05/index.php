<?php 
echo __DIR__;

// 相対パスでfile2まで
require './sub/file2.php';

// 絶対パスでfile2まで
require __DIR__ . '/sub/file2.php';

echo dirname(__FILE__, 3);
?>
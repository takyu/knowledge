<?php
$pwd = 'hoge';
$pwd2 = 'foo';

// hashing
$hash_pwd = password_hash($pwd, PASSWORD_DEFAULT);
$hash_pwd2 = password_hash($pwd2, PASSWORD_DEFAULT);

var_dump($hash_pwd);
var_dump($hash_pwd2);

// Verify
$res = password_verify($pwd, $hash_pwd);
$res2 = password_verify($pwd2, $hash_pwd2);
$res3 = password_verify($pwd, $hash_pwd2);
$res4 = password_verify($pwd2, $hash_pwd);

// true
var_dump($res);
var_dump($res2);

// false
var_dump($res3);
var_dump($res4);


<?php 
$cookie_options = [

	// 現在の時間から30日後
	'expires' => time() + 60 * 60 * 24 * 30,

	// サイト全体で有効 (ルートディレクトリ)
	'path' => '/'
];

setcookie('VISIT_COUNT', 1, $cookie_options);

// PHP上では設定されるがブラウザ上のCookieは変更されない。
$_COOKIE['VISIT_COUNT'] = 0;

var_dump($_COOKIE['VISIT_COUNT']);
?>
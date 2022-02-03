<?php
// SESSIONを用いたログイン認証
session_start();

if (isset($_POST['username'])
	&& isset($_POST['pwd'])
	&& $_POST['username'] === 'test'
	&& $_POST['pwd'] === 'pwd')
	{
		$_SESSION['user'] = [
			'name' => $_POST['username'],
			'pwd' => $_POST['pwd']
		];
	}

	if (!empty($_SESSION['user'])) {
		echo 'Login Now.';
	} else {
		echo 'Login Failuer.';
	}
?>
<?php

use Person as GlobalPerson;

class Person {
	
	// スタティックプロパティ
	public static $prefecture = 'Tokyo';
	public const ward = 'Minato';

	static function hello() {
		echo 'hello!!' . '<br>';

		// 同じクラス内のスタティックメソッドの呼び出し
		Person::bye();
		static::bye();
		self::bye();
	}

	static function bye() {
		echo 'bye!!' . '<br>';
	}

}

$bob = new Person('Bob', 18);

// スタティックメソッドの使用
Person::hello();
$bob::hello();
echo '<br>';
Person::bye();
$bob::bye();

echo '<br>';

// スタティックプロパティの使用
echo Person::$prefecture;
echo '<br>';
echo Person::ward;
?>
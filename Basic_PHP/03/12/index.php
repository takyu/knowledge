<?php 

// abstractが付けられたクラスは、必ず他のクラスで継承する
abstract class Person {

	// 継承先でも使用可能
	protected $name;

	public $age;
	public static $WHERE = 'Earth';

	function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;

		echo self::$WHERE;
		echo static::$WHERE;
	}

	function hello() {
		echo 'hello, ' . $this->name . '<br>';
		return $this;
	}
	
	// finalをつけるとオーバーライドは出来ない。
	final function bye() {
		echo 'bye!!' . '<br>';
	}

	// abstractをつけると継承先で実装するという目印になる。
	// abstractを含む場合、クラスの先頭にもabstractをつける
	abstract function feature();
}

class Japanese extends Person {

	public static $WHERE = '日本';

	function __construct($name, $age)
	{
		// 親クラスのコンストラクターを呼びに行く
		parent::__construct($name, $age);
	}

	function hello() {
		echo 'こんにちは、 ' . $this->name . '<br>';
		return $this;
	}

	function address() {
		// 親クラスのWHEREを継承
		echo '住所は、 ' . parent::$WHERE . 'です。<br>';

		echo '住所は、 ' . static::$WHERE . 'です。<br>';
		return $this;
	}
	
	function feature()
	{
		echo '侍が有名です。'. '<br>';
	}
}

$taro = new Japanese('太郎', 18);
$taro->hello()
	->address()
	->feature();

echo $taro->age;

// abstractがついたクラスはインスタンス化に使えない。
//$jiro = new Person('次郎', 40);
?>
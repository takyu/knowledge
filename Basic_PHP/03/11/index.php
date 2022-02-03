<?php 
class Person {

	// 継承先でも使用可能
	protected $name;

	public $age;
	public static $WHERE = 'Earth';

	function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;
	}

	function hello() {
		echo 'hello, ' . $this->name . '<br>';
		return $this;
	}

	static function bye() {
		echo 'bye!!' . '<br>';
	}

}

class Japanese extends Person {

	public static $WHERE = '日本';

	function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = 30;
	}

	function hello() {
		echo 'こんにちは、 ' . $this->name . '<br>';
		return $this;
	}

	function address() {
		echo '住所は、 ' . static::$WHERE . 'です。<br>';
		return $this;
	}
}

$taro = new Japanese('太郎', 18);
$taro->hello()
	->address();
echo $taro->age;
?>
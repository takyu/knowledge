<?php
class Person {
	public $name;
	private $age;

	function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;
	}

	function hello() {
		echo 'hello, ' . $this->name . '<br>';
		return $this;
	}

	function bye() {
		echo 'bye, ' . $this->name . '<br>';
		return $this;
	}

}

$bob = new Person('Bob', 18);

// チェーンメソッド
$bob->hello()
	->bye();

$tim = new Person('Tim', 35);

$tim->hello()
	->bye();
?>
<?php 

class Person {
	public $name;
	private $age;

	function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;
	}

	// この場合にもpublicは省略されている。
	function hello() {
		echo 'hello, ' . $this->name;
	}
}

$bob = new Person('Bob', 18);
echo $bob->name . '<br>';

// エラーになる
//echo $bob->age;

// メソッドを呼ぶ
$bob->hello();
?>
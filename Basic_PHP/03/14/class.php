<?php declare(strict_types=1);

namespace japan;

// Implementing the interface
interface Template_country {
	public function say_country(): self;
	public function famous_food(): self;
	public function famous_location(): self;
}

// Inheriting an Interface
abstract class Japan implements Template_country {

	public static string $country = 'Japan';
	protected string $food;
	protected string $location;

	function __construct(string $food, string $location)
	{
		$this->food = $food;
		$this->location = $location;
	}

	final function say_country(): self {
		echo 'self::' . self::$country . '<br>';
		echo 'static::' . static::$country . '<br>';
		return $this;
	}

	// Returns its own class.
	abstract function famous_food(): self;
	abstract function famous_location(): self;

}

class Osaka extends Japan {

	public static string $country = '日本';
	protected string $prefecture;
	protected int $city;

	function __construct(string $food, string $location, string $prefecture, int $city)
	{
		parent::__construct($food, $location);
		$this->prefecture = $prefecture;
		$this->city = $city;
	}

	function famous_food(): self
	{
		echo $this->food . '<br>';
		return $this;
	}

	function famous_location(): self
	{
		echo $this->location . '<br>';
		return $this;
	}

	function city_num(): void {
		echo 'Number of cities is ' . $this->city . '<br>';
	}

}

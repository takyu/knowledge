<?php declare(strict_types=1);

require_once 'class.php';

use japan\Japan;
use japan\Osaka;

// Execute methods of the parent class
function say_feature(Japan $prefecture): void {
	$prefecture->say_country()
		->famous_food()
		->famous_location(); 
}

// Execute the method of the child class
function say_city_num(Osaka $prefecture): void {
	$prefecture->city_num();
}

$osaka = new Osaka('takoyaki', 'americamura', 'Osaka', 33);
say_feature($osaka); // self::Japan static::日本, takoyaki, americamura
say_city_num($osaka); // Number of cities is 33

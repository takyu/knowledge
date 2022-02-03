<?php 

require 'lib.php';

use function lib\with_tax;
use const lib\sub\TAX_RATE;

$price = with_tax(1000);
echo $price . '<br>';
echo TAX_RATE . '<br>';

function my_func() {
	echo "<div>my_func in global space is called.</div>";
};

class Global_class {

};

?>
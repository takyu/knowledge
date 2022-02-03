<?php 
// true
if (1 == '1') {
	echo 'true';
} else {
	echo 'false';
}

// false
if (1 === '1') {
	echo 'true';
} else {
	echo 'false';
}

// false
if (0 === '') {
	echo 'true';
} else {
	echo 'false';
}

# !も使える
if (!0) {
	echo 'true';
} else {
	echo 'false';
}
?>
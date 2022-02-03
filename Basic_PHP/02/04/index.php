<?php 

$char = 'ZAabd1_scss';

// ZAa -> 'マッチ成功'
if (preg_match("/ZAa/", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 半角英数字とアンダースコアかつAa -> 'マッチ成功'
if (preg_match("/\wAa/", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 半角英数字とアンダースコアかつaa -> 'マッチ失敗'
if (preg_match("/\waa/", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 半角英数字とアンダースコアかつaa(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/\waa/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字かつaa(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]aa/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字かつaa(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]aa/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字が一回の繰り返し(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]{1}/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字が一回以上三回以下(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]{1,3}/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字が一回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]{1,}/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 末尾から大小英文字が一回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]{1,}$/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 先頭から大小英文字が一回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/^[a-zA-z]{1,}/i", $char, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

$char2 = '1ZAabd1_scss';

// 先頭から大小英文字が一回以上(但し、大文字小文字区別しない) -> 'マッチ失敗'
if (preg_match("/^[a-zA-z]{1,}/i", $char2, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字が一回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[a-zA-z]{1,}/i", $char2, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 大小英文字以外が一回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[^a-zA-z]{1,}/i", $char2, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 先頭が大小英文字以外が2回以上(但し、大文字小文字区別しない) -> 'マッチ失敗'
if (preg_match("/^[^a-zA-z]{2,}/i", $char2, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

$char3 = '1ZAabd12_scss';

// 大小英文字以外が2回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/[^a-zA-z]{2,}/i", $char3, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 改行以外の文字が二回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/.{2,}/i", $char3, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

$char4 = '<h2>1ZAabd12_scss</h2>';

// <h2>タグで囲まれているかつ改行以外の文字が二回以上(但し、大文字小文字区別しない) -> 'マッチ成功'
if (preg_match("/<h2>.{2,}<\/h2>/i", $char4, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// タグごと取り出すのではなくて、中の文字列のみを取り出したい時は()で囲む
if (preg_match("/<h2>(.{2,})<\/h2>/i", $char4, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

$char5 = '';

// 0回以上の改行文字以外 -> 'マッチ成功'
if (preg_match("/.{0,}/", $char5, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 0回以上の改行文字以外 -> 'マッチ成功'
if (preg_match("/.*/", $char5, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

// 1回以上の改行文字以外 -> 'マッチ失敗'
if (preg_match("/.+/", $char5, $matches)) {
	print_r($matches);
	echo "<div>マッチ成功!!</div>";
} else {
	echo "<div>マッチ失敗</div>";
}

?>
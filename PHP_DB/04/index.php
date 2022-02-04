<?php 
try {

	$bool = false;
	//$bool->method();
	new PDO('', '', '');

	echo "<div>通常処理が最後まで実行されました。</div>";

} catch(PDOException $e) /* エラーによって分けれる */{

	echo "<div>PDOExceptionエラーが発生しました</div>";
	echo "<div>{$e->getMessage()}</div>";
	
} catch(Error $e) {

	echo "<div>何らかの例外が発生しました</div>";
	echo "<div>{$e->getMessage()}</div>";
	
} finally {
	
	echo "<div>終了処理が実行されました。</div>";
	
}
?>
<?php

function throw_exception() {

	try {

		$bool = false;
		//$bool->method();
		new PDO('', '', '');
		echo "<div>通常処理が最後まで実行されました。</div>";
		
	} catch(Throwable $e) {
		
		echo "<div>PDOExceptionエラーが発生しました</div>";
		echo "<div>{$e->getMessage()}</div>";
		$obj = get_class($e);
		echo "<div>エラーオブジェクトは{$obj}</div>";
		
	} 
	
}
//throw_exception();


try {

	throw_exception();
	echo "<div>通常処理が最後まで実行されました。</div>";

} catch(Error $e) {

	echo "<div>何らかの例外が発生しました</div>";
	echo "<div>{$e->getMessage()}</div>";
	
} finally {
	
	echo "<div>終了処理が実行されました。</div>";
	
}

echo "<div>finallyの後の終了処理が実行されました。</div>";
?>
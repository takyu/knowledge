<?php declare(strict_types=1);

/**
 * Creating a LogWriter class that inherits from MyFileWrite
 * and writes the log to a file.
 * 
 * In the LogWriter class,
 * it is assumed that the time can be set to the string
 * to be output by the format method.
 */

interface Template_writer {
	public function append(string $content): self;
	public function newline(): self;
	public function commit(int $flags = 0): self;
}

abstract class MyFileWriter implements Template_writer {

	private $filename;
	private $content = '';
	public static $APPEND = FILE_APPEND;

	function __construct($filename)
	{
		$this->filename = $filename;
	}

	function append(string $content): Template_writer
	{
		$this->content .= $this->format($content);
		return $this;
	}

	function newline(): Template_writer
	{
		$this->content .= PHP_EOL;
		return $this;
	}

	function commit(int $flags = 0): Template_writer
	{
		file_put_contents($this->filename, $this->content, $flags);
		$this->content = '';
		return $this;
	}

	abstract protected function format($content): string;

}

class LogWriter extends MyFileWriter {

	protected function format($content): string {

		$time_str = date('Y/m/d H:i:s');
		return sprintf('%s %s', $time_str, $content);
		
	}

}

$info = new LogWriter('info.log');
$error = new LogWriter('error.log');

$info->append('これは通常ログです。')
	->newline()
	->commit(LogWriter::$APPEND);

$error->append('これはエラーログです。')
	->newline()
	->commit(LogWriter::$APPEND);

?>
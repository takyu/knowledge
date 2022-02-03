<?php declare(strict_types=1);

/**
 * Define a class for file writing.
 */

interface Template_writer {
	public function append(string $content): self;
	public function newline(): self;
	public function commit(int $flags = 0): self;
}

class MyFileWriter implements Template_writer {

	private $filename;
	private $content = '';
	public static $APPEND = FILE_APPEND;

	function __construct($filename)
	{
		$this->filename = $filename;
	}

	function append(string $content): Template_writer
	{
		$this->content .= $content;
		return $this;
	}

	function newline(): Template_writer
	{
		/*
		$this->content .= PHP_EOL;
		return $this;
		*/
		return $this->append(PHP_EOL);
	}

	function commit(int $flags = 0): Template_writer
	{
		file_put_contents($this->filename, $this->content, $flags);
		$this->content = '';
		return $this;
	}

}

$file = new MyFileWriter('sample.txt');
$file->append('Hello, Taro.')
	->newline()
	->append('Bye, ')
	->append('Taro.')
	->newline()
	->commit()
	->append('Good night, Taro.')
	->commit(MyFileWriter::$APPEND);

?>
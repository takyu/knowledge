<?php 
namespace db;

// 名前空間を使用した場合はグローバルクラスであってもuseしなければならない。
use PDO;
use PDOStatement;

interface IDataSource {

	public function execute_sql(string $sql, array $params): PDOStatement|bool;

	// Execute
	public function execute(string $sql, array $params): bool;

	// Fetch
	public function select(string $sql, array $params): array;
	public function select_one(string $sql, array $params): array|bool;

	// Transaction
	public function begin(): void;
	public function commit(): void;
	public function rollback(): void;

}

class DataSource implements IDataSource{

	private PDO $conn;
	private bool $sql_request;

	/* Constructor */
	public function __construct($host = 'localhost', $port = '3306', $dbname = '', $username = '', $password = '')
	{
		$dsn = "mysql:host{$host};port={$port};dbname={$dbname}";
		$this->conn = new PDO($dsn, $username, $password);
		$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	}
	
	public function execute_sql(string $sql, array $params): PDOStatement|bool {
		$stmt = $this->conn->prepare($sql);
		$this->sql_request = $stmt->execute($params);
		return $stmt;
	}

	/* Execute */
	public function execute(string $sql = "", array $params = []): bool {
		$this->execute_sql($sql, $params);
		return $this->sql_request;
	}

	/* Fetch */
	public function select(string $sql = "", array $params = []): array {
		$stmt = $this->execute_sql($sql, $params);
		return $stmt->fetchAll();
	}
	public function select_one(string $sql = "", array $params = []): array|bool {
		$stmt = $this->execute_sql($sql, $params);
		return $stmt->fetch();
		//$result = $this->select($sql, $params);
		//return count($result) > 0 ? $result[0] : false;
	}

	/* Transaction */
	public function begin(): void {
		$this->conn->beginTransaction();
	}
	public function commit(): void {
		$this->conn->commit();
	}
	public function rollback(): void {
		$this->conn->rollBack();
	}

}
?>
<?php 
namespace model;

class ProductModel {
	public int $id;
	public string $name;
	public int $delete_flg;

	public function echo_product() {
		echo "<div>(calld by method) The product name is [{$this->name}].</div>";
	}

}
?>
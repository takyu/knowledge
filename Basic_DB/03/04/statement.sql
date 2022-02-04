/*
Create an insert statement to add the following records.
The "updated_at" is the date and time the record was inserted.

- mst_prefs
id|   name   |delete_flg|     updated_at    |updated_by|
--|----------|----------|-------------------|----------|
 1|Tokyo     |         0|2021-11-07 14:25:29|Takyu     |
 2|Osaka     |         0|2021-11-07 14:25:29|Takyu     |
 3|Yokohama  |         0|2021-11-07 14:25:29|Takyu     |

- mst_shops
id|name |pref_id|delete_flg|     updated_at    |updated_by|
--|-----|-------|----------|-------------------|----------|
 1|shopA|      1|         0|2021-11-07 14:25:29|Takyu     |
 2|shopB|      2|         0|2021-11-07 14:25:29|Takyu     |
 3|shopC|      3|         0|2021-11-07 14:25:29|Takyu     |

- mst_products
id|   name   |delete_flg|updated_at         |updated_by|
--|----------|----------|-------------------|----------|
 1|table     |         0|2021-11-07 14:25:29|Takyu     |
 2|chair     |         0|2021-11-07 14:25:29|Takyu     |
 3|bed       |         0|2021-11-07 14:25:29|Takyu     |

- txn_stocks
product_id|shop_id|amount|delete_flg|     updated_at    |updated_by|
----------|-------|------|----------|-------------------|----------|
         1|      1|    10|         0|2021-03-14 19:00:51|Takyu     |
         1|      2|    80|         0|2021-03-14 19:00:51|Takyu     |
         2|      1|    30|         0|2021-03-14 19:00:51|Takyu     |
         2|      2|     0|         0|2021-03-14 19:00:51|Takyu     |
         3|      2|   100|         0|2021-03-14 19:00:51|Takyu     |
         3|      3|    60|         0|2021-03-14 19:00:51|Takyu     |
         
*/
use `test_db2`;

\! echo "###############  delete record  ###############\n"
delete from txn_stocks;
delete from mst_products;
delete from mst_shops;
delete from mst_prefs;

-- check the table status of table
show table status where name = 'mst_prefs';
show table status where name = 'mst_shops';
show table status where name = 'mst_products';

\! echo "##########  Initialize auto_increment in id  ##########\n"
\! echo "## mst_prefs"
alter table mst_prefs auto_increment = 1;
\! echo "## mst_shops"
alter table mst_shops auto_increment = 1;
\! echo "## mst_products"
alter table mst_products auto_increment = 1;

\! echo "###############  Insert into table  ###############\n"
\! echo "## mst_prefs"
insert into mst_prefs (name, updated_by) values
	('Tokyo', 'Takyu'),
	('Osaka', 'Takyu'),
	('Yokohama', 'Takyu');

\! echo "## mst_shops"
insert into mst_shops (name, pref_id, updated_by) values
	('shopA', 1, 'Takyu'),
	('shopB', 2, 'Takyu'),
	('shopC', 3, 'Takyu');

\! echo "## mst_products"
insert into mst_products (name, updated_by) values 
	('table', 'Takyu'),
	('chair', 'Takyu'),
	('bed', 'Takyu');

\! echo "## txn_stocks"
insert into txn_stocks (product_id, shop_id, amount, updated_by) values
	(1, 1, 10, 'Takyu'),
	(1, 2, 80, 'Takyu'),
	(2, 1, 30, 'Takyu'),
	(2, 2, 0, 'Takyu'),
	(3, 2, 100, 'Takyu'),
	(3, 3, 60, 'Takyu');

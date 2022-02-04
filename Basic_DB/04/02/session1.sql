start transaction;

update txn_stocks set amount = 500
where product_id = 1 and shop_id = 1;

update txn_stocks set amount = 500
where product_id = 1 and shop_id = 2;
commit;

-- 更新状態確認用クエリ
select * from txn_stocks
where (product_id = 1 and shop_id = 1)
or (product_id = 1 and shop_id = 2);

-- lock解除待ちの確認
-- PHP5.6
-- select * from information_schema.innodb_lock_waits;
-- PHP8.0
use performance_schema;
select * from data_lock_waits;

-- deadlockの確認
show engine innodb status;


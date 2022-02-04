/*
レコードの更新
*/

-- 更新前の確認
select * from txn_stocks
where shop_id = 1 and product_id = 1;

-- 在庫数を特定の値に変更(50)
update txn_stocks set amount = 50
where shop_id = 1 and product_id = 1;

-- 在庫数から 10 引く
update txn_stocks set amount = amount - 10
where shop_id = 1 and product_id = 1;

-- 外部キーの CASCADE の確認
-- 変更前確認
show create table txn_stocks
select * from mst_shops;

-- 更新
update mst_shops set id = 10
where id = 1;

-- 戻しクエリ
update mst_shops set id = 1
where id = 10;
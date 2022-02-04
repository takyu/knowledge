/*
条件句の設定
*/
-- 一致
select * from txn_stocks
where product_id = 1;

-- 非一致
select * from txn_stocks
where product_id != 1;

-- 数値の比較
select * from txn_stocks
where amount >= 50;

-- A かつ B
select * from txn_stocks
where product_id = 1 and shop_id = 1;

-- A または B
select * from txn_stocks
where product_id = 1 or shop_id = 1;

-- 条件をくくる
select * from txn_stocks
where (product_id = 1 and shop_id = 1)
or (product_id = 2 and shop_id = 2);

-- %で部分一致検索、_一文字に一致
select * from mst_shops
where name like '%A';
select * from mst_shops
where name like '店舗_';

-- いずれかの値に一致
select * from mst_shops
where name in ('店舗A', '店舗B');

-- いずれの値にも一致しない
select * from mst_shops
where name not in ('店舗A', '店舗B');

-- AからBの範囲 
select * from txn_stocks
where amount between 60 and 100;

-- nullの列を許容するようにテーブル定義変更
alter table txn_stocks
modify column amount int(10) unsigned;

-- nullの値を持つレコードの挿入
insert into txn_stocks(product_id, shop_id, updated_by)
values (3,1, 'Takyu');

-- null以外に一致
select * from txn_stocks
where amount is not null;

-- nullに一致
select * from txn_stocks
where amount is null;

-- nullの値を持つレコードの削除
delete from txn_stocks
where product_id = 3 and shop_id = 1;
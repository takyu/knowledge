/*
ソート順の決定
*/

-- 単一キーによるソート
select * from txn_stocks
order by amount desc;

-- 条件付き
select * from txn_stocks
where amount > 50
order by product_id desc, shop_id asc;

-- 複数キーによるソート
select * from txn_stocks
order by product_id desc, shop_id asc;
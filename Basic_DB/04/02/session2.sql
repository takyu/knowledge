start transaction;

update txn_stocks set amount = 1000
where product_id = 1 and shop_id = 2;

update txn_stocks set amount = 1000
where product_id = 1 and shop_id = 1;

commit;
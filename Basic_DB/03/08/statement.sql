\! echo "# mst_prefs"
\! echo "## get the id of 'tokyo' and 'osaka'."
select id from mst_prefs
where name in ('Tokyo','Osaka');

\! echo "# txn_stocks"
\! echo "## get the shop_id of the records whose amount is between 60 and 80."
select shop_id from txn_stocks
where amount >= 60 and amount <= 80;
-- where amount between 60 and 80;

\! echo "# txn_stocks"
\! echo "## get the number of records whose amount is less than or equal to 50."
-- select count(1) from txn_stocks
select count(*) from txn_stocks
where amount <= 50;

\! echo "# mst_products"
\! echo "## get the value of the name attribute of a product"
\! echowhose "name is not 'chair' with the label 'product_name'."
select name as "product_name" from mst_products
where name <> 'chair';

\! echo "# txn_stocks"
\! echo "## get the modified date and time and the person who updated the record"
\! echo "whose shop_id is 2 and whose product_id is 1."
select updated_at, updated_by from txn_stocks
where shop_id = 2 and product_id = 1;

\! echo "# txn_stocks"
\! echo "## get the records where shop_id is 2 and amount is greater than 70"
\! echo "or shop_id is 3 and amount is greater than 70."
select * from txn_stocks
where (shop_id = 2 and amount > 70)
or (shop_id = 3 and amount > 70);
-- select * from txn_stocks
-- where (shop_id = 2 or shop_id = 3)
-- and amount > 70;

\! echo "# mst_shops"
\! echo "## get the prep_id of the store whose name contains 'A'"
\! echo "as the label of the prefecture ID."
select pref_id as "prefecture_ID" from mst_shops
where name like '%A%';

\! echo "# txn_stocks"
\! echo "## retrieve the records whose shop_id is 2, in order of the number of units in stock."
select * from txn_stocks
where shop_id = 2
order by amount desc;

\! echo "# txn_stocks"
\! echo "## retrieve the record with the second highest inventory count from the top."
select * from txn_stocks
order by amount desc
limit 1, 1;
-- select * from txn_stocks
-- order by amount desc
-- limit 1 offset 1;
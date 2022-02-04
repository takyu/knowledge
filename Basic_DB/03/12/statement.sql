/*
Question1:
connect the txn_stocks to the mst_shops and output the following table.
Store names should be displayed in ascending order.

store |productID|amount of store|
------|---------|---------------|
storeA|        2|             30|
storeA|        1|             20|
storeB|        3|            100|
storeB|        1|             80|
storeB|        2|              0|
storeC|        3|             60|
*/
select ms.name "store", ts.product_ID "productID", ts.amount "amount of store"
from txn_stocks ts
inner join mst_shops ms
on ts.shop_id = ms.id
order by ms.name, ts.amount desc;

/*
Question2:
Create the following table by further joining the products table to the query in Q1.

store |product |amount of store|
------|--------|---------------|
storeA|chair   |             30|
storeA|table   |             20|
storeB|bed     |            100|
storeB|chair   |              0|
storeB|table   |             80|
storeC|bed     |             60|
*/
select ms.name "store", mp.name "product", ts.amount "amount of store"
from txn_stocks ts
inner join mst_shops ms
on ts.shop_id = ms.id
inner join mst_products mp  
on ts.product_id = mp.id
order by ms.name, ts.amount desc;

/*
Question3:
Create the following table by further joining the prefecture table to the query in Q2.

store |prefecture|product |amount of store|
------|----------|--------|---------------|
storeA|Tokyo     |chair   |             30|
storeA|Tokyo     |table   |             20|
storeB|Osaka     |bed     |            100|
storeB|Osaka     |chair   |              0|
storeB|Osaka     |table   |             80|
storeC|Yokohama  |bed     |             60|
*/
select ms.name "store", mpr.name "prefecture", mp.name "product", ts.amount "amount of store"
from txn_stocks ts
inner join mst_shops ms
on ts.shop_id = ms.id
inner join mst_products mp  
on ts.product_id = mp.id
inner join mst_prefs mpr
on ms.pref_id = mpr.id
order by ms.name, ts.amount desc;
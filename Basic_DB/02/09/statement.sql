-- 子テーブル (shops) -> 親テーブル (prefs)
alter table shops
add constraint fk_pref_id
foreign key(pref_id)
references prefs (id)
on update cascade

-- 子テーブル (stocks) -> 親テーブル (shops, products)
alter table stocks
add constraint fk_product_id
foreign key(product_id)
references products (id)
on update cascade,
add constraint fk_shop_id
foreign key(shop_id)
references shops (id)
on update cascade;

-- 外部キーの削除
alter table テーブル名
drop foreign key 制約名;

-- 外部キーの確認
show create table shops;
show create table stocks;
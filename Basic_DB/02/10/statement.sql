create database test_db2;
use test_db2;

\! echo "###############  create table  ###############\n"
\! echo "## mst_products"
create table mst_products (
	id int(10) unsigned auto_increment primary key,
	name varchar(20) not null,
	delete_flg int(1) not null default 0,
	updated_at timestamp default current_timestamp on update current_timestamp, 
	updated_by varchar(20) not null
);

\! echo "## mst_prefs"
create table mst_prefs (
	id int(2) unsigned auto_increment primary key,
	name varchar(10) not null,
	delete_flg int(1) not null default 0,
	updated_at timestamp default current_timestamp on update current_timestamp, 
	updated_by varchar(20) not null
);

\! echo "## mst_shops"
create table mst_shops (
	id int(10) unsigned auto_increment primary key,
	name varchar(50) not null,
	pref_id int(2) unsigned not null,
	delete_flg int(1) not null default 0,
	updated_at timestamp default current_timestamp on update current_timestamp, 
	updated_by varchar(20) not null,
	constraint fk_pref_id
	foreign key(pref_id)
	references mst_prefs (id)
	on update cascade 
);

\! echo "## txn_stocks"
create table txn_stocks (
	product_id int unsigned,
	shop_id int unsigned,
	amount int unsigned not null,
	delete_flg int(1) not null default 0,
	updated_at timestamp default current_timestamp on update current_timestamp, 
	updated_by varchar(20) not null,
	primary key (product_id, shop_id),
	constraint fk_product_id
	foreign key (product_id)
	references mst_products (id)
	on update cascade,
	constraint fk_shop_id
	foreign key (shop_id)
	references mst_shops (id)
	on update cascade
);


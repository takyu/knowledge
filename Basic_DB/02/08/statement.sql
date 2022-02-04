-- prefs
create table `prefs` (
	`id` int(2) unsigned not null primary key,
	`name` varchar(10) not null
);

-- products
create table `products` (
	`id` int(10) unsigned not null,
	`name` varchar(10) not null,
	primary key(id)
);

-- shops
create table shops (
	`id` int(10) unsigned not null primary key,
	`name` varchar(20) not null,
	`pref_id` int(2) unsigned not null
);

-- stocks
create table stocks (
	`product_id` int(10) unsigned not null,
	`shop_id` int(10) unsigned not null,
	`amount` int(10) unsigned not null,
	primary key(product_id, shop_id)
);
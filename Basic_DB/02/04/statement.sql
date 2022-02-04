/*
制約の作成
*/

create table test_table (
	id int not null default 0 comment 'ID',
	--id int default not null 0 comment 'ID', でも可
	val varchar(20) unique comment '値'
);
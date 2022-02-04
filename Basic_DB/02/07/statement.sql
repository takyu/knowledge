/*
テーブル定義の変更
*/

-- add
alter table test_db.test_table
add column key2 varchar(20) not null,
add column key3 varchar(20) not null;

alter table test_db.test_table
add column key4 varchar(20) after key2;

alter table test_db.test_table
add column key5 varchar(20) first;

-- modify
alter table test_db.test_table
modify column key5 int not null;

alter table test_db.test_table
modify column key1 int(11) NOT NULL;

-- drop
alter table test_db.test_table
drop column key5;

alter table test_db.test_table
drop primary key;

/*
インデックスとオプティマイザ
*/
use test_db;
create table test_index (
	id int auto_increment primary key,
	val1 int(8),
	val2 int(8),
	val3 int(8),
	val4 int(8)
);
-- val1にインデックスを追加
alter table test_index add index idx_val1(val1);

-- テーブル定義確認
show create table test_index;

-- ダミーレコード挿入用プロシージャ 実行可能な関数
delimiter //
create procedure insert_dummy_data(mx int)
	begin
	declare i int default 0;
	while i < mx do
		insert into test_index(val1, val2, val3, val4)
		values (ceil(rand() * 1e8),ceil(rand() * 1e8),ceil(rand() * 1e8),ceil(rand() * 1e8));
		set i = i + 1;
	end while;
	end //
delimiter ;

-- 削除用
drop procedure insert_dummy_data;

-- 再挿入の際に使用
truncate test_index;

-- ダミーデータ挿入
call insert_dummy_data(10);

-- 件数確認
select count(1) from test_index;

-- 実行計画取得
explain select * from test_index where id > 5;
explain select * from test_index where val1> 5;

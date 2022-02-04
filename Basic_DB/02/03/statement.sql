/*
テーブルの作成
*/

-- DB選択
use test_db;
-- テーブルの作成
create table `test_table` (
	`id` int unsigned default 0 comment 'ID',
	-- 最後は,で終わらない
	`val` varchar(20) default 'hello' comment '値'
);
-- テーブルの削除
drop table test_table;
-- テーブル設計の確認
desc `test_table`;
-- テーブル設計の確認 (詳細)
show full columns from `test_table`;
-- テーブル構成の確認
show create table `test_table`
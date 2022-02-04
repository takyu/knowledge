/* 
character set(文字コード)
データベース、テーブル、カラムに設定可能
*/

-- Databaseの文字コード指定
create database utf8mb4_db
	character set 'utf8mb4';

-- テーブルへの設定
create table tbl_name() character set 'utf8mb4';

-- テストテーブルの作成
create table char_test(
	mb4 varchar(20) character set 'utf8mb4',
	mb3 varchar(20) character set 'utf8'
);

-- 絵文字を挿入
insert into char_test(mb4) values ('😄');
insert into char_test(mb3) values ('😄'); -- エラー発生
select * from char_test;

-- 確認が終わったら削除
drop table char_test;
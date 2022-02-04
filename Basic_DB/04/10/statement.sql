/* 
collation（照合順序） 
データベース、テーブル、カラムに設定可能
*/
-- 一覧の表示
show collation where charset like '%utf8%';

-- 照合順位の確認
use utf8mb4_db;
select @@collation_database;

-- テーブル作成
create table collate_test (
	col varchar(20)
) 
character set 'utf8mb4'
collate 'utf8mb4_general_ci';

-- テストデータの挿入
insert into collate_test values 
('パパ'),
('ババ'),
('ハハ'),
('ﾊﾊ'),
('はは'),
('HAHA'),
('haha'),
('ｈａｈａ'),
('ＨＡＨＡ');

-- カタカナで検索
select col "GENE" from collate_test where col = 'はは';
select col "UNI" from collate_test where col COLLATE utf8mb4_unicode_ci = 'はは';
select col "BIN" from collate_test where col COLLATE utf8mb4_bin = 'はは';

-- ローマ字で検索
select col "GENE" from collate_test where col = 'HAHA';
select col "UNI" from collate_test where col COLLATE utf8mb4_unicode_ci = 'HAHA';
select col "BIN" from collate_test where col COLLATE utf8mb4_bin = 'HAHA';

-- 全角ローマ字で検索
select col "GENE" from collate_test where col = 'ｈａｈａ';
select col "UNI" from collate_test where col COLLATE utf8mb4_unicode_ci = 'ｈａｈａ';
select col "BIN" from collate_test where col COLLATE utf8mb4_bin = 'ｈａｈａ';

-- 確認が終わったら削除
drop table collate_test;
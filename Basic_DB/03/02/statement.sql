/*
レコードの取得
*/

-- すべての属性を取得
select * from mst_prefs;

-- レコード件数を取得
select count(*) from mst_prefs;
select count(1) from mst_prefs;

-- aliasの使用
select id as "ID", name as "都道府県名" from mst_prefs;

-- 重複行確認用
insert into mst_prefs(name, updated_by) values ('北海道', 'codemafia');

-- 重複レコードを省く
select distinct name "都道府県名" from mst_prefs;

-- 重複行を省いた件数
select count(distinct name) from mst_prefs as mp 
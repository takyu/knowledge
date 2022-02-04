/*
レコードの削除
テーブルのレコードを削除
外部キーが張られているテーブルでは子テーブルの方から削除
*/

-- 子テーブルの削除
delete from mst_shops;

-- 親テーブルの削除
delete from mst_prefs;

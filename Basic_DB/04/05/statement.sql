/*
ユーザー定義変数
セッション内でのみ有効
*/
-- 変数設定
set @s_id = 2;

-- 使えているか確認
select * from mst_shops
where id = @s_id;

-- select文で選んだ属性名を代入することもできる
select @s_name := name from mst_shops
where id = @s_id;

select @s_name;
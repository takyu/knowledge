/*
サーバーシステム変数
*/
-- サーバーシステム変数一覧
show variables;

-- 変数の確認
show [session|global|local] variables like '%auto%';

-- 値の取得
select @@session.autocommit;

-- 値の設定
set session autocommit = 1;
set @@session.autocommit = 0;

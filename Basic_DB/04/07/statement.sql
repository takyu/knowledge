/*
ユーザーの確認と作成
*/
-- 現在ユーザーの確認
select user();

-- ユーザーの作成
create user 'test_user'@'localhost' identified by 'pwd';

-- ユーザーの一覧
select * from mysql.user;

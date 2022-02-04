/*
主キーの作成
*/
-- 単一主キー
create table test_db.test_table (
	key1 int(6) PRIMARY KEY
);

-- 複合主キー
create table test_db.test_table (
	key1 int(6),
	key2 int(6),
    PRIMARY key pk1(key1, key2)
);
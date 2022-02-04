/*
TIMESTAMPとDATETIMEの違い
*/

create table test_date (
	-- dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	-- ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	dt DATETIME.
	ts TIMESTAMP
);

-- タイムゾーンの確認
select @@session.time_zone;

-- 現在時刻を挿入
insert into test_date values(now(), now());

-- レコードの確認
select * from test_date;

-- タイムゾーンの変更
set session time_zone = "+01:00";

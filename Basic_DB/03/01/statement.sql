-- 挿入
insert into mst_prefs(name, updated_by) values ('Tokyo', 'takyu');

-- 複数行
insert into mst_prefs(name, updated_by) values ('Osaka', 'takyu'),
('Yokohama', 'takyu');


-- MST_PREFSにid = 4のレコードがないため外部キー制約エラー
insert into mst_shops(name, pref_id, updated_by) values ('店舗A', 4, 'takyu');
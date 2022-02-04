/*
テーブルの内部結合（INNER JOIN）
*/
-- 両方のカラム取得
select * from mst_shops ms
inner join mst_prefs mp
on ms.pref_id = mp.id;

-- msのカラムのみ取得
select ms.* from mst_shops ms
inner join mst_prefs mp
on ms.pref_id = mp.id;

-- mpのカラムのみ取得
select mp.* from mst_shops ms
inner join mst_prefs mp
on ms.pref_id = mp.id;

-- msの店舗名とmpの都道府県名
select ms.name "store", mp.name "prefecture" from mst_shops ms
inner join mst_prefs mp
on ms.pref_id = mp.id;
-- where を使った結合
select ms.name "store", mp.name "prefecture"
from mst_shops ms, mst_prefs mp 
where ms.pref_id = mp.id;

-- 店舗IDが1で、msの店舗名とmpの都道府県名
select ms.name "store", mp.name "prefecture" from mst_shops ms
inner join mst_prefs mp
on ms.pref_id = mp.id
where ms.id = 1;
-- where を使った結合
select ms.name "store", mp.name "prefecture"
from mst_shops ms, mst_prefs mp 
where ms.pref_id = mp.id;
and ms.id = 1;
/*
テーブルの外部結合
LEFT [OUTER] JOINとRIGHT [OUTER] JOIN
*/

select * from 左テーブル
left join 右テーブル
on 左テーブル.値が一致する属性 = 右テーブル.値が一致する属性;

-- テストデータの挿入
insert into mst_prefs (name, updated_by) values
('Nagoya', 'Takyu'),
('Hukuoka', 'Takyu');

/* 
+------------+-------+
| prefecture | store |
+------------+-------+
| Tokyo      | shopA |
| Osaka      | shopB |
| Yokohama   | shopC |
| Nagoya     | NULL  |
| Hukuoka    | NULL  |
+------------+-------+
*/
-- LEFT JOIN
select mp.name "prefecture", ms.name "store"
from mst_prefs mp 
left join mst_shops ms 
on mp.id = ms.pref_id;
-- on ms.pref_id = mp.id; でも逆にしても可

-- RIGHT JOIN
select mp.name "prefecture", ms.name "store"
from mst_shops ms
right join mst_prefs mp
on ms.pref_id = mp.id;




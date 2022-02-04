-- 前準備
create table if not exists important_data (
	id int(10) unsigned auto_increment primary key
);

insert into important_data values 
(),(),(),(),(),(),(),(),(),(),();

select * from important_data;

/*
入力欄に、「1; truncate impotant_data」と打つと、where句の後の
truncateクエリが流されてしまって、データが消えてしまう。
*/
## DML

Used to manipulate table data.  
Used to retrieve, update, delete, and insert data.

## INSERT statement

INSERT inserts new rows into an existing table.  
<https://dev.mysql.com/doc/refman/8.0/en/insert.html>  
For columns that have been given default values or auto-increment, there is no need to always insert them.  
If the value of the data to be inserted is a string, enclose them in single or double quotation marks.  
In SQL, single quotation marks are preferred.  
When inserting, insert from the parent table to avoid being caught by foreign key constraints.

- Inserting a single record

```sql
insert into tbl_name(col_name1, col_name2, ...)
	values (val1, val2, ...);
```

- Inserting Multiple Records

```sql
insert into tbl_name(col_name1, col_name2, ...)
	values (val1, val2, ...),
		(val1, val2, ...),
		(val1, val2, ...),
		(val1, val2, ...);
```

## SELECT statement

SELECT is used to retrieve rows selected from one or more tables, and can include UNION statements and subqueries.  
<https://dev.mysql.com/doc/refman/8.0/en/select.html>  

```sql
select select_expr (as alias) [, select_expr (as alias)] ...
	from table_references (as alias)
```

- select_expr

	- \*

		Get all columns (attributes).
	
	- count(*)

		Get the number of records.
		It can also be obtained with count(1).

	- distinct

		Duplicate records are excluded.

- as

	You can set an alias by specifying a name after as.  
	When specifying an alias in as, double quotation marks are often used.

Also, if there are too many columns and it is hard to see them, you can set the semicolon at the end of the sentence to **\G** to display the columns vertically for each record.

## DELETE statement

DELETE is a DML statement that removes rows from a table.  
<https://dev.mysql.com/doc/refman/8.0/en/delete.html>  
As with the insert statement, this one must be deleted from the child table to avoid being caught by the foreign key constraint.

```sql
delete from tbl_name [[AS] tbl_alias]
```

## WHERE statement

The WHERE clause allows you to specify search conditions.  
<https://dev.mysql.com/doc/refman/8.0/en/where-optimization.html>  
SELECT statements, but the same optimizations apply for WHERE clauses in DELETE and UPDATE statements.  

- =

	match.

- <>, !=

	not match.

- \>, >=, <, =<

	Numerical comparison.

- and

	All conditions are met.

- or

	Any of the conditions are met.

- \()

	Summarize the conditions.

- like

	The like operator can be used to perform pattern matching.  
	There are two types of patterns: percent (%) and underscore (_).

	- %
	
		any string of zero or more characters.

	- _
	
		Any single character.

- in

	Matches one of the values.

- not in

	does not match any of the values.

- between A and B

	Within the range of A and B (including the boundary).

- is not null

	match any value other than null.

- is null

	Match null.

## ORDER BY

The "order by" statement does the sorting.  
<https://dev.mysql.com/doc/refman/8.0/en/order-by-optimization.html>  
Sort by single key, sort by multiple keys, sort by condition, etc..

```sql
order by key_part1 [asc|desc], key_part2 [asc|desc], ..
```

- asc

	asc is ascending order and default.

- desc

	desc is descending order.

## limit, offset

The limit clause can be used to limit the number of records retrieved.  
You can also use the offset clause together to specify the starting point for fetching rows (starting from zero line and default zero).

```sql
-- Get three lines from the second line
select * from tbl_name limit 3 offset 2;

-- abbreviation (offset, limit)
select * from tbl_name 2, 3;
```

## UPDATE statement

UPDATE is a DML statement that modifies rows in a table.  
<https://dev.mysql.com/doc/refman/8.0/en/update.html>  

```sql
UPDATE table_reference
	SET assignment_list
	[WHERE where_condition]
	[ORDER BY ...]
	[LIMIT row_count]
```

First of all, it is better to use a select statement to get the record to be updated, and then check its status before updating it.

## JOIN

MySQL supports the JOIN syntax for the table_references part of SELECT statements and multiple-table DELETE and UPDATE statements.  
<https://dev.mysql.com/doc/refman/8.0/en/join.html>

## INNER JOIN

When two tables are joined, returns the records that exist in both tables.

- Use inner join statement

```sql
select * from table1 alias_tbl1
inner join table2 alias_tbl2
-- attr is attribute which is match value.
on alias_tbl1.attr1 = alias_tbl2.attr2
where ..
```

- Use where statement

```sql
select *
from table1 alias_tbl1, table2 alias_tbl2
where alias_tbl1.attr1 = alias_tbl2.attr2
and ..
```

## LEFT OUTER JOIN

When two tables are joined, return the records that exist in the left table.  
For example, if the left side table is A and the right side table is B,  
first all the conditions that match A will be retrieved,  
and then the conditions in B that are satisfied by both A and B will also be retrieved.

```sql
select *
from table1 alias_tbl1
left (outer) join table2 alias_tbl2
-- attr is attribute which is match value.
on alias_tbl1.attr1 = alias_tbl2.attr2
```

## RIGHT OUTER JOIN

When two tables are joined, return the records that exist in the right table.  
For example, if the left side table is A and the right side table is B,  
first all the conditions that match B will be retrieved,  
and then the conditions in A that are satisfied by both A and B will also be retrieved.

```sql
select *
from table1 alias_tbl1
right (outer) join table2 alias_tbl2
-- attr is attribute which is match value.
on alias_tbl1.attr1 = alias_tbl2.attr2
```

## OUTER JOIN (FULL OUTER JOIN)

Return all records of the two tables that match the condition.  
However, this join is not supported by MySQL.
## DDL

Used to define DB objects, and are as follows.  
These are used to create, modify, and delete database.

- table

- index

- function

- trigger

etc..

## CREATE DATABASE Statement

CREATE DATABASE creates a database with the given name.  
<https://dev.mysql.com/doc/refman/8.0/en/create-database.html>

```sql
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name
    [create_option] ...

create_option: [DEFAULT] {
    CHARACTER SET [=] charset_name
  | COLLATE [=] collation_name
  | ENCRYPTION [=] {'Y' | 'N'}
}
```

## DROP DATABASE Statement

DROP DATABASE drops all tables in the database and deletes the database. 
<https://dev.mysql.com/doc/refman/8.0/en/drop-database.html>

```sql
DROP {DATABASE | SCHEMA} [IF EXISTS] db_name
```

## Database related statements

- Display the database list

```sql
show databases;
```

- Check the database you are currently using

```sql
select database();
```

- Add a Database

```sql
create database db_name
```

- Select a database

```sql
use db_name;
```

- Delete a database

```sql
drop database db_name;
```

## CREATE TABLE Statement

CREATE TABLE creates a table with the given name.  
<https://dev.mysql.com/doc/refman/8.0/en/create-table.html>  
You must have the CREATE privilege for the table.  
By default, tables are created in the default database, using the InnoDB storage engine.  
An error occurs if the table exists, if there is no default database, or if the database does not exist.

```sql
create table tbl_name (
	column_name data_type default default_val comment 'comment',
	...,
	CONSTRAINT
) ENGINE = [INNODB | MyISAM];
```

Commonly used data types and constraints are as follows.

- Data type

	- INT
		Integer value  
		If you want to limit the data to positive values, use unsigned.

	- FLOAT
		Floating point  
		If you want to limit the data to positive values, use unsigned.

	- DATETIME
		Date and time

	- TIMESTAMP
		Date and time

	- CHAR
		Fixed length string

	- VARCHAR
		Variable length string

	- BLOB
		Binary data (images, audio, video, etc.)

- Constraint

	- UNIQUE
		Unique constraint

	- NOT NULL
		NOT NULL constraint

	- CHECK (> MySQL8.0)
		Check Constraint

	- PRIMARY KEY
		Primary Key Constraint

	- FOREIGN KEY
		Foreign Key Constraint

## DROP TABLE Statement

DROP TABLE removes one or more tables.  
<https://dev.mysql.com/doc/refman/8.0/en/drop-table.html>  

```sql
DROP [TEMPORARY] TABLE [IF EXISTS]
	tbl_name [, tbl_name] ...
	[RESTRICT | CASCADE]
```

## Table related statements

- Display the table list

```sql
show tables;
```

- Confirm the details of the table list

```sql
show table status;
```

- Create a table

```sql
create table `tb_name` (
	`col_name1` int unsigned default 0 comment 'comment',
	`col_name2` varchar(20) default 'def_val' comment 'comment'
);
```

- Delete a table

```sql
drop table `tb_name`;
```

- Confirm table design

```sql
desc `tb_name`;
```

- Confirm the details of the table design

```sql
show full columns from `tb_name`;
```

- Check the table configuration.

```sql
show create table `tb_name`;
```

- Change the table name

```sql
alter table old_tb_name rename new_tb_name ;
```

## Constraint

The main constraints used in mysql will be the five introduced in the createtable section.  
However, I don't recommend using it too much for checking constraints.   Because the checking is mainly done in languages that use SQL(PHP etc..), and you end up double-checking.

- Table Constraints

	Constraints applied to a table (table).  
	It is the last notation after defining the column.  
	For example, Composite primary key, foreign key constraint, etc..
	```sql
	create table `tb_name` (
		`col_name1` int,
		`col_name2` int,
		primary key (key1, key2)
	);
	```

- Column Constraints

	Constraint for a column.  
	It can be written either before or after the default when used with the optional settings.    
	For example, NOT NULL constraint, etc..
	```sql
	create table `tb_name` (
		`col_name1` int not null default 0 comment 'comment',
		--`col_name1` int default 0 not null comment 'comment',
		`col_name2` varchar(20) unique comment 'comment'
	);
	```

- primary key

	- In case of Column Constraints

		It will be the same as the one with the not null and unique constraints.

	- In case of Table Constraints

		It must always be a NOT NULL constraint, but it does not have to be a UNIQUE constraint on a single attribute.

## auto_increment

Set the primary key so that it does not overlap with others, but use it when you just want to set a unique value.  
<https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_auto_increment>  
Basically, it will be assigned 1, 2, 3, 4, and so on, and the type is specified as int.  
When using auto_increment, there are a few things to keep in mind.

1. It must be indexed

	Use a column constraint of "primary key" or "unique" or explicitly state that it is an index.
	```sql
	create table test_db.test_table (
		key1 int auto_increment primary key
	);

	-- or
	create table test_db.test_table (
		key1 int auto_increment unique
	);

	-- or
	create table test_db.test_table (
		key1 int auto_increment,
		index(key1)
	);
	```

	Also, if you want to check the index, use the following statement.
	```sql
	create table test_table (
		key1 int auto_increment primary key
	);

	-- The index named PRIMARY is assigned
	show index from test_table;
	```

2. Only one can be given per table

3. Cannot be used with default.

## ALTER TABLE

ALTER TABLE changes the structure of a table.  
<https://dev.mysql.com/doc/refman/8.0/en/alter-table.html>  
For example, you can add or delete columns, create or destroy indexes, change the type of existing columns, or rename columns or the table itself. 

```sql
ALTER TABLE tbl_name (
	[alter_option [, alter_option] ...]
	[partition_options]
)
```

- Add

	You can add a column to a specified position.  
	If not specified, the column will be added at the end of the list.

	```sql
	/*
	| test_table | CREATE TABLE `test_table` (
		`key1` int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	create table test_table (
		key1 int auto_increment primary key 
	);

	/* 
	| test_table | CREATE TABLE `test_table` (
		`key1` int NOT NULL AUTO_INCREMENT,
		`key2` varchar(20) NOT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	add column key2 varchar(20) not null,
	add column key3 varchar(20) not null;

	/*
	| test_table | CREATE TABLE `test_table` (
		`key1` int NOT NULL AUTO_INCREMENT,
		`key2` varchar(20) NOT NULL,
		`key4` varchar(40) DEFAULT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	add column key4 varchar(20) after key2;

	/*
	| test_table | CREATE TABLE `test_table` (
		`key5` varchar(50) DEFAULT NULL,
		`key1` int NOT NULL AUTO_INCREMENT,
		`key2` varchar(20) NOT NULL,
		`key4` varchar(40) DEFAULT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	add column key5 varchar(20) first;
	```

- Modify

	Can change a column definition but not its name.  
	More convenient than CHANGE to change a column definition without renaming it.  
	With FIRST or AFTER, can reorder columns.

	```sql
	/*
	| test_table | CREATE TABLE `test_table` (
		`key5` int NOT NULL,
		`key1` int NOT NULL AUTO_INCREMENT,
		`key2` varchar(20) NOT NULL,
		`key4` varchar(40) DEFAULT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	modify column key5 int not null;

	/*
	| test_table | CREATE TABLE `test_table` (
		`key5` int NOT NULL,
		`key1` int NOT NULL,
		`key2` varchar(20) NOT NULL,
		`key4` varchar(40) DEFAULT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	modify column key1 int(11) NOT NULL;
	```

- Drop

	You can remove a column that already exists. 
	You can also remove an index that is already in the table. 

	```sql
	/*
	| test_table | CREATE TABLE `test_table` (
		`key1` int NOT NULL,
		`key2` varchar(20) NOT NULL,
		`key3` varchar(30) NOT NULL,
		PRIMARY KEY (`key1`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	drop column key5,
	drop column key4;

	/*
	| test_table | CREATE TABLE `test_table` (
		`key1` int NOT NULL,
		`key2` varchar(20) NOT NULL,
		`key3` varchar(30) NOT NULL
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
	*/
	alter table test_table
	drop primary key;
	```

- Initialize auto_increment

	If you delete a record, auto_increment will not be initialized.  
	Therefore, initialize it from 1 with the following statement.

	```sql
	alter table tbl_name auto_increment = 1;

	-- Check the status of table columns, including auto_increment
	show table status where name = 'tbl_name';
	```

## foreign key

Foreign keys which permit cross-referencing related data across tables, and foreign key constraints, which help keep the related data consistent.  
<https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html>

```sql
[CONSTRAINT [symbol]] FOREIGN KEY
	[index_name] (col_name, ...)
	REFERENCES tbl_name (col_name,...)
	[ON DELETE reference_option]
	[ON UPDATE reference_option]
```

- Note the following two points.

	- Data type should be match.

	- Indexes should be added automatically.

		However, if a valid key already exists, it will not be created.  
		For example, the first key of a compound primary key is not indexed.

- ON DELETE

	Describes the action to be taken when a record is deleted.

- ON UPDATE

	Describes the action to be taken when a record is updated.

- reference_option

	When an UPDATE or DELETE operation affects a key value in the parent table that has matching rows in the child table,  
	the result depends on the referential action specified by ON UPDATE and ON DELETE subclauses of the FOREIGN KEY clause.  
	Referential actions are as follows.

	- CASCADE

		Delete or update the row from the parent table and automatically delete or update the matching rows in the child table.

	- RESTRICT

		Rejects the delete or update operation for the parent table.

	- SET NULL
	
		Delete or update the row from the parent table and set the foreign key column or columns in the child table to NULL.

	- NO ACTION
	
		A keyword from standard SQL. In MySQL, equivalent to RESTRICT.

	- SET DEFAULT
	
		This action is recognized by the MySQL parser, but both InnoDB and NDB reject table definitions containing ON DELETE SET DEFAULT or ON UPDATE SET DEFAULT clauses.

## foreign key related statement 

- Create foreign key (with alter table)

```sql
alter table tb_name
add constraint constraint_name -- use co_name when remove constraints
foreign key (col_name)
references parent_tb_name (parent_col_name)
ON UPDATE reference_option
ON DELETE reference_option; -- Optional.
```

- Delete foreign key (with alter table)

```sql
alter table tb_name
drop foreign key constraint_name;
```

- Confirm foreign key

```sql
show create table tb_name;
```

## Practical table configuration

1. divide and develop transaction table and master table.

2. Create the logical delete flag **(delete_flg)**

	A flag to identify the validity of a record.  
	For example, if delete_flg = 1, it is treated as an invalid record.

	```sql
	delete_flg int(1) not null default 0
	```

3. Create the updated date and updated by **(updated_at, updated_by)**

	Attribute to keep a record of when and by whom the record was modified.

	```sql
	updated_at timestamp default current_timestamp on update current_timestamp, 
	updated_by varchar(20) not null
	```

4. Foreign key constraints may or may not be added.

## Transaction table

Refers to a table where data is frequently inserted and updated from the application (PHP in this case).  
Also called an entry table.  
For example, Order information, customer information, billing information, etc..  
In many cases, the table name is prefixed with **ENT, TXN, TRN,** etc..

## Master table

Refers to a table used to hold reference values.  
Basically, values are not inserted or changed from the application.  
For example, Product list, store list, etc..  
The table name is often prefixed with **MST**.


### Executing SQL Statements from a Text File

You can execute statements from a text file containing SQL.  
<https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html>  

- Usage

	```sh
	mysql db_name < text_file
	```

	If you place a USE db_name statement as the first statement in the file, it is unnecessary to specify the database name on the command line:

	```sh
	mysql < text_file
	```

	If you are already running mysql, you can execute an SQL script file using the source command or \. command.

	```sql
	mysql> source file_name
	mysql> \. file_name
	```

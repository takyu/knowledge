## transaction

Transaction is a group of SQL processes.  
In the context of databases, a sequence of database operations that satisfies the **ACID properties** (which can be perceived as a single logical operation on the data) is called a transaction.  
However, SQL is DML only.  
In a commercial environment, transactions should always be used to avoid running the wrong queries.  
MySQL automatically commits DML operations that do not declare a transaction, so turn off in a commercial environment. (```set autocommit = 0;```)

```sql
-- Declare word to start transaction 
start transaction;

/* DML processing */

-- Reflect processing
commit;

-- Not reflect processing
rollback;
```

## ACID properties

ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps.  

- Atomicity

	It must be guaranteed that all SQL will succeed or fail.  
	If any process fails in a transaction, it will be returned to the starting state (**Rollback**).  
	On the other hand, if all the processes succeed, the transaction will be reflected as it is (**commit**).

- Consistency

	The results of the transaction are guaranteed to be consistent.  
	This ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants.  
	Changes in values due to CASCADE of foreign key constraints and changes in them due to trigger are also ensured to be consistent through commit and rollback.

- Isolation

	The state during transaction processing is be guaranteed to be independent of other sessions and connections.  
	For example, what is being processed in session A cannot be seen in session B.  
	In MySQL, there are [transaction isolation levels](https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html), and depending on the level, other sessions may be able to see the contents of a particular process in progress.

- Durability

	It is be guaranteed that the data will be persistently retained in storage after the completion of the transaction.  
	Even if some failure occurs after the transaction is completed, the data is retained.

## Lock

Do not allow rows, or tables, to be updated from other sessions before updating the data.  
Applies a **table lock** to a table and a **record lock** to a row.

- locking during a transaction

	It locks tables and records before they are processed, and unlocks them when they are committed or rolled back.

## Deadlock

A state in which multiple sessions are each waiting to be unlocked and the process cannot be completed.  
For example, we have session 1 and 2, records A and B.

1. Session 1 locks and updates record A.

2. Session 2 locks and updates record B.

3. Session 1 tries to lock and update record B, but session 2 has already locked record B, so session2 is waiting for the lock to be released.

4. Session 2 tries to lock and update record A, but session 1 has already locked record A, so session2 is waiting for the lock to be released.

Hence, both sessions are in a state waiting to be released, which is called a deadlock.

```sql
-- Check of waiting for lock release
-- 5.6
use information_schema;
select * from innodb_lock_waits;

-- 8.x
use performance_schema;
select * from data_lock_waits;

-- Deadlock logs
show engine innodb status;
```

## TRUNCATE TABLE Statement

TRUNCATE TABLE empties a table completely.  
<https://dev.mysql.com/doc/refman/8.0/en/truncate-table.html>  
It requires the DROP privilege.  
Logically, TRUNCATE TABLE is similar to a DELETE statement that deletes all rows, or a sequence of DROP TABLE and CREATE TABLE statements.  
There are four features of using the TRUNCATE statement.

1. It Can't be rollback.

2. It is faster than the delete statement.

3. It Can't use the where statement.

4. auto_increment is the initial value.

```sql
TRUNCATE [TABLE] tbl_name
```

## SET Syntax

SET syntax for variable assignment enables you to assign values to different types of variables that affect the operation of the server or clients.  
<https://dev.mysql.com/doc/refman/8.0/en/set-variable.html>  

```sql
SET variable = expr [, variable = expr] ...

variable: {
	user_var_name
	| param_name
	| local_var_name
	| {GLOBAL | @@GLOBAL.} system_var_name
	| {PERSIST | @@PERSIST.} system_var_name
	| {PERSIST_ONLY | @@PERSIST_ONLY.} system_var_name
	| [SESSION | @@SESSION. | @@] system_var_name
}
```

## Server System Variables

The MySQL server maintains many system variables that configure its operation.  
<https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html>  
Each system variable has a default value.  
System variables can be set at server startup using options on the command line or in an option file.  
Most of them can be changed dynamically at runtime using the SET statement, which enables you to modify operation of the server without having to stop and restart it.  
You can also use system variable values in expressions.  
To see the values that a server uses based on its compiled-in defaults and any option files that it reads, use follwing command.

```sh
mysqld --verbose --help
```

in MySQL, to display system variable names and values, use the SHOW VARIABLES statement.

```sql
SHOW VARIABLES;

-- Ambiguous search by wildcard is also possible (ex. auto)
show [session|global|local] variables like '%auto%';
```

- Getting the value

	```sql
	-- Get the value in the current session
	@@session.variable_name;

	-- Same as `@session.variable_name;`
	@@local.variable_name;

	-- Get the value in the server
	@@global.variable_name;

	-- get variables in the order session -> global
	@@variable_name
	```

- Changing the value

	```sql
	-- valid in the current session
	set session;

	-- Same as `set session`
	set local;

	-- Valid for all sessions (server-wide) (until DB is restarted)
	set global;
	```

	If omitted, change the **session variable**.

Session variables will lose their settings if the session is disconnected even once.  
Also, by setting the autocommit variable to 0, the transaction is always continued, so the change history will not be saved until you commit.

## User-Defined Variables

You can store a value in a user-defined variable in one statement and refer to it later in another statement.  
<https://dev.mysql.com/doc/refman/8.0/en/user-variables.html>  
This enables you to pass values from one statement to another.  
User variables are written as @var_name, where the variable name var_name consists of alphanumeric characters, ., _, and $.  
A user variable name can contain other characters if you quote it as a string or identifier (for example, @'my-var', @"my-var", or @`my-var`).

```sql
SET @var_name = expr [, @var_name = expr] ...
```

## TIMESTAMP and DATETIME

TIMESTAMP and DATETIME columns can be automatically initializated and updated to the current date and time (that is, the current timestamp).  
<https://dev.mysql.com/doc/refman/8.0/en/timestamp-initialization.html>  
For any TIMESTAMP or DATETIME column in a table, you can assign the current timestamp as the default value, the auto-update value, or both.  
The difference between TIMESTAMP and DATETIME is as follows.

- TIMESTAMP

	1. 4 bytes

	2. '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07'

	3. Consider time zone

- DATETIME

	1. 5 bytes

	2. '1000-01-01 00:00:00' to '9999-12-31 23:59:59' 

	3. Does not consider time zone

## Specifying Account Names

MySQL account names consist of a user name and a host name, which enables creation of distinct accounts for users with the same user name who connect from different hosts.  
<https://dev.mysql.com/doc/refman/8.0/en/account-names.html>  
Account name syntax is '**user_name'@'host_name**'.  
If you use '%' in the host_name, you can connect to any host with that user_name, but this is not recommended for security reasons.

## CREATE USER Statement

The CREATE USER statement creates new MySQL accounts.  
<https://dev.mysql.com/doc/refman/8.0/en/create-user.html>  
It enables authentication, role, SSL/TLS, resource-limit, password-management, comment, and attribute properties to be established for new accounts.  
It also controls whether accounts are initially locked or unlocked.

```sql
CREATE USER [IF NOT EXISTS]
	user [auth_option] [, user [auth_option]] ...
	DEFAULT ROLE role [, role ] ...
	[REQUIRE {NONE | tls_option [[AND] tls_option] ...}]
	[WITH resource_option [resource_option] ...]
	[password_option | lock_option] ...
	[COMMENT 'comment_string' | ATTRIBUTE 'json_object']
```

If you don't have any options, the general writing style is as follows.

```sql
CREATE USER 'hoge'@'localhost' IDENTIFIED BY 'password';
```

- Check the current user

	```sql
	select user();
	```

- User list

	```sql
	select * from mysql.user;

	-- Only user name list
	select User from mysql.user;
	```

## GRANT Statement

The GRANT statement assigns privileges and roles to MySQL user accounts and roles.  
<https://dev.mysql.com/doc/refman/8.0/en/grant.html>  

```sql
GRANT
	priv_type [(column_list)]
		[, priv_type [(column_list)]] ...
	ON [object_type] priv_level
	TO user_or_role [, user_or_role] ...
	[WITH GRANT OPTION]
	[AS user
		[WITH ROLE
			DEFAULT
			| NONE
			| ALL
			| ALL EXCEPT role [, role ] ...
			| role [, role ] ...
		]
	]
```

If you don't have any options, the general writing style is as follows.

```sql
grant priv_type on db_object to user
```

For the privileges type, write **all** if you want to apply all permissions, or enter the permission name if you want to apply each permission individually.  
For more information about privileges type, please visit [this site](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html).  

- How to check privileges

	```sql
	show grants for user_name@host_name;
	```

Also, The REVOKE statement is related to GRANT and enables administrators to remove account privileges.

## REVOKE Statement

The REVOKE statement enables system administrators to revoke privileges and roles, which can be revoked from user accounts and roles.  
<https://dev.mysql.com/doc/refman/8.0/en/revoke.html>  

```sql
REVOKE
	priv_type [(column_list)]
		[, priv_type [(column_list)]] ...
	ON [object_type] priv_level
	FROM user_or_role [, user_or_role] ...

-- revoke all privileges
REVOKE ALL [PRIVILEGES], GRANT OPTION
	FROM user_or_role [, user_or_role] ...
```

If you don't have any options, the general writing style is as follows.

```sql
revoke priv_type on db_object from user
```

## DROP USER Statement

The DROP USER statement removes one or more MySQL accounts and their privileges.  
<https://dev.mysql.com/doc/refman/8.0/en/drop-user.html>  
It removes privilege rows for the account from all grant tables.

```sql
DROP USER [IF EXISTS] user [, user] ...
```

## Character

In the current MySQL, the character encoding **utf8** is an alias for the utf8mb3 character set, but this usage is being phased out.  
<https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-utf8.html>  
The utf8mb3 character set is *deprecated* and you should expect it to be removed in a future MySQL release.  
**utf8** is expected subsequently to become a reference to **utf8mb4**.  
To avoid ambiguity about the meaning of utf8, consider specifying **utf8mb4** explicitly for character set references.

- utf8mb3 (currently, utf8)

	- 3 bytes

	- Some characters cannot be displayed.

- utf8mb4 (in the future, utf8)

	- 4 bytes

	- Support for pictograms, etc.

## CHARSET (utf8mb4)

Character encoding can be set for databases, tables, and columns.

- Set character encoding at database definition

	```sql
	create database db_name
	character set char_type;
	```

- Set character encoding at table definition

	```sql
	create table tbl_name() character set char_type;
	```

## COLLATION

Collation affects how the strings are compared.  
The utf8 collation can be listed with the following command.  

```sql
show collation where charset like '%utf8%';
```

You can also use the following command to find out the collation used in the current database object.

```sql
use db_name;
select @@collation_database;
```

In MySQL 8.0 and later, the default collation for utf8 is **utf8mb4_0900_as_ci**.  
A typical collation sequence is as follows.

- utf8mb4_0900_as_ci

	Doesn't distinguish between uppercase and lowercase letters, hiragana and katakana, muddy and semi-muddy sounds, and full-size and half-size characters.

- utf8mb4_general_ci

	Doesn't distinguish between uppercase and lowercase alphabetic characters and pictograms.  
	Half-width and full-width characters are distinguished.

- utf8mb4_unicode_ci

	Doesn't distinguish between uppercase and lowercase letters, full-size and half-size letters, hiragana and katakana, muddy and semi-muddy sounds, and pictograms.

- utf8mb4_bin

	All characters are distinguished.

Collation can be set for databases, tables, and columns.

- Set collation at database definition

	```sql
	create database db_name
	character set 'utf8mb4'
	collate collation_type;
	```

- Set collation at table definition

	```sql
	create table tbl_name ()
	character set 'utf8mb4'
	collate collation_type;
	```

- When you want to specify with a where statement

	```sql
	where col
	COLLATE collation_type = val_name;
	```

## Index

Indexes are DB Object used to find rows with specific column values quickly.  
Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows.  
<https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html>  
The larger the table, the more this costs.  
If the table has an index for the columns in question, MySQL can quickly determine the position to seek to in the middle of the data file without having to look at all the data.  
This is much faster than reading every row sequentially.  
There are four main conditions which indexes are used in a search.

- Value comparison (<) and equivalence (=)

- like 'character%'

	Only if a wildcard is inserted at the back.

- Joining Tables

- Sort by order by

```sql
-- create table
create table tbl_name (

	-- column constraint
	val_name type_name index,
	val2_name type_name,
	val3_name type_name

	-- table constraint
	index idx_val2(val2_name)
);

-- alter table
alter table tbl_name add index idx_val3(val3_name);
```

Most MySQL indexes (PRIMARY KEY, UNIQUE, INDEX, and FULLTEXT) are stored in **B-tree**.

## B-tree

When specifying sorted records, there are two main types: **linear search**, which searches in order from the front, and b**inary search trees**, which search for the desired record while halving the search range.  
The [B-tree](https://en.wikipedia.org/wiki/B-tree) is a generalization of the binary search tree, where each node can have m (m>=2) child nodes.  
When m=2, it is a binary search tree.

## Optimizer

A control that determines how the records are actually retrieved.  
<https://dev.mysql.com/doc/refman/8.0/en/optimizer-issues.html>  
Even if an index is applied to a table, the optimizer decides whether to actually use it or not.  
Decisions are made based on the number and bias of the data or the number of columns in the table.

## Stored Routines

MySQL supports stored routines (procedures and functions).  
<https://dev.mysql.com/doc/refman/8.0/en/stored-routines.html>  
A stored routine is a set of SQL statements that can be stored in the server.  
Once this has been done, clients don't need to keep reissuing the individual statements but can refer to the stored routine instead.

## CREATE PROCEDURE and CREATE FUNCTION Statements

These statements are used to create a stored routine (a stored procedure or function).  
<https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html>  
Stored procedures and stored functions work almost identically, but there is one major difference.  
Procedure doesn't have a return value, but function have a return value.

- PROCEDURE statements

```sql
CREATE
	[DEFINER = user]
	PROCEDURE sp_name ([proc_parameter[,...]])
	[BEGIN] -- Local variable scope until END
	routine_body
	[END]
```

- FUNCTION statements

```sql
CREATE
	[DEFINER = user]
	FUNCTION sp_name ([func_parameter[,...]])
	RETURNS type
	routine_body
```

To invoke a stored procedure, use the CALL statement.

## CALL Statement

The CALL statement invokes a stored procedure that was defined previously with CREATE PROCEDURE.  
<https://dev.mysql.com/doc/refman/8.0/en/call.html>

```sql
CALL sp_name([parameter[,...]])
CALL sp_name[()]
```

## Defining Stored Programs

Each stored program contains a body that consists of an SQL statement.  
This statement may be a compound statement made up of several statements separated by semicolon (;) characters.  
<https://dev.mysql.com/doc/refman/8.0/en/stored-programs-defining.html>  
If you use the mysql client program to define a stored program containing semicolon characters, a problem arises.  
By default, mysql itself recognizes the semicolon as a statement delimiter, so you must redefine the delimiter temporarily to cause mysql to pass the entire stored program definition to the server.  
To redefine the mysql delimiter, use the delimiter command.  
The delimiter is changed to **//** to enable the entire definition to be passed to the server as a single statement, and then restored to **;** before invoking the procedure.  
This enables the **;** delimiter used in the procedure body to be passed through to the server rather than being interpreted by mysql itself.

```sql
delimiter //

-- PROCEDURE statements or FUNCTIONS tatements

end //
delimiter ;
```

## EXPLAIN Statement

EXPLAIN is a statement to get information about the SQL execution plan.  
<https://dev.mysql.com/doc/refman/8.0/en/explain.html>  
The execution plan is the result of MySQL's decision on which indexes to use or table scan without indexes to process the query.  
To check if the index is valid, we can look at the column "type" and determine that if it is **all**, it is a full scan (no index is used), and if it is **range**, the index is used.

```sql
explain select col_name [,col_name ..]
from tbl_name
[where condition]
```
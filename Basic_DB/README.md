## DB

A database is a set of data which has been created and managed in a certain format so that it can be readily shared and used by multiple entities.  
It can be processed and reused according to its intended use.  
In some contexts, DBMS stands for Database Management System and is also called a database.  
This section, deal with RDBMS such as [MySQL](https://dev.mysql.com/doc/).

## SQL

SQL stands for Structured Query Language, and is language used to manipulate the DB.  
It is a language for describing statement to the DB.  
It is also called a query.  
[This site](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html) describes the syntax for the SQL statements supported by MySQL.

## SQL Types

- DDL (Data Definition Language)

- DML (Data Manipulation Language)

- DCL (Data Control Language)

- TCL (Transaction Control Language)

## SQL Notation

- Use a semicolon to separate sentences

- It is not case-sensitive

- You can insert a comment in the following way

	- /*  */

		block comment

	- \--

		Comment to end of sentence

	- \#

		Comment to end of sentence

- Write "\!" at the beginning of a MySQL statement to execute a shell command

## Detail

1. [Table design](https://github.com/takyu/knowledge/tree/main/Basic_DB/01)

	1. Basic DB

	2. Table and primary key

	3. Table Splitting and Foreign Key

	4. Database normalization

	5. ER Diagram

2. [DDL](https://github.com/takyu/knowledge/tree/main/Basic_DB/02)

	1. SQL Client (DBeaver)

	2. CREATE DATABASE

	3. CREATE TABLE

	4. CONSTRAINT

	5. CREATE primary key

	6. AUTO INCREMENT

	7. ALTER TABLE

	8. Practice (Based on ER diagram)

	9. FOREIGN KEY

	10. Transaction table and Master table

3. [DML](https://github.com/takyu/knowledge/tree/main/Basic_DB/03)

	1. INSERT

	2. SELECT

	3. DELETE

	4. practice (insert record)

	5. WHERE

	6. ORDER BY

	7. limit, offset

	8. practice (get record)

	9. UPDATE

	10. INNER JOIN

	11. OUTER JOIN

	12. practice (join)

4. [Practical DB](https://github.com/takyu/knowledge/tree/main/Basic_DB/04)

	1. transaction (ACID)

	2. Deadlock

	3. TRUNCATE TABLE Statement

	4. Server System Variables

	5. User-Defined Variables

	6. TIMESTAMP and DATETIME

	7. CREATE USER

	8. PRIVILEGE

	9. CHARSET

	10. COLLATION

	11. EXPLAIN
##　Notes

- Using single quotes in a SQL

	Use double quotation marks to enclose SQL statements.

- To tie an id

	If you are going to use join or something similar with id, don't set auto_increment.  
	This is to avoid the AUTO_INCREMENT from becoming an unintended value when tested once in the SQL environment before writing the SQL statement in PHP.

- Case classification by number of records

	Use **fetchAll()** when multiple records are likely to be retrieved, and **fetch()** when only one record can be retrieved.
## SQL Client

This is used to manipulate the database.  
This time, we will use DBeaver, a universal database tool.  
<https://dbeaver.io/>  

## Dbeaver

- Installation for Mac with Brew

	```sh
	brew install --cask dbeaver-community
	```

- Usage

	1. Open Dbeaver, press the icon in the upper left corner, and select the DB you want to manipulate.

	2. Configure connection settings

		1. In the Server tab, enter "localhost" in the Server Host section and any port number you set in the Port section (3306 by default).

		2. Anthentication tab, enter "root" in the Username section and password you set in the Password section.

		3. Press Test Connection, and if you get "Connected", you have succeeded. (The first time you do this, you will be prompted to install the driver, which you will do.

	3. Double-click the server host name that you just set in the left space.

	4. If you see a green mark, the connection is successful. If you see a red mark, please right-click and click "Edit Connection", and redo the settings.

	5. With the server host name selected, click "SQL" in the tab column above.

	6. An empty SQL script will open, and you write SQL statements in it.

	7. Always add a semicolon at the end of the SQL statement, and if you want to execute the line by itself, place the cursor on the line and press ```control + enter```.

	8. If you want to execute multiple lines of SQL, enclose the range you want to execute with the cursor and press ```option + x```.

	9. Right-click on the server host name and press Refresh to apply the settings.

## IDEF1X

IDEF1X stands for Integration DEFinition for information modeling, and is a data modeling language for the development of semantic data models.  
<https://en.wikipedia.org/wiki/IDEF1X>  
It represents relations as "●", and can be more detailed than IE notation.  

| mark | means |
| :---: | :---: |
| straight line | 1 |
| ● | >= 0 |
| ●P | >= 1 |
| ●Z | 0 or 1 |
| ●N | A specified number |
| ●N-M | Specify a range of numbers |
| ◇ | 0 or 1<br>Use only in non-dependent relations |

## non-dependent relations

It is a state where the existence of a child table does not depend on the parent table.  
To be more specific, the primary key of the parent table is not included in the primary key of the child table.

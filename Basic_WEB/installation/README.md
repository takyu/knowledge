# Installation

This section describes how to install and configure Apache, PHP, and MySQL for Mac with brew.

1. Configure the default apache not to be used, and not to be used in the future

	- Check apache auto-start settings.
	
		```sh
		launchctl list | grep http
		```

	In the console results, ```[PID] 0 org.apache.httpd``` is the default appach.

	- Deactivate the automatic startup.

		```sh
		# Stop apache from starting automatically
		launchctl stop /System/Library/LaunchDaemons/org.apache.httpd.plist

		# Disable automatic startup of apache
		launchctl unload -w /System/Library/LaunchDaemons/org.apache.httpd.plist
		```

2. Install with brew

	```sh
	# apache
	brew install httpd

	# php
	brew install php

	# mysql
	brew install mysql
	```

3. Change the settings in httpd.conf (the configuration file for apache)

	- Find the location of httpd.conf

		```sh
		httpd -V | grep SERVER_CONFIG_FILE
		```

	In the console results, As a result, we found out that the httpd.conf file is located in ```"/usr/local/etc/httpd/httpd.conf"```.

	- Add the settings to httpd.conf

		```conf
		#
		# Specify any port number after Listen (ex.50000)
		#
		Listen 50000

		#
		# Change the DocumentRoot
		#
		DocumentRoot /Users/[User name]/[location of contents]

		#
		# Change inside <Directory> tags
		#
		<Directory /Users/[User name]/[location of contents]>

		#
		# If you want to use a .htaccess file to rewrite accessed URLs
		# according to specified rules, make the following settings.
		#
		# AllowOverride controls what directives may be placed in .htaccess files.
		# It can be "All", "None", or any combination of the keywords:
		#   AllowOverride FileInfo AuthConfig Limit
		#
		AllowOverride All
		LoadModule rewrite_module lib/httpd/modules/mod_rewrite.so

		#
		# change the User and group
		#
		User [User name]
		group staff

		#
		# Change the Servername
		#
		ServerName localhost

		#
		# Support for garbled Japanese characters
		#
		IndexOptions Charset=UTF-8
		
		#
		# Change the default character encoding of HTML and TEXT to UTF-8
		#
		AddDefaultCharset UTF-8
		```

4. Configure the settings to apply to php (stable 8.0.11)

	- In brew, check what changes to make to httpd.conf

		```sh
		brew info php
		```

	In the console results,

		```
		php: stable 8.1.2 (bottled), HEAD
		General-purpose scripting language
		https://www.php.net/
		/usr/local/Cellar/php/8.1.2 (514 files, 80.4MB) *
		Poured from bottle on 2022-01-22 at 19:22:41
		From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/php.rb
		License: PHP-3.01
		==> Dependencies
		Build: httpd ✔, pkg-config ✔
		Required: apr ✔, apr-util ✔, argon2 ✔, aspell ✔, autoconf ✔, curl ✔, freetds ✔, gd ✔, gettext ✔, gmp ✔, icu4c ✔, krb5 ✔, libpq ✔, libsodium ✔, libzip ✔, oniguruma ✔, openldap ✔, openssl@1.1 ✔, pcre2 ✔, sqlite ✔, tidy-html5 ✔, unixodbc ✔
		==> Options
		--HEAD
			Install HEAD version
		==> Caveats
		To enable PHP in Apache add the following to httpd.conf and restart Apache:
			LoadModule php_module /usr/local/opt/php/lib/httpd/modules/libphp.so

			<FilesMatch \.php$>
				SetHandler application/x-httpd-php
			</FilesMatch>

		Finally, check DirectoryIndex includes index.php
			DirectoryIndex index.php index.html

		The php.ini and php-fpm.ini file can be found in:
			/usr/local/etc/php/8.1/

		To restart php after an upgrade:
		brew services restart php
		Or, if you don't want/need a background service you can just run:
		/usr/local/opt/php/sbin/php-fpm --nodaemonize
		==> Analytics
		install: 111,158 (30 days), 320,583 (90 days), 805,964 (365 days)
		install-on-request: 89,725 (30 days), 256,382 (90 days), 727,367 (365 days)
		build-error: 57 (30 days)
		```

	hence, add the above changes to the httpd.conf file.

	- Add the settings to httpd.conf

		```conf
		#
		# Load Module PHP
		#
		LoadModule php_module /usr/local/opt/php/lib/httpd/modules/libphp.so

		#
		# Enable php in apatch.
		# As described in Apache's SetHandler and PHP manuals,
		# the following configuration
		# is recommended to enable PHP in Apache.
		#
		# For MIME and handler assignment, always use SetHandler 
		# instead of AddType and AddHandler.
		#
		<FilesMatch \.php$>
			SetHandler application/x-httpd-php
		</FilesMatch>

		#
		# DirectoryIndex: sets the file that Apache will serve if a directory
		# is requested.
		#
		<IfModule dir_module>
			DirectoryIndex index.php index.html
		</IfModule>
		```

5. Change the settings in php.ini file

	- Check the location of the php.ini file.

		```sh
		php -i | grep php.ini
		```

	In the console results, As a result, we found out that the php.ini file is located in ```"/usr/local/etc/php/8.1/php.ini"```.

	- change the settings to php.ini

		```ini
		;
		; Change default charset to UTF-8 
		;
		default_charset = UTF-8

		;
		; Set time zone to Tokyo
		;
		date.timezone = Asia/Tokyo

		;
		; Set Japanese language
		;
		mbstring.language = Japanese

		;
		; mbstring.internal_encoding is deperecated,
		; so you should comment out or erase line.
		;
		;mbstring.internal_encoding = UTF-8
		```

6. Start apache, php, and mysql with brew.

	```sh
	# apache
	brew services start httpd

	# php
	brew services start php

	# mysql
	brew services start mysql
	```

7. Install Xdebug

	Xdebug is an extension for PHP, and provides a range of features to improve the PHP development experience.  
	<https://xdebug.org/>  
	In this section, show you how to install xdebug3 on a php8 system with homebrew.  

	- Install Xdebug with pecl

		```sh
		pecl install xdebug
		```

	On Apple M1 hardware, you might instead need to use

		```sh
		arch -x86_64 sudo pecl install xdebug
		```

	In the console results, copy the full path of the "xdebug.so" file, as the following console will be displayed at the end.

		```
		Build process completed successfully
		Installing '/usr/local/Cellar/php/8.1.2/pecl/20210902/xdebug.so'
		install ok: channel://pecl.php.net/xdebug-3.1.2
		Extension xdebug enabled in php.ini
		```

	If you get an error and cannot install, please refer to this [site (stackoverflow)](https://stackoverflow.com/questions/65834853/error-to-install-xdebug-on-mac-os-with-php-8).

	- Add the settings in php.ini file

		```ini
		[xdebug]
		;
		; Write the full path to xdebug.so
		; 
		zend_extension="/usr/local/Cellar/php/8.1.2/pecl/20210902/xdebug.so"

		;
		; Add Xdebug options
		; For more information, visit the following link
		; xdebug.mode : https://xdebug.org/docs/all_settings#mode
		; xdebug.start_with_request : https://xdebug.org/docs/all_settings#start_with_request
		;
		xdebug.mode=debug,develop,trace
		xdebug.start_with_request=yes
		```

	- Enable debug settings for VSCode

		1. Click on the debug panel (the panel with the triangle and the bug on the left side).

		2. Click "create a launch json File" in the left column that comes up, and select PHP.

		3. Comment out everything from the comma down in the json file as it is not needed.

		4. "port" should be checked if it is the same as {xdebug.client_port} in phpinfo, and corrected if there is a difference.

	If debugging does not work, add the property "stopOnEntry: true" to the json file.

	- Restarting apache

		```sh
		brew services restart httpd
		```

8. Set up the minimum security settings for mysql

	```sh
	mysql_secure_installaiton
	```

	In the console results, work through the settings in that.

		```
		Securing the MySQL server deployment.

		Connecting to MySQL using a blank password.

		VALIDATE PASSWORD COMPONENT can be used to test passwords
		and improve security. It checks the strength of password
		and allows the users to set only those passwords which are
		secure enough. Would you like to setup VALIDATE PASSWORD component?

		Press y|Y for Yes, any other key for No: y

		There are three levels of password validation policy:

		LOW    Length >= 8
		MEDIUM Length >= 8, numeric, mixed case, and special characters
		STRONG Length >= 8, numeric, mixed case, special characters and dictionary file

		Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 2

		Please set the password for root here.

		New password:

		Re-enter new password:

		Estimated strength of the password: 100
		Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
		By default, a MySQL installation has an anonymous user,
		allowing anyone to log into MySQL without having to have
		a user account created for them. This is intended only for
		testing, and to make the installation go a bit smoother.
		You should remove them before moving into a production
		environment.

		Remove anonymous users? (Press y|Y for Yes, any other key for No) : y 
		Success.


		Normally, root should only be allowed to connect from
		'localhost'. This ensures that someone cannot guess at
		the root password from the network.

		Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
		Success.

		By default, MySQL comes with a database named 'test' that
		anyone can access. This is also intended only for testing,
		and should be removed before moving into a production
		environment.


		Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
		- Dropping test database...
		Success.

		- Removing privileges on test database...
		Success.

		Reloading the privilege tables will ensure that all changes
		made so far will take effect immediately.

		Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
		Success.

		All done!
		```

9. Configure mysql port number

	- Login to mysql and check the port number

		```sh
		mysql -u root -p
		```

		In the console results,

		```sh
		Enter password:
		```

		If you enter the correct password, the following screen will appear and you will be successfully logged in.

		```
		Welcome to the MySQL monitor.  Commands end with ; or \g.
		Your MySQL connection id is 9
		Server version: 8.0.27 Homebrew

		Copyright (c) 2000, 2022, Oracle and/or its affiliates.

		Oracle is a registered trademark of Oracle Corporation and/or its
		affiliates. Other names may be trademarks of their respective
		owners.

		Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

		mysql>
		```

		Enter the command at the end of the arrow at the bottom.  
		Enter the following command to check the port number.

		```sql
		show variables like 'port';
		```

		The default port number of mysql is 3306, so the following console results will be returned.

		```
		+---------------+-------+
		| Variable_name | Value |
		+---------------+-------+
		| port          | 3306  |
		+---------------+-------+
		1 row in set (0.03 sec)
		```

	- Find the mysql configuration file "my.cnf"

		```sh
		mysql --help | grep my.cnf
		```

		In the console results,

		```
		order of preference, my.cnf, $MYSQL_TCP_PORT,
		/etc/my.cnf /etc/mysql/my.cnf /usr/local/etc/my.cnf ~/.my.cnf
		```

		The files above will be loaded in order from left to right, so follow the path to find the file that is being loaded.

	- Add an arbitrary port number as follows.

	```conf
	# The TCP/IP Port the MySQL Server will listen on
	port=55000
	```

	After adding the above, the my.cnf file in its default state will look like this.

	```conf
	 # Default Homebrew MySQL server config
	[mysqld]
	# Only allow connections from localhost
	bind-address = 127.0.0.1
	mysqlx-bind-address = 127.0.0.1
	# The TCP/IP Port the MySQL Server will listen on
	port=8889
	```

	Restart mysql (```brew services restart mysql```), login to mysql and check the port number, if it is the port number you set, you have succeeded.

10. (Optional) Configure to omit user name and password

	- Write the following description in my.cnf file

	```conf
	# Setting to omit user name and password
	[client]
	# Enter your user name and password in the "client" section
	user = root
	# Password you set
	password = 
	```

	- To start, simply type ```mysql``` in the terminal.

	```sh
	mysql
	```

	In the console results,

	```
	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 9
	Server version: 8.0.27 Homebrew

	Copyright (c) 2000, 2022, Oracle and/or its affiliates.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

	mysql>
	```
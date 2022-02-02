## query parameter

By using QUERY_STRING, you can incorporate query parameters into the address and write settings to replace based on them.

```conf
RewriteEngine On

RewriteBase /Basic_apache/11/rewrite-test/

# By adding &? at the end to support multiple queries.
# (if there are none, they will match)
RewriteCond %{QUERY_STRING} p=(.+)&?

# By adding a ? to remove the query part once it has been matched.
RewriteRule rewrite-test/sub1 sub1/%1?
```

## file attribute

You can perform various file attribute tests as follows.

- -d

	Is directory.  
	Treats the TestString as a pathname and tests whether or not it exists, and is a directory.

- -f

	Is regular file.  
	Treats the TestString as a pathname and tests whether or not it exists, and is a regular file.

- -F

	Is existing file, via subrequest.  
	Checks whether or not TestString is a valid file, accessible via all the server's currently-configured access controls for that path.

- -h

	Is symbolic link, bash convention.  
	See -l.

- -l

	Is symbolic link.  
	Treats the TestString as a pathname and tests whether or not it exists, and is a symbolic link.  
	May also use the bash convention of -L or -h if there's a possibility of confusion such as when using the -lt or -le tests.

- -L

	Is symbolic link, bash convention.  
	See -l.

- -s

	Is regular file, with size.  
	Treats the TestString as a pathname and tests whether or not it exists, and is a regular file with size greater than zero.

- -U

	Is existing URL, via subrequest.  
	Checks whether or not TestString is a valid URL, accessible via all the server's currently-configured access controls for that path.  
	This flag only returns information about things like access control, authentication, and authorization.  
	This flag does not return information about the status code the configured handler (static file, CGI, proxy, etc.) would have returned.

- -x

	Has executable permissions.  
	Treats the TestString as a pathname and tests whether or not it exists, and has executable permissions.  
	These permissions are determined according to the underlying OS.

```conf
# It is common to connect the bottom two with the and condition.
# In that case, connect them and write them below.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule rewrite-test/sub2/(.+) sub1/$1
```

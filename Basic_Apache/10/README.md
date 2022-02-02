## RewriteCond Directive

The RewriteCond directive Defines a condition under which rewriting will take place except for a path.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html#rewritecond>  
One or more RewriteCond can precede a RewriteRule directive.  
Hence, the RewriteRule under RewriteCond will be applied only if the RewriteCond before the RewriteRule matches.  

- Syntax: RewriteCond TestString CondPattern \[flags]

- Context: server config, virtual host, directory, .htaccess

- Override: FileInfo

- Status: Extension

- Module: mod_rewrite

The following rule is then only used if both the current state of the URI matches its pattern, and if these conditions are met.  
TestString is a string that can contain the following expanded constructs in addition to plain text.  

- ***RewriteRule*** backreferences

	These are backreferences of the form $N (0 <= N <= 9).  
	$1 to $9 provide access to the grouped parts (in parentheses) of the pattern, from the RewriteRule which is subject to the current set of RewriteCond conditions.  
	$0 provides access to the whole string matched by that pattern.

- ***RewriteCond*** backreferences

	These are backreferences of the form %N (0 <= N <= 9).  
	%1 to %9 provide access to the grouped parts (again, in parentheses) of the pattern, from the last matched RewriteCond in the current set of conditions.  
	%0 provides access to the whole string matched by that pattern.

- RewriteMap expansions

	These are expansions of the form ${mapname:key|default}.  
	See the documentation for [RewriteMap](https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html#mapfunc) for more details.

- Server-Variables

	These are variables of the form %{ NAME_OF_VARIABLE } where NAME_OF_VARIABLE can be a string taken from the following list.


	- HTTP headers

		```
		HTTP_ACCEPT
		HTTP_COOKIE
		HTTP_FORWARDED
		HTTP_HOST
		HTTP_PROXY_CONNECTION
		HTTP_REFERER
		HTTP_USER_AGENT
		```

	- connection & request

		```
		AUTH_TYPE
		CONN_REMOTE_ADDR
		CONTEXT_PREFIX
		CONTEXT_DOCUMENT_ROOT
		IPV6
		PATH_INFO
		QUERY_STRING
		REMOTE_ADDR
		REMOTE_HOST
		REMOTE_IDENT
		REMOTE_PORT
		REMOTE_USER
		REQUEST_METHOD
		SCRIPT_FILENAME
		```

	- server internals

		```
		DOCUMENT_ROOT
		SCRIPT_GROUP
		SCRIPT_USER
		SERVER_ADDR
		SERVER_ADMIN
		SERVER_NAME
		SERVER_PORT
		SERVER_PROTOCOL
		SERVER_SOFTWARE
		```

	- date and time

		```
		TIME_YEAR
		TIME_MON
		TIME_DAY
		TIME_HOUR
		TIME_MIN
		TIME_SEC
		TIME_WDAY
		TIME
		```

	- specials

		```
		API_VERSION
		CONN_REMOTE_ADDR
		HTTPS
		IS_SUBREQ
		REMOTE_ADDR
		REQUEST_FILENAME
		REQUEST_SCHEME
		REQUEST_URI
		THE_REQUEST
		```
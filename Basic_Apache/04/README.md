## REDIRECT Directive

The Redirect directive maps an old URL into a new one by asking the client to refetch the resource at the new location.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_alias.html#redirect>  
The old URL-path is a case-sensitive (%-decoded) path beginning with a slash.  
**A relative path is not allowed.**

```conf
# Redirect to a URL on a different host
Redirect "/service" "http://foo2.example.com/service"

# Redirect to a URL on the same host
Redirect "/one" "/two"
```

- Syntax: Redirect \[status] \[URL-path] URL

- Context: server config, virtual host, directory, .htaccess

- Override: FileInfo

- Status: Base

- Module: mod_alias

If no status argument is given, the redirect will be "temporary" (HTTP status **302**).  
This indicates to the client that the resource has moved temporarily.  
The status argument can be used to return other HTTP status codes is as follows.

- permanent

	Returns a permanent redirect status (301) indicating that the resource has moved permanently.

- temp

	Returns a temporary redirect status (302). This is the default.

- seeother

	Returns a "See Other" status (303) indicating that the resource has been replaced.

- gone

	Returns a "Gone" status (410) indicating that the resource has been permanently removed.  
	When this status is used the URL argument should be omitted.

Also, you can check the status code in the Network tab of the chrome inspection.  
In other words, as a behavior on the browser side, if the response header of Header is in the 300 range, it will be redirected to the URL specified in Location.  
The path of the redirection source can exist or not.  
Since the redirect destination is determined by forward matching, you may end up in a redirect loop.  
This can be prevented by **rewrite** as described below.

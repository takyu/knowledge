## ExpiresActive Directive

This directive enables or disables the generation of the Expires and Cache-Control headers for the document realm in question.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_expires.html#expiresactive>  

- Syntax: ExpiresActive On|Off

- Default: ExpiresActive Off

- Context: server config, virtual host, directory, .htaccess

- Override: Indexes

- Status: Extension

- Module: mod_expires

To use caching using Last modified, turn on ExpiresActive.

## \<FilesMatch> Directive

The \<FilesMatch> directive limits the scope of the enclosed directives by filename, just as the \<Files> directive does.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#filesmatch>

- Syntax: <FilesMatch regex> ... </FilesMatch>

- Context: server config, virtual host, directory, .htaccess

- Override: All

- Status: Core

- Module: core

However, it accepts a regular expression.

## ExpiresDefault Directive

This directive sets the default algorithm for calculating the expiration time for all documents in the affected realm.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_expires.html#expiresdefault>  

- Syntax: ExpiresDefault \<code>seconds

- Context: server config, virtual host, directory, .htaccess

- Override: Indexes

- Status: Extension

- Module: mod_expires

It can be overridden on a type-by-type basis by the ExpiresByType directive.  
Also, you can also specify the expiration time calculation using an **alternate Interval Syntax**.

## ExpiresByType Directive

This directive defines the value of the Expires header and the max-age directive of the Cache-Control header generated for documents of the specified type (for example, text/html).  
<https://httpd.apache.org/docs/2.4/en/mod/mod_expires.html#expiresbytype>

- Syntax: ExpiresByType MIME-type \<code>seconds

- Context: server config, virtual host, directory, .htaccess

- Override: Indexes

- Status: Extension

- Module: mod_expires

The base time is either the last modification time of the file, or the time of the client's access to the document.  
Which should be used is specified by the \<code> field.  
M means that the file's last modification time should be used as the base time. 
A means the client's access time should be used.  
Note that this directive only has effect if ExpiresActive On has been specified.  
It overrides, for the specified MIME type only, any expiration date set by the ExpiresDefault directive.  
Also, you can also specify the expiration time calculation using an **alternate Interval Syntax**.

## alternate Interval Syntax

The ExpiresDefault and ExpiresByType directives can also be defined in a more readable syntax of the form.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_expires.html#AltSyn>

```conf
ExpiresDefault "base[plus num type] [num type] ..."
ExpiresByType type/encoding "base[plus num type] [num type] ..."
```

- where base is one of

	- access

	- now (equivalent to 'access')

	- modification

- and type is one of

	- years

	- months

	- weeks

	- days

	- hours

	- minutes

	- seconds

	The plus keyword is optional.

### How Expires is handled

You can check Expires in the Headers part of the Network tab in Chrome.  
In the Response Headers tab on the server-side, the Cache-Control part is **max-age=seconds** and the **Expires** part is the expiration date.
In addition, the expiration time will be cached for the second and subsequent communications.  
In the Request Headers tab on the client-side, the Cache-Control part is **max-age=seconds** and the **If-Modified-Since** part is the expiration date.
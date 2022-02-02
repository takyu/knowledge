## Directory Directive

\<Directory> and \</Directory> are used to enclose a group of directives that will apply only to the named directory,  
sub-directories of that directory, and the files within the respective directories.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#directory>  
Any directive that is allowed in a directory context may be used.  
Also, the box of "<></>" such as "\<directory></directory>" is called a section or section container.

- Syntax: \<Directory directory-path> ... \</Directory>

- Context: server config, virtual host

- Status: Core

- Module: core

Also, regular expressions can also be used, with the addition of the ~ character.

```conf
<Directory "directory-path">
	DirectoryIndex
</Directory>

<Directory ~ "regular expressions">

</Directory>
```

## DirectoryIndex Directive

The DirectoryIndex directive sets the list of resources to look for, when the client requests an index of the directory by specifying a / at the end of the directory name.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_dir.html#directoryindex>  
it is usually the name of a file in the directory.  
Several URLs may be given, in which case the server will return the first one that it finds.  
If none of the resources exist and the Indexes option is set, the server will generate its own listing of the directory.  
Note that the documents do not need to be relative to the directory;

- Syntax: DirectoryIndex disabled | local-url \[local-url] ...

- Default: DirectoryIndex index.html

- Context: server config, virtual host, directory, .htaccess

- Override: Indexes

- Status: Base

- Module: mod_dir

```conf
#
# Set index.html as an index page, then add index.php to that list as well.
#
<Directory "/foo">
    DirectoryIndex index.html
    DirectoryIndex index.php
</Directory>

#
# This is identical to example A, except it's done with a single directive.
#
<Directory "/foo">
    DirectoryIndex index.html index.php
</Directory>

#
# To replace the list, you must explicitly reset it first.
# In this example, only index.php will remain as an index resource.
#
<Directory "/foo">
    DirectoryIndex index.html
    DirectoryIndex disabled
    DirectoryIndex index.php
</Directory>
```

## Options Directive

The Options directive controls which server features are available in a particular directory.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#options>  
Option can be set to None, in which case none of the extra features are enabled.  
Any options preceded by a + are added to the options currently in force, and any options preceded by a - are removed from the options currently in force.  
Mixing Options with a + or - with those without is not valid syntax and will be rejected during server startup by the syntax check with an abort.

- Syntax: Options \[+|-]option \[[+|-]option] ...

- Default: Options FollowSymlinks

- Context: server config, virtual host, directory, .htaccess

- Override: Options

- Status: Core

- Module: core

The options are listed below.  
The most commonly used options are shown in bold. 

- **All**

	All options except for MultiViews.  
	This is the default.

- ExecCGI

	Execution of CGI scripts using [mod_cgi](https://httpd.apache.org/docs/2.4/en/mod/mod_cgi.html) is permitted.

- **FollowSymLinks**

	The server will follow symbolic links in this directory.  
	This is the **default setting**.  
	Even though the server follows the symlink it does not change the pathname used to match against <Directory> sections.  
	The FollowSymLinks and SymLinksIfOwnerMatch Options work only in <Directory> sections or .htaccess files.

- Includes

	Server-side includes provided by mod_include are permitted.

- IncludesNOEXEC

	Server-side includes are permitted, but the #exec cmd and #exec cgi are disabled. It is still possible to #include virtual CGI scripts from [ScriptAliased](https://httpd.apache.org/docs/2.4/en/mod/mod_alias.html#scriptalias) directories.

- **Indexes**

	If a URL which maps to a directory is requested and there is no DirectoryIndex (for example, index.html) in that directory, then mod_autoindex will return a formatted listing of the directory.

- MultiViews

	Content negotiated "MultiViews" are allowed using mod_negotiation.  
	This option gets ignored if set anywhere other than \<Directory>, as mod_negotiation needs real resources to compare against and evaluate from.

- SymLinksIfOwnerMatch

	The server will only follow symbolic links for which the target file or directory is owned by the same user id as the link.  
	The FollowSymLinks and SymLinksIfOwnerMatch Options work only in <Directory> sections or .htaccess files.

## Require Directive

This directive tests whether an authenticated user is authorized according to a particular authorization provider and the specified restrictions.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_authz_core.html#require>

- Syntax: Require \[not] entity-name \[entity-name] ...

- Context:directory, .htaccess

- Override: AuthConfig

- Status: Base

- Module: mod_authz_core

[mod_authz_core](https://httpd.apache.org/docs/2.4/en/mod/mod_authz_core.html) provides the following generic authorization providers.

- Require all granted

	Access is allowed unconditionally.

- Require all denied

	Access is denied unconditionally.

- Require env env-var \[env-var] ...

	Access is allowed only if one of the given environment variables is set.

- Require method http-method \[http-method] ...

	Access is allowed only for the given HTTP methods.

- Require expr expression

	Access is allowed if expression evaluates to true.

- Require user userid \[userid] ...

	Only the named users can access the resource.
- Require group group-name \[group-name] ...

	Only users in the named groups can access the resource.

- Require valid-user

	All valid users can access the resource.

- Require ip 10 172.20 192.168.2

	Clients in the specified IP address ranges can access the resource.

- Require forward-dns dynamic.example.org

	A client the IP of which is resolved from the name dynamic.example.org will be granted access.


## Location Directive

The \<Location> directive limits the scope of the enclosed directives by URL.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#location>  
It is similar to the \<Directory> directive, and starts a subsection which is terminated with a \</Location> directive.  
<Location> sections are processed in the order they appear in the configuration file, after the <Directory> sections and .htaccess files are read, and after the <Files> sections.

- Syntax: <Location URL-path|URL> ... </Location>

- Context: server config, virtual host

- Status: Core

- Module: core

The enclosed directives will be applied to the request if the path component of the URL meets any of the following criteria.

- The specified location matches exactly the path component of the URL.

- The specified location, which ends in a forward slash, is a prefix of the path component of the URL (treated as a context root).

- The specified location, with the addition of a trailing slash, is a prefix of the path component of the URL (also treated as a context root).

See the [Location Direcive](https://httpd.apache.org/docs/2.4/en/mod/core.html#location) site for specific examples.  
The URL may use wildcards.  
In a wild-card string, ? matches any single character, and * matches any sequences of characters. Neither wildcard character matches a / in the URL-path.  
Also, regular expressions can be used, with the addition of the ~ character.  

### When to use \<Location> ??

The \<Location> directive should be used when applying directives to content **outside** the filesystem.  
For content that **resides** on the filesystem, use \<Directory> and \<Files>.

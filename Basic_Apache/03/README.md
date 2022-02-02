## .htaccess

.htaccess is a per-directory web server configuration file that can be used in environments where Apache is used.  
<https://httpd.apache.org/docs/2.4/en/howto/htaccess.html>  
There are a few caveats to using this.

- Add the "AllowOverride All" for each directory

- Basically, the use of .htaccess files should be avoided as much as possible.

	User authentication can also be configured in httpd.conf (the server's main configuration file).  
	this way is actually considered a better way to configure it.

- It is valid in the directory and subdirectories where it is placed.

- The settings specified in the upper level will be overridden by the settings in the lower level.

This file is loaded with every server request, so there is no need to restart apache.

## AllowOverride Directive

When the server finds an .htaccess file (as specified by AccessFileName), it needs to know which directives declared in that file can override earlier configuration directives.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#allowoverride>  
Only available in <Directory> sections.  
AllowOverride is valid only in <Directory> sections specified without regular expressions, not in <Location>, <DirectoryMatch> or <Files> sections.

- Syntax: AllowOverride All|None|directive-type \[directive-type] ...

- Default: AllowOverride None (2.3.9 and later), AllowOverride All (2.3.8 and earlier)

- Context: directory

- Status: Core

- Module: core

When this directive is set to None and AllowOverrideList is set to None, .htaccess files are completely ignored.  
In this case, the server will not even attempt to read .htaccess files in the filesystem.  
When this directive is set to All, then any directive which has the .htaccess Context is allowed in .htaccess files.  
You can see detail of the directive-type is [this site](https://httpd.apache.org/docs/2.4/en/mod/core.html#allowoverride).
# Apache

The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP server for modern operating systems including UNIX and Windows.  
<https://httpd.apache.org/>  
Apache is web server software used around the world.  
Functions can be added or removed on a module-by-module basis.  
For example, **mod_auth_basic** can be used for basic authentication, **mod_dir** can be set for each directory, and **mod_rewrite** can be used to rewrite URLs.  

## Detail

1. Alias Directive

2. Directory, Location Directive

3. .htaccess file

4. REDIRECT

5. Difference between 301 and 302

6. LOG Directivies

7. RewriteRule Directive

8. Confirm RewriteLog and check version

9. Back-references of RewriteRule Directive

10. RewriteCond Directive

11. RewriteCond Directive (query parameter and file attribute)

12. Rewrite practice

13. Webp

14. Subdomain

15. gzip

16. Caching in the browser

17. FileETag Directive

18. Expires Directive

19. Practical use of cache

20. HTTP/1.1 and KeepAlive

## How to configure apache

- Put the settings in the **httpd.conf** or **.htaccess file**.

- Basically, it is not case-sensitive.

- Set the scope to apply by section.

- The configuration values are changed by directives.

## Words

- ***Directive***

	A directive is a command to the Apache.  
	When Apache starts, it reads the configuration file (httpd.conf) and operates according to the directives described in it.  
	The [directive quick reference](https://httpd.apache.org/docs/2.4/en/mod/quickreference.html) shows the usage, default, status, and context of each Apache configuration directive.

- ***Context***

	This indicates where in the server's configuration files the directive is legal.  
	It's a comma-separated list of one or more of the following values.  

	- server config

		This means that the directive may be used in the server configuration files (for example, httpd.conf, srm.conf, access.conf etc.),  
		but not within any \<VirtualHost> or <Directory> containers.  
		It is not allowed in .htaccess files at all.

	- virtual host

		This context means that the directive may appear inside \<VirtualHost> containers in the server configuration files.  
		[Virtualhost](http://httpd.apache.org/docs/current/en/vhosts/examples.html) allows you to manage multiple domains on a single server.

	- directory

		A directive marked as being valid in this context may be used inside \<Directory>, \<Location>, \<Files>, \<If>, and \<Proxy> containers in the server configuration files,  
		subject to the restrictions outlined in Configuration Sections.

	- .htaccess

		If a directive is valid in this context, it means that it can appear inside per-directory .htaccess files.  
		It may not be processed, though depending upon the overrides currently active.

- ***Override***

	This directive attribute indicates which configuration override must be active in order for the directive to be processed when it appears in a .htaccess file.  
	If the directive's context doesn't permit it to appear in .htaccess files, then no context will be listed.  
	Overrides are activated by the AllowOverride directive, and apply to a particular scope (such as a directory) and all descendants, unless further modified by other AllowOverride directives at lower levels.  
	The documentation for that directive also lists the possible override names available.

- ***Status***

	This indicates how tightly bound into the Apache Web server the directive is.
	In other words, you may need to recompile the server with an enhanced set of modules in order to gain access to the directive and its functionality.  
	Possible values for this attribute are as follows.

	- Core

		If a directive is listed as having "Core" status, that means it is part of the innermost portions of the Apache Web server, and is always available.

	- MPM

		A directive labeled as having "MPM" status is provided by a Multi-Processing Module.  
		This type of directive will be available if and only if you are using one of the MPMs listed on the Module line of the directive definition.

	- Base

		A directive labeled as having "Base" status is supported by one of the standard Apache modules which is compiled into the server by default,  
		and is therefore normally available unless you've taken steps to remove the module from your configuration.

	- Extension

		A directive with "Extension" status is provided by one of the modules included with the Apache server kit, but the module isn't normally compiled into the server.  
		To enable the directive and its functionality, you will need to change the server build configuration files and re-compile Apache.
		
	- Experimental

		"Experimental" status indicates that the directive is available as part of the Apache kit, but you're on your own if you try to use it.  
		The directive is being documented for completeness, and is not necessarily supported.  
		The module which provides the directive may or may not be compiled in by default,  
		check the top of the page which describes the directive and its module to see if it remarks on the availability.

- ***Module***

	This quite simply lists the name of the source module which defines the directive.

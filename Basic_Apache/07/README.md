## RewriteRule Directive

The RewriteRule directive is the real rewriting workhorse.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html#rewriterule>  
The directive can occur more than once, with each instance defining a single rewrite rule.

- Syntax:	RewriteRule Pattern Substitution \[flags]

- Context: server config, virtual host, directory, .htaccess

- Override: FileInfo

- Status: Extension

- Module: mod_rewrite

The order in which these rules are defined is important - this is the order in which they will be applied at run-time.  
After running it, the URL field is not set to the path of the redirection destination.  
This is because we are not requesting the client to redirect, but rather having apache perform a pseudo-redirect process.  
This kind of substitution inside apache and then redirection is called internal redirection.  
the status code will be 200, because there is no redirection on the client side.  
However, if you add the optional tag **R** (see below), you will be able to redirect between clients as well.

- Pattern

	Specify the path of the redirection source.  
	You need to specify a path **relative** to the config file.  
	You can also use a regular expression.  

- Substitution

	The Substitution of a rewrite rule is the string that replaces the original URL-path that was matched by Pattern.  
	Substitution can be set in the following three patterns.  

	- file-system path

		Designates the location on the file-system of the resource to be delivered to the client.  
		This means the **absolute** path to a directory or file on your PC.  
		The context in which this path specification can be used is in the server configuration file (httpd.conf) or in virtual hosts, so **it cannot be used in .htaccess files**.

	- URL-path

		A DocumentRoot-relative path to the resource to be served.  
		Specification by **absolute** path under the domain.  
		(Recognized as URL-path when the first path does not exist in the root directory.)

	- Absolute URL

		If an absolute URL is specified, mod_rewrite checks to see whether the hostname matches the current host.  
		If it does, the scheme and hostname are stripped out and the resulting path is treated as a URL-path.  
		Otherwise, an external redirect is performed for the given URL.  To force an external redirect back to the current host, see the \[R] flag below.

	- \- (dash)

		A dash indicates that no substitution should be performed (the existing path is passed through untouched).  
		This is used when a flag (see below) needs to be applied without changing the path.  

- Flags

	You can set special actions to be performed by appending \[flags] as the third argument to the RewriteRule directive.  
	Flags is a comma-separated list, surround by square brackets, of any of the flags in the following table.  
	More details, and examples, for each flag, are available in the [Rewrite Flags document](https://httpd.apache.org/docs/2.4/en/rewrite/flags.html).  
	Here are the three most commonly used flags.

	- \[R=code]

		Use of the \[R] flag causes a HTTP redirect to be issued to the browser.  
		Any valid HTTP response status code may be specified, using the syntax \[R=305], with a 302 status code being used by default if none is specified.

	- \[L]

		The \[L] flag causes mod_rewrite to stop processing the rule set. In most contexts, this means that if the rule matches, no further rules will be processed.

	- \[F]

		Using the \[F] flag causes the server to return a 403 Forbidden status code to the client. 

## RewriteBase Directive

The RewriteBase directive specifies the URL prefix to be used for per-directory (htaccess) RewriteRule directives that substitute a relative path.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html#rewritebase>  

- Syntax: RewriteBase URL-path

- Default: None

- Context: directory, .htaccess

- Override: FileInfo

- Status: Extension

- Module: mod_rewrite

```conf
RewriteBase /bar/foo/hoge/

# RewriteRule bar/foo/hoge/sub1/ /bar/foo/hoge/sub2/
RewriteRule bar/foo/hoge/sub1/ sub2/
```
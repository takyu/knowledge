## RewriteLog

If the apache version is 2.4, the output will be in error.log, and if the apache version is 2.2, you must set it in which will be rewrite.log.

## Ifversion

The \<IfVersion> section encloses configuration directives which are executed only if the httpd version matches the desired criteria.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_version.html#ifversion>  

- Syntax: \<IfVersion \[\[!]operator] version> ... \</IfVersion>

- Context: server config, virtual host, directory, .htaccess

- Override: All

- Status: Extension

- Module: mod_version

```conf
<IfVersion >= 2.3>
    # this happens only in versions greater or
    # equal 2.3.0.
</IfVersion>
```

Besides the numerical comparison it is possible to match a regular expression against the httpd version.  
There are two ways to write it as follows.  

| operator | description |
| :---: | :---: |
| = or == | version has the form /regex/ |
| ~ | version has the form regex |

```conf
<IfVersion = /^2.4.[01234]$/>
	# e.g. workaround for buggy versions
</IfVersion>
```

In order to reverse the meaning, all operators can be preceded by an exclamation mark (!):

```conf
<IfVersion !~ ^2.4.[01234]$>
	# not for those versions
</IfVersion>
```

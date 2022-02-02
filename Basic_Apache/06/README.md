## ErrorLog Directive

The ErrorLog directive sets the name of the file to which the server will log any errors it encounters.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#errorlog>
If the file-path is not absolute then it is assumed to be relative to the ServerRoot.

- Syntax: ErrorLog file-path|syslog[:[facility][:tag]]

- Default: ErrorLog logs/error_log (Unix) ErrorLog logs/error.log (Windows and OS/2)

- Context: server config, virtual host

- Status: Core

- Module: core


## LogLevel Directive

LogLevel adjusts the verbosity of the messages recorded in the error logs.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#loglevel>

- Syntax: LogLevel [module:]level [module:level] ...

- Default: LogLevel warn

- Context: server config, virtual host, directory

- Status: Core

- Module: core

The following levels are available, in order of decreasing significance.

| Level | Description |
| :---: | :---: |
| emerg | Emergencies - system is unusable. |
| alert | Action must be taken immediately. |
| crit | Critical Conditions. |
| error | Error conditions. |
| warn | Warning conditions. |
| notice | Normal but significant condition. |
| info | Informational. |
| debug | Debug-level messages |

## CustomLog Directive

The CustomLog directive is used to log requests to the server.  
A log format is specified, and the logging can optionally be made conditional on request characteristics using environment variables.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_log_config.html#customlog>

- Syntax:CustomLog file|pipe format|nickname [env=[!]environment-variable| expr=expression]

- Context: server config, virtual host

- Status: Base

- Module: mod_log_config

The first argument, which specifies the location to which the logs will be written, can take one of the following two types of values.

- file

	A filename, relative to the ServerRoot.

- pipe

	The pipe character "|", followed by the path to a program to receive the log information on its standard input.  
	See the notes on piped logs for more information.

The second argument specifies what will be written to the log file.  
It can specify either a nickname defined by a previous LogFormat directive,  or it can be an explicit format string as described in the log formats section.  
For example, the following two sets of directives have exactly the same effect.

```conf
# CustomLog with format nickname
LogFormat "%h %l %u %t \"%r\" %>s %b" common
CustomLog "logs/access_log" common

# CustomLog with explicit format string
CustomLog "logs/access_log" "%h %l %u %t \"%r\" %>s %b"
```

## LogFormat Directive

This directive specifies the format of the access log file.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_log_config.html#logformat>

- Syntax: LogFormat format|nickname \[nickname]

- Default: LogFormat "%h %l %u %t \"%r\" %>s %b"

- Context: server config, virtual host

- Status: Base

- Module: mod_log_config

The LogFormat directive can take one of two forms.  
In the first form, where only one argument is specified, this directive sets the log format which will be used by logs specified in subsequent TransferLog directives.  
The single argument can specify an explicit format as discussed in the [custom log formats](https://httpd.apache.org/docs/2.4/en/mod/mod_log_config.html#formats) section above.  
Alternatively, it can use a nickname to refer to a log format defined in a previous LogFormat directive as described below.  
The log format is specified in advance in the log_config_module of the httpd.conf file, and its nickname is **common**.  
The default configuration is as follows (Contents of httpd.conf).

```conf
<IfModule log_config_module>
	#
	# The following directives define some format nicknames for use with
	# a CustomLog directive (see below).
	#
	LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
	LogFormat "%h %l %u %t \"%r\" %>s %b" common

	<IfModule logio_module>
		# You need to enable mod_logio.c to use %I and %O
		LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\" %I %O" combinedio
	</IfModule>

	#
	# The location and format of the access logfile (Common Logfile Format).
	# If you do not define any access logfiles within a <VirtualHost>
	# container, they will be logged here.  Contrariwise, if you *do*
	# define per-<VirtualHost> access logfiles, transactions will be
	# logged therein and *not* in this file.
	#
	CustomLog "/usr/local/var/log/httpd/access_log" common

	#
	# If you prefer a logfile with access, agent, and referer information
	# (Combined Logfile Format) you can use the following directive.
	#
	#CustomLog "/usr/local/var/log/httpd/access_log" combined
</IfModule>
```

## Confirm Log

You can use the following command to monitor the log at all times.　　

- Windows (Powershell)

```sh
Get-Content [filepath] -Wait -Tail 20
```

- Unix (Linux, Mac)

```sh
tail -f [filepath]
```

For example, if you want to monitor the access log, you can do the following. (Unix)

```sh
tail -f /usr/local/var/log/httpd/access_log
```
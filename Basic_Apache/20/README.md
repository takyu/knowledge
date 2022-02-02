## KeepAlive Directive

The Keep-Alive extension to HTTP/1.0 and the persistent connection feature of HTTP/1.1 provide long-lived HTTP sessions which allow multiple requests to be sent over the same TCP connection.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#keepalive>  

- Syntax: KeepAlive On|Off

- Default: KeepAlive On

- Context: server config, virtual host

- Status: Core

- Module: core

In some cases this has been shown to result in an almost 50% speedup in latency times for HTML documents with many images.  
To enable Keep-Alive connections, set KeepAlive On.  
Also, this setting is not required for HTTP/2.

## MaxKeepAliveRequests Directive

The MaxKeepAliveRequests directive limits the number of requests allowed per connection when KeepAlive is on.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#maxkeepaliverequests>

- Syntax: MaxKeepAliveRequests number

- Default: MaxKeepAliveRequests 100

- Context: server config, virtual host

- Status: Core

- Module: core

If it is set to 0, unlimited requests will be allowed.  
We recommend that this setting be kept to a high value for maximum server performance.  
Also note that this is only a desired value on the server side, so it is not always possible for the browser to request that number.

## KeepAliveTimeout Directive

The number of seconds Apache httpd will wait for a subsequent request before closing the connection.  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#keepalivetimeout>

- Description: Amount of time the server will wait for subsequent requests on a persistent connection

- Syntax: KeepAliveTimeout num\[ms]

- Default: KeepAliveTimeout 5

- Context: server config, virtual host

- Status: Core

- Module: core

By adding a postfix of ms the timeout can be also set in milliseconds.  
Once a request has been received, the timeout value specified by the Timeout directive applies.  
Setting KeepAliveTimeout to a high value may cause performance problems in heavily loaded servers.  
The higher the timeout, the more server processes will be kept occupied waiting on connections with idle clients.

### Check the TCP connection

You can check in the Headers part of the Network tab in Chrome.  
In the ***connection*** part of both the Response Headers and Request Headers sections, **keep-alive** is written if KeepAlive is enabled, and **close** if KeepAlive is disabled.  
Also, you can check the TCP connections without KeepAlive and with KeepAlive using the command.

```sh
curl -v <First address> <Second address> .. <n-thorder address>
```

- In the case of two addresses

	- without KeepAlive

		When the first address has been sent and received, **Closing connection 0** is returned, and when the second address has been sent and received, **Closing connection 1** is returned.

	- with KeepAlive

		When the first address has been sent and received, **Connection #0 to host localhost left intact** is returned, and when the second address has been sent and received, **Connection #0 to host localhost left intact** is returned.
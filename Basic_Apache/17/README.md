## FileETag Directive

The FileETag directive configures the file attributes that are used to create the ETag (entity tag) response header field when the document is based on a static file.  
(The ETag value is used in cache management to save network bandwidth.)  
<https://httpd.apache.org/docs/2.4/en/mod/core.html#fileetag>  

- Syntax: FileETag component ...

- Default: FileETag MTime Size

- Context: server config, virtual host, directory, .htaccess

- Override: FileInfo

- Status: Core

- Module: Core

The FileETag directive allows you to choose which of these -- if any -- should be used.  
The recognized keywords are as follows.

- INode

	The file's i-node number will be included in the calculation.

- MTime

	The date and time the file was last modified will be included.

- Size

	The number of bytes in the file will be included.

- All

	All available fields will be used.  
	This is equivalent to:
	```conf
	FileETag INode MTime Size
	```

- Digest

	If a document is file-based, the ETag field will be calculated by taking the digest over the file.

- None

	If a document is file-based, no ETag field will be included in the response.

### How Etag is handled

You can check Etag in the Headers part of the Network tab in Chrome.  
The Etag which is specific key to contain the file information sent from the server is written in the **Etag** part of the Response Headers tab,  
and the Etag which is same key sent from the client (browser) side during the second and subsequent communication is written in the **If-None-Match** part of the Request Headers tab.
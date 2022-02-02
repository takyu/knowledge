## gzip

gzip is a file format and a software application used for file compression and decompression.  
<https://www.gnu.org/software/gzip/>  
This can be used to reduce the size of the response returned from apache to the client.  
Inspection in Chrome will show the amount of space after being compressed in size part in the "Network" tab.  
When verifying, set your browser to not use the browser cache, which is used when there are no changes to the browser (put a checkmark in Disable cache).  
In this case, make sure that Status is not set to 304 (status code when the browser cache is used).

## Hard Reflesh

It is Discarding and reloading the cache of image files, CSS files, and other files that are directly referenced from the web page being displayed.  
To use it, press ```command + shift + R```.

## AddOutputFilterByType Directive

This directive activates a particular output filter for a request depending on the response [media-type](https://httpd.apache.org/docs/2.4/en/glossary.html#media-type).  
<https://httpd.apache.org/docs/2.4/en/mod/mod_filter.html#addoutputfilterbytype>

- Syntax: AddOutputFilterByType filter\[;filter...] media-type \[media-type] ...

- Context: server config, virtual host, directory, .htaccess

- Override: FileInfo

- Status: Base

- Module: mod_filter

The following example uses the DEFLATE filter, which is provided by [mod_deflate](https://httpd.apache.org/docs/2.4/en/mod/mod_deflate.html).  
Also, Enable the mod_deflate module in your httpd.conf.  
It will compress all output (either static or dynamic) which is labeled as text/html or text/plain before it is sent to the client.

```conf
AddOutputFilterByType DEFLATE text/html text/plain
```

## DeflateCompressionLevel Directive

The DeflateCompressionLevel directive specifies what level of compression should be used, the higher the value, the better the compression, but the more CPU time is required to achieve this.  
<https://httpd.apache.org/docs/2.4/en/mod/mod_deflate.html#deflatecompressionlevel>  

- Syntax: DeflateCompressionLevel value

- Default: Zlib's default

- Context: server config, virtual host

- Status: Extension

- Module: mod_deflate

The value must between 1 (less compression) and 9 (more compression).
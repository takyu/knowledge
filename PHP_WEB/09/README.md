## setcookie()

It is a function to send a cookie.  
<https://www.php.net/manual/en/function.setcookie.php>  
It defines a cookie to be sent along with the rest of the HTTP headers.  
Like other headers, cookies must be sent before any output from your script (this is a protocol restriction).  
Be sure to use this function when setting cookies because setting with the assignment operator isn't change the cookie value.

```php
/**
 * @param string name The name of the cookie
 * @param string value The value of the cookie
 * @param int expires The time the cookie expires
 * @param string path The path on the server in which the cookie will be available on
 * @param string domain The (sub)domain that the cookie is available to
 * @param boolean secure Whether it is an HTTPS connection or not
 * @param boolean httponly Whether to accept HTTP protocol only
 * 
 * @return boolean If setcookie() successfully runs, it will return true
 */
setcookie(
    string $name,
    string $value = "",
    int $expires = 0,
    string $path = "",
    string $domain = "",
    bool $secure = false,
    bool $httponly = false
): bool
```

Alternative signature available as of PHP 7.3.0:

```php
/**
 * @param array options any of the keys expires, path, domain, secure, httponly and samesite
 */
setcookie(string $name, string $value = "", array $options = []): bool
```

- value

	This value is stored on the clients computer.  
	It doesn't store sensitive information. Assuming the name is 'cookiename', this value is retrieved through $_COOKIE\['cookiename'].

- expires

	This is a Unix timestamp so is in number of seconds since the epoch.  
	In other words, you'll most likely set this with the [time()](https://www.php.net/manual/en/function.time.php) function plus the number of seconds before you want it to expire.  
	Or you might use [mktime()](https://www.php.net/manual/en/function.mktime.php).  
	time()+60*60*24*30 will set the cookie to expire in 30 days.  
	If set to 0, or omitted, the cookie will expire at the end of the session (when the browser closes).

- path

	If set to '/', the cookie will be available within the entire domain.  
	If set to '/foo/', the cookie will only be available within the /foo/ directory and all sub-directories such as /foo/bar/ of domain.  
	The default value is the current directory that the cookie is being set in.

- domain

	Setting this to a subdomain (such as 'www.example.com') will make the cookie available to that subdomain and all other sub-domains of it (that is, w2.www.example.com).  
	To make the cookie available to the whole domain (including all subdomains of it), simply set the value to the domain name ('example.com', in this case).

- secure

	Indicates that the cookie should only be transmitted over a secure HTTPS connection from the client.  
	When set to true, the cookie will only be set if a secure connection exists.  
	On the server-side, it's on the programmer to send this kind of cookie only on secure connection (for example, with respect to $_SERVER\["HTTPS"]).

- httponly

	When true the cookie will be made accessible only through the HTTP protocol.  
	This means that the cookie won't be accessible by scripting languages, such as JavaScript.  
	It has been suggested that this setting can effectively help to reduce identity theft through XSS attacks (although it is not supported by all browsers), but that claim is often disputed.

- options

	An associative array which may have any of the keys expires, path, domain, secure, httponly and samesite.  
	If any other key is present an error of level E_WARNING is generated.  
	The values have the same meaning as described for the parameters with the same name.  
	The value of the samesite element should be either None, Lax or Strict.  
	<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite>  
	If any of the allowed options are not given, their default values are the same as the default values of the explicit parameters.  
	If the samesite element is omitted, no SameSite cookie attribute is set.

## Cookie information

Click on the Network tab in Chrome's inspection and press command + R (Mac) to see the communication between your browser and the server.  
In the "Response Headers" part of the "Headers" tab, there is a set-Cookie that contains the cookie information returned by the server.  
When the browser is updated, etc., and the second or subsequent communication is made, the browser side retains the cookie received from the server side, and the cookie is displayed in the Request Headers part.  
Cookies are displayed in "Cookies" in the "Storage" part of the "Applications" tab.  
If you look inside, it holds various information, and that each domain holds its own cookie value.  

## $_COOKIE()

It is a superglobal variable and is an associative array of variables passed to the current script via HTTP Cookies.  
<https://www.php.net/manual/en/reserved.variables.cookies>
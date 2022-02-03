## HTTP

HTTP stands for HyperText Transfer Protocol.  
It is a communication **protocol** used to exchange information such as documents written in HTML between a web server and a client on the Web.  
HTTP has methods, the most common of which are GET and POST (There are also PUT, PATCH, DELETE, TRACE, etc.).  
HTTP is a stateless protocol that does not retain state before or after a request.  
This means, for example, that when two communications are made, the second one doesn't know what the first one did.  
Stateful protocols that are synonyms of stateless are included FTP and SSH.

- GET <```GET /path```>

	- Obtaining data.

	- Parameters are sent to the server as part of the URL.  
	As follows, to add a parameter, use "?" before the parameter and "&" to connect multiple parameters. and "&" to connect multiple parameters.  
	```GET /path?param1=value1&param2=value2```

	- Browser cache is enabled (depends on Apache configuration).  
	Under the URL, there is a header and a body, and the header part is where the browser cache and other configuration values are set and sent.  
	The body part is empty in the GET method.  
	Depending on the method, parameters aren't attached to the URL and attached to the body part and sent.

- POST <```POST /path```>

	- Creating and updating data.

	- The header part contains the setting values for communication with the server.

	- Parameters are set in the body part and sent.

	- Browser cache is disabled.
## How do we keep the request value?

HTTP is a stateless protocol.  
Therefore, there are two ways to hold values across requests.  

- Save to browser

	- Cookie

	- LocalStorage

- Save to server

	- SESSION

	- Database

After this, learn about **cookies**, **SESSION** and **Database**.

## Cookie

This is in the following steps.

1. When a request is thrown from a browser to a server, a value is set for the cookie on that server.

2. When the cookie is returned to the browser, it is had in the header of the HTTP protocol and returned.

3. The value is retained on the browser side.

4. In subsequent requests, the cookie is placed in the header part and sent/received, so that the information before and after can be understood.

## SESSION

This is in the following steps.

1. When a request is sent from the browser to the server, the server sets a "session ID" for the cookie.

2. The server saves the value in a file using the Session ID as a key. (In some cases, this value is saved in Datebase.

3. The "Session ID" set in the cookie is returned to the browser, and is retained as a cookie by the browser.

4. In subsequent requests, the cookie is placed in the header part and sent/received, so that the information before and after can be understood.

## Database

This is in the following steps.

1. The browser sends a parameter with information to the server.

2. The server sends the parameters to the database and stores them in the database as keys.

3. the database side sends it to the server, and the server side sends it back to the browser.

4. In subsequent requests, the cookie is placed in the header part and sent/received, so that the information before and after can be understood.
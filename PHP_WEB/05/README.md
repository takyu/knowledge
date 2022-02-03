## difference between GET method and POST method

There are two main reasons for using these two.

1. URL can only be set to a maximum of about 2000 characters.  
Therefore, when sending a request with a long body such as a blog post, the body cannot be written directly in the URL, so the POST method is used and the body is set as a parameter.

2. GET can include parameters and share them.  
Therefore, when you want to share the page with someone, you can easily share the page you are looking at by just writing a few parameters in the URL.
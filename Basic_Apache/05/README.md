## Difference between 301 and 302

Using the default 302 will result in a temporary redirect, but if you use 301, the redirect destination will not change even if you change the server configuration file.  
This is because when a 301 is used, the redirect destination is cached in the browser and loaded from there.  
Once you connect with 301, you can see that the size column is set to **(disk cache)** in the Network tab of chrome inspection.
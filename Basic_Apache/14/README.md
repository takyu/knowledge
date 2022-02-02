## Subdomain

A subdomain is another domain under a domain name on the Internet.  
For example, for the domain of **dev.local**, you can put any string at the beginning of the domain and cut the domain as a sub.  

```
127.0.0.1 dev.local
127.0.0.1 www.dev.local
127.0.0.1 vhost.dev.local
```

**www.dev.local** and **vhost.dev.local** will be subdomains of dev.local.  
If you write the above three in the hosts file, you can access the loopback address "127.0.0.1" from that domain.
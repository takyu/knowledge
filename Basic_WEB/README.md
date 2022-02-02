# WEB

WEB (World Wide Web) is a technology used as a standard on the Internet to link documents stored on computers all over the world.

## IP address

An address that every terminal that communicates over the Internet must have.  
Represented in 32 bits.  
In computers, numbers are expressed as binary numbers, and IP addresses are made up of 32 digits(32 bits), divided into 8 digits each, and expressed as decimal numbers.  
Example is as follows.
```
11000000101010000000000000000011

                ↓(divide 8 digits)

11000000.10101000.00000000.00000011

                ↓(Convert to decimal)

            192.168.11.3
```

The range of IP address is ***0.0.0.0 - 255.255.255.255***.  
Also, there are two types of IP address: ***private IP*** and ***global IP***.  

## private IP

An IP address that can be freely used by terminals in a base network such as a LAN.  
The range of private IP addresses is specified in RFC 1918, and should be set usually within that range.  
The range of private IP is divided into classes A to C.  

- class A
```
10.0.0.0～10.255.255.255 (10.0.0.0/8)
```

- class B
```
172.16.0.0～172.31.255.255 (172.16.0.0/12)
```

- class C
```
192.168.0.0～192.168.255.255 (192.168.0.0/16)
```

Class A and C are most commonly used.

## global IP

A unique IP address that doesn't overlap with other addresses in a WAN or other network that connects locations to locations.  
In general, ISP stands for Internet Service Provider, and it has a WAN.

## LAN v.s. WAN

LAN is a network within a base, while WAN is a network connecting bases.

### IP address is exhaustion issue

IP addresses is in the form of 32-bit IPv4, but that can only allocate **4,294,967,296** IP addresses (32 to the power of 2), and the number was running out.  
In order to solve this exhaustion, IPv6, which represents IP addresses in a new "128-bit" (128 digits in binary) format, was developed and standardized.  
IPv6 can allocate **340,282,366,920,938,463,463,374,607,431,768,211,456** IP addresses (128 to the power of 2), the number of real assignments became infinite.  
Currently, we are in a transition period when the IPv4 Internet and IPv6 Internet are being "operated in parallel".  
IPv6 is also expressed as a hexadecimal number.

## URL

URL stands for Uniform Resource Locator, and is a formal way of identifying resources (data and services) on the Internet.  
Take "http://www.example.com:80/test-dir" as an example, the URL is structured as follows.  
| URL | name |
| :---: | :---: |
| http | scheme |
| www | host |
| exmaple.com | domain |
| 80 | port |
| test-dir | context path |

A host and a domain together are called an FQDN(stands for Fully Qualified Domain Name).

## context path

The path from the domain part to each web application.  
Take "http://www.example.com:80/test-dir" as an example, **test-dir** is context path.

## Domain and Host

A domain is an address on the Internet, and the server located within it is a host.  
Therefore, there can be multiple hosts in a domain.  
Depending on the server configuration, it is also possible to set up hosts virtually.  
Basically, a host is a PC or server that is connected to the Internet.

## Relationship between Domain and IP

The DNS server will tell you the IP.  
Obtaining an IP address from a domain name is called name resolution.  
Multiple domains can be configured for a single IP address.  
The advantage of using a domain name is that it is easy to remember and the server is easy to move.  
The second in particular is that by changing the IP address associated with the domain name, the user is not aware of the IP address change.

## DNS

DNS stands for Domain Name System, and is a system developed to manage and operate domain names on the Internet.  

1. A PC accesses a DNS cache server with a domain name.

2. The DNS cache server queries the DNS root server for administrative information (what IP address corresponds to the domain name).

3. The DNS root server informs the DNS cache server about the DNS server that has management information.

4. The DNS cache server queries the DNS server that has management information for the IP address corresponding to the domain name.

5. The DNS server that has management information answers the DNS cache server with the IP address.

6. The DNS cache server replies to PC with the IP address.

7. A PC accesses the website with the IP address and the website is displayed in the browser.

- DNS cache server

It is a server that receives name resolution requests from users and returns the results.  
It is also a server that can perform name resolution quickly by caching the information of past queries.  

- DNS root server

This is the server that the DNS cache server will query first.  
It stores the TLD (.com, .jp, .us, etc..) that stands for Top Level Domain, and access to less-visited pages may pass through here and take longer to resolve names.

## Hosts

A file that links domains and IP addresses has held in a PC.  
Rather than a centralized DNS server on the Internet maintaining a table of correspondences between host names and IP addresses, this system creates a correspondence table called "hosts" within each individual computer for name resolution.  
The hosts file is in the following path.  

- case Windows
```
C:\Windows\System32\drivers\etc\hosts
```

- case Mac, Lunux
```
/private/etc/hosts
```

## localhost and 127.0.0.1

"127.0.0.1" is the loopback address, which is the IP address of the computer itself.  
localhost is a hostname that represents "127.0.0.1".

## TCP/IP

TCP/IP stands for Transmission Control Protocol / Internet Protocol, and is a set of procedures and protocol for computers to communicate with each other on a network.  
It is as follows.  

| Layer No. | Layer name |
| :---: | :---: |
| 4 | Application Layer(HTTP, POP3, etc..) |
| 3 | Transport Layer(TCP, UDP) |
| 2 | Internet Layer(IP, ICMP, ARP, RARP) |
| 1 | Network Interface Layer(Ethernet, PPP, etc..) |

## Protocol

A procedure or standard for communication between computers.  
A typical protocol is as follows.  

| Protocol | Overview | Port |
| :---: | :---: | :---: |
| HTTP | Communication with the web server | 80 |
| FTP | Transfer file | 20, 21 |
| NTP | Synchronize time | 123 |
| TCP/UDP | Connect required or not | - |
| etc.. | | |

## TCP

TCP stands for Transmission Control Protocol, and is a protocol for reliable communication in a one-to-one session.  
<https://developer.mozilla.org/en-US/docs/Glossary/Transmission_Control_Protocol_(TCP)>  
Guarantee that the data is being sent correctly, and if it is not sent, it will be resent.  
The connection establishment used in TCP is called the [three-way handshaking](https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake), and after the connection is established, data is transferred and disconnected.  

## UDP

UDP stands for User Datagram Protocol, and is a long standing protocol used together with IP for sending data when transmission speed and efficiency matter more than security and reliability.  
<https://developer.mozilla.org/en-US/docs/Glossary/UDP>  
Not guarantee that the data is sent correctly, and if any data is missing, it will ignore that part.  
It is faster than TCP and is used for IP telephony and gaming.

## Protocol and Port

Protocol has a fixed default port, but can be changed at will in the settings.  
However, it is not possible to use duplicate port numbers.  

| Type | Range | Content |
| :---: | :---: | :---: |
| WELL KNOWN PORT | 0 - 1023 | Common port numbers |
| REGISTERD PORT | 1024 - 49151 | Business-registered port number |
| DYNAMIC PORT(PRIVATE PORT) | 49152 - 65535 | freely port number |

## client-server system

It is a system in which the roles are divided between a "server" that provides the service (the actual processing) and a "client" that requests the service.  
It is one of the most common web systems today, and it allows for load balancing and flexible system changes.  

## Web three-tire architecture

It is a client-server system is divided into the following three levels.  
```
- Presentation layer (Web server)

	・Sending and receiving HTTP requests
	・Calling the application layer

      ↑    ↓

- Application layer (AP server)

	・Execution of business logic (some kind of program)

      ↑    ↓

- Data layer (DB server)

	・Data retention (write and retrieve)
```

For example,
```
・Presentation layer -> Apache (Sending and receiving HTTP requests)
                    ↓          ↑
・Application layer -> Apache (Execute PHP)
                    ↓          ↑
・Data layer -> MySQL (Manipulate database)
```
```
・Presentation layer -> Apache (Sending and receiving HTTP requests)
                    ↓          ↑
・Application layer -> Tomcat (Execute JAVA)
                    ↓          ↑
・Data layer -> OracleDB (Manipulate database)
```

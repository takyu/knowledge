## Caching in the browser

There are two ways to cache in a browser.

1. Save the cache on the **browser** side

	- Save images, CSS, JS, etc. in the browser.

2. Save the cache on the **server** side

	- Load files and other data into memory.

	- Retain php execution results as html.

In this time, we will mainly focus on the browser-side cache.

## Browser cache control

- Detects changes by Etag

	Judges changes by INode(attribute information attached to the file), modification date and time, and size.

- Detects changes by Last-Modified

	Judged by the last modified date and time.
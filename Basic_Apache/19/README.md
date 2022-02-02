## Practical use of cache

It is recommended to take a longer expires, so set it to six months.  
When changes are made to main.js, etc., a query parameter can be set at the end of the name to reflect the changes and change the version.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h1>main.php</h1>

	<!--<script src="main.js?v1"></script>-->
	<!-- Rewrite query parameters when changes are made -->
	<script src="main.js?v2"></script>
</body>
</html>
```
# WebGL

## OpenGL

It is the API for depicting 3D graphics on the desktop.  
<https://www.opengl.org/>  
Derived from it is "OpenGL ES," which is an API for cell phones and other embedded devices.  

## WebGL

Similar to OpenGL ES,Derived from it is "WebGL," which is an API for depicting 3D graphics in the browser.  
The versions correspond as follows.

```
OpenGL ES 2.0 => WebGL 1.0
OpenGL ES 3.0 => WebGL 2.0
```

For example, if the content which you want to find does not appear in a search for "WebGL 1.0", search for "OpenGL ES 2.0".

## Three.js

Libraries for easy use of WebGL.  
<https://threejs.org/>

## Usage

For a quick check, enter the following command.

- npm

	```sh
	npm i && npm run lsv
	```

- yarn

	```sh
	yarn && yarn lsv
	```

### Getting started

- Install packages

	```sh
	yarn
	```

	or

	```sh
	npm install
	```

From here on, only the yarn command is described.

- Compiles and hot-reloads for development

	```sh
	yarn start
	```

- Compiles for development

	```sh
	yarn dev
	```

- Compiles and minifies for production

	```sh
	yarn prod
	```

- Using a simple server with lite-server

	```sh
	yarn lsv
	```

- webpack watch mode

	```sh
	yarn watch
	```

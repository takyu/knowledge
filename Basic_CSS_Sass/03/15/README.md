## node-sass

Using [node-sass](https://www.npmjs.com/package/node-sass), changes made by development tools in the browser can be directly reflected in local files.  
The installation procedure is shown below.  

1. Move to the root path of the project in Chrome.

2. Open inspect of Chrome and open the Filesystem tab in the Sources tab.

3. Click "Add folder to workspace" and select the root directory of the project.

So far, the changes will be automatically applied to the CSS and HTML files.  
From the next step, we will set the Sass file to be automatically reflected as well.  

4. Install [Node.js](https://nodejs.org/en/).

5. If you install Node.js, you can use the npm command, so you install "node-sass" using the npm command(in Terminal).

```sh
# Global install
npm i -g node-sass

# Local install
npm i node-sass
```

6. Run node-sass

```sh
npx node-sass -rw <root directory path> -o <root directory path> --source-map true
```

As a result, it changes made to the Sass file in inspect of Chrome will be automatically reflected and the CSS file will be updated as well.  
If you see the conversion log on the command line, it is reflected.
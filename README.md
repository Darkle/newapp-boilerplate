##### Simple No Bundling JS Server & Web Boilerplate


###### Goals:
* No bundler
* Simple/Minimal
* Reload webpage for frontend change
* Reload server for backend change

###### Compromises:
* We forgo cache busting via hashing for our own js. Although it is possible to still do it on the server via the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)
  * Note: you are still able to cache bust the vendor scripts locally if you want with [snowpack](https://www.snowpack.dev/#automatic-cache-busting-via-import-url)
* We forgo tree shaking for our own code that we write, however snowpack does [tree shaking for the vendor files](https://www.snowpack.dev/#production-optimization)

###### Setup details:
* Backend uses expressjs for the server
* The express view engine used is [liquid](https://github.com/harttle/liquidjs/wiki/Use-with-Expressjs)
* Using [nodemon](https://github.com/remy/nodemon/) for reloading the server on backend changes
* Using [instant](https://github.com/fgnass/instant) reloading the web page on frontend changes
* Using [minify](https://github.com/tdewolff/minify/tree/master/cmd/minify) to minify our js and css for production
  * Note: dont use minify on the html as it seems break the html (the server gzip should be enough for the html anyway)
  * Snowpack minifies the vendor js when we build for production
* Using [jest](https://jestjs.io/) for tests
* The `run-s` in the package.json script is just a shortcut for the `npm-run-all` program. It runs the script in serial (one after the other).
* The `browserslist` key in the package.json is for snowpack. It tells it what to target for its output.
* The `size-check` npm script runs the [bundlesize](https://github.com/siddharthkp/bundlesize) app. It runs agains the snowpack output files. It doesnt check the aggregate, only the individual files.

###### Additional notes:
* Try to lessen the use of external libraries as it all adds up
* Can use the [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) to load external libraries after the page has loaded




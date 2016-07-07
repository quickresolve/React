#Notes on NPM

##package.json
When you initialize an NPM project, it creates a package.json file for you.

Now when you install components such as jquery, it is listed under your dependencies and the jquery package is stored in your node_modules folder.

ex: npm install jquery --save

-without the --save the package will be installed but not listed under your dependencies.

##NPM Scripts
Scripts are terminal commands that you need to run regularly that you can save in your package.json file to easily call when needed.

ex:

"scripts": {
   "test": "ava 'app/**/*.test.js' --verbose --require ./other/setup-ava-tests.js"
 }

 - npm run test
 will execute the above script from the command line.

#Notes on Webpack

##Why does Webpack exist?
Webpack, at its core, is a code bundler. It takes your code, transforms and bundles it, then returns a brand new version of your code. "Modular Loader"

alternatives - require.js, browserify

##What problem is it solving?
Where Webpack really shines is you're able to tell it every transformation your code needs to make, and it will do them and output a bundle file for you full of those changes (and some other helpful things as well like minification if you desire).

##What Webpack needs to know:
1) Webpack needs to know the starting point of your application, or your root JavaScript file.(entry)

2) Webpack needs to know which transformations to make on your code. (loaders)

3) Webpack needs to know to which location it should save the new transformed code.

-This needs to be listed in webpack.config.js file


##html-webpack-plugin
Plugin that uses original html file as a template and creates a brand new index.html file. Keeps you from having to copy transformed index.html file from dist folder into index.html in app folder

-run npm install --save-dev html-webpack-plugin before you can use it

##Running Webpack
If you've installed webpack globally (by running npm install -g webpack) then you have access to the webpack CLI.

-run webpack from your terminal and that will do a one time run through of your webpack settings.

-run webpack -w and that will watch your files and re-execute webpack whenever any of the files Webpack is concerned about changes.

-if you're wanting to ship to production, you can run webpack -p and that will run through the normal transformations as well as minify your code.

##Steps

1) npm init (get package JSON file for dependencies)
2) npm install -S webpack (saves locally)
3) npm install -g webpack (saves globally to run webpack command)
4) touch webpack.config.js (See template below)
  -entry is scripts.js - here you can require modules
  -output is scripts.min.js
  -if in debug mode then no plugins
  -if in production then use plugins
5) run webpack in terminal (creates scripts.min.js from output)
6) NODE_ENV=production webpack (minifies)
7) make sure script references minified js file in html file
  <script src="js/scripts.min.js"></script>

8) Must require js libraries in modules
  ex:
  var $ = require('jquery');
  var _ = require('lodash');


*Script for Package.json to run dev server:

"dev": "./node_modules/.bin/webpack-dev-server --content-base app --inline --hot",


ex webpack.config.js template:

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + './app',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
   module: {
    loaders: [
      {test: /\.js$/,
      exclude: /node_modules|bower_components/,
      loader: "babel-loader",
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
  ],
};


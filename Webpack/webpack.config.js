var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

// Create a new instance of HTMLWebpackPlugin and we'll need to specify three things. First, we can give it a template of what we want the newly created file to look like. Second, we give it a filename or, well, what the new file it creates is going to be called. Third, WebpackPluginConfig is going to be smart enough to detect the filename of the output of the transformed code (in this case we're calling index_bundle.js) and it then going to inject a script into the <head> or <body> of the newly created index.html file. So the third option is inject and is where you would like to inject that script - the 'head' or the 'body'.

// run webpack from our command line - now inside of our dist folder we'll have two files. index_bundle.js and index.html. index_bundle.js is the result of taking our entry code and running it through our loaders. While index.html was created on the fly with HTMLWebpackPluginConfig.

// only difference between the two files is that the one in dist (which was created with HTMLWebpackPlugin) now has a script tag pointing to index_bundle.js .
// ex: <script src="index_bundle.js"></script>

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
}

// NPM install each specific loader then add a new object to the loaders array.

// Give our object a property of entry and a value which is an array with a string which points to our root JS file in our app. Webpack allows you to have one or many entry points in your application (can be a string or array)

// add a module property to the object we're exporting in webpack.config.js and then that module property will have a property of loaders which is an array. Inside of that loaders array is where we're (obviously) going to put all of our different loaders or transformations we want to take place.

// Each loader needs to be composed of three things. First is which file type to run the specific transformation on. Next is which directories should be included or excluded from being transformed. Lastly the specific loader we want to run.

// Specify where Webpack should output the new transformed code. filename is the name of the file that Webpack is going to create which contains our new transformed code. path is the specific directory where the new filename is going to be placed. __dirname references the name of the directory that the currently executing script resides in.

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
    path: _dirname + '/dist'
  },
}

// NPM install each specific loader then add a new object to the loaders array.

// Give our object a property of entry and a value which is an array with a string which points to our root JS file in our app. Webpack allows you to have one or many entry points in your application (can be a string or array)

// add a module property to the object we're exporting in webpack.config.js and then that module property will have a property of loaders which is an array. Inside of that loaders array is where we're (obviously) going to put all of our different loaders or transformations we want to take place.

// Each loader needs to be composed of three things. First is which file type to run the specific transformation on. Next is which directories should be included or excluded from being transformed. Lastly the specific loader we want to run.

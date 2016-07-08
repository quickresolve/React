#Notes on Babel

##Babel.js
A great tool for compiling your JS. With webpack you tell it which transformations to make on your code, while Babel is the specific transformation itself. Babel allows you to transform JSX into JS. You can also use it to transform future versions of JS.

##Installation
run npm install --save-dev babel-core babel-loader babel-preset-react

- babel-core is babel itself, babel-loader is the webpack loader we'll use, and babel-preset-react is to get the JSX -> JS transformation going.

- give Webpack the single babel-loader we installed then that loader will look to a .babelrc file that we'll make for each of the babel transformations you want to make.

- in the same directory where the webpack.config.js file is (usually the root directory), we'll need to make a .babelrc file which looks like this:

{
  "presets": [
    "react"
  ]
}

- add the babel-loader as a loader to our webpack.config.js file.

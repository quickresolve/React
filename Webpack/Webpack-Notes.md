##Notes on Webpack

#Why does Webpack exist?
Webpack, at its core, is a code bundler. It takes your code, transforms and bundles it, then returns a brand new version of your code.

#What problem is it solving?
Where Webpack really shines is you're able to tell it every transformation your code needs to make, and it will do them and output a bundle file for you full of those changes (and some other helpful things as well like minification if you desire).

#What Webpack needs to know:
1) Webpack needs to know the starting point of your application, or your root JavaScript file.

2) Webpack needs to know which transformations to make on your code.

3) Webpack needs to know to which location it should save the new transformed code.

-This needs to be listed in webpack.config.js file

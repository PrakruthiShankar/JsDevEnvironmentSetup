//This file will not transpiled, so must use ES5 or commonJS

//Register babel to transpile before test runs
require('babel-register');

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){};

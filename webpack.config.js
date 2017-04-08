'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const { resolve } = require('path');


module.exports = {
  entry:  [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    "./app/js/index.js"
  ],

  output: {
    path: __dirname + '/dist',
    filename: "build.js",
    publicPath: '/'
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'app'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },


  module: {


    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015','react' ]
      }
    }]
  },

  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   // enable HMR globally

   new webpack.NamedModulesPlugin(),
   // prints more readable module names in the browser console on HMR updates
 ],

}

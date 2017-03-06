// webpack.config.js

var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    'app': './app/app'
  },
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [ /node_modules/ ]
      }
    ]
  }
};
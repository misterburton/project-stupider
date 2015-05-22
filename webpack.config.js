'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  debug: true,

  devtool: 'eval-source-map',

  entry: {
    'bundle': [
      './lib/main.js',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8000'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'lib')
        ],
        loaders: ['react-hot', 'babel?stage=0']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;

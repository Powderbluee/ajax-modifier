const path = require('path');
const fs = require('fs');

module.exports = {
  entry: './Main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: [
        path.resolve(__dirname, 'source'),
      ],
      use: [{
        loader: 'babel-loader'
      },{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader?'
      }]
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader?'
      }, {
        loader: 'less-loader?'
      }]
    }]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9001,
    host: 'localhost',
    hot: true,
  }
};
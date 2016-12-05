var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEV = path.resolve(__dirname, 'dev');
var OUTPUT = path.resolve(__dirname, 'output');

var config = {
  entry: DEV + '\/index.jsx',
  output: {
    path: OUTPUT,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      include: DEV,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: './'
  }
};

module.exports = config;

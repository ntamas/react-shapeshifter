const { name, version } = require('./package.json')

const path = require('path')
const webpack = require('webpack')

const PROD = (process.env.NODE_ENV === 'production')

module.exports = {
  entry: './src/index.jsx',
  devtool: 'source-map',
  output: {
    libraryTarget: 'umd',
    path: path.resolve('dist'),
    filename: PROD ? (name + '-' + version + '.min.js')
      : (name + '-' + version + '.js')
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  externals: {
    'react': 'React'
  }
}

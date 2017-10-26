const path = require('path')

module.exports = {
  entry: './examples/basic/index.jsx',
  output: {
    path: path.resolve('./examples/basic'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve('./examples/basic'),
    compress: true
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
  }
}
